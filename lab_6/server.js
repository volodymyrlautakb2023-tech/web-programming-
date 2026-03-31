require('dotenv').config();
const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const nodemailer = require('nodemailer');
const path = require('path');

const app = new Koa();
const router = new Router();

// Роздача статичних файлів з папки public
app.use(bodyParser());
app.use(serve(path.join(__dirname, 'public')));

// Налаштування пошти (Gmail)
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true, // true для порту 465
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Перевірка SMTP
transporter.verify((error) => {
    if (error) console.log('Помилка пошти:', error);
    else console.log('SMTP сервер готовий до роботи!');
});

// Ендпоінт для обробки форми
router.post('/api/contact', async (ctx) => {
    const { name, email, phone, subject, message } = ctx.request.body;

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `ЛР6: ${subject}`,
            html: `
                <h3>Нове повідомлення з сайту</h3>
                <p><b>Ім'я:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Телефон:</b> ${phone || 'не вказано'}</p>
                <p><b>Повідомлення:</b><br>${message}</p>
            `
        });

        ctx.status = 200;
        ctx.body = { success: true, message: 'Відправлено!' };
    } catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = { success: false, message: 'Помилка сервера' };
    }
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер: http://localhost:${PORT}`));