import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'API dokumentáció JWT auth-tal',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  securityDefinitions: {
    BearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'Írd be a JWT tokent így: Bearer <token>',
    },
  },
  security: [
    {
      BearerAuth: []
    }
  ]
};

const outputFile = './swagger-docs.json';
const endpointsFiles = ['./routes/*.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);