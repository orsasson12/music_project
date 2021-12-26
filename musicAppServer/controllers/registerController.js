const { User } = require('../models/user.model')
const bcrypt = require('bcrypt')
const _ = require('lodash')

const register = async (req, res) => {
    const { name, email, password, reEnteredPassword } = req.body;

    try {
        let user = await User.findOne({ email: email })


        if (user) {
            return res.status(403).json({ message: 'User Already registrerd'})
        }
        user = new User({
            name,
            email,
            password,
            reEnteredPassword
        })

        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        res.send(_.pick(user, ['_id', 'name', 'email']))
    } catch (e) {
        res.send('Something went wrong')
    }

}



module.exports = {
    register,
}
