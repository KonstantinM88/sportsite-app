'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start gap-8">
      {/* Текст */}
      <div className="flex-1 space-y-4 text-gray-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-800">
          Добро пожаловать на сайт спортивных курсов!
        </h1>
        <p>
          Здесь вы можете найти курсы по различным видам спорта, таким как футбол, теннис и плавание.
        </p>
        <p>
          Выберите интересующий вас курс или перейдите в раздел{" "}
          <Link href="/sports" className="text-blue-600 hover:underline">
            Курсы по спорту
          </Link>.
        </p>
        <p>
          Мы стремимся сделать спорт доступным для всех, предлагая качественные онлайн-курсы и удобный формат обучения.
        </p>
        <p>
          Присоединяйтесь к нам и начните свой путь в мир спорта!
        </p>
        <p>
          Для получения дополнительной информации о проекте, посетите страницу{" "}
          <Link href="/about" className="text-blue-600 hover:underline">
            О проекте
          </Link>.
        </p>
        <p>
          Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами через форму обратной связи.
        </p>
        <p>Спасибо, что выбрали наш сайт для обучения спорту!</p>
        <p>
          Мы надеемся, что наши курсы помогут вам достичь ваших спортивных целей и стать лучше в том, что вы любите.
        </p>
        <p>Следите за обновлениями и новыми курсами на нашем сайте.</p>
        <p>Удачи в ваших спортивных начинаниях!</p>
        <p>С уважением, команда спортивных курсов.</p>
        <p>
          Мы ценим вашу поддержку и надеемся, что вы найдете наши курсы полезными и вдохновляющими.
        </p>

        {/* CTA кнопка */}
        <Link
          href="/sports"
          className="inline-block mt-4 bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Начать обучение
        </Link>
      </div>

      {/* Картинка */}
      <div className="w-full md:w-[420px] flex-shrink-0 transition-transform duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/home.jpg"
          alt="Домашняя страница"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
