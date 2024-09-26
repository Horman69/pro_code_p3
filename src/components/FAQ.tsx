import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Сколько стоит обучение в вашей школе?",
    answer: "Оставьте заявку на обучение, и в ближайшее время с вами свяжется наш менеджер-консультант, чтобы рассчитать для вас финальную стоимость курса. Она зависит от интенсивности занятий и пакета (от 4 до 128 занятий), который вы выберете, а также от возможных льгот и текущих скидок.",
    value: "item-1",
  },
  {
    question: "Вернете ли вы деньги, если ребенку не понравятся занятия?",
    answer:
      " Если такое случится, вы сможете вернуть деньги без комиссий и удержаний.",
    value: "item-2",
  },
  {
    question:
      "Как вы отбираете преподавателей?",
    answer:
      "Мы проводим несколько этапов отбора, включая собеседование, тестирование на знание предмета, прохождение обучения по курсам и контрольные уроки.",
    value: "item-3",
  },
  {
    question: "Какой компьютер нужен для занятий?",
    answer: "Подойдет любой компьютер или ноутбук с ОС Windows, MacOS или Linux последних версий.",
    value: "item-4",
  },
  {
    question:
      "Нужно ли покупать какую-нибудь технику или программы?",
    answer:
      "Нет, не нужно. Для обучения понадобится только компьютер или ноутбук с камерой, микрофоном и доступ в интернет.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white">
          Найдите ответ{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            на свой вопрос
          </span>
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F7F7F8] dark:bg-[#1c1917]">
          <CardContent className="p-8">
            <Accordion
              type="single"
              collapsible
              className="w-full AccordionRoot"
            >
              {FAQList.map(({ question, answer, value }: FAQProps) => (
                <AccordionItem
                  key={value}
                  value={value}
                >
                  <AccordionTrigger className="text-left">
                    {question}
                  </AccordionTrigger>

                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <h3 className="font-medium mt-8 text-center">
              Остались вопросы?{" "}
              <a
                rel="noreferrer noopener"
                href="https://t.me/pro_code_web3_bot"
                className="text-primary transition-all border-primary hover:border-b-2"
              >
                Связаться с нами
              </a>
            </h3>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};