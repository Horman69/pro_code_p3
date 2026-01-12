# Деплой на Vercel - Инструкция

## Быстрый старт

Этот проект настроен для деплоя на Vercel с нулевыми уязвимостями и полными security headers.

## Шаг 1: Подготовка GitHub репозитория

1. Убедитесь, что все изменения закоммичены:
   ```bash
   git add .
   git commit -m "Security fixes: eliminated 21 vulnerabilities, added Vercel config"
   git push origin main
   ```

## Шаг 2: Деплой на Vercel

### Вариант А: Через веб-интерфейс (Рекомендуется)

1. Перейдите на [vercel.com](https://vercel.com)
2. Авторизуйтесь через GitHub
3. Нажмите **"Add New Project"**
4. Выберите ваш GitHub репозиторий
5. Настройки будут импортированы автоматически из `vercel.json`
6. Нажмите **"Deploy"**

### Вариант Б: Через CLI

1. Установите Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Авторизуйтесь:
   ```bash
   vercel login
   ```

3. Деплой:
   ```bash
   cd "c:\Users\poker\OneDrive\Рабочий стол\pro_code_web3_3.0 — копия"
   vercel --prod
   ```

## Шаг 3: Настройка кастомного домена

1. В Vercel Dashboard откройте ваш проект
2. Перейдите в **Settings** → **Domains**
3. Добавьте **pro-code-web3.ru**
4. Следуйте инструкциям для настройки DNS-записей:
   - Тип: **A** или **CNAME**
   - Значение будет предоставлено Vercel

## Важно: Форма обратной связи

⚠️ **PHP-бэкенд не будет работать на Vercel!**

`process_form.php` в корне проекта НЕ будет работать, т.к. Vercel - это платформа для статических сайтов и serverless функций.

### Решения:

**Вариант 1: Vercel Serverless Function (Рекомендуется)**

Создайте файл `api/contact.ts`:
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email } = req.body;
  
  // Валидация
  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'All fields required' });
  }

  // Отправка на email или в CRM
  // TODO: Добавить интеграцию с вашим сервисом
  
  return res.status(200).json({ 
    message: 'Заявка успешно отправлена!' 
  });
}
```

Затем обновите `Newsletter.tsx`:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, phone, email })
});
```

**Вариант 2: Внешний API**

Разместите PHP-бэкенд отдельно (на хостинге с PHP) и измените URL в `Newsletter.tsx`:
```typescript
const response = await fetch('https://your-backend.com/process_form.php', {
  // ...
});
```

**Вариант 3: Email сервис (FormSpree, EmailJS)**

Используйте готовый сервис для обработки форм.

## Проверка безопасности после деплоя

После деплоя проверьте security headers:

1. Откройте https://securityheaders.com
2. Введите URL вашего сайта
3. Проверьте наличие:
   - ✅ X-Content-Type-Options: nosniff
   - ✅ X-Frame-Options: DENY
   - ✅ X-XSS-Protection: 1; mode=block
   - ✅ Referrer-Policy: strict-origin-when-cross-origin
   - ✅ Permissions-Policy

## Автоматические деплои

После первого деплоя каждый push в `main` ветку будет автоматически деплоиться на Vercel.

## Откат к предыдущей версии

1. Откройте Vercel Dashboard → ваш проект
2. Перейдите в **Deployments**
3. Найдите нужную версию
4. Нажмите **"Promote to Production"**

## Мониторинг

- **Analytics**: Vercel Dashboard → Analytics
- **Google Analytics**: Уже настроен (GTM-MG49NWCJ)
- **Логи**: Vercel Dashboard → Functions → Logs

## Переменные окружения (если понадобятся)

1. Vercel Dashboard → Settings → Environment Variables
2. Добавьте переменные для Production/Preview/Development
3. Пример: `API_KEY`, `EMAIL_SERVICE_ID`
