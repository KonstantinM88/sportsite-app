import Link from 'next/link';

export default function Sports() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Курсы по видам спорта</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/sports/football" className="text-blue-600 hover:underline">Футбол</Link> - основы техники и тактики футбола
        </li>
        <li>
          <Link href="/sports/tennis" className="text-blue-600 hover:underline">Теннис</Link> - удары, подача и стратегия игры
        </li>
        <li>
          <Link href="/sports/swimming" className="text-blue-600 hover:underline">Плавание</Link> - дыхание и стили плавания
        </li>
      </ul>
    </div>
  );
}