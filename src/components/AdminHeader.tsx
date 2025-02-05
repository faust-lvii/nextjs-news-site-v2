'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface AdminHeaderProps {
  title?: string;
}

export default function AdminHeader({ title = 'Admin Panel' }: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Çıkış yapılırken hata:', error);
    }
  }, [router]);

  return (
    <header className="bg-[#0a0a0a] border-b border-white/10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/admin" className="text-2xl font-bold text-white">
            GG<span className="text-blue-500">.news</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">{title}</span>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
