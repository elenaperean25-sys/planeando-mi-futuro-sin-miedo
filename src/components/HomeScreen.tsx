import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Heart, 
  Sparkles, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { SectionId } from '../types';

interface HomeScreenProps {
  onNavigate: (section: SectionId) => void;
  onOpenDownloadModal: () => void;
  checkedCount: number;
  totalChecklistCount: number;
  totalSaved: number;
}

interface ButtonSectionConfig {
  id: SectionId;
  name: string;
  icon: string;
  badge: string;
  desc: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  accentBg: string;
}

const SECTIONS: ButtonSectionConfig[] = [
  {
    id: 'metas',
    name: 'Metas de Ahorro',
    icon: '💰',
    badge: 'Calculadora & Costos Reales',
    desc: 'Coche, casa, fondo para bebé, mascotas y 1 año de ahorro contra emergencias.',
    bgGradient: 'from-purple-50 via-white to-purple-50/40',
    borderColor: 'border-purple-200 hover:border-purple-300',
    textColor: 'text-purple-900',
    accentBg: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'presupuesto',
    name: 'Mi Presupuesto (Plan A, B, C)',
    icon: '📊',
    badge: '3 Planes Personalizables',
    desc: 'Ingresos individuales o en pareja con renta editable y números justos para cada gasto.',
    bgGradient: 'from-emerald-50 via-white to-emerald-50/40',
    borderColor: 'border-emerald-200 hover:border-emerald-300',
    textColor: 'text-emerald-950',
    accentBg: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'necesito',
    name: 'Qué necesito y qué no',
    icon: '✅❌',
    badge: 'Lo Esencial vs Trampas',
    desc: 'Para la casa, cocina, baño, cuarto, bebé y mascotas. ¡Marca con ✓ lo que ya tienes!',
    bgGradient: 'from-rose-50 via-white to-amber-50/40',
    borderColor: 'border-rose-200 hover:border-rose-300',
    textColor: 'text-rose-950',
    accentBg: 'bg-rose-100 text-rose-800'
  },
  {
    id: 'documentos',
    name: 'Guía de Documentos',
    icon: '📄',
    badge: 'Trámites sin Miedos',
    desc: 'Papeles para rentar, escrituras, qué pedirle al dueño para no ser estafado, INE, RFC, IMSS.',
    bgGradient: 'from-indigo-50 via-white to-blue-50/40',
    borderColor: 'border-indigo-200 hover:border-indigo-300',
    textColor: 'text-indigo-950',
    accentBg: 'bg-indigo-100 text-indigo-800'
  },
  {
    id: 'mudanza',
    name: 'Lista de Mudanza',
    icon: '🚚',
    badge: 'Orden por Prioridad',
    desc: 'Qué comprar el Día 1, primeros 7 días, qué después y qué NUNCA al principio. Barato/Normal/Caro.',
    bgGradient: 'from-amber-50 via-white to-orange-50/40',
    borderColor: 'border-amber-200 hover:border-amber-300',
    textColor: 'text-amber-950',
    accentBg: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'salud',
    name: 'Guía de Salud',
    icon: '🩺',
    badge: 'Precios Reales & Dónde ir',
    desc: 'Chequeo general, vista, dentista, salud íntima y fertilidad. Opciones baratas como Salud Digna e IMSS.',
    bgGradient: 'from-teal-50 via-white to-cyan-50/40',
    borderColor: 'border-teal-200 hover:border-teal-300',
    textColor: 'text-teal-950',
    accentBg: 'bg-teal-100 text-teal-800'
  },
  {
    id: 'huerto',
    name: 'Mi Mini Huerto',
    icon: '🌱',
    badge: 'Cilantro, Chiles y Tomates',
    desc: 'Aprende a cultivar en macetas chicas, cuándo regar con el dedo y cómo cosechar sin matar tu planta.',
    bgGradient: 'from-green-50 via-white to-lime-50/40',
    borderColor: 'border-green-200 hover:border-green-300',
    textColor: 'text-green-950',
    accentBg: 'bg-green-100 text-green-800'
  }
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenDownloadModal,
  checkedCount,
  totalChecklistCount,
  totalSaved
}) => {
  return (
    <div className="pb-16 pt-2 space-y-6">
      {/* Friendly Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100/90 via-[#FFFDF9] to-emerald-50/80 p-5 sm:p-6 border border-purple-200/70 shadow-sm"
      >
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-purple-200 text-purple-700 text-xs font-semibold shadow-2xs">
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-500" />
            <span>Hola, ¡aquí estoy para ayudarte!</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-snug">
            Construyamos tu futuro <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-emerald-600">
              paso a paso y sin miedo ✨
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            Independizarse o vivir juntos da emoción y nervios, ¡pero no estás sola!
            Esta guía tiene todos los números reales, consejos de amiga y listas prácticas
            para que ahorres, elijas bien y nada los tome por sorpresa.
          </p>

          {/* Golden quote banner */}
          <div className="pt-2">
            <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-3.5 text-xs sm:text-sm text-amber-900 font-medium flex items-start gap-2.5">
              <span className="text-lg shrink-0">💡</span>
              <p>
                <strong className="font-bold">Regla de oro:</strong> "Si no te deja dormir, comer o bañarte → SÍ lo necesitas ya. Si solo se ve bonito pero puedes vivir sin ello → PUEDES ESPERAR." 💛✨
              </p>
            </div>
          </div>
        </div>

        {/* Decorative soft circles */}
        <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-purple-200/40 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-emerald-200/40 blur-2xl pointer-events-none" />
      </motion.div>

      {/* Progress pill if user has interacted */}
      {(checkedCount > 0 || totalSaved > 0) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center justify-between gap-3 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Llevas <strong>{checkedCount}</strong> cosas listas de tu hogar</span>
          </div>
          {totalSaved > 0 && (
            <div className="text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200/60">
              ${totalSaved.toLocaleString('es-MX')} ahorrados
            </div>
          )}
        </motion.div>
      )}

      {/* Main 7 Big Buttons Grid */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Toca una sección para empezar
          </h3>
          <span className="text-xs text-purple-600 font-semibold">7 guías listas</span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {SECTIONS.map((section, idx) => (
            <motion.button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className={`w-full text-left p-4 sm:p-5 rounded-3xl bg-gradient-to-r ${section.bgGradient} border ${section.borderColor} shadow-xs hover:shadow-md transition-all cursor-pointer group relative overflow-hidden`}
              id={`btn-section-${section.id}`}
            >
              <div className="flex items-center gap-4">
                {/* Big Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className={`text-base sm:text-lg font-bold ${section.textColor} tracking-tight group-hover:text-purple-700 transition-colors`}>
                      {section.name}
                    </h4>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${section.accentBg}`}>
                      {section.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-snug line-clamp-2">
                    {section.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="w-9 h-9 rounded-full bg-white/80 group-hover:bg-purple-600 group-hover:text-white text-slate-400 flex items-center justify-center shadow-2xs transition-all shrink-0 ml-1">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Install App Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-purple-50 p-4 sm:p-5 border border-emerald-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-sm shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-800">
              ¿Quieres tenerla en tu celular como app?
            </h4>
            <p className="text-xs text-slate-600">
              Funciona 100% sin internet, guarda tus notas y no gasta memoria.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenDownloadModal}
          className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Ver cómo instalar</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Motivational Footer */}
      <div className="text-center pt-2 space-y-1 text-slate-400 text-xs">
        <p className="flex items-center justify-center gap-1">
          Hecho con mucho amor para tu nueva etapa 💛 
        </p>
        <p className="text-[11px] text-slate-400">
          Tus datos se guardan seguros y privados únicamente en tu propio dispositivo.
        </p>
      </div>
    </div>
  );
};
