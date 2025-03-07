
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rafael Oliveira",
      role: "Mototurista",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      quote: "A experiência foi incrível! A moto estava em perfeitas condições e o processo de aluguel foi extremamente simples. Recomendo para todos que querem conhecer a cidade com liberdade."
    },
    {
      id: 2,
      name: "Juliana Santos",
      role: "Entregadora",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      quote: "Aluguei para trabalhar com entregas enquanto minha moto estava na oficina. Atendimento excelente e motos muito bem conservadas. Certamente voltarei a utilizar os serviços da ALUGAAI."
    },
    {
      id: 3,
      name: "Carlos Mendes",
      role: "Empresário",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      rating: 4,
      quote: "Serviço de primeira qualidade! A entrega foi pontual e a moto estava em ótimo estado. O único ponto negativo foi o preço um pouco acima da média, mas compensa pela qualidade."
    },
    {
      id: 4,
      name: "Fernanda Lima",
      role: "Fotógrafa",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      quote: "Aluguei uma moto para fazer um ensaio fotográfico em locais afastados e tudo correu perfeitamente. Motos lindas e atendimento espetacular. Recomendo!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn(
          "h-4 w-4",
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600">
            A satisfação dos nossos clientes é o nosso maior orgulho e motivação para continuar oferecendo o melhor serviço.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="md:w-1/4 flex flex-col items-center text-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-brand-orange/20"
                        />
                        <div className="flex mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      
                      <div className="md:w-3/4">
                        <blockquote className="text-lg text-gray-700 italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow hover:shadow-md transition-shadow"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow hover:shadow-md transition-shadow"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
