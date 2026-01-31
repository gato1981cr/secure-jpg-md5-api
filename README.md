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

## Uso

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
4. Haz deploy conectando el repo a Netlify.

## Ejemplo de request

```json
POST /api/upload-jpg
{
  "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
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

## Usage

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
4. Deploy by connecting the repo to Netlify.

## Example request

```json
POST /api/upload-jpg
{
  "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
}
```

## Expected response

```json
{
  "success": true,
  "md5": "e2fc714c4727ee9395f324cd2e7f331f"
}
```
