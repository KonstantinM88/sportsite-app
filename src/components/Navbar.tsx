'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? 'bg-gray-700 font-semibold' : '';

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:opacity-90">
          ⚽ СпортКурсы
        </Link>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Навигация */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:gap-6 w-full md:w-auto mt-4 md:mt-0`}
        >
          <Link href="/" className={`block md:inline-block px-4 py-2 rounded hover:bg-gray-700 transition ${isActive('/')}`}>
            Главная
          </Link>
          <Link href="/about" className={`block md:inline-block px-4 py-2 rounded hover:bg-gray-700 transition ${isActive('/about')}`}>
            О проекте
          </Link>
          <Link href="/sports" className={`block md:inline-block px-4 py-2 rounded hover:bg-gray-700 transition ${isActive('/sports')}`}>
            Курсы по спорту
          </Link>
        </div>
      </div>
    </nav>
  );
}
