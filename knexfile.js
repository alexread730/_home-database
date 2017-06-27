// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/athome'
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL
    }
  }
};
