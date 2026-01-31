import { Handler } from '@netlify/functions';

import swagger from './swagger.json';

const handler: Handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(swagger)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'No se pudo cargar la documentación Swagger.'
    };
  }
};

export { handler };
