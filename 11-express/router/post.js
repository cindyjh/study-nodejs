import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send('GET: /posts')
})
router.post('/', (req, res, next) => {
    res.status(201).send('POST: /posts')
})

router.put('/:id', (req, res,) => {
    res.status(200).send('PUT: /posts/:id')
})
router.delete('/:id', (req, res) => {
    res.status(200).send('DELETE: /posts/:id')
})

export default router