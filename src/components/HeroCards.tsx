import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
//import { Badge } from "./ui/badge";
import { Button, /*buttonVariants*/ } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, /*Linkedin*/ } from "lucide-react";
import { LightBulbIcon } from "./Icons";


const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};
//import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Развитие уверенности</CardTitle>
            <CardDescription className="font-normal text-primary">
          @LearnCode
          </CardDescription>
          </div>
        </CardHeader>
        <CardDescription>
        <CardContent>Дадим первый оплачиваемый проект, который поможет поверить в свои силы</CardContent>
        </CardDescription>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://github.com/shadcn.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Учимся один на один</CardTitle>
          <CardDescription className="font-normal text-primary">
          @LearnCode
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p><CardDescription> 
          Формат 1 на 1 помогает ребёнку раскрыться и не бояться делиться идеями</CardDescription>
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Бесплатный урок
            {/* <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge> */}
          </CardTitle>
          {/* <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div> */}

          <CardDescription>
          Запишитесь на бесплатный пробный урок вместе
          с ребёнком
          </CardDescription>
        </CardHeader>

        <CardContent>
      <Button className="w-full" onClick={scrollToForm}>Записаться</Button>
    </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Первый мини-проект", "Определите направление ", "Узнаете о перспективах развития в IT", "Шаг к профессиям будущего"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
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
