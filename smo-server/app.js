const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser'); // body-parser'ı require et

const app = express();
const port = 3000; // İstediğiniz bir port numarasını kullanabilirsiniz
app.use(cors());

// JSON ve URL-encoded verileri işlemek için body-parser middleware'ini kullanın
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // JSON verilerini işlemek için ekleyin

// E-posta gönderme endpoint'i
app.post('/send-email', async (req, res) => {
    const { subject, text } = req.body;

    console.log('Gelen veri:', { subject, text });

    // E-posta ayarları
    const transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 465,
        secure: true,
        auth: {
            user: 'info@smoyapi.com',
            pass: 'halim1234',
        },
    });

    // E-posta gönderim seçenekleri
    const mailOptions = {
        from: 'info@smoyapi.com',
        to: 'bedirhanharputlu@gmail.com',
        subject: subject,
        text: text,
    };

    // E-posta gönderme işlemi
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('E-posta gönderildi:', info.messageId);
        res.status(200).send('E-posta gönderildi');
    } catch (error) {
        console.error('E-posta gönderme hatası:', error);
        res.status(500).send('E-posta gönderme hatası');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
