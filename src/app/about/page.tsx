import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
      {/* Текст */}
      <div className="flex-1 space-y-4 text-gray-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-800">
          О проекте
        </h1>
        <p className="text-lg leading-relaxed">
          Платформа для онлайн-обучения различным видам спорта.
        </p>
        <p className="text-base leading-relaxed">
          Наша миссия — сделать спорт доступным каждому. Мы предлагаем качественные курсы и удобный формат обучения.
        </p>
      </div>

      {/* Картинка */}
      <div className="w-full md:w-[420px] flex-shrink-0 transition-transform duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/about.jpg"
          alt="О проекте"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
