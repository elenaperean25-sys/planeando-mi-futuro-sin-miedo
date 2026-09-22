import React from 'react';
import { ArrowLeft, Sparkles, Download, WifiOff } from 'lucide-react';
import { SectionId } from '../types';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface HeaderProps {
  currentSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenDownloadModal: () => void;
}

const SECTION_TITLES: Record<SectionId, { title: string; subtitle: string; icon: string }> = {
  home: {
    title: 'Planeando mi futuro sin miedo',
    subtitle: 'Tu guía amiga para independizarte y construir tu hogar',
    icon: '🏠'
  },
  metas: {
    title: 'Metas de Ahorro',
    subtitle: 'Calcula tu día a día para alcanzar cada sueño',
    icon: '💰'
  },
  presupuesto: {
    title: 'Mi Presupuesto',
    subtitle: 'Planes A, B y C para vivir en paz y sin deudas',
    icon: '📊'
  },
  necesito: {
    title: 'Qué necesito y qué no',
    subtitle: 'Lo esencial para tu nuevo hogar sin gastar de más',
    icon: '✅❌'
  },
  documentos: {
    title: 'Guía de Documentos',
    subtitle: 'Todo lo que necesitas para rentar, trabajar y vivir',
    icon: '📄'
  },
  mudanza: {
    title: 'Lista de Mudanza',
    subtitle: 'Qué comprar primero, qué después y qué nunca',
    icon: '🚚'
  },
  salud: {
    title: 'Guía de Salud',
    subtitle: 'Chequeos reales, precios justos y dónde ir barato',
    icon: '🩺'
  },
  huerto: {
    title: 'Mi Mini Huerto',
    subtitle: 'Aprende a cultivar cilantro, chiles y tomates en casa',
    icon: '🌱'
  }
};

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  onOpenDownloadModal
}) => {
  const isOnline = useOnlineStatus();
  const info = SECTION_TITLES[currentSection] || SECTION_TITLES.home;
  const isHome = currentSection === 'home';

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100/80 shadow-xs">
      {/* Offline Alert Strip if disconnected */}
      {!isOnline && (
        <div className="bg-amber-100 text-amber-800 text-xs px-4 py-1.5 flex items-center justify-center gap-1.5 font-medium border-b border-amber-200">
          <WifiOff className="w-3.5 h-3.5" />
          <span>Modo sin conexión activo — Tus datos y guías siguen funcionando al 100%</span>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Left: Back button or Logo icon */}
        <div className="flex items-center gap-2.5 min-w-0">
          {!isHome ? (
            <button
              onClick={() => onNavigate('home')}
              className="p-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 active:scale-95 transition-all flex items-center gap-1 font-semibold text-sm cursor-pointer"
              title="Volver al inicio"
              aria-label="Volver al menú principal"
            >
              <ArrowLeft className="w-5 h-5 text-purple-700" />
              <span className="hidden sm:inline">Inicio</span>
            </button>
          ) : (
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 via-indigo-400 to-emerald-400 p-0.5 shadow-sm flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-xl">
                🌸
              </div>
            </div>
          )}

          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight truncate flex items-center gap-1.5">
              <span>{info.icon}</span>
              <span className="truncate">{info.title}</span>
            </h1>
            <p className="text-xs text-slate-500 truncate hidden xs:block">
              {info.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Install / Help Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenDownloadModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold active:scale-95 transition cursor-pointer shadow-2xs"
            title="Instalar en tu celular"
          >
            <Download className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-bold">Instalar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
