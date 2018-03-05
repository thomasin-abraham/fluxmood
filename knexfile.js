// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/fluxmood',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  // test: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'postgres://localhost:3000/howsitgoing/test'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds/test'
  //   }
  // },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: './db/migrations'
    }
  }

};
