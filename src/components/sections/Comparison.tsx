import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Check, X, HelpCircle, ChevronDown } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';

const Comparison: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
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

  const comparisonData = [
    {
      feature: "Metodologia estruturada passo a passo",
      tools: false,
      freelancers: false,
      automatik: true
    },
    {
      feature: "Projetos práticos do início ao fim",
      tools: false,
      freelancers: "sometimes",
      automatik: true
    },
    {
      feature: "Mentoria individual personalizada",
      tools: false,
      freelancers: false,
      automatik: true
    },
    {
      feature: "Suporte técnico durante o aprendizado",
      tools: false,
      freelancers: "sometimes",
      automatik: true
    },
    {
      feature: "Conteúdo atualizado com as últimas ferramentas",
      tools: "sometimes",
      freelancers: "sometimes",
      automatik: true
    },
    {
      feature: "Certificação profissional reconhecida",
      tools: false,
      freelancers: false,
      automatik: true
    },
    {
      feature: "Comunidade ativa de alunos e ex-alunos",
      tools: false,
      freelancers: false,
      automatik: true
    },
    {
      feature: "Casos reais e estratégias validadas",
      tools: false,
      freelancers: "sometimes",
      automatik: true
    },
    {
      feature: "Foco em resultados e implementação prática",
      tools: false,
      freelancers: false,
      automatik: true
    },
    {
      feature: "Acesso vitalicio ao conteúdo e atualizações",
      tools: false,
      freelancers: false,
      automatik: true
    }
  ];

  const StatusIcon = ({ status }: { status: boolean | "sometimes" }) => {
    if (status === true) {
      return (
        <div className="flex items-center justify-center w-6 h-6">
          <Check className="w-6 h-6 text-[#63D471] group-hover:animate-pulse" />
        </div>
      );
    }
    if (status === false) {
      return (
        <div className="flex items-center justify-center w-6 h-6">
          <X className="w-6 h-6 text-[#E74C3C]" />
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center w-6 h-6">
        <Tooltip content="Depende da experiência e disponibilidade do profissional">
          <HelpCircle className="w-6 h-6 text-[#F5C244] cursor-help" />
        </Tooltip>
      </div>
    );
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Comparativo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Por que escolher a <GradientText>Triad Academy</GradientText>?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Compare nossa formação completa com outras opções de aprendizado e entenda por que somos
              a escolha ideal para sua carreira em automação e IA.
            </p>
          </div>

          {/* Desktop Table (hidden on mobile) */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
            <div className="relative overflow-x-auto">
              <div className="min-w-[768px]">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 border-b border-dark-700/50">
                    <div className="p-6 font-semibold text-lg">
                      Recursos e Diferenciais
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      Cursos Online
                      <div className="text-sm text-white/60 font-normal">
                        (Plataformas genéricas)
                      </div>
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      Tutoriais YouTube
                      <div className="text-sm text-white/60 font-normal">
                        (Conteúdo gratuito)
                      </div>
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      Triad Academy
                      <div className="text-sm text-white/60 font-normal">
                        (Nossa Academia)
                      </div>
                    </div>
                  </div>

                  {/* Table Body */}
                  {comparisonData.map((row, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-4 border-b border-dark-700/50 last:border-0 group hover:bg-dark-800/30 transition-colors"
                    >
                      <div className="p-6 flex items-center">
                        {row.feature}
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.tools} />
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.freelancers} />
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.automatik} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards (visible only on mobile) */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700/50 overflow-hidden"
              >
                <button
                  className="w-full p-4 flex items-center justify-between text-left"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <span className="flex-1 pr-4">{row.feature}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      expandedCard === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedCard === index && (
                  <div className="px-4 pb-4 space-y-3 border-t border-dark-700/50 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Cursos Online:</span>
                      <StatusIcon status={row.tools} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Tutoriais YouTube:</span>
                      <StatusIcon status={row.freelancers} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Triad Academy:</span>
                      <StatusIcon status={row.automatik} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Comparison;