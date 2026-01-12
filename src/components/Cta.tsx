import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Функция для плавной прокрутки к форме записи на пробный урок
const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

export const Cta = () => {
  return (
    <section id="cta" className="py-12 sm:py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-[#F7F7F8] dark:bg-[#1c1917] overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:place-items-center gap-6 sm:gap-8">
                {/* Левая колонка с заголовком и описанием */}
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Сделайте первый шаг в мир IT на{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                      бесплатном пробном уроке
                    </span>
                  </h2>
                  <p className="text-muted-foreground dark:text-gray-400 text-base sm:text-lg md:text-xl mt-4 mb-6 lg:mb-0">
                    Создайте свой первый проект и познакомьтесь с увлекательным миром программирования в PRO CODE. Наши опытные преподаватели помогут вам начать путь в IT.
                  </p>
                </div>

                {/* Правая колонка с кнопкой */}
                <div className="flex justify-center w-full">
                  <Button 
                    className="w-full lg:w-auto text-sm sm:text-base md:text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-[10px]"
                    onClick={scrollToForm}
                  >
                    ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
