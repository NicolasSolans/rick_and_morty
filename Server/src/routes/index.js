const {getCharById} = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const {login} = require('../controllers/login')
const express = require('express')
const router = express.Router()

router.get('/character/:id', getCharById);

router.get('/login', (req, res)=>{
    login(req, res)
})

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)

//linea 9 ===> otra forma de hacer el enrutado. Aprendimos la otra forma, asi que se utilizara las otras formas de enrutado.

module.exports = router