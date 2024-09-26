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
  socialNetworks?: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://storedigital.ru/wp-content/uploads/2020/02/2nd.png",
    name: "Анна Петрова",
    position: "Python разработчик",
  },
  {
    imageUrl: "https://storedigital.ru/wp-content/uploads/2020/02/1st.png",
    name: "Михаил Сидоров",
    position: "Web-разработчик",
  },
  {
    imageUrl: "https://sun6-23.userapi.com/impg/2mv8R5sPSnbLR_7zDERcA4SkJ6fqcO0pKLwJNg/Wzc8aqLNd7s.jpg?size=960x1280&quality=95&sign=327cf3a4e42bb498d4081bca2e81f77e&type=album",
    name: "Искендеров Руслан",
    position: "Основатель и Наставник",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B8%D1%81%D0%BA%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%BE%D0%B2-333873251/" },
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100085337074362" },
      { name: "Instagram", url: "https://www.instagram.com/norman.p3" },
    ],
  },
  {
    imageUrl: "https://twizz.ru/wp-content/uploads/2019/02/bez-nazvaniya-2.jpg",
    name: "Елена Иванова",
    position: "Game-разработчик",
  },
  {
    imageUrl: "https://sun9-68.userapi.com/impg/zEI2UMqTVuz-X_UZ6-xq5mAsvYKRbxz_BEjP8Q/IuBCIZjo02w.jpg?size=300x300&quality=96&sign=713ef13cfcef2c95a2cc567f109cf83b&type=album",
    name: "Дмитрий Козлов",
    position: "3D-моделлер",
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin": return <Linkedin size="20" />;
      case "Facebook": return <Facebook size="20" />;
      case "Instagram": return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32" aria-label="Наша команда">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Наша миссия
          </span>
        </h2>
      </header>

      <div className="flex justify-center items-start gap-8 mb-12">
        {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps, index) => (
          <div key={name} className="flex flex-col items-center">
            <img
              src={imageUrl}
              alt={`${name} ${position}`}
              className="rounded-full w-24 h-24 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-primary">{position}</p>
          </div>
        ))}
      </div>

      <Card className="bg-[#F7F7F8] dark:bg-[#1c1917] max-w-3xl mx-auto">
        <CardContent className="text-center py-6">
          <p className="text-lg text-muted-foreground mb-4">
            Миссия нашей команды — помочь детям стать творцами в мире технологий, научив их программировать, решать сложные задачи и воплощать идеи в жизнь. Мы с командой создаём курсы, основанные на реальных задачах, чтобы каждый ученик мог создавать собственные проекты, участвовать в конкурсах и хакатонах, раскрывая свой потенциал.
          </p>
          <p className="text-lg text-muted-foreground">
            Наши курсы — это не просто уроки программирования, это возможность шагнуть в мир инноваций, где каждый ребёнок получает поддержку, мотивацию и знания, необходимые для успешного будущего в IT.
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          {teamList[2].socialNetworks?.map(({ name, url }: SociaNetworkslProps) => (
            <a
              key={name}
              rel="noreferrer noopener"
              href={url}
              target="_blank"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <span className="sr-only">{name} icon</span>
              {socialIcon(name)}
            </a>
          ))}
        </CardFooter>
      </Card>
    </section>
  );
};
