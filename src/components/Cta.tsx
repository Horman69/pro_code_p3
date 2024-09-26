import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Функция для плавной прокрутки к форме записи на пробный урок
const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

export const Cta = () => {
  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-[#F7F7F8] dark:bg-[#1c1917] overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:place-items-center gap-8">
                {/* Левая колонка с заголовком и описанием */}
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Сделайте первый шаг в мир IT на{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                      бесплатном пробном уроке
                    </span>
                  </h2>
                  <p className="text-muted-foreground dark:text-gray-400 text-xl mt-4 mb-8 lg:mb-0">
                    Создайте свой первый проект и познакомьтесь с увлекательным миром программирования. Наши опытные преподаватели помогут вам начать путь в IT.
                  </p>
                </div>

                {/* Правая колонка с кнопкой */}
                <div className="flex justify-center w-full">
                  <Button 
                    className="w-full md:w-auto text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 px-6 py-3 rounded-[10px]"
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