import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email } = req.body;

    // Валидация
    if (!name || !phone || !email) {
      return res.status(400).json({ error: 'Все поля обязательны' });
    }

    // Telegram Bot API Token и Chat ID из environment variables
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing Telegram credentials');
      return res.status(500).json({ error: 'Ошибка настройки сервера' });
    }

    // Форматируем сообщение для Telegram
    const message = `🆕 <b>Новая заявка с сайта PRO_CODE!</b>\n\n` +
      `👤 <b>Имя:</b> ${name}\n` +
      `📱 <b>Телефон:</b> ${phone}\n` +
      `📧 <b>Email:</b> ${email}\n\n` +
      `⏰ <b>Дата:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Novosibirsk' })}\n\n` +
      `💬 Свяжитесь с клиентом: @norman_p3`;

    // Отправляем в Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return res.status(500).json({ 
        error: 'Ошибка отправки в Telegram',
        details: errorData 
      });
    }

    return res.status(200).json({ 
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Произошла ошибка при отправке заявки',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
