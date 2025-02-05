import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';

interface PageProps {
  params: {
    id: string;
  };
}

export default function EditNews({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <AdminHeader title="Haber Düzenle" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-white">Haber Düzenle</h1>
            <Link
              href="/admin"
              className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </Link>
          </div>

          <form className="space-y-6">
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                    Başlık
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="block w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
                    placeholder="Haber başlığını girin"
                  />
                </div>

                <div>
                  <label htmlFor="summary" className="block text-sm font-medium text-white mb-2">
                    Özet
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    rows={3}
                    className="block w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
                    placeholder="Haber özetini girin"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-white mb-2">
                    İçerik (Markdown)
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={10}
                    className="block w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent font-mono"
                    placeholder="Haber içeriğini Markdown formatında girin"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                    Kategori
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="block w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
                  >
                    <option value="">Kategori seçin</option>
                    <option value="yapay-zeka">Yapay Zeka</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="mobil">Mobil</option>
                    <option value="yazilim">Yazılım</option>
                    <option value="donanim">Donanım</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-white mb-2">
                    Görsel URL
                  </label>
                  <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    className="block w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
                    placeholder="Haber görselinin URL'sini girin"
                  />
                </div>

                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-white mb-2">
                    Yazar
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    className="block w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
                    placeholder="Yazar adını girin"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors"
              >
                Haberi Sil
              </button>
              <button
                type="button"
                className="px-6 py-2.5 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
              >
                Değişiklikleri Kaydet
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
