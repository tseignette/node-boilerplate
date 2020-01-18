# Node boilerplate

## Libraries included
**hapi** is included to handle the API and **Sequelize** to handle the database.

## Usage
- start the server: `npm start`
- start the server in development mode (with *nodemon*): `npm run start:dev`

### Sequelize
- create a model with its migration: `npx sequelize-cli model:generate --name User --attributes id:integer`
- create a migration: `npx sequelize-cli migration:generate --name migration-skeleton`
- run a migration: `npx sequelize-cli db:migrate`
- undo a migration: `npx sequelize-cli db:migrate:undo`
- create a seed: `npx sequelize-cli seed:generate --name demo-user`
- run seeds: `npx sequelize-cli db:seed:all`
- undo seeds: `npx sequelize-cli db:seed:undo:all`
