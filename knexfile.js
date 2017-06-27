// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/athome'
  },
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    }
  }
};
