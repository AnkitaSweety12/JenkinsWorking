//importing modules
const {Sequelize, DataTypes} = require('sequelize')

// port for my database is 5432
// database name is "fccatalog"
// host is "192.168.100.164"
// Syntax: const sequelize = new Sequelize('postgres://user:pass@example.com:port/dbname');

// Step-2: Create Sequelize object
const sequelize = new Sequelize('postgres://fcdbadmin:ujeoZo1uoo5Li8co@192.168.100.164:5432/fccatalog');

// Step-3: Test the connection
sequelize.authenticate().then(() => {
    console.log(`*** Connected to the database fccatalog:`)
}).catch((err) => {
    console.log('*** Unable to connect to the database fccatalog:', err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db



// Step-2: Create Sequelize object
// const sequelize = new Sequelize('fccatalog', 'fcdbadmin', 'ujeoZo1uoo5Li8co', {
//     host: '192.168.0.104',
//     dialect: 'postgres',
//     port: 5432,
//     collate: 'utf8_general_ci',
//     timezone: '+05:30',
//     benchmark: true
//   });