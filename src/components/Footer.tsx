'use client';

import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">    
        <p
          className="text-sm md:text-base text-center md:text-left transition-colors duration-300 hover:text-white cursor-pointer"
          title="Спасибо, что с нами!"
        >
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-semibold underline-offset-2 hover:underline">
            СпортКурсы
          </span>. Все права защищены.
        </p>

        <div className="flex gap-4 text-xl">
          <Link
            href="https://t.me/yourchannel"
            target="_blank"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href="https://instagram.com/yourprofile"
            target="_blank"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=qzFthpdivoM"
            target="_blank"
            className="hover:text-red-500 transition-colors duration-200"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
