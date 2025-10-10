import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { MessageSquare, Users, Settings, Layers, ArrowRight, Bot, BrainCircuit, Workflow, Network } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 right-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={servicesRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nossos Cursos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Programas de formação em <GradientText>IA e Automação</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Aprenda na prática a implementar inteligência artificial e automação no seu negócio,
              com suporte especializado e projetos reais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              icon={<Bot className="w-10 h-10" />}
              title="Agentes de IA e Chatbots Inteligentes"
              description="Aprenda a criar assistentes virtuais completos usando Claude, GPT e outras IAs, desde a configuração até integrações avançadas."
              features={[
                "Construção de chatbots do zero",
                "Integração com WhatsApp e Telegram",
                "Personalização avançada de respostas"
              ]}
            />
            <ServiceCard
              icon={<BrainCircuit className="w-10 h-10" />}
              title="Automação de Processos e Workflows"
              description="Domine ferramentas como Make, n8n e Zapier para criar fluxos automatizados que conectam todas as suas plataformas."
              features={[
                "Workflows entre múltiplas ferramentas",
                "Automação de tarefas repetitivas",
                "Integrações via API"
              ]}
            />
            <ServiceCard
              icon={<Workflow className="w-10 h-10" />}
              title="Escalação Comercial com IA"
              description="Estratégias e ferramentas para automatizar seu funil de vendas, desde a prospecção até o fechamento."
              features={[
                "Automação de prospecção",
                "Follow-up inteligente",
                "CRM automatizado"
              ]}
            />
            <ServiceCard
              icon={<Network className="w-10 h-10" />}
              title="Implementação e Escalação"
              description="Metodologia completa para implementar automações no seu negócio e escalar de forma sustentável."
              features={[
                "Diagnóstico de processos",
                "Roadmap de implementação",
                "Métricas e otimização"
              ]}
            />
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#apply" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
            >
              <span className="text-white/90 group-hover:text-white transition-colors">
                Conheça a grade completa dos cursos
              </span>
              <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
        <div className="flex items-start gap-5">
          <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-white/70 mb-6">{description}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;