import { Code, Gamepad2, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

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
  // Добавьте больше проектов по мере необходимости
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ icon, name, description, studentName, projectUrl }: ProjectProps, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="bg-[#F7F7F8] dark:bg-[#1C1917] hover:bg-muted/70 dark:hover:bg-[#2a2625] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-4 text-xl font-semibold">
                  <span className="text-primary dark:text-primary-dark">{icon}</span>
                  {name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-muted-foreground-dark">
                <p>{description}</p>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Автор: {studentName}</p>
                <Button 
                  asChild
                  className="mt-4 w-full text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 px-6 py-3 rounded-[10px]"
                >
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    Посмотреть проект
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
