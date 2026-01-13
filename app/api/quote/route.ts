import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM (AmoCRM, Bitrix24, etc.)
    // 4. Send Telegram notification
    
    console.log('New quote request:', data)

    // For now, we'll just log and return success
    // In production, add your email/CRM integration here
    
    // Example: Send email using nodemailer (you'd need to install it)
    /*
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    })

    await transporter.sendMail({
      from: 'noreply@komz.ru',
      to: 'komzk@komz.ru',
      subject: `Новая заявка на МРК от ${data.name}`,
      html: `
        <h2>Новая заявка на коммерческое предложение</h2>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Телефон:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Компания:</strong> ${data.company || 'Не указана'}</p>
        <p><strong>Комментарий:</strong> ${data.comment || 'Нет'}</p>
        <hr>
        <h3>Конфигурация:</h3>
        <p><strong>Версия:</strong> ${data.configuration.version}</p>
        <p><strong>Опции:</strong> ${data.configuration.options.join(', ') || 'Нет'}</p>
        <p><strong>Агродроны:</strong> ${data.configuration.drone}</p>
        <p><strong>Итого:</strong> ${data.configuration.totalPrice} руб. ${data.configuration.showVAT ? 'с НДС' : 'без НДС'}</p>
      `,
    })
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Заявка успешно отправлена' 
    })
    
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { success: false, message: 'Ошибка при обработке заявки' },
      { status: 500 }
    )
  }
}
