
import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const CTASection = () => {
  return (
    <section className="py-24 bg-brand-orange relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-6">
            Baixe Nosso Aplicativo
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Alugue uma moto a qualquer momento, em qualquer lugar
          </h2>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Baixe nosso aplicativo para ter acesso a ofertas exclusivas, fazer reservas instantâneas e encontrar as melhores opções de motos na palma da sua mão.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="btn-hover-effect bg-white text-brand-orange font-medium py-3 px-8 rounded-full inline-flex items-center justify-center group"
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Baixar Aplicativo
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#booking"
              className="btn-hover-effect bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white font-medium py-3 px-8 rounded-full inline-flex items-center justify-center"
            >
              Fazer uma Reserva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
