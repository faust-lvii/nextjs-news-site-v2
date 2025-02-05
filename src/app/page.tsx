import Image from 'next/image';
import Link from 'next/link';
import { News } from '@/lib/db';
import dbConnect from '@/lib/db';
import Header from '@/components/Header';

async function getNews() {
  await dbConnect();
  return News.find().sort({ date: -1 }).limit(12);
}

export default async function Home() {
  const news = await getNews();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0a0a0a] py-12">
        <div className="container mx-auto px-4">
          {news[0] && (
            <Link href={`/haber/${news[0]._id}`} className="group">
              <div className="relative h-[600px] rounded-xl overflow-hidden">
                <Image
                  src={news[0].imageUrl}
                  alt={news[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-500/20 text-blue-400 rounded-full mb-4 border border-blue-500/20">
                    {news[0].category}
                  </span>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {news[0].title}
                  </h1>
                  <p className="text-gray-300 text-lg mb-4 line-clamp-2">
                    {news[0].summary}
                  </p>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <span>{news[0].author}</span>
                    <span>•</span>
                    <time>{new Date(news[0].date).toLocaleDateString('tr-TR')}</time>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {news.slice(1).map((item: News) => (
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
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
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
      </section>
    </>
  );
}
