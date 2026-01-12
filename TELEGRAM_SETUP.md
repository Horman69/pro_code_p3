# Настройка Telegram Bot для приема заявок

## Шаг 1: Создай бота

1. Открой Telegram и найди **@BotFather**
2. Отправь команду `/newbot`
3. Придумай название, например: `PRO_CODE Заявки`
4. Придумай username, например: `procode_leads_bot`
5. **@BotFather** даст тебе **BOT_TOKEN** - сохрани его!

Пример токена: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

## Шаг 2: Получи CHAT_ID  

1. Найди своего нового бота в поиске Telegram
2. Нажми **Start** и отправь любое сообщение боту
3. Открой в браузере (замени `<BOT_TOKEN>` на свой токен):
   ```
   https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
   ```
4. Найди в ответе `"chat":{"id":123456789` - это твой **CHAT_ID**

## Шаг 3: Добавь в Vercel

1. Зайди на [vercel.com](https://vercel.com)
2. Открой свой проект
3. **Settings** → **Environment Variables**
4. Добавь две переменные:
   - Name: `TELEGRAM_BOT_TOKEN`, Value: `твой токен`
   - Name: `TELEGRAM_CHAT_ID`, Value: `твой chat id`
5. Redeploy проект

## Готово! 🎉

Теперь все заявки с сайта будут приходить тебе в Telegram в виде красиво отформатированных сообщений с данными клиента.

Формат сообщения:
```
🆕 Новая заявка с сайта PRO_CODE!

👤 Имя: Иван Иванов
📱 Телефон: +7 900 123-45-67
📧 Email: test@mail.com

⏰ Дата: 12.01.2026, 16:00

💬 Свяжитесь с клиентом: @norman_p3
```
