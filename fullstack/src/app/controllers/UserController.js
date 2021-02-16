const User = require('../models/User')
const errorHandler = require('./../helpers/dbErrorHandler')

class UserController {

    async index(req, res) {

        await User.find({})
        .select('-password')
        .then(users =>{
           res.json(users)
        })
        .catch(err=>{

            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        })
       
    }

    async show(req, res) {
        try{
            const user = await User.findById(req.params.id)
            .select('-password');
    
            if(!user) {
                return res.json({error: 'Usuário não encontrado'})
            }
    
            return res.json(user)
        } catch(err){
             return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
      
    }


    async store(req, res) {
           await User.create(req.body)
            .then(() =>{
                res.sendStatus(201).send()
            }).catch(err =>{
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            })
        
    }


}

module.exports = new UserController()