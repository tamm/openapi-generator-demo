import swaggerJsdoc from 'swagger-jsdoc';

// Set up options to define the OpenAPI spec.
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OpenAPI generator demo',
      version: '1.0.0',
    },
    // Provide URL to where we expect to exist for this demo.
    servers: [{ url: `http://localhost:8080` }],
  },
  // Target all files containing annotations according to standard found at
  // https://www.npmjs.com/package/swagger-jsdoc
  // Make sure they are readable at runtime.
  apis: ['./src/**/*.ts'],
};

export function generateSpec() {
  return swaggerJsdoc(options);
}
