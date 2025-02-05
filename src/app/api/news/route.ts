import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { News } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

// Tüm haberleri getir
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    
    const query = category ? { category } : {};
    const skip = (page - 1) * limit;
    
    const [news, total] = await Promise.all([
      News.find(query)
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit),
      News.countDocuments(query)
    ]);

    return NextResponse.json({
      news,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Haberler alınırken hata:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}

// Yeni haber ekle
export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 401 }
      );
    }

    await dbConnect();
    const newsData = await request.json();
    
    const news = await News.create({
      ...newsData,
      date: new Date()
    });

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error('Haber eklenirken hata:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}
