const {user} = require('./model')

class userController {
    async create(req, res) {
        const  {email, password} = req.body
        const User = await user.create({email, password})
        await User.save()
        return res.json(User)
    }
    async getAll(req, res) {
        const All = await user.findAll()
        return res.json(All)
    }
    async getOne(req, res) {
        const {id} = req.body
        const One = await user.findByPk(id)
        return res.json(One)
    }
    async Delete(req, res) {
        const {id} = req.body
        const Del = await user.findByPk(id)
        await Del.destroy()
        //await Del.decrement('id')
        await Del.save()
        return res.json(Del)
    }
    async Update(req, res) {
        const {id, email, password} = req.body
        const Upd = await user.findByPk(id)
        await Upd.update({id: id, email: email, password: password})
        await Upd.save()
        return res.json(Upd)
    }
}
module.exports = new userController()