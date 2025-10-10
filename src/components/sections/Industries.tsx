import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { ShoppingCart, Stethoscope, Scale, UtensilsCrossed, Building2, Sparkles } from 'lucide-react';

const Industries: React.FC = () => {
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
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900 -z-10" />
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
                Segmentos Atendidos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Como a IA <GradientText>Transforma Negócios</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Soluções personalizadas para cada tipo de negócio, com agentes inteligentes
              que resolvem problemas específicos do seu segmento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              icon={<ShoppingCart className="w-8 h-8" />}
              title="E-commerce"
              solution="Agente de Vendas Inteligente"
              description="Atende clientes, recomenda produtos, processa pedidos e acompanha entregas automaticamente."
              benefits={[
                "Aumento de 40% nas conversões",
                "Redução de 60% no tempo de atendimento",
                "Recuperação de carrinhos abandonados"
              ]}
            />

            <IndustryCard
              icon={<Stethoscope className="w-8 h-8" />}
              title="Clínicas e Consultórios"
              solution="Agente de Agendamento Médico"
              description="Gerencia consultas, envia lembretes, confirma presença e organiza prontuários automaticamente."
              benefits={[
                "Zero faltas por esquecimento",
                "Agenda sempre organizada",
                "Redução de 70% em ligações"
              ]}
            />

            <IndustryCard
              icon={<Scale className="w-8 h-8" />}
              title="Escritórios de Advocacia"
              solution="Agente Jurídico Inteligente"
              description="Analisa documentos, organiza processos, gera relatórios e acompanha prazos automaticamente."
              benefits={[
                "Análise de contratos em minutos",
                "Alertas de prazos processuais",
                "Organização automática de documentos"
              ]}
            />

            <IndustryCard
              icon={<UtensilsCrossed className="w-8 h-8" />}
              title="Restaurantes e Delivery"
              solution="Agente de Pedidos Automatizado"
              description="Recebe pedidos via WhatsApp, processa pagamentos e integra com a cozinha automaticamente."
              benefits={[
                "Atendimento 24/7 sem erros",
                "Integração com delivery",
                "Gestão automática de cardápio"
              ]}
            />

            <IndustryCard
              icon={<Building2 className="w-8 h-8" />}
              title="Imobiliárias"
              solution="Agente Imobiliário Virtual"
              description="Qualifica leads, agenda visitas, envia propostas e acompanha negociações automaticamente."
              benefits={[
                "Qualificação automática de leads",
                "Agenda de visitas otimizada",
                "Follow-up inteligente"
              ]}
            />

            <IndustryCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Seu Segmento"
              solution="Solução Personalizada"
              description="Não encontrou seu segmento? Criamos agentes inteligentes sob medida para qualquer tipo de negócio."
              benefits={[
                "Análise completa do seu processo",
                "Desenvolvimento personalizado",
                "Suporte dedicado"
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type IndustryCardProps = {
  icon: React.ReactNode;
  title: string;
  solution: string;
  description: string;
  benefits: string[];
};

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, solution, description, benefits }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-3 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-primary-400 text-sm font-medium">{solution}</p>
          </div>
        </div>

        <p className="text-white/70 mb-6 flex-grow">{description}</p>

        <div className="space-y-2 pt-4 border-t border-dark-700/50">
          <p className="text-sm font-semibold text-white/90 mb-3">Benefícios:</p>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
