const { swapiService } = require('../service/swapiService')

const router = require('express').Router()

router.get('/:id', async (req, res) => {
    try {
        const dataSWAPI = await swapiService.getDataFromSWAPI(req.params.id);
        res.send({dataSWAPI});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

router.post('/', async (req, res) => {
    try {
        const dataSWAPI = await swapiService.getDataFromSWAPI(req.params.id);
        res.send({dataSWAPI});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

module.exports  = router