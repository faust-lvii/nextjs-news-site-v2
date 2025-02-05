import Link from 'next/link';
import Image from 'next/image';
import AdminHeader from '@/components/AdminHeader';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <AdminHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Quick Stats */}
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Toplam Haber</h3>
            <p className="text-3xl font-bold text-blue-400">245</p>
          </div>
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Bu Ay</h3>
            <p className="text-3xl font-bold text-blue-400">32</p>
          </div>
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Bu Hafta</h3>
            <p className="text-3xl font-bold text-blue-400">12</p>
          </div>
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Bugün</h3>
            <p className="text-3xl font-bold text-blue-400">3</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">Hızlı İşlemler</h2>
            <div className="space-y-4">
              <Link
                href="/admin/haber/ekle"
                className="w-full flex items-center justify-between p-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
              >
                <span className="font-medium">Yeni Haber Ekle</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </Link>
              <Link
                href="/admin/haberler"
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
              >
                <span className="font-medium">Haberleri Yönet</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Link>
              <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                <span className="font-medium">Kategorileri Yönet</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">Son Aktiviteler</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <p className="text-white">Yeni haber eklendi</p>
                    <p className="text-sm text-gray-400">2 saat önce</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div>
                    <p className="text-white">Haber güncellendi</p>
                    <p className="text-sm text-gray-400">3 saat önce</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div>
                    <p className="text-white">Haber silindi</p>
                    <p className="text-sm text-gray-400">5 saat önce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
