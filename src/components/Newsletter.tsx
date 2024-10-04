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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAgreed) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString()
        });
        
        if (response.ok) {
          alert("Заявка успешно отправлена!");
          setFormData({ name: "", phone: "", email: "" });
        } else {
          throw new Error('Ошибка при отправке формы');
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`Произошла ошибка при отправке заявки: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setAgreementError("Необходимо согласиться с положением о защите персональных данных");
    }
  };

  const steps = [
    "Перезвоним и поможем подобрать курс",
    "Запишем на бесплатные пробные занятия",
    "После рассчитаем финальную стоимость с учетом возможных льгот",
  ];

  const inputStyle = {
    width: '100%',
    height: '50px',
    fontSize: '16px',
    borderRadius: '10px',
    color: '#71717A',
    paddingLeft: '16px',
    backgroundColor: 'white',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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