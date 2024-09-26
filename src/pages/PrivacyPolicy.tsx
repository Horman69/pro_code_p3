import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Политика конфиденциальности</h1>
      <p className="mb-4">Последнее обновление: [Дата]</p>
      <p className="mb-4">PRO_CODE уважает вашу приватность. Эта политика объясняет, какую информацию мы собираем и как ее используем.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Собираемая информация:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Имя и контактные данные при регистрации</li>
        <li>Информация об использовании сайта</li>
        <li>Cookies для улучшения пользовательского опыта</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Использование информации:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Предоставление и улучшение наших услуг</li>
        <li>Связь с вами по вопросам обучения</li>
        <li>Анализ и улучшение работы сайта</li>
      </ul>

      <p className="mb-4">Мы не продаем вашу личную информацию третьим лицам.</p>
      <p className="mb-4">У вас есть право на доступ, исправление и удаление ваших данных.</p>
      <p>По вопросам о вашей приватности пишите на [email].</p>
    </div>
  );
};

export default PrivacyPolicy;
