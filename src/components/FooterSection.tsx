
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="font-bold text-2xl tracking-tight mb-6">
              <span className="text-brand-orange">ALUGA</span>
              <span className="text-white">AI</span>
            </div>
            <p className="text-white/70 mb-6">
              Somos especializados em aluguel de motos para todas as necessidades, oferecendo serviço de qualidade, preços justos e atendimento excepcional.
            </p>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} ALUGAAI. Todos os direitos reservados.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="text-white/70 hover:text-brand-orange transition-colors">Início</a>
              </li>
              <li>
                <a href="#motorcycles" className="text-white/70 hover:text-brand-orange transition-colors">Motos</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-brand-orange transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-brand-orange transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-brand-orange transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Aluguel por Dia</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Aluguel por Semana</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Aluguel por Mês</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Entrega em Domicílio</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Aluguel Corporativo</a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Informações Legais</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Política de Cookies</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">Seguro e Proteção</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-orange transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            Desenvolvido por ALUGAAI Tecnologia. CNPJ: 00.000.000/0001-00
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-brand-orange/20 hover:bg-brand-orange/40 text-brand-orange transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
