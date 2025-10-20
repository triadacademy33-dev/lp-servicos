import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import { Shield, Lock, Eye, FileText, Mail, Globe } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />

      <Container>
        <div
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <Shield className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Proteção de Dados
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-white/80">
              Saiba como a Triad Academy coleta, usa e protege seus dados pessoais de forma segura, transparente e em conformidade com a LGPD.
            </p>
          </div>

          <div className="space-y-8">
            <IntroSection />
            <Section
              icon={<FileText className="w-6 h-6" />}
              title="1. Coleta de Dados"
              content={
                <div>
                  <p className="text-white/80 mb-4">
                    Coletamos dados pessoais de forma transparente e apenas quando necessário para o funcionamento dos nossos serviços. Inclui:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white/90">Informações pessoais:</strong> nome, e-mail, telefone e empresa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white/90">Dados de navegação:</strong> IP, tipo de navegador, páginas acessadas e tempo de visita.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white/90">Interações:</strong> mensagens enviadas via formulários, chatbots, WhatsApp ou campanhas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white/90">Cookies:</strong> para personalização, desempenho e análise de tráfego.</span>
                    </li>
                  </ul>
                </div>
              }
            />

            <Section
              icon={<Eye className="w-6 h-6" />}
              title="2. Finalidade do Uso"
              content={
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Entrar em contato sobre demonstrações, propostas e serviços personalizados.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Enviar comunicações institucionais, comerciais e promocionais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Melhorar o desempenho do site e a experiência do usuário.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Cumprir obrigações legais e regulatórias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Realizar análises de campanhas e automações inteligentes.</span>
                  </li>
                </ul>
              }
            />

            <Section
              icon={<Globe className="w-6 h-6" />}
              title="3. Compartilhamento de Dados"
              content={
                <div>
                  <p className="text-white/80 mb-4">
                    A Triad Academy <strong className="text-white">não vende nem compartilha</strong> dados pessoais com terceiros para fins comerciais. No entanto, os dados podem ser compartilhados com:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white/90">Plataformas parceiras:</strong> Make, N8N, Tray, OpenAI, Google, Meta e Evolution API.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white/90">Autoridades públicas:</strong> em cumprimento de obrigações legais.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white/90">Parceiros estratégicos:</strong> sob acordo de confidencialidade, apenas para fins técnicos.</span>
                    </li>
                  </ul>
                </div>
              }
            />

            <Section
              icon={<Lock className="w-6 h-6" />}
              title="4. Segurança e Armazenamento"
              content={
                <p className="text-white/80">
                  Adotamos medidas técnicas e administrativas rigorosas para proteger seus dados. Utilizamos servidores seguros (Brasil e/ou provedores internacionais como AWS e Google Cloud) com acesso restrito e monitorado.
                </p>
              }
            />

            <Section
              icon={<Shield className="w-6 h-6" />}
              title="5. Direitos do Titular"
              content={
                <div>
                  <p className="text-white/80 mb-4">Você pode a qualquer momento:</p>
                  <ul className="space-y-2 text-white/70 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Acessar, corrigir ou excluir seus dados pessoais;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Solicitar portabilidade ou anonimização;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Revogar o consentimento;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>Obter informações sobre o uso dos seus dados.</span>
                    </li>
                  </ul>
                  <p className="text-white/80">
                    Envie solicitações para: <a href="mailto:privacidade@triadacademy.com.br" className="text-primary-400 hover:text-primary-300 transition-colors">privacidade@triadacademy.com.br</a>
                  </p>
                </div>
              }
            />

            <Section
              icon={<FileText className="w-6 h-6" />}
              title="6. Retenção de Dados"
              content={
                <p className="text-white/80">
                  Os dados são armazenados pelo tempo necessário para cumprir as finalidades descritas, respeitando prazos legais ou regulatórios.
                </p>
              }
            />

            <Section
              icon={<FileText className="w-6 h-6" />}
              title="7. Atualizações"
              content={
                <div>
                  <p className="text-white/80 mb-4">
                    Esta Política poderá ser atualizada periodicamente para refletir mudanças legais ou tecnológicas. A versão atual estará sempre disponível em{' '}
                    <a href="https://triadacademy.com.br/politica-de-privacidade" className="text-primary-400 hover:text-primary-300 transition-colors">
                      triadacademy.com.br/politica-de-privacidade
                    </a>.
                  </p>
                  <p className="text-white/80">
                    <strong className="text-white">Última atualização:</strong> 20 de outubro de 2025.
                  </p>
                </div>
              }
            />

            <Section
              icon={<Mail className="w-6 h-6" />}
              title="8. Contato"
              content={
                <div className="text-white/80">
                  <p className="mb-4">Dúvidas? Fale com nosso time:</p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary-400" />
                      <a href="mailto:privacidade@triadacademy.com.br" className="text-primary-400 hover:text-primary-300 transition-colors">
                        privacidade@triadacademy.com.br
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary-400" />
                      <a href="https://triadacademy.com.br" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                        www.triadacademy.com.br
                      </a>
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

const IntroSection: React.FC = () => {
  return (
    <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50">
      <p className="text-white/80 leading-relaxed">
        A <strong className="text-white">Triad Academy</strong> valoriza sua privacidade e se compromete a proteger os dados pessoais de todos os visitantes, clientes e parceiros que interagem com o site{' '}
        <a href="https://triadacademy.com.br" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
          https://triadacademy.com.br
        </a>.
        Esta Política explica como coletamos, utilizamos, armazenamos e protegemos suas informações, em conformidade com a{' '}
        <strong className="text-white">Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
      </p>
    </div>
  );
};

type SectionProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-3 rounded-lg flex items-center justify-center">
          <div className="text-primary-400">
            {icon}
          </div>
        </div>
        <h2 className="text-2xl font-display font-bold text-white flex-1 pt-2">
          {title}
        </h2>
      </div>
      <div className="pl-16">
        {content}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
