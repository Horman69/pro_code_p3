import { Send } from "lucide-react";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#F7F7F8] dark:bg-[#1c1917] px-4 sm:px-0" aria-label="Подвал сайта PRO_CODE">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-10 sm:py-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-8">
        <div className="col-span-full md:col-span-1">
          <a
            href="/"
            className="font-bold text-xl flex items-center"
            aria-label="Главная страница PRO_CODE"
          >
            <img 
              src="/logo_white_4.jpg"
              alt="Логотип PRO_CODE" 
              className="h-8 w-8 mr-2 rounded-full object-cover"
            />
            <span className="text-zinc-800 dark:text-zinc-200 hover:text-primary transition-colors duration-300">
              PRO_CODE
            </span>
          </a>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Онлайн-школа программирования для детей и подростков
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base sm:text-lg">Обучение в PRO_CODE</h3>
          <div>
            <a href="/#courses" className="text-sm sm:text-base opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              Курсы программирования
            </a>
          </div>
          <div>
            <a href="/#testimonials" className="text-sm sm:text-base opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              Отзывы учеников
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base sm:text-lg">О PRO_CODE</h3>
          <div>
            <a href="/#about" className="text-sm sm:text-base opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              О школе программирования
            </a>
          </div>
          <div>
            <a href="/#faq" className="text-sm sm:text-base opacity-60 hover:opacity-100 hover:text-primary transition-colors">
              Часто задаваемые вопросы
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base sm:text-lg">Контакты PRO_CODE</h3>
          <a
            href="https://t.me/pro_code_web3_bot"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center text-sm sm:text-base opacity-60 hover:opacity-100 hover:text-primary transition-colors"
            aria-label="Связаться с PRO_CODE через Telegram"
          >
            <Send className="h-4 w-4 mr-2" />
            Связаться с нами
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <Link to="/privacy-policy" className="text-sm sm:text-base text-primary hover:underline">
            Политика конфиденциальности PRO_CODE
          </Link>
          <Link to="/terms-of-use" className="text-sm sm:text-base text-primary hover:underline">
            Условия использования PRO_CODE
          </Link>
        </div>
        <h3 className="mt-4 text-sm sm:text-base">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="/"
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
