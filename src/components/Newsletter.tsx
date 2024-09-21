import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section id="trial-form" className="bg-white dark:bg-[#0c0a09] py-12 text-black dark:text-white">
      <div className="p-8 bg-green-500 dark:bg-green-700 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="text-center text-3xl font-bold mb-4 text-white">Попробуйте бесплатно!</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-white">Имя</label>
            <Input className="w-full px-4 py-2 bg-white text-black dark:bg-gray-800 dark:text-white" placeholder="Введите имя" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Телефон</label>
            <Input className="w-full px-4 py-2 bg-white text-black dark:bg-gray-800 dark:text-white" placeholder="+7 (___) ___-__-__" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Электронная почта</label>
            <Input className="w-full px-4 py-2 bg-white text-black dark:bg-gray-800 dark:text-white" placeholder="example@mail.com" />
          </div>
          <Button className="bg-yellow-500 w-full py-2 rounded text-black">Оставить заявку</Button>
          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-white">Согласен с условиями</span>
          </div>
        </form>
      </div>
    </section>
  );
};
