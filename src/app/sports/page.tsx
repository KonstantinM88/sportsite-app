import Link from 'next/link';
import Image from 'next/image';

export default function Sports() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
      <div className="flex-1 space-y-4 text-gray-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-800">
          Курсы по видам спорта
        </h1>
        <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
          <li>
            <Link href="/sports/football" className="text-blue-600 hover:underline">
              Футбол
            </Link>{" "}
            – основы техники и тактики футбола
          </li>
          <li>
            <Link href="/sports/tennis" className="text-blue-600 hover:underline">
              Теннис
            </Link>{" "}
            – удары, подача и стратегия игры
          </li>
          <li>
            <Link href="/sports/swimming" className="text-blue-600 hover:underline">
              Плавание
            </Link>{" "}
            – дыхание и стили плавания
          </li>
        </ul>
      </div>

      <div className="w-full md:w-[420px] flex-shrink-0 transition-transform duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/sports.jpg"
          alt="Курсы по спорту"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
