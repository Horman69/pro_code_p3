import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, PlaneIcon, GiftIcon,WalletIcon } from "../components/Icons";

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
      " Мы начнем с изучения основ работы с консолью разработчика, узнаем, как использовать переменные и операторы для создания программ.",
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
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        В{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          LearnCode{" "}
        </span>
        для каждого найдется IT-направление
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Даем актуальные навыки востребованных
      IT-профессий
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
