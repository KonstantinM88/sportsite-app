import Image from 'next/image';

export default function Football() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
      {/* Текст */}
      <div className="flex-1 space-y-4 text-gray-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-800">
          Курс по футболу
        </h1>
        <p className="text-lg leading-relaxed">
          Введение в футбол. Изучите основы игры, технику передач и дриблинг.
        </p>
        <ul className="list-disc pl-6 text-base leading-relaxed">
          <li>Техника</li>
          <li>Пас</li>
          <li>Дриблинг</li>
          <li>Тактика</li>
        </ul>
        <p className="text-base">Курс подходит для начинающих.</p>

        <button className="mt-4 inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Записаться на курс
        </button>
      </div>

      <div className="w-full md:w-[420px] flex-shrink-0 transition-transform duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/football.jpg"
          alt="Футбол"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
