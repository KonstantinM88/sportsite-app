import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link href="/" className="hover:underline">Главная</Link>
      <Link href="/about" className="hover:underline">О проекте</Link>
      <Link href="/sports" className="hover:underline">Курсы по спорту</Link>
    </nav>
  );
}