
import React, { useState } from 'react';
import { Calendar, Clock, Bike, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    returnTime: '',
    motorcycleType: '',
    location: ''
  });

  const motorcycleTypes = [
    "Selecione o tipo de moto",
    "Econômicas",
    "Trabalho / Carga",
    "Utilitárias Urbanas",
    // "Naked",
    // "Custom"
  ];

  const locations = [
    "Selecione a localização",
    "Cajamar",
   
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      motorcycleType,
      // location
    } = formData;

    const mensagem = `
  Olá! Gostaria de fazer uma reserva de moto. 🛵
  
  📅 *Retirada:* ${pickupDate} às ${pickupTime}
  📆 *Devolução:* ${returnDate} às ${returnTime}
  🏍️ *Tipo de Moto:* ${motorcycleType}
  
  Poderiam confirmar a disponibilidade?
    `;

    const mensagemEncoded = encodeURIComponent(mensagem);
    const telefoneDestino = '5511930772498'; // Substitua pelo número real com DDI + DDD

    window.open(`https://wa.me/${telefoneDestino}?text=${mensagemEncoded}`, '_blank');
  };



  return (
    <section id="booking" className="py-24 bg-brand-orange">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl">
            {/* Left Column - Image and Text */}
            <div className="lg:w-1/2 bg-brand-dark p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Motorcycle in sunset"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium mb-6">
                  Reserva Rápida
                </span>

                <h2 className="text-3xl font-bold text-white mb-6">
                  Reserve sua moto em <span className="text-brand-orange">poucos passos</span>
                </h2>

                <p className="text-white/80 mb-8">
                  Preencha o formulário ao lado com suas informações e preferências. Nossa equipe entrará em contato para confirmar sua reserva e fornecer mais detalhes.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-brand-orange" />
                    </div>
                    <span>Reservas com até 30 minutos de antecedência</span>
                  </div>

                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-brand-orange" />
                    </div>
                    <span>Atendimento 7 dias por semana, das 8h às 20h</span>
                  </div>

                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-brand-orange" />
                    </div>
                    <span>Entrega e retirada em toda a cidade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-1/2 bg-white p-10 lg:p-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Preencha os dados para reservar</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Data de Retirada</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Data de Devolução</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Horário de Retirada</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="time"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Horário de Devolução</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="time"
                        name="returnTime"
                        value={formData.returnTime}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tipo de Moto</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Bike className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="motorcycleType"
                      value={formData.motorcycleType}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange appearance-none"
                      required
                    >
                      {motorcycleTypes.map((type, index) => (
                        <option key={index} value={index === 0 ? '' : type} disabled={index === 0}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
{/* 
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Local de Retirada/Devolução</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange appearance-none"
                      required
                    >
                      {locations.map((location, index) => (
                        <option key={index} value={index === 0 ? '' : location} disabled={index === 0}>
                          {location}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div> */}

                <button
                  type="submit"
                  className="btn-hover-effect w-full bg-brand-orange text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center group"
                >
                  Confirmar Reserva
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
