'use client';
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { buildContactEmailHtmlConfirmation } from '@/lib/buildEmailHtml';
import { sendEmail } from '@/server/emailMessages';
import { toast } from 'sonner';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const htmlConfirmaction = buildContactEmailHtmlConfirmation(formData.name);
        const result = await sendEmail(formData.email, 'Confirmación de contacto - Kueree', htmlConfirmaction);
        if (result.success) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            setLoading(false);
            toast.success('Formulario enviado correctamente. Te hemos enviado un correo de confirmación.');
        } else {
            setLoading(false);
            toast.error('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
        
    }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+504 3456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos más sobre tu proyecto o pregunta..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
  )
}
