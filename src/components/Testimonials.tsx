import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://www.foto.esteriol.lv/userfiles/small/bfa18434dbae31993d46d9f98cffcad8.jpg",
    name: "Наталья Токарева",
    userName: "@sunbird97",
    comment: "Моя дочь Аня, 11 лет, занимается по курсу Roblox с преподавателем Даниилом. Главной целью было переключить её внимание с игр на создание собственных. С первого урока Аня заинтересовалась, и уже создала 9 игр. Мы приобрели несколько блоков занятий и планируем продолжать. Спасибо школе LearnCode и преподавателю за понятные объяснения!",
  },
  {
    image: "https://img.freepik.com/free-photo/woman-posing-at-the-park-in-winter_23-2148820447.jpg?w=740&t=st=1726819950~exp=1726820550~hmac=ca20661172cf46ac65a487c1505e39d76867f527cb8d5bcf33533abb9a02d12c",
    name: "Ирина Каракаева",
    userName: "@redcanyon1",
    comment:
      "Грише понравилось программирование, и наш учитель Константин идеально подошёл для этого. Объясняет доступно, и сын с радостью продолжает занятия. Вся организация школы на высшем уровне!",
  },

  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s2WhUcQ30t1OJxX9CWeE9d4_p_6WXlUd9jBfqn6Oj49j8j2wwGiQr-hTTD8sa03qAmo&usqp=CAU",
    name: "Максим Волков",
    userName: "@twl23Volcov",
    comment:
      "Занимаюсь Python в LearnCode — за 8 уроков уже освоил основы и написал несколько программ. Учитель отлично объясняет и помогает, когда нужно. Индивидуальные занятия позволяют быстрее продвигаться вперёд.",
  },
  {
    image: "https://vraki.net/sites/default/files/inline/images/10_98.jpg",
    name: "Анна",
    userName: "@lavender_haze",
    comment:
      "Арсений (4 класс) занимается Python в «LearnCode» после Scratch. Преподаватель Роман нашёл подход к сыну, и занятия проходят с удовольствием. Уже создали несколько программ и начали работать с анимацией. Онлайн-формат оказался очень удобным.",
  },
  {
    image: "https://photoplay.ru/sites/default/files/styles/r-1-1-fullwidth/public/gallery_images/bez_nazvaniya_9.jpg?itok=NEFpUcRU",
    name: "Татьяна Рудова",
    userName: "@rudova.tat78",
    comment:
      "Гриша, 10 лет, начал изучать Python самостоятельно, и мы решили его поддержать. Хотелось найти учителя, который бы объяснил базовые принципы программирования. Преподаватель Константин идеально подошел: он приветлив, компетентен и сумел выстроить отличный контакт с ребёнком. Мы очень довольны школой и организацией обучения!",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtxl2MPbbKQGpoOq9f_7-O4Byv77Ye-l6XB9F7XJBtpHAWmYQr_ykB-m2dHM807SbvpI&usqp=CAU",
    name: "Ольга",
    userName: "@olgaNaumova0",
    comment:
      "Нам очень нравится удобство онлайн-формата. Спасибо Руслану за индивидуальный подход — сыну комфортно, и занятия проходят в лёгкой атмосфере.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Отзывы родителей
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          и учеников{" "}
        </span>
        о школе LearnCode
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Мы стремимся сделать образование интересным и увлекательным, чтобы каждый ученик развивал свои навыки с удовольствием.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
