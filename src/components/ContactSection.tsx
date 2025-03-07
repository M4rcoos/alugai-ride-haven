
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string | React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, details }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-brand-orange/10 text-brand-orange">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
        <div className="text-gray-600">{details}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div>
              <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">Fale conosco</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
                Entre em contato
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Estamos à disposição para esclarecer suas dúvidas, receber sugestões ou ajudar com qualquer informação sobre o aluguel de motos.
              </p>
              
              <div className="space-y-8">
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  title="Endereço"
                  details="Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100"
                />
                
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  title="Telefone"
                  details={
                    <>
                      <a href="tel:+551199999999" className="hover:text-brand-orange transition-colors">
                        +55 (11) 9999-9999
                      </a>
                    </>
                  }
                />
                
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  title="E-mail"
                  details={
                    <a href="mailto:contato@alugaai.com" className="hover:text-brand-orange transition-colors">
                      contato@alugaai.com
                    </a>
                  }
                />
                
                <ContactItem
                  icon={<Clock className="h-5 w-5" />}
                  title="Horário de Funcionamento"
                  details="Segunda à Sábado: 8h às 20h | Domingo: 9h às 15h"
                />
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium text-gray-900 mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-brand-orange hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-brand-orange hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-brand-orange hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] lg:min-h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976634774534!2d-46.6546369!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1655964125270!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ALUGAAI Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
