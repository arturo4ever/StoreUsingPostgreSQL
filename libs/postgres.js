const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: ****,
    user: 'example',
    password: 'password',
    database: 'my_DB'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
