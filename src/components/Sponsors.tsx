import { Code, Gamepad2, Laptop, Globe, Database, Bot, ChartBar, Camera, Music, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
    description: "База данных на SQL",
    studentName: "Елена, 15 лет",
    projectUrl: "https://example.com/school-library",
  },
  {
    icon: <Bot size={34} />, // Заменяем Robot на Bot
    name: "Умный помощник",
    description: "Чат-бот на Python",
    studentName: "Артем, 14 лет",
    projectUrl: "https://example.com/smart-assistant",
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
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
      aria-label="Проекты наших учеников"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-2 text-primary dark:text-primary-dark">
        Проекты наших учеников
      </h2>
      <p className="text-center md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Посмотрите, какие удивительные проекты создают наши ученики в процессе обучения.
      </p>
      
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        loop={true}
        loopedSlides={3}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card
              className="bg-[#F7F7F8] dark:bg-[#1C1917] hover:bg-muted/70 dark:hover:bg-[#2a2625] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-4 text-xl font-semibold">
                  <span className="text-primary dark:text-primary-dark">{project.icon}</span>
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-muted-foreground-dark">
                <p>{project.description}</p>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Автор: {project.studentName}</p>
                <Button 
                  asChild
                  className="mt-4 w-full text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 px-6 py-3 rounded-[10px]"
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
    </section>
  );
};
