import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 right-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />

      <Container>
        <div
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              O Que Nossos <GradientText>Clientes Dizem</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Empresas de diversos segmentos já transformaram suas operações com nossas soluções de IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <TestimonialCard
              name="Carlos Mendes"
              role="CEO"
              company="FastCommerce"
              testimonial="A automação do atendimento no WhatsApp aumentou nossas vendas em 45% no primeiro mês. Os clientes adoram a rapidez nas respostas."
              result="45% de aumento em vendas"
              rating={5}
            />

            <TestimonialCard
              name="Dra. Ana Silva"
              role="Médica"
              company="Clínica Vida Saudável"
              testimonial="Acabaram as faltas! O agente confirma automaticamente as consultas e nossa agenda está sempre organizada. Economizamos 15 horas por semana."
              result="Zero faltas por esquecimento"
              rating={5}
            />

            <TestimonialCard
              name="Roberto Alves"
              role="Advogado"
              company="Alves & Associados"
              testimonial="A análise automática de documentos reduziu nosso tempo de trabalho em 60%. Conseguimos atender mais clientes com a mesma equipe."
              result="60% de redução de tempo"
              rating={5}
            />

            <TestimonialCard
              name="Mariana Costa"
              role="Proprietária"
              company="Restaurante Sabor & Arte"
              testimonial="Os pedidos pelo WhatsApp são processados sem erros e a integração com a cozinha é perfeita. Aumentamos o faturamento em 35%."
              result="35% de aumento no faturamento"
              rating={5}
            />

            <TestimonialCard
              name="Pedro Santos"
              role="Corretor"
              company="Imóveis Prime"
              testimonial="O agente qualifica os leads automaticamente. Agora só atendo clientes realmente interessados. Minha taxa de conversão dobrou."
              result="100% de aumento na conversão"
              rating={5}
            />

            <TestimonialCard
              name="Juliana Ferreira"
              role="Diretora"
              company="Escola Futuro Brilhante"
              testimonial="A comunicação com os pais melhorou muito. Envios automáticos de boletins e avisos reduziram 80% das ligações para a secretaria."
              result="80% menos ligações"
              rating={5}
            />
          </div>

          <div className="text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-8 p-8 rounded-2xl bg-dark-800/50 border border-dark-700/50">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-white/70">Projetos Entregues</div>
              </div>
              <div className="h-16 w-px bg-dark-700/50 hidden sm:block" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">95%</div>
                <div className="text-white/70">Satisfação</div>
              </div>
              <div className="h-16 w-px bg-dark-700/50 hidden sm:block" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-white/70">Suporte</div>
              </div>
              <div className="h-16 w-px bg-dark-700/50 hidden sm:block" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">3 anos</div>
                <div className="text-white/70">No Mercado</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  result: string;
  rating: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  testimonial,
  result,
  rating
}) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <Quote className="w-10 h-10 text-primary-400/30" />
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary-400 text-primary-400" />
            ))}
          </div>
        </div>

        <p className="text-white/80 mb-6 flex-grow italic">"{testimonial}"</p>

        <div className="pt-6 border-t border-dark-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">{name}</p>
              <p className="text-sm text-white/60">{role}</p>
              <p className="text-sm text-white/50">{company}</p>
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20">
            <span className="text-sm font-medium text-primary-400">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
