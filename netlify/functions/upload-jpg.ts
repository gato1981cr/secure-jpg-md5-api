import { Handler } from '@netlify/functions';
import crypto from 'crypto';

// Helper to validate base64 string (only valid base64 chars)
function isValidBase64(str: string): boolean {
  return /^[A-Za-z0-9+/=\r\n]+$/.test(str);
}

// Helper to check if buffer is a JPG (FF D8 FF)
function isJpg(buffer: Buffer): boolean {
  return buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
}

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: 'Method Not Allowed. Use POST.' })
    };
  }

  let base64 = '';
  try {
    const body = JSON.parse(event.body || '{}');
    base64 = body.base64 || '';
    // Remove data URL prefix if present
    base64 = base64.replace(/^data:image\/(jpeg|jpg);base64,/, '');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'Invalid JSON or missing base64.' })
    };
  }

  if (!base64 || !isValidBase64(base64)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'Invalid or missing base64 data.' })
    };
  }

  let buffer: Buffer;
  try {
    buffer = Buffer.from(base64, 'base64');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'Base64 decoding failed.' })
    };
  }

  if (buffer.length > MAX_SIZE) {
    return {
      statusCode: 413,
      body: JSON.stringify({ success: false, error: 'File too large. Max 5 MB.' })
    };
  }

  if (!isJpg(buffer)) {
    return {
      statusCode: 415,
      body: JSON.stringify({ success: false, error: 'File is not a valid JPG image.' })
    };
  }

  // Security: Optionally scan for dangerous content (not needed for plain images, but placeholder)

  // Calculate MD5
  const md5 = crypto.createHash('md5').update(buffer).digest('hex');

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, md5 })
  };
};

/**
 * Example request:
 * POST /api/upload-jpg
 * {
 *   "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
 * }
 */
