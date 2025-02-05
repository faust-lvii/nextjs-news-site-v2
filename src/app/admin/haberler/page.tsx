import Link from 'next/link';
import Image from 'next/image';
import AdminHeader from '@/components/AdminHeader';

export default function NewsList() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <AdminHeader title="Haber Yönetimi" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Haberler</h1>
            <p className="text-gray-400">Tüm haberleri yönetin</p>
          </div>
          <Link
            href="/admin/haber/ekle"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Yeni Haber Ekle
          </Link>
        </div>

        {/* Filters */}
        <div className="backdrop-blur-lg bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="search"
                placeholder="Haber ara..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
              />
            </div>
            <div>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent">
                <option value="">Tüm Kategoriler</option>
                <option value="yapay-zeka">Yapay Zeka</option>
                <option value="blockchain">Blockchain</option>
                <option value="mobil">Mobil</option>
                <option value="yazilim">Yazılım</option>
                <option value="donanim">Donanım</option>
              </select>
            </div>
            <div>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent">
                <option value="newest">En Yeni</option>
                <option value="oldest">En Eski</option>
                <option value="title">Başlığa Göre</option>
              </select>
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {/* News Item */}
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="relative h-20 w-32 flex-shrink-0">
                <Image
                  src="/placeholder.jpg"
                  alt="Haber görseli"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-1">
                      OpenAI&apos;dan Yeni Yapay Zeka Modeli
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Yapay Zeka</span>
                      <span>•</span>
                      <span>John Doe</span>
                      <span>•</span>
                      <time>23 Ocak 2024</time>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/admin/haber/1"
                      className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Link>
                    <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-400">
              Toplam 245 haber
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                Önceki
              </button>
              <button className="px-4 py-2 bg-blue-600 rounded-lg text-white">
                1
              </button>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                Sonraki
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
