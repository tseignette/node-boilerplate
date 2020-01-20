# Node boilerplate

## Libraries included
- API: **hapi**
- database: **Sequelize**
- tests: **Jest**
- documentation: **hapi-swagger**

## Usage
- start the server: `npm start`
- start the server in development mode (with *nodemon*): `npm run start:dev`
- start tests: `npm test`
- run coverage test: `npm run test:coverage`

### Sequelize
- create a model with its migration: `npx sequelize-cli model:generate --name User --attributes id:integer`
- create a migration: `npx sequelize-cli migration:generate --name migration-skeleton`
- run a migration: `npx sequelize-cli db:migrate`
- undo a migration: `npx sequelize-cli db:migrate:undo`
- create a seed: `npx sequelize-cli seed:generate --name demo-user`
- run seeds: `npx sequelize-cli db:seed:all`
- undo seeds: `npx sequelize-cli db:seed:undo:all`
