const server = require('./src/app');
const { conn } = require('./src/db');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('Back corriendo en puerto 3001'); // eslint-disable-line no-console
  });
});