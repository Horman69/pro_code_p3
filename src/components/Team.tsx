import React from 'react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// interface TeamMember {
//   imageUrl: string;
//   name: string;
//   position: string;
// }

// const teamList: TeamMember[] = [
//   // Все элементы массива закомментированы
//   // {
//   //   imageUrl: "https://storedigital.ru/wp-content/uploads/2020/02/2nd.png",
//   //   name: "Анна Петрова",
//   //   position: "Python разработчик",
//   // },
//   // {
//   //   imageUrl: "https://storedigital.ru/wp-content/uploads/2020/02/1st.png",
//   //   name: "Михаил Сидоров",
//   //   position: "Web-разработчик",
//   // },
//   // {
//   //   imageUrl: "https://sun6-23.userapi.com/impg/2mv8R5sPSnbLR_7zDERcA4SkJ6fqcO0pKLwJNg/Wzc8aqLNd7s.jpg?size=960x1280&quality=95&sign=327cf3a4e42bb498d4081bca2e81f77e&type=album",
//   //   name: "Искендеров Руслан",
//   //   position: "Основатель и Наставник",
//   // },
//   // {
//   //   imageUrl: "https://twizz.ru/wp-content/uploads/2019/02/bez-nazvaniya-2.jpg",
//   //   name: "Елена Иванова",
//   //   position: "Game-разработчик",
//   // },
//   // {
//   //   imageUrl: "https://sun9-68.userapi.com/impg/zEI2UMqTVuz-X_UZ6-xq5mAsvYKRbxz_BEjP8Q/IuBCIZjo02w.jpg?size=300x300&quality=96&sign=713ef13cfcef2c95a2cc567f109cf83b&type=album",
//   //   name: "Дмитрий Козлов",
//   //   position: "3D-моделлер",
//   // },
// ];

export const Team: React.FC = () => {
  return (
    <section id="team" className="container py-24 sm:py-32" aria-labelledby="team-heading">
      <header className="text-center mb-12">
        <h2 id="team-heading" className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Наша миссия
          </span>
        </h2>
      </header>

      <Card className="bg-[#F7F7F8] dark:bg-[#1c1917] dark:text-white max-w-3xl mx-auto hover:shadow-xl hover:scale-105 transition-all duration-300">
        <CardContent className="text-center py-6">
          <p className="text-lg text-muted-foreground dark:text-gray-300 mb-4">
            Миссия нашей команды — помочь детям стать творцами в мире технологий, научив их программировать, решать сложные задачи и воплощать идеи в жизнь. Мы с командой создаём курсы, основанные на реальных задачах, чтобы каждый ученик мог создавать собственные проекты, участвовать в конкурсах и хакатонах, раскрывая свой потенциал.
          </p>
          <p className="text-lg text-muted-foreground dark:text-gray-300">
            Наши курсы — это не просто уроки программирования, это возможность шагнуть в мир инноваций, где каждый ребёнок получает поддержку, мотивацию и знания, необходимые для успешного будущего в IT.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
