const { User } = require('../models/user.model')
const bcrypt = require('bcrypt')
const Joi = require('joi')


const login = async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        console.log('from login controller');
        res.status(400).json(error.details[0].message)
        return
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.status(400).send("Invalid Email or password")
        return
    }
    const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (!isValidPassword) {
        res.status(400).send("Invalid Email or password")
        return
    }
    if (user) {
        res.status(200).json({
            name: user.name,
            email: user.email,
        })
    }

    function validate(data) {
        const schema = Joi.object({
            email: Joi.string().min(6).max(255).email().required(),
            password: Joi.string().min(6).max(1000).required()
        })
        return schema.validate(data)
    }
}


module.exports = {
    login
}