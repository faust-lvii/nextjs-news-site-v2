import Image from 'next/image';
import Link from 'next/link';
import { News } from '@/lib/db';
import dbConnect from '@/lib/db';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';

interface PageProps {
  params: {
    kategori: string;
  };
}

async function getNewsByCategory(category: string) {
  await dbConnect();
  return News.find({ category }).sort({ date: -1 });
}

export default async function CategoryPage({ params }: PageProps) {
  const decodedCategory = decodeURIComponent(params.kategori);
  const news = await getNewsByCategory(decodedCategory);

  if (!news || news.length === 0) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-[#0a0a0a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-4 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ana Sayfaya Dön
            </Link>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
              {decodedCategory} Haberleri
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item: News) => (
              <Link
                key={item._id}
                href={`/haber/${item._id}`}
                className="group backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-500/20 text-blue-400 rounded-full mb-4 border border-blue-500/20">
                    {item.category}
                  </span>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{item.author}</span>
                    <time>{new Date(item.date).toLocaleDateString('tr-TR')}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
