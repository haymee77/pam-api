'use strict';

require('dotenv').config();
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-tools/middleware/swagger-ui');
const cors = require('cors');
const { sequelize } = require('./models');

const app = require('express')();
sequelize.sync({force:true});

const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (origin === undefined) {
      callback(null, false);
    } else {
      callback(null, true);
    }
  }
}

app.use(cors(corsOptions));

module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // add swagger-ui (/docs)
  app.use(SwaggerUi(swaggerExpress.runner.swagger));
  
  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
