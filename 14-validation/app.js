import express from 'express'
import { body, param, validationResult } from 'express-validator'

const app = express()

app.use(express.json())

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }

    return res.status(400).json({message: errors.array()})
    // return res.status(400).json({message: errors.array()[0].msg})
}

app.post('/users',
    [
        body('name')
            .trim()
            .notEmpty()
            .withMessage("이름을 입력해주세요")
            .isLength({min: 2, max: 10})
            .withMessage('이름은 두 글자 이상이어야 합니다.'),
        body('age')
            .notEmpty()
            .isInt()
            .withMessage("숫자를 입력해주세요"),
        body('email')
            .isEmail()
            .withMessage('이메일 형식에 맞지 않습니다.')
            .normalizeEmail(),
        body('job.name').notEmpty(),
        validate
    ],
    (req, res, next) => {
        
        console.log(req.body)
        if (req.body.email)
        res.sendStatus(201)
})

app.get('/:email',
[
    param('email').isEmail().withMessage('이메일 필요함.'),
    validate
]
, (req, res, next) => {
    res.send('❤')
})
app.listen(8080)