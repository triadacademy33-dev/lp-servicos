import React from 'react';
import Container from '../ui/Container';

type FooterProps = {
  onPrivacyPolicyClick?: () => void;
  onTermsClick?: () => void;
};

const Footer: React.FC<FooterProps> = ({ onPrivacyPolicyClick, onTermsClick }) => {
  return (
    <footer className="bg-black py-8 text-center font-sans text-gray-400 leading-relaxed">
      <Container>
        <h2 className="text-2xl font-bold mb-1">
          <span className="text-[#E58A1F]">Triad</span>{' '}
          <span className="text-white">Academy</span>
        </h2>
        <p className="italic text-[#b46a2d] mb-3">
          Onde as Mentes Brilhantes se Encontram com a IA
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Especialistas em criar agentes e fluxos inteligentes que trabalham por você 24 horas por dia, 7 dias por semana.
        </p>

        <div className="mb-6">
          <button
            onClick={onPrivacyPolicyClick}
            className="text-[#E58A1F] underline hover:text-[#f59726] transition-colors mr-4 cursor-pointer"
          >
            Política de Privacidade
          </button>
          <button
            onClick={onTermsClick}
            className="text-[#E58A1F] underline hover:text-[#f59726] transition-colors cursor-pointer"
          >
            Termos de Serviço
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Triad Academy. Todos os direitos reservados.
          <br />
          Ao navegar neste site, você concorda com a nossa{' '}
          <button
            onClick={onPrivacyPolicyClick}
            className="text-[#E58A1F] underline hover:text-[#f59726] transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>{' '}
          🔒
        </p>
      </Container>
    </footer>
  );
};

const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default Footer;