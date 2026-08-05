import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export async function sendEmail(to, subject, message) {
    console.log("Preparando envio...");
    console.log("Destino:", to);

    const result = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text: message
    });

    console.log("Email enviado:", result.messageId);
    
    return result;
}