import { Handler } from '@netlify/functions';
import { readFileSync } from 'fs';
import { join } from 'path';

const handler: Handler = async (event, context) => {
  // Ruta absoluta a la carpeta shared en la raíz del proyecto
  const swaggerPath = join(process.cwd(), 'shared', 'swagger.json');
  try {
    const swaggerDoc = readFileSync(swaggerPath, 'utf8');
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: swaggerDoc
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'No se pudo cargar la documentación Swagger.'
    };
  }
};

export { handler };
