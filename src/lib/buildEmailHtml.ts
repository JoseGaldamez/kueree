
export const buildContactEmailHtml = (formData: { name: string; email: string; phone: string; subject: string; message: string }) => {
    return `
        <div>
            <h1>Nuevo mensaje de contacto</h1>
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Teléfono:</strong> ${formData.phone}</p>
            <p><strong>Asunto:</strong> ${formData.subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${formData.message}</p>
        </div>
    `
}

export const buildContactEmailHtmlConfirmation = (name: string) => {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmación de contacto - Kueree</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Arial', sans-serif;
                    background-color: #f8f9fa;
                    line-height: 1.6;
                    color: #333333;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background: linear-gradient(135deg, #00A693 0%, #FFC300 100%);
                    padding: 40px 30px;
                    text-align: center;
                    color: white;
                }
                .logo {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: white;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                .header-subtitle {
                    font-size: 16px;
                    opacity: 0.9;
                    margin: 0;
                }
                .content {
                    padding: 40px 30px;
                }
                .greeting {
                    font-size: 24px;
                    color: #00A693;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .message {
                    font-size: 16px;
                    color: #555555;
                    margin-bottom: 20px;
                }
                .highlight-box {
                    background-color: #f0fffe;
                    border-left: 4px solid #00A693;
                    padding: 20px;
                    margin: 30px 0;
                    border-radius: 0 8px 8px 0;
                }
                .highlight-box p {
                    margin: 0;
                    color: #00A693;
                    font-weight: 500;
                }
                .cta-button {
                    display: inline-block;
                    background: linear-gradient(135deg, #00A693 0%, #008B7A 100%);
                    color: white;
                    padding: 15px 30px;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: bold;
                    margin: 20px 0;
                    box-shadow: 0 4px 8px rgba(0, 166, 147, 0.3);
                    transition: all 0.3s ease;
                }
                .footer {
                    background-color: #f8f9fa;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #e9ecef;
                }
                .signature {
                    font-size: 18px;
                    color: #00A693;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .team {
                    font-size: 14px;
                    color: #666666;
                }
                .social-links {
                    margin-top: 20px;
                }
                .social-links a {
                    color: #00A693;
                    text-decoration: none;
                    margin: 0 10px;
                    font-size: 14px;
                }
                .divider {
                    height: 2px;
                    background: linear-gradient(90deg, #00A693 0%, #FFC300 100%);
                    border: none;
                    margin: 30px 0;
                }
                @media only screen and (max-width: 600px) {
                    .container {
                        width: 100% !important;
                    }
                    .content {
                        padding: 20px !important;
                    }
                    .header {
                        padding: 30px 20px !important;
                    }
                    .logo {
                        font-size: 28px !important;
                    }
                    .greeting {
                        font-size: 20px !important;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <!-- Header -->
                <div class="header">
                    <div class="logo">Kueree</div>
                    <p class="header-subtitle">Menú Digital Moderno</p>
                </div>
                
                <!-- Content -->
                <div class="content">
                    <h1 class="greeting">¡Gracias por contactarnos, ${name}!</h1>
                    
                    <p class="message">
                        Hemos recibido tu mensaje y queremos confirmarte que llegó correctamente a nuestro equipo.
                    </p>
                    
                    <div class="highlight-box">
                        <p>📧 Tu consulta está siendo revisada por nuestro equipo especializado y te responderemos en las próximas 24 horas.</p>
                    </div>
                    
                    <p class="message">
                        Mientras tanto, si tienes alguna pregunta adicional o necesitas información inmediata, no dudes en responder a este correo.
                    </p>
                    
                    <hr class="divider">
                    
                    <p class="message">
                        ¿Ya conoces todas las ventajas de Kueree? Descubre cómo podemos ayudarte a modernizar tu negocio:
                    </p>
                    
                    <center>
                        <a href="https://app.kueree.com" class="cta-button">🚀 Explorar Kueree</a>
                    </center>
                </div>
                
                <!-- Footer -->
                <div class="footer">
                    <div class="signature">Saludos cordiales,</div>
                    <div class="team">El equipo de Kueree 💚</div>
                    
                    <div class="social-links">
                        <a href="https://kueree.com">🌐 Sitio web</a>
                        <a href="mailto:hola@kueree.com">📧 Contacto</a>
                    </div>
                    
                    <p style="font-size: 12px; color: #999999; margin-top: 20px;">
                        Este correo fue enviado porque te pusiste en contacto con nosotros a través de nuestro sitio web.
                    </p>
                </div>
            </div>
        </body>
        </html>
    `
}