import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { News } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    if (!query) {
      return NextResponse.json(
        { error: 'Arama terimi gerekli' },
        { status: 400 }
      );
    }

    const news = await News.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
        { summary: { $regex: query, $options: 'i' } }
      ]
    })
    .sort({ date: -1 })
    .limit(10);

    return NextResponse.json(news);
  } catch (error) {
    console.error('Arama yapılırken hata:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}
