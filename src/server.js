/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes:{
      cors:{
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();