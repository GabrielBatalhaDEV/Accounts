console.log("DATABASE_URL:>>", process.env.DATABASE_URL)
console.log("MIGRATIONS:>>", process.env.MIGRATIONS)
console.log("ENTITIES:>>", process.env.ENTITIES)
console.log("PRODUCTION?:>>", process.env.ISPRODUCTION)

const sslConfig = process.env.ISPRODUCTION === 'false' ? null : {
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}



const typeOrmConfig = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/database/migrations"
  },
  "entities": [process.env.ENTITIES],
  "migrations": [process.env.MIGRATIONS],

}

const typeObject = Object.assign(typeOrmConfig, sslConfig)

module.exports = typeObject