import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import { Send } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

export const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
    validateField('phone', value);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Необходимо указать имя";
        break;
      case "phone":
        if (!value.trim() || value.replace(/\D/g, '').length < 10) {
          error = "Необходимо указать верный телефон";
        }
        break;
      case "email":
        if (!value.trim() || !/\S+@\S+\.\S+/.test(value)) {
          error = "Необходимо указать верный email";
        }
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).every(error => !error) && isAgreed) {
      setIsSubmitting(true);
      try {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const response = await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString()
        });
        
        if (response.ok) {
          alert("Заявка успешно отправлена!");
          setFormData({ name: "", phone: "", email: "" });
        } else {
          throw new Error(`Ошибка при отправке формы: ${response.status}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`Произошла ошибка при отправке заявки: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
      } finally {
        setIsSubmitting(false);
      }
    } else if (!isAgreed) {
      setAgreementError("Необходимо согласиться с положением о защите персональных данных");
    }
  };

  // Шаги процесса
  const steps = [
    "Перезвоним и поможем подобрать курс",
    "Запишем на бесплатные пробные занятия",
    "После рассчитаем финальную стоимость с учетом возможных льгот",
  ];

  // Стили для полей ввода
  const inputStyle = {
    width: '100%',
    height: '50px',
    fontSize: '16px',
    borderRadius: '10px',
    color: '#71717A',
    paddingLeft: '16px',
    backgroundColor: 'white',
    border: 'none', // Убираем границу
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Добавляем тень
  };

  return (
    <section id="trial-form" className="py-12 sm:py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white">
          Попробуйте <span className="text-[#2dac5c] dark:text-[#19773b]">бесплатно!</span>
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-[#1c1917]">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="bg-[#2dac5c] dark:bg-[#19773b] text-white p-4 sm:p-6 rounded-lg lg:w-1/2">
                <CardTitle className="text-xl sm:text-2xl mb-4">Заполните форму</CardTitle>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <Input
                      style={inputStyle}
                      placeholder="Введите имя"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="dark:text-black focus:outline-none focus:ring-0"
                    />
                    {errors.name && <p className="text-[#FFF59E] text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <PhoneInput
                      country={'ru'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        className: 'dark:text-black focus:outline-none focus:ring-0',
                      }}
                      inputStyle={{
                        ...inputStyle,
                        paddingLeft: '48px',
                      }}
                      buttonStyle={{
                        border: 'none',
                        background: 'transparent',
                        borderRadius: '10px 0 0 10px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      }}
                      dropdownStyle={{
                        width: 'max-content',
                      }}
                      containerStyle={{
                        width: '100%',
                      }}
                    />
                    {errors.phone && <p className="text-[#FFF59E] text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Input
                      style={inputStyle}
                      placeholder="example@mail.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="dark:text-black focus:outline-none focus:ring-0"
                    />
                    {errors.email && <p className="text-[#FFF59E] text-sm mt-1">{errors.email}</p>}
                  </div>
                  <Button
                    className="w-full h-auto min-h-[50px] py-2 sm:py-3 px-2 sm:px-4 bg-yellow-500 hover:bg-yellow-600 text-black transition-colors duration-300 text-xs sm:text-sm md:text-base font-semibold rounded-[10px] whitespace-normal"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК"}
                  </Button>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="mr-2 w-4 h-4 text-yellow-500 border-2 border-white focus:ring-yellow-500"
                      checked={isAgreed}
                      onChange={(e) => {
                        setIsAgreed(e.target.checked);
                        if (e.target.checked) setAgreementError("");
                      }}
                    />
                    <label htmlFor="agreement" className="text-sm">
                      Соглашаюсь с <span className="text-yellow-300 hover:underline cursor-pointer">положением о защите персональных данных</span>
                    </label>
                  </div>
                  {agreementError && (
                    <p className="text-[#FFF59E] text-sm mt-1 bg-[#2dac5c]/50 dark:bg-[#19773b]/50 p-2 rounded">
                      {agreementError}
                    </p>
                  )}
                </form>
              </div>
              
              <div className="flex flex-col gap-4 lg:w-1/2">
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
                  Мы свяжемся с вами в течение дня
                </h3>
                {steps.map((step, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 transform bg-gray-100 dark:bg-[#2a2625] cursor-pointer group"
                  >
                    <CardHeader className="flex flex-row items-center space-y-0 gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#2dac5c]/20 dark:bg-[#19773b]/20 flex items-center justify-center text-[#2dac5c] dark:text-[#19773b] group-hover:bg-[#2dac5c] dark:group-hover:bg-[#19773b] group-hover:text-white transition-all duration-300">
                        <span className="text-lg font-semibold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-lg text-zinc-600 dark:text-zinc-400">{step}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
                
                <Button
                  className="w-full mt-4 px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 rounded-[10px] flex items-center justify-center gap-2 whitespace-normal"
                  onClick={() => window.location.href = 'https://t.me/PRO_CODE_web3_bot'}
                >
                  <Send size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  СВЯЗАТЬСЯ С НАМИ
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};