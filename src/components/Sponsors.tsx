import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Gamepad2, Laptop, Code, Globe, Database, Bot, ChartBar, Camera, Music, Smartphone, Cloud, PenTool } from 'lucide-react';

interface ProjectProps {
  icon: JSX.Element;
  name: string;
  description: string;
  studentName: string;
  projectUrl: string;
}

const projects: ProjectProps[] = [
  {
    icon: <Gamepad2 size={34} />,
    name: "Космическое приключение",
    description: "2D платформер на Unity",
    studentName: "Анна, 14 лет",
    projectUrl: "https://example.com/space-adventure",
  },
  {
    icon: <Laptop size={34} />,
    name: "Мой первый сайт",
    description: "Персональный блог на React",
    studentName: "Максим, 15 лет",
    projectUrl: "https://example.com/personal-blog",
  },
  {
    icon: <Code size={34} />,
    name: "Умный калькулятор",
    description: "Приложение на Python",
    studentName: "Ольга, 13 лет",
    projectUrl: "https://example.com/smart-calculator",
  },
  {
    icon: <Globe size={34} />,
    name: "Виртуальный тур",
    description: "3D-экскурсия по школе",
    studentName: "Дмитрий, 16 лет",
    projectUrl: "https://example.com/virtual-tour",
  },
  {
    icon: <Database size={34} />,
    name: "Школьная библиотека",
    description: "База дн��ых на SQL",
    studentName: "Елена, 15 лет",
    projectUrl: "https://example.com/school-library",
  },
  {
    icon: <Bot size={34} />,
    name: "Чат-бот помощник",
    description: "AI-бот на Python",
    studentName: "Артем, 14 лет",
    projectUrl: "https://example.com/ai-chatbot",
  },
  {
    icon: <ChartBar size={34} />,
    name: "Анализ данных",
    description: "Проект на R и Tableau",
    studentName: "София, 16 лет",
    projectUrl: "https://example.com/data-analysis",
  },
  {
    icon: <Camera size={34} />,
    name: "Фоторедактор",
    description: "Веб-приложение на JavaScript",
    studentName: "Игорь, 15 лет",
    projectUrl: "https://example.com/photo-editor",
  },
  {
    icon: <Music size={34} />,
    name: "Музыкальный плеер",
    description: "Мобильное приложение на Flutter",
    studentName: "Мария, 14 лет",
    projectUrl: "https://example.com/music-player",
  },
  {
    icon: <Smartphone size={34} />,
    name: "Мобильная игра",
    description: "Головоломка на React Native",
    studentName: "Алексей, 15 лет",
    projectUrl: "https://example.com/mobile-puzzle",
  },
  {
    icon: <Cloud size={34} />,
    name: "Погодное приложение",
    description: "Прогноз погоды с API",
    studentName: "Наталья, 14 лет",
    projectUrl: "https://example.com/weather-app",
  },
  {
    icon: <PenTool size={34} />,
    name: "Векторный редактор",
    description: "Онлайн-инструмент на SVG",
    studentName: "Кирилл, 16 лет",
    projectUrl: "https://example.com/vector-editor",
  },
];

export const Sponsors = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32 relative overflow-x-hidden"
      aria-label="Проекты наших учеников"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-2 text-primary dark:text-primary-dark">
        Проекты наших учеников
      </h2>
      <p className="text-center md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Посмотрите, какие удивительные проекты создают наши ученики в процессе обучения.
      </p>

      <div className="relative px-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-muted dark:bg-muted/70 hover:bg-muted/90 dark:hover:bg-muted/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-full flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="flex flex-col items-center gap-3 text-lg font-semibold text-foreground dark:text-foreground">
                    <span className="text-primary dark:text-primary">{project.icon}</span>
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between text-center">
                  <div>
                    <p className="text-sm text-foreground dark:text-foreground">{project.description}</p>
                    <p className="mt-2 text-xs font-medium text-muted-foreground">Автор: {project.studentName}</p>
                  </div>
                  <Button 
                    asChild
                    className="mt-4 w-full text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300 px-4 py-2 rounded-[10px]"
                  >
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      Посмотреть проект
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
