import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, PlaneIcon, GiftIcon, WalletIcon } from "../components/Icons";
import { Button } from "./ui/button";

const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Разработчик игр",
    description:
      "Ребёнок научится создавать собственные игры на платформах Roblox или Unity, освоит программирование, работу с игровыми объектами и персонажами.",
  },
  {
    icon: <WalletIcon />,
    title: "Программист",
    description:
      "Мы начнем с изучения основ работы с консолью разработчика, узнаем, как использовать переменные и операторы для создания программ.",
  },
  {
    icon: <PlaneIcon />,
    title: "3D-моделлер",
    description:
      "Ребёнок научится создавать 3D-модели из 2D-изображений, освоит основы построения фигур и разберётся в принципах управления в Blender.",
  },
  {
    icon: <GiftIcon />,
    title: "Дизайнер в IT",
    description:
      "Ученик создаст одностраничный сайт, нарисует красивую обложку и добавит эффектную анимацию, освоив основы веб-дизайна и графики.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
      aria-label="Направления обучения в PRO_CODE"
    >
      <header>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          В{" "}
          <span className="bg-gradient-to-b from-[#2dac5c]/60 to-[#2dac5c] text-transparent bg-clip-text">
            PRO_CODE{" "}
          </span>
          для каждого найдется IT-направление
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          Даем актуальные навыки востребованных IT-профессий
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 hover:bg-muted/70 transition-transform duration-300 transform hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-4 text-xl font-semibold">
                {icon}
                {title} {/* Убрали <h3> отсюда */}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button 
        className="w-full md:w-auto text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white transition-colors duration-300 px-6 py-3" 
        onClick={scrollToForm}
      >
        ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
      </Button>
    </section>
  );
};

