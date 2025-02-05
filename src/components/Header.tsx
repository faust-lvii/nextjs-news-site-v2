'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/arama?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-[#0a0a0a] border-b border-white/10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            GG<span className="text-blue-500">.news</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/kategori/yapay-zeka" className="text-gray-300 hover:text-white transition-colors">Yapay Zeka</Link>
            <Link href="/kategori/blockchain" className="text-gray-300 hover:text-white transition-colors">Blockchain</Link>
            <Link href="/kategori/mobil" className="text-gray-300 hover:text-white transition-colors">Mobil</Link>
            <Link href="/kategori/yazilim" className="text-gray-300 hover:text-white transition-colors">Yazılım</Link>
            <Link href="/kategori/donanim" className="text-gray-300 hover:text-white transition-colors">Donanım</Link>
          </div>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              placeholder="Haberlerde ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent w-64"
            />
            <button type="submit" className="absolute right-3 top-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
