const User = require('../models/User')
const errorHandler = require('./../helpers/dbErrorHandler')

class UserController {

    async index(req, res) {
        const users = await User.find({})
        .select('-password');

        return res.json(users)
    }

    async show(req, res) {
        const user = await User.findById(req.params.id)
        .select('-password');

        if(!user) {
            return res.json({error: 'Usuário não encontrado'})
        }

        return res.json(user)
    }


    async store(req, res) {


        try{
            const user = await User.create(req.body)
            return res.json({user: user.getJson()})
            
        }
        catch(err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }

        
    }


}

module.exports = new UserController()