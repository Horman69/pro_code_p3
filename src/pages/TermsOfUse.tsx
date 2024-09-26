import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Условия использования</h1>
      <p className="mb-4">Последнее обновление: [Дата]</p>
      <p className="mb-4">Используя сайт PRO_CODE, вы соглашаетесь с следующими условиями:</p>
      
      <ol className="list-decimal pl-5 mb-4">
        <li className="mb-2">Вы будете использовать сайт только в законных целях.</li>
        <li className="mb-2">Вы не будете нарушать авторские права или копировать материалы без разрешения.</li>
        <li className="mb-2">Вы несете ответственность за сохранность вашего аккаунта.</li>
        <li className="mb-2">PRO_CODE оставляет за собой право изменять или прекращать услуги в любое время.</li>
        <li className="mb-2">PRO_CODE не несет ответственности за перерывы в работе сайта.</li>
      </ol>

      <p className="mb-4">Мы можем обновлять эти условия. Продолжая использовать сайт, вы соглашаетесь с изменениями.</p>
      <p>По вопросам об условиях использования пишите на [email].</p>
    </div>
  );
};

export default TermsOfUse;
