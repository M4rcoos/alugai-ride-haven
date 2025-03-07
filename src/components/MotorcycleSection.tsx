
import React, { useState } from 'react';
import { Bike, Users, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Motorcycle {
  id: number;
  name: string;
  category: string;
  image: string;
  pricePerDay: number;
  pricePerWeek: number;
  features: string[];
}

const MotorcycleSection = () => {
  const motorcycles: Motorcycle[] = [
    {
      id: 1,
      name: "Honda CB 500X",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      pricePerDay: 120,
      pricePerWeek: 700,
      features: ["ABS", "49 cv", "Ideal para viagens", "Econômica"]
    },
    {
      id: 2,
      name: "Yamaha MT-07",
      category: "Naked",
      image: "https://images.unsplash.com/photo-1605426051013-0abb919a33a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      pricePerDay: 150,
      pricePerWeek: 850,
      features: ["ABS", "74 cv", "Ágil", "Potente"]
    },
    {
      id: 3,
      name: "BMW G 310 GS",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      pricePerDay: 140,
      pricePerWeek: 800,
      features: ["ABS", "34 cv", "Confortável", "Alta"]
    },
    {
      id: 4,
      name: "Kawasaki Ninja 400",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1535050804459-06db46aac01a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      pricePerDay: 180,
      pricePerWeek: 1000,
      features: ["ABS", "49 cv", "Esportiva", "Veloz"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const categories = ["Todos", ...new Set(motorcycles.map(m => m.category))];
  
  const filteredMotorcycles = activeCategory === "Todos" 
    ? motorcycles 
    : motorcycles.filter(m => m.category === activeCategory);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = filteredMotorcycles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % totalItems);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + totalItems) % totalItems);
  };

  const visibleMotorcycles = filteredMotorcycles.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="motorcycles" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-orange font-medium text-sm uppercase tracking-wider">Nossa frota</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
            Encontre a moto ideal para você
          </h2>
          <p className="text-lg text-gray-600">
            Disponibilizamos diversos modelos de motos para atender suas necessidades, seja para passeio, trabalho ou aventura.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "py-2 px-4 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-brand-orange text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleMotorcycles.map((motorcycle, index) => (
            <div 
              key={motorcycle.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={motorcycle.image} 
                  alt={motorcycle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full">
                    {motorcycle.category}
                  </span>
                  <div className="font-bold text-gray-900">
                    R${motorcycle.pricePerDay}/dia
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{motorcycle.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {motorcycle.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#booking" 
                  className="w-full btn-hover-effect bg-brand-orange text-white font-medium py-2 px-4 rounded-lg inline-flex items-center justify-center"
                >
                  Reservar Agora
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Página anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Próxima página"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MotorcycleSection;
