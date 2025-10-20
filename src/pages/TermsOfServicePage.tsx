import React from 'react';
import Container from '../components/ui/Container';
import { FileText, Shield, AlertCircle, Scale, Users, Mail, Globe, ArrowLeft } from 'lucide-react';

type TermsOfServicePageProps = {
  onClose: () => void;
};

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="fixed inset-0 bg-gradient-to-t from-dark-950 via-dark-900/50 to-transparent" />

      <div className="relative">
        <div className="py-8 border-b border-dark-800/50">
          <Container>
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para o site</span>
            </button>
          </Container>
        </div>

        <section className="py-20 relative overflow-hidden">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
                  <Scale className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Termos e Condições
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Termos de Serviço
                </h1>
                <p className="text-xl text-white/80">
                  Conheça as regras e condições para utilização dos serviços da Triad Academy.
                </p>
              </div>

              <div className="space-y-8">
                <IntroSection />

                <Section
                  icon={<FileText className="w-6 h-6" />}
                  title="1. Aceitação dos Termos"
                  content={
                    <p className="text-white/80">
                      Ao acessar e utilizar o site{' '}
                      <a href="https://triadacademy.com.br" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                        https://triadacademy.com.br
                      </a>
                      , você concorda automaticamente com estes Termos de Serviço. Caso não concorde com algum ponto, recomendamos que não utilize nossos serviços.
                    </p>
                  }
                />

                <Section
                  icon={<Users className="w-6 h-6" />}
                  title="2. Serviços Oferecidos"
                  content={
                    <div>
                      <p className="text-white/80 mb-4">A Triad Academy oferece:</p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Consultoria e implementação de automações inteligentes com IA</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Desenvolvimento de agentes de IA personalizados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Integração de fluxos inteligentes com diversas plataformas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Treinamento e capacitação em ferramentas de automação</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Suporte técnico especializado</span>
                        </li>
                      </ul>
                    </div>
                  }
                />

                <Section
                  icon={<Shield className="w-6 h-6" />}
                  title="3. Responsabilidades do Usuário"
                  content={
                    <div>
                      <p className="text-white/80 mb-4">Ao utilizar nossos serviços, você se compromete a:</p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Fornecer informações verdadeiras, precisas e atualizadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Não utilizar os serviços para fins ilícitos ou fraudulentos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Respeitar os direitos de propriedade intelectual da Triad Academy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Não tentar acessar sistemas ou dados de forma não autorizada</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Manter a confidencialidade de credenciais de acesso</span>
                        </li>
                      </ul>
                    </div>
                  }
                />

                <Section
                  icon={<Scale className="w-6 h-6" />}
                  title="4. Propriedade Intelectual"
                  content={
                    <p className="text-white/80">
                      Todo o conteúdo presente no site, incluindo textos, imagens, vídeos, logotipos, códigos e soluções desenvolvidas pela Triad Academy, são protegidos por direitos autorais e propriedade intelectual. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia por escrito.
                    </p>
                  }
                />

                <Section
                  icon={<AlertCircle className="w-6 h-6" />}
                  title="5. Limitação de Responsabilidade"
                  content={
                    <div>
                      <p className="text-white/80 mb-4">A Triad Academy não se responsabiliza por:</p>
                      <ul className="space-y-2 text-white/70 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Interrupções temporárias de serviços por manutenção ou causas técnicas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Danos causados por uso inadequado das soluções implementadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Perda de dados resultante de ações de terceiros</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Resultados específicos de negócio, salvo quando garantidos em contrato</span>
                        </li>
                      </ul>
                      <p className="text-white/80">
                        Trabalhamos com as melhores práticas de mercado para garantir qualidade e segurança em todos os nossos serviços.
                      </p>
                    </div>
                  }
                />

                <Section
                  icon={<FileText className="w-6 h-6" />}
                  title="6. Garantias e SLA"
                  content={
                    <div>
                      <p className="text-white/80 mb-4">A Triad Academy garante:</p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Execução profissional de todos os projetos contratados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Suporte técnico conforme acordado em contrato</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Confidencialidade de informações sensíveis do cliente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>Cumprimento de prazos estabelecidos, salvo imprevistos comunicados</span>
                        </li>
                      </ul>
                    </div>
                  }
                />

                <Section
                  icon={<Scale className="w-6 h-6" />}
                  title="7. Cancelamento e Reembolso"
                  content={
                    <p className="text-white/80">
                      As políticas de cancelamento e reembolso variam de acordo com o serviço contratado e serão especificadas em proposta comercial ou contrato individual. Solicitações devem ser feitas por escrito para{' '}
                      <a href="mailto:contato@triadacademy.com.br" className="text-primary-400 hover:text-primary-300 transition-colors">
                        contato@triadacademy.com.br
                      </a>.
                    </p>
                  }
                />

                <Section
                  icon={<AlertCircle className="w-6 h-6" />}
                  title="8. Modificações dos Termos"
                  content={
                    <div>
                      <p className="text-white/80 mb-4">
                        A Triad Academy reserva-se o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É responsabilidade do usuário revisar periodicamente estes termos.
                      </p>
                      <p className="text-white/80">
                        <strong className="text-white">Última atualização:</strong> 20 de outubro de 2025.
                      </p>
                    </div>
                  }
                />

                <Section
                  icon={<Scale className="w-6 h-6" />}
                  title="9. Lei Aplicável e Foro"
                  content={
                    <p className="text-white/80">
                      Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias decorrentes destes termos.
                    </p>
                  }
                />

                <Section
                  icon={<Mail className="w-6 h-6" />}
                  title="10. Contato"
                  content={
                    <div className="text-white/80">
                      <p className="mb-4">Para dúvidas, sugestões ou reclamações sobre estes Termos:</p>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary-400" />
                          <a href="mailto:contato@triadacademy.com.br" className="text-primary-400 hover:text-primary-300 transition-colors">
                            contato@triadacademy.com.br
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

              <div className="mt-16 text-center">
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 transition-all duration-300 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para o site
                </button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

const IntroSection: React.FC = () => {
  return (
    <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50">
      <p className="text-white/80 leading-relaxed">
        Bem-vindo aos <strong className="text-white">Termos de Serviço da Triad Academy</strong>. Este documento estabelece as condições gerais de uso do site{' '}
        <a href="https://triadacademy.com.br" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
          https://triadacademy.com.br
        </a>
        {' '}e dos serviços oferecidos pela empresa. Ao utilizar nossa plataforma, você aceita integralmente estas condições.
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

export default TermsOfServicePage;
