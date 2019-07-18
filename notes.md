# first steps
- create package.json file
- create knex file....cinnection, migration, seeds
- download knex, nodemon, express, helmet, sqlite3 and dependencies
- migrate table... npx knex migrate:make recipe
- seeds.... npx knex seed:make 001 recipe.. //the number gives a seed reference
- fill migrate fields
- migrate and seed tables migrate:up, seed:run
- check sqliteStudio for database and seeded data


# next steps
- this is soing extra steps but i need to repetition to get better

- create server in index.js file
- run server npm run server
- create server.js file
- move index server code to serve.js file, export module, require server.js in index.js
- create recipe folder
- create router file

# next steps
- create db connection in router file
- check connection
-After successful connection
- create db file, code all db connection to db file, import dbfile to router
-test connection
- create model file
- import db connection to model file, then import model file to router and use helper functions as db getters
- test helper funcctions in router

# next steps
- add json to router to parse json on post