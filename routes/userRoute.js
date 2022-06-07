const { userService } = require('../service/userService')

const router = require('express').Router()

router.get('/all', async (req, res) => {
    try {
       const user = await userService.getUsers();
       res.send({user});
    } catch (error) {
        return res.send({
            status: 500,
            error
        })  
    }
})

router.get('/get/:userId' , async (req , res)=> {
    try {
       const user = await userService.getUser(req.params.userId);
       res.send({user});
    } catch (error) {
        return res.send({
            status: 500,
            error
        })
    }
})

router.put('/update/:userId', async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.userId, req.body.lastName);
        res.send({user});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        console.log(user)
        res.send({user});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

router.delete('/delete/:userId', async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.userId);
        res.send({user});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

module.exports  = router