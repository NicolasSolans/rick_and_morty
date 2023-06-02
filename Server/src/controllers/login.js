const {User} = require('../DB_connection')

module.exports = async(req, res)=>{
    try {
        const {email, password} = req.query
        if(!email || !password) res.status(400).send('Faltan datos')
        
        const findEmail = await User.findOne({
            where: {
                email
            }
        })

        if(!findEmail) res.status(404).send('Usuario no encontrado')

        return findEmail.password === password ? res.status(200).json({access: true}) : res.status(403).send('Contraseña incorrecta')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

