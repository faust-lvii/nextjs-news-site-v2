import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function generateToken(payload: { username: string }): Promise<string> {
  try {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
  } catch (error) {
    console.error('Token oluşturma hatası:', error);
    return null;
  }
}

export async function verifyToken(token: string): Promise<{ username: string }> {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error('Token doğrulama hatası:', error);
    return null;
  }
}

export function createAuthResponse(data: any, token: string) {
  const response = NextResponse.json(data);
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400 // 1 gün
  });
  return response;
}

export function removeAuthCookie() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('token');
  return response;
}
