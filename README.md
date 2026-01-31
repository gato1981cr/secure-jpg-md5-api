# secure-jpg-md5-api

**English below | Español arriba**

## Descripción

Ejemplo de función Netlify en TypeScript/JavaScript que recibe una imagen JPG en base64, valida su formato y tamaño (máx. 5 MB), y responde con el hash MD5 de la imagen. Incluye CI/CD con GitHub Actions para despliegue automático.

## Prerrequisitos

- Cuenta en [GitHub](https://github.com/)
- Cuenta en [Netlify](https://app.netlify.com/)
- Node.js 18+ y npm instalados ([descargar aquí](https://nodejs.org/))
- Netlify CLI (opcional, para pruebas locales):  
  ```sh
  npm install -g netlify-cli
  ```

## Estructura del proyecto

```
secure-jpg-md5-api/
├── netlify/
│   └── functions/
│       └── upload-jpg.ts
├── package.json
├── tsconfig.json
├── netlify.toml
├── README.md
```


## Documentación interactiva (Swagger UI)

Puedes consultar y probar la API desde la interfaz gráfica Swagger UI:

- Local: [http://localhost:8888/docs-ui](http://localhost:8888/docs-ui)
- Producción (Netlify): `https://<tu-sitio-netlify>.netlify.app/docs-ui`

El JSON OpenAPI/Swagger está disponible en:
- Local: [http://localhost:8888/.netlify/functions/docs](http://localhost:8888/.netlify/functions/docs)
- Producción: `https://<tu-sitio-netlify>.netlify.app/.netlify/functions/docs`

---


## Guía completa para producción en Netlify

### 1. Estructura recomendada
Coloca tus funciones en `netlify/functions/` y tus archivos estáticos (como Swagger UI) en `public/`.

### 2. Documentación interactiva (Swagger UI)
Swagger UI está disponible en `/docs-ui` y consume el JSON OpenAPI desde la función serverless `/docs`.

### 3. Configuración de Netlify
Asegúrate de tener en tu `netlify.toml`:

```toml
[build]
  functions = "netlify/functions"
  publish = "public"
```

Esto permite que Netlify sirva la carpeta `public` en producción y compile tus funciones correctamente.

### 4. Deploy automático
Conecta tu repo de GitHub a Netlify. Cada push a la rama configurada (por defecto `main`) activará un deploy automático.

### 5. Problemas comunes y soluciones
- **404 en /docs-ui:** Asegúrate de que la carpeta `public` esté configurada como publish en `netlify.toml`.
- **500 en /.netlify/functions/docs:** Usa importación estática de `swagger.json` en la función, y asegúrate de que el archivo esté en `netlify/functions/`.
- **No se encuentra el endpoint:** Verifica que la función esté en la carpeta correcta y que el nombre del archivo coincida con la ruta.

### 6. Ejemplo de request

1. Clona el repositorio y entra en la carpeta:
   ```sh
   git clone https://github.com/tu-usuario/secure-jpg-md5-api.git
   cd secure-jpg-md5-api
   ```
2. Instala dependencias:
   ```sh
   npm install
   ```
3. (Opcional) Prueba localmente:
   ```sh
   netlify dev
   ```

4. Haz deploy conectando el repo a Netlify (o simplemente haz push si ya está conectado para deploy automático).


```json
POST /.netlify/functions/upload-jpg
{
  "imageBase64": "...base64..."
}
```

## Respuesta esperada

```json
{
  "success": true,
  "md5": "e2fc714c4727ee9395f324cd2e7f331f"
}
```

---

---

# secure-jpg-md5-api

## Description

Example Netlify function in TypeScript/JavaScript that receives a JPG image as base64, validates its format and size (max 5 MB), and returns the MD5 hash of the image. Includes CI/CD with GitHub Actions for automatic deployment.

## Prerequisites

- [GitHub](https://github.com/) account
- [Netlify](https://app.netlify.com/) account
- Node.js 18+ and npm ([download here](https://nodejs.org/))
- Netlify CLI (optional, for local testing):  
  ```sh
  npm install -g netlify-cli
  ```

## Project structure

```
secure-jpg-md5-api/
├── netlify/
│   └── functions/
│       └── upload-jpg.ts
├── package.json
├── tsconfig.json
├── netlify.toml
├── README.md
```


## Full guide for Netlify production

### 1. Recommended structure
Put your functions in `netlify/functions/` and your static files (like Swagger UI) in `public/`.

### 2. Interactive documentation (Swagger UI)
Swagger UI is available at `/docs-ui` and consumes the OpenAPI JSON from the serverless function `/docs`.

### 3. Netlify configuration
Make sure your `netlify.toml` includes:

```toml
[build]
  functions = "netlify/functions"
  publish = "public"
```

This allows Netlify to serve the `public` folder in production and build your functions correctly.

### 4. Automatic deploy
Connect your GitHub repo to Netlify. Every push to the configured branch (default `main`) will trigger an automatic deploy.

### 5. Common issues and solutions
- **404 on /docs-ui:** Make sure the `public` folder is set as publish in `netlify.toml`.
- **500 on /.netlify/functions/docs:** Use static import of `swagger.json` in the function, and make sure the file is in `netlify/functions/`.
- **Endpoint not found:** Check that the function is in the correct folder and the file name matches the route.

### 6. Example request

1. Clone the repo and enter the folder:
   ```sh
   git clone https://github.com/your-username/secure-jpg-md5-api.git
   cd secure-jpg-md5-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. (Optional) Test locally:
   ```sh
   netlify dev
   ```

4. Deploy by connecting the repo to Netlify (or just push if already connected for auto deploy).


```json
POST /.netlify/functions/upload-jpg
{
  "imageBase64": "...base64..."
}
```

## Expected response

```json
{
  "success": true,
  "md5": "e2fc714c4727ee9395f324cd2e7f331f"
}
```
