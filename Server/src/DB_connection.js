require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/User')
const FavoriteModel = require('./models/Favorite')

// EJERCICIO 03
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05

UserModel(sequelize)
FavoriteModel(sequelize)

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorite'})
Favorite.belongsToMany(User, {through: 'user_favorite'})

module.exports = {
   User,
   Favorite,
  conn:  sequelize,
};
