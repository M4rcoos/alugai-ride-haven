
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import imageSection from "../../public/image.png"

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
        <img 
          src={imageSection}
          alt="Motorcycle Riding" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-6">
              Liberdade em Duas Rodas
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Alugue uma moto. <br />
            <span className="text-brand-orange">Viva a aventura.</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Desfrute da liberdade de pilotar as melhores motos com preços acessíveis e sem burocracia. A ALUGAAI torna simples explorar o mundo em duas rodas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
              href="#booking" 
              className={cn(
                "btn-hover-effect bg-brand-orange text-white font-medium py-3 px-8 rounded-full",
                "inline-flex items-center justify-center group"
              )}
            >
              Reservar Agora
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#motorcycles" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full inline-flex items-center justify-center transition-colors"
            >
              Ver Modelos
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-20 lg:mt-24 w-full max-w-4xl backdrop-blur-md bg-white/10 rounded-2xl p-6 mx-auto animate-slide-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70 text-sm">Motos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5.000+</div>
              <div className="text-white/70 text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-white/70 text-sm">Cidades Atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
