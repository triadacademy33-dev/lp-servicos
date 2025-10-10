import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Target, Lightbulb, Rocket, Gauge } from 'lucide-react';

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="apply" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
                <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Comece Agora
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Pronto para dominar <GradientText>IA e Automação?</GradientText>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Inscreva-se agora e receba acesso a uma aula gratuita. Descubra como implementar
                automações que vão transformar seu negócio.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <BenefitCard
                  icon={<Target className="w-6 h-6" />}
                  title="Aula Gratuita"
                  description="Acesso imediato a conteúdo exclusivo"
                />
                <BenefitCard
                  icon={<Lightbulb className="w-6 h-6" />}
                  title="Material de Apoio"
                  description="Templates e recursos práticos"
                />
                <BenefitCard
                  icon={<Rocket className="w-6 h-6" />}
                  title="Comunidade Ativa"
                  description="Rede de alunos e profissionais"
                />
                <BenefitCard
                  icon={<Gauge className="w-6 h-6" />}
                  title="Certificado Profissional"
                  description="Reconhecimento ao completar o curso"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10">
                <iframe
                  src="https://typebot.co/aplica-es-automatik-labs-e4owx7x"
                  style={{ border: 'none', width: '100%', height: '600px' }}
                  title="Typebot - Automatik Labs"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-dark-800/50 transition-colors duration-300">
      <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-2 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CTA;