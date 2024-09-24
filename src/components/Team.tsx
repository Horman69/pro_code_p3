import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://sun6-23.userapi.com/impg/2mv8R5sPSnbLR_7zDERcA4SkJ6fqcO0pKLwJNg/Wzc8aqLNd7s.jpg?size=960x1280&quality=95&sign=327cf3a4e42bb498d4081bca2e81f77e&type=album",
    name: "Искендеров Руслан",
    position: "Основатель и Наставник",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B8%D1%81%D0%BA%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%BE%D0%B2-333873251/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100085337074362",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/norman.p3",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32 text-center"
      aria-label="Наша команда"
    >
      <header>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Наша миссия
          </span>
        </h2>
        {/* <p className="text-xl text-muted-foreground pt-1 pb-6 md:w-3/4 mx-auto">
          Мы стремимся помочь детям найти путь в IT, разобраться в непростых темах и сделать шаг вперед к своим мечтам.
        </p> */}
      </header>

      <div className="flex justify-center">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-left pb-2">
                <p className="text-lg text-muted-foreground mb-4">
                  Я прошел все этапы IT-обучения на практике — от работы школьным учителем до создания собственной образовательной платформы. Моя цель — делиться накопленным опытом через курсы, которые помогают детям и подросткам легко освоить технологии и уверенно двигаться вперед в мире IT.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Вместе с командой, которая разделяет мои ценности и подход, мы разрабатываем практические курсы на основе реальных задач. Мы стремимся сделать обучение доступным, интересным и полезным, помогая каждому ребенку раскрыть свой потенциал в программировании и IT.
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong>Миссия:</strong> дать детям не просто знания по программированию, а помочь им стать лидерами в технологическом мире, развивая у них способность решать сложные задачи и уверенность в своих силах.
                </p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
