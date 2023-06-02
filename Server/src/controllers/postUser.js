const {User }= require('../DB_connection')

module.exports = async(req, res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password) res.status(400).send('Faltan datos')
       
        const user = await User.findOrCreate({
            where: {
                email, 
                password
            }
        })
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}


