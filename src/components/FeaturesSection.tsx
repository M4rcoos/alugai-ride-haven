
import React from 'react';
import { CheckCircle, Zap, Shield, Clock, Wallet, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="flex flex-col gap-4 p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0 border border-gray-100" 
      style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="p-3 bg-brand-orange/10 rounded-xl w-max text-brand-orange">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Processo Simplificado",
      description: "Reserve sua moto em minutos, sem burocracia ou documentações complexas."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Motos de Qualidade",
      description: "Nossa frota é composta por motos modernas e bem mantidas para sua segurança."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança Garantida",
      description: "Todas as motos possuem seguro completo e passam por revisões periódicas."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Reservas Flexíveis",
      description: "Alugue por horas, dias ou semanas. Você define o melhor período."
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Preços Acessíveis",
      description: "Oferecemos as melhores tarifas do mercado, sem taxas escondidas."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Entrega em Domicílio",
      description: "Receba e devolva a moto no conforto da sua casa ou hotel."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">Vantagens exclusivas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
            Por que escolher a ALUGAAI
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos a melhor experiência de aluguel de motos, combinando qualidade, preço justo e conveniência em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
