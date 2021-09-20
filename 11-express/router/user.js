import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send('GET: /users')
})
router.post('/', (req, res, next) => {
    res.status(201).send('POST: /users')
})

router.put('/:id', (req, res,) => {
    res.status(200).send('PUT: /users/:id')
})
router.delete('/:id', (req, res) => {
    res.status(200).send('DELETE: /users/:id')
})

export default router