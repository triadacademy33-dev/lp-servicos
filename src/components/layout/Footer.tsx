import React from 'react';
import Container from '../ui/Container';

type FooterProps = {
  onPrivacyPolicyClick?: () => void;
};

const Footer: React.FC<FooterProps> = ({ onPrivacyPolicyClick }) => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50 py-16">
      <Container>
        <div className="text-center">
          <div className="text-2xl font-display font-bold mb-2">
            <GradientText>Triad</GradientText>
            <span className="ml-1">Academy</span>
          </div>
          <p className="text-primary-400/80 text-sm italic mb-4">
            Onde as Mentes Brilhantes se Encontram com a IA
          </p>
          <p className="text-white/70 max-w-sm mx-auto">
            Especialistas em criar agentes e fluxos inteligentes que trabalham por você 24/7.
          </p>
        </div>

        <div className="border-t border-dark-800/50 mt-10 pt-10">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Triad Academy. Todos os direitos reservados.
            <br />
            Ao navegar neste site, você concorda com a nossa{' '}
            <button
              onClick={onPrivacyPolicyClick}
              className="text-primary-400 hover:text-primary-300 transition-colors underline cursor-pointer"
            >
              Política de Privacidade 🔒
            </button>
          </p>
        </div>
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