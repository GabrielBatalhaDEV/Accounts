module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/database/migrations"
   },
   "entities": ["dist/entities/*.js"],
   "migrations": ["dist/database/migrations/*.js"]
   
}