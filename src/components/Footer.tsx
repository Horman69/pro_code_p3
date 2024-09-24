
import { LogoIcon } from "./Icons";
import { Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full md:col-span-1">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <LogoIcon />
            PRO_CODE
          </a>
          <p className="mt-4 text-muted-foreground">
            Онлайн-школа программирования для детей и подростков
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Обучение</h3>
          <div>
            <a href="/#courses" className="opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              Курсы
            </a>
          </div>
          <div>
            <a href="/#testimonials" className="opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              Отзывы
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">О нас</h3>
          <div>
            <a href="/#about" className="opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              О школе
            </a>
          </div>
          <div>
            <a href="/#faq" className="opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Контакты</h3>
          <a
            href="https://t.me/Eureka_school_bot"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            <Send className="h-4 w-4 mr-2" />
            Связаться с нами
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; {new Date().getFullYear()}{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://t.me/LearnCode_web3_bot"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            PRO_CODE
          </a>
          . Все права защищены.
        </h3>
      </section>
    </footer>
  );
};
