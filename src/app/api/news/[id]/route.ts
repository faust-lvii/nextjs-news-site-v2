import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { News } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

// Haber detayını getir
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const news = await News.findById(params.id);
    
    if (!news) {
      return NextResponse.json(
        { error: 'Haber bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error('Haber detayı alınırken hata:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}

// Haberi güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 401 }
      );
    }

    await dbConnect();
    const updateData = await request.json();
    
    const news = await News.findByIdAndUpdate(
      params.id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!news) {
      return NextResponse.json(
        { error: 'Haber bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error('Haber güncellenirken hata:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}

// Haberi sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 401 }
      );
    }

    await dbConnect();
    const news = await News.findByIdAndDelete(params.id);

    if (!news) {
      return NextResponse.json(
        { error: 'Haber bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Haber silinirken hata:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}
