import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";


const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};
interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Основы программирования",
    description:
      "Научим понимать логику кода без погружения в сложные языки программирования и разрабатывать собственные программы в среде Scratch",
    image: image4,
  },
  {
    title: "Первый опыт в IT",
    description:
      "Пройдем полный цикл создания креативного проекта «по-взрослому»: от идеи и плана до взаимодействия с командой и презентации",
    image: image3,
  },
  {
    title: "Портфолио проектов",
    description:
      "Соберем портфолио из не менее 20 проектов, среди которых визитка с анимацией, мультфильм с озвучкой и многоуровневая игра с препятствиями",
    image: image,
  },
  
];

const featureList: string[] = [
  "#Разработчик игр",
  "#Программист",
  "#3D-моделлер",
  "#Старт в IT",
  "#Дизайнер в IT",
  "#Мобильная разработка",
  "#Компьютерная грамотность",
  "#Визуальное программирование",
];

export const Features = () => {
  return (
    <section
      id="game_developer"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
      Изучаем.{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Играем.{" "}
        </span>
        Создаем.
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
      <div
       className="flex justify-center mt-8">
 <Button className="w-full md:w-1/3" onClick={scrollToForm}>
            БЕСПЛАТНЫЙ УРОК
          </Button>
</div>

    </section>
  );
};
