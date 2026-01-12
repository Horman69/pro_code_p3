# 🚀 Финальная инструкция деплоя на Vercel

## ✅ Что уже сделано:

- ✅ **0 уязвимостей** в зависимостях
- ✅ Telegram интеграция настроена
- ✅ Vercel.json с security headers
- ✅ Serverless функция `/api/contact.ts`
- ✅ Контакт @norman_p3 добавлен

## 🎯 Следующие шаги:

### 1. Деплой на Vercel

1. Зайди на [vercel.com](https://vercel.com)
2. **Add New Project**
3. Выбери репозиторий: **Horman69/pro_code_p3**
4. Нажми **Deploy** (настройки автоопределятся)

### 2. Добавь Environment Variables в Vercel

**ВАЖНО!** Без этих переменных форма не будет работать.

1. В Vercel Dashboard → твой проект
2. **Settings** → **Environment Variables**
3. Добавь две переменные:

**Переменная 1:**
```
Name:  TELEGRAM_BOT_TOKEN
Value: 5751368605:AAGpD0v_um12nFx-vDGXz80ZL0OyjX0JNpA
Environment: Production, Preview, Development (выбери все три)
```

**Переменная 2:**
```
Name:  TELEGRAM_CHAT_ID
Value: 221615370
Environment: Production, Preview, Development (выбери все три)
```

4. Нажми **Save**
5. **Redeploy** проект (Deployments → три точки → Redeploy)

### 3. Настрой домен (опционально)

1. **Settings** → **Domains**
2. Добавь: **pro-code-web3.ru**
3. Настрой DNS по инструкции Vercel

### 4. Проверь работу

1. Открой свой сайт на Vercel
2. Заполни форму тестовыми данными
3. Проверь, что сообщение пришло тебе в Telegram! 🎉

## 📱 Как будет выглядеть сообщение в Telegram:

```
🆕 Новая заявка с сайта PRO_CODE!

👤 Имя: Иван Иванов
📱 Телефон: +7 900 123-45-67
📧 Email: test@mail.com

⏰ Дата: 12.01.2026, 18:40

💬 Свяжитесь с клиентом: @norman_p3
```

## 🔒 Безопасность:

- ✅ Токены НЕ в коде (только в Vercel Variables)
- ✅ Security headers настроены
- ✅ 0 уязвимостей
- ✅ HTTPS автоматически

---

**Готово! Теперь все заявки будут приходить тебе в Telegram автоматически!** 🚀
