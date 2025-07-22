import Link from 'next/link';

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <nav className="flex gap-4 border-b pb-2 mb-4">
        <Link href="/sports/football" className="text-blue-600 hover:underline">Футбол</Link>
        <Link href="/sports/tennis" className="text-blue-600 hover:underline">Теннис</Link>
        <Link href="/sports/swimming" className="text-blue-600 hover:underline">Плавание</Link>
      </nav>
      {children}
    </div>
  );
}