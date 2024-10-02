import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { LightBulbIcon } from "./Icons";

const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

const benefits = [
  "Первый мини-проект",
  "Определите направление",
  "Узнаете о перспективах в IT",
  "Шаг к профессиям будущего"
];

export const HeroCards: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-4 lg:gap-8 relative w-full lg:w-[700px] h-[500px] lg:h-[500px]">
      
      {/* Развитие уверенности */}
      <Card className="absolute w-[340px] -top-[40px] left-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10 hover:transform hover:scale-105 transition-transform duration-300">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Аватар ученика PRO_CODE"
              src="src/assets/logo_white_4.jpg"
            />
            <AvatarFallback>УЧ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Развитие уверенности в IT</CardTitle>
            <CardDescription className="font-normal text-primary dark:text-[#2dac5c]">
              @PRO_CODE
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground dark:text-gray-300">
            Дадим первый оплачиваемый IT-проект, который поможет поверить в свои силы и начать карьеру в программировании
          </p>
        </CardContent>
      </Card>

      {/* Учимся один на один */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 hover:scale-105 transition-transform duration-300">
        <CardHeader className="mt-8 flex flex-col justify-center items-center pb-2">
          <img
            src="src/assets/logo_white_4.jpg"
            alt="Преподаватель PRO_CODE"
            className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center mt-4">Учимся один на один</CardTitle>
          <CardDescription className="font-normal text-primary dark:text-[#2dac5c]">
            @PRO_CODE
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p className="text-muted-foreground dark:text-gray-300">
            Формат 1 на 1 помогает ребёнку раскрыться и не бояться делиться идеями
          </p>
        </CardContent>
      </Card>

      {/* Бесплатный урок */}
      <Card className="absolute top-[220px] left-[20px] w-[320px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 hover:transform hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center justify-between">
            Бесплатный урок: начни путь в IT!
            <Zap className="text-yellow-400 h-16 w-16" /> {/* Изменено здесь */}
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-300">
            Запишитесь на бесплатный пробный урок вместе с ребёнком
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full px-8 py-4 text-lg font-semibold bg-[#259D52] hover:bg-[#1e8544] text-white dark:bg-[#259D52] dark:hover:bg-[#1e8544] dark:text-black transition-colors duration-300 rounded-[10px]" 
            onClick={scrollToForm}
            aria-label="Записаться на бесплатный пробный урок"
          >
            ЗАПИСАТЬСЯ
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <ul className="space-y-2 list-none">
            {benefits.map(
              (benefit: string) => (
                <li key={benefit} className="flex items-center">
                  <Check className="text-[#2dac5c] dark:text-[#38d975] mr-2" />
                  <span className="text-sm text-muted-foreground dark:text-gray-300">{benefit}</span>
                </li>
              )
            )}
          </ul>
        </CardFooter>
      </Card>

      {/* Время с пользой */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 hover:scale-105 transition-transform duration-300">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Время с пользой</CardTitle>
            <CardDescription className="text-md mt-2">
              Направим увлечение компьютером в полезное русло для большого будущего
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};