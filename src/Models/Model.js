const { Sequelize } = require("sequelize")
const db = require("../db/database")

const airq = db.define("Airq",{
    id: {type:Sequelize.INTEGER, primaryKey:true},
    aqi: Sequelize.DOUBLE,
    co: Sequelize.DOUBLE,
    no: Sequelize.DOUBLE,
    no2: Sequelize.DOUBLE,
    o3: Sequelize.DOUBLE,
    so2: Sequelize.DOUBLE,
    pm2_5: Sequelize.DOUBLE,
    pm10: Sequelize.DOUBLE,
    nh2: Sequelize.DOUBLE,
    longitud: Sequelize.DOUBLE,
    latitud: Sequelize.DOUBLE,
}, {
    timestamps: false
})

module.exports = airq