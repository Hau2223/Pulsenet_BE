// docs/swaggerUI.js
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'IoT API',
      version: '1.0.0',
      description: 'API Documentation for IoT project',
    },
    tags: [
      { name: 'Authentication', description: 'Login and register endpoints' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
    servers: [{ url: 'http://localhost:8000' }],
  },
  apis: ['./src/routes/*.js'], // scan các file trong folder routes
};

module.exports = swaggerJsDoc(options);
