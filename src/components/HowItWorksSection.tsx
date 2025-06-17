
import React, { useEffect } from 'react';
import { CalendarDays, Bike, MapPin, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 group">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="mt-2 md:mt-0">
        <div className="text-sm font-semibold text-brand-orange mb-2">PASSO {number}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CalendarDays className="h-8 w-8" />,
      number: 1,
      title: "Escolha a data",
      description: "Selecione as datas de retirada e devolução que melhor se adequam à sua agenda."
    },
    {
      icon: <Bike className="h-8 w-8" />,
      number: 2,
      title: "Selecione a moto",
      description: "Navegue pela nossa frota e escolha a moto ideal para sua jornada."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      number: 3,
      title: "Defina o local",
      description: "Agende a retirada da moto, e marque o horario."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      number: 4,
      title: "Confirme a reserva",
      description: "Efetue o pagamento de forma segura e confirme sua reserva instantaneamente."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-brand-dark to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium mb-4">
            Processo Simples
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como funciona o aluguel
          </h2>
          <p className="text-lg text-white/80">
            Alugar uma moto nunca foi tão fácil. Siga estes quatro passos simples e comece sua aventura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#booking"
            className="btn-hover-effect inline-block bg-brand-orange text-white font-medium py-3 px-8 rounded-full"
          >
            Fazer Reserva Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
