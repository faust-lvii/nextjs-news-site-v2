import Link from 'next/link';
import Image from 'next/image';
import { News } from '@/lib/db';
import dbConnect from '@/lib/db';
import Header from '@/components/Header';

interface PageProps {
  searchParams: {
    q?: string;
  };
}

async function searchNews(query: string) {
  await dbConnect();
  return News.find({
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { content: { $regex: query, $options: 'i' } },
      { summary: { $regex: query, $options: 'i' } }
    ]
  }).sort({ date: -1 });
}

export default async function SearchPage({ searchParams }: PageProps) {
  const query = searchParams.q || '';
  const results: News[] = query ? await searchNews(query) : [];

  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-[#0a0a0a] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">
                Arama Sonuçları
              </h1>
              <p className="text-gray-400">
                &quot;{query}&quot; için {results.length} sonuç bulundu
              </p>
            </div>

            <div className="space-y-6">
              {results.map((item: News) => (
                <Link
                  key={item._id}
                  href={`/haber/${item._id}`}
                  className="block backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-6 p-6">
                    <div className="relative h-32 w-48 flex-shrink-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-500/20 text-blue-400 rounded-full mb-3 border border-blue-500/20">
                        {item.category}
                      </span>
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                        {item.summary}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{item.author}</span>
                        <span>•</span>
                        <time>{new Date(item.date).toLocaleDateString('tr-TR')}</time>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {query && results.length === 0 && (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Sonuç Bulunamadı</h3>
                  <p className="text-gray-400">
                    Aramanızla eşleşen haber bulunamadı. Lütfen farklı anahtar kelimeler deneyin.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
