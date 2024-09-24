import { Radar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  description: string; // Добавляем описание курса
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Разработчик игр",
    description: "Научитесь создавать игры с нуля.",
  },
  {
    icon: <Radar size={34} />,
    name: "Roblox",
    description: "Создавайте свои игры на платформе Roblox.",
  },
  {
    icon: <Radar size={34} />,
    name: "Minecraft",
    description: "Изучите основы программирования через Minecraft.",
  },
  {
    icon: <Radar size={34} />,
    name: "Unity",
    description: "Разработка 2D и 3D игр с использованием Unity.",
  },
  {
    icon: <Radar size={34} />,
    name: "Программист",
    description: "Основы программирования для начинающих.",
  },
  {
    icon: <Radar size={34} />,
    name: "3D-моделлер",
    description: "Создание 3D моделей и анимаций.",
  },
  {
    icon: <Radar size={34} />,
    name: "Старт в IT",
    description: "Первый шаг в мир информационных технологий.",
  },
  {
    icon: <Radar size={34} />,
    name: "Дизайнер в IT",
    description: "Основы веб-дизайна и графики.",
  },
  {
    icon: <Radar size={34} />,
    name: "Мобильная разработка",
    description: "Создание приложений для мобильных устройств.",
  },
  {
    icon: <Radar size={34} />,
    name: "Компьютерная грамотность",
    description: "Основы работы с компьютером.",
  },
  {
    icon: <Radar size={34} />,
    name: "Визуальное программирование",
    description: "Программирование без кода.",
  },
  {
    icon: <Radar size={34} />,
    name: "Нейросети",
    description: "Введение в мир искусственного интеллекта.",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
      aria-label="Курсы, предлагаемые в LearnCode"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-2 text-primary">
        НАШИ КУРСЫ
      </h2>
      <p className="text-center text-sm md:text-md text-muted-foreground mb-8">
        Мы предлагаем разнообразные курсы, которые помогут вам освоить востребованные навыки в IT.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name, description }: SponsorProps) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={name}
            title={name}
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>

      {/* Блок о наставнике */}
      <section className="py-24 sm:py-32" id="mentor">
        <h2 className="text-center text-2xl font-bold mb-4">Наш наставник</h2>
        <div className="flex flex-col items-center">
          <Avatar>
            <AvatarImage
              alt="Искендеров Руслан"
              src="URL_К_ФОТОГРАФИИ" // Замените на реальный URL
            />
            <AvatarFallback>ИР</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold mt-2">Искендеров Руслан</h3>
          <p className="text-md text-muted-foreground mb-4">Педагог по программированию</p>
          <h4 className="font-semibold">Образование:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>РГАЗУ, эколог</li>
            <li>ЛИСК МГУ, специалист по кибербезопасности (спецкурс)</li>
          </ul>
          <h4 className="font-semibold">Опыт работы:</h4>
          <p>Более 10 лет работы с детьми, 4 года преподавания информатики в школе, автор интерактивных методик, разработчик проектов в Roblox Studio.</p>
        </div>
      </section>
    </section>
  );
};
