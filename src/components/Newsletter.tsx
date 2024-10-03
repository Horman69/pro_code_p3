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

  // Обработчик изменения значений в полях ввода
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Обработчик изменения значения в поле ввода телефона
  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
    validateField('phone', value);
  };

  // Валидация полей формы
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

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Object.keys(formData).forEach(key => validateField(key, formData[key as keyof FormData]));
    if (!isAgreed) {
      setAgreementError("Необходимо согласиться с положением о защите персональных данных");
    } else {
      setAgreementError("");
    }
    if (Object.values(errors).every(error => !error) && isAgreed) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/.netlify/functions/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        if (data.success) {
          alert('Заявка успешно отправлена!');
          // Очистка формы или другие действия после успешной отправки
        } else {
          alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
        }
      } catch (error: unknown) {
        console.error('Error:', error);
        let errorMessage = 'Произошла неизвестная ошибка при отправке заявки';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        alert(`Произошла ошибка при отправке заявки: ${errorMessage}`);
      } finally {
        setIsSubmitting(false);
      }
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
    <section id="trial-form" className="py-24 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white">
          Попробуйте <span className="text-[#2dac5c] dark:text-[#19773b]">бесплатно!</span>
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-[#1c1917]">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[#2dac5c] dark:bg-[#19773b] text-white p-6 rounded-lg">
                <CardTitle className="text-2xl mb-4">Заполните форму</CardTitle>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      style={inputStyle}
                      placeholder="Введите имя"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="dark:text-black focus:outline-none focus:ring-0" // Убираем фокус и обводку
                    />
                    {errors.name && <p className="text-[#FFF59E] text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <PhoneInput
                      country={'ru'} // Устанавливаем Россию как страну по умолчанию
                      value={formData.phone} // Значение телефона из состояния формы
                      onChange={handlePhoneChange} // Обработчик изменения номера телефона
                      inputProps={{
                        name: 'phone',
                        required: true,
                        className: 'dark:text-black focus:outline-none focus:ring-0', // Убираем фокус и обводку
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
                      className="dark:text-black focus:outline-none focus:ring-0" // Убираем фокус и обводку
                    />
                    {errors.email && <p className="text-[#FFF59E] text-sm mt-1">{errors.email}</p>}
                  </div>
                  <Button
                    className="w-full h-[50px] py-3 bg-yellow-500 hover:bg-yellow-600 text-black transition-colors duration-300 text-lg font-semibold rounded-[10px]"
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
              
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
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
                  className="w-full mt-4 px-8 py-4 text-xl font-bold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 rounded-[10px] flex items-center justify-center gap-2"
                  onClick={() => window.location.href = 'https://t.me/PRO_CODE_web3_bot'}
                >
                  <Send size={24} />
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