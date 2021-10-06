module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/database/migrations"
   },
   "entities": [process.env.ENTITIES],
   "migrations": [process.env.MIGRATIONS]
   
}