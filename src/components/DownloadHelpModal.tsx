import React from 'react';
import { motion } from 'motion/react';
import { X, Smartphone, Download, CheckCircle2, Share2, Sparkles, WifiOff } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface DownloadHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadHelpModal: React.FC<DownloadHelpModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-purple-100 space-y-5 my-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-emerald-500 text-white flex items-center justify-center text-2xl shadow-xs">
              📱
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-800">
                Cómo tener la App en tu Celular
              </h3>
              <p className="text-xs text-slate-500">
                Instálala gratis, sin Play Store y úsala sin internet
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instant Native Install Button if browser supports beforeinstallprompt */}
        {isInstallable && !isInstalled && (
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-200 text-center space-y-2">
            <p className="text-xs font-bold text-emerald-900">
              ¡Tu navegador permite instalarla con 1 solo toque!
            </p>
            <button
              onClick={async () => {
                await install();
                onClose();
              }}
              className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Instalar ahora en mi celular Android</span>
            </button>
          </div>
        )}

        {isInstalled && (
          <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>¡Ya tienes la app instalada en tu dispositivo!</span>
          </div>
        )}

        {/* Visual Step-by-Step for Android */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <span>🤖</span>
            <span>Paso a paso en Android (Google Chrome):</span>
          </h4>

          <div className="space-y-2.5 text-xs text-slate-700">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0 text-xs">
                1
              </span>
              <p className="leading-snug">
                Abre este enlace en tu navegador <strong>Google Chrome</strong> en tu celular Android.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0 text-xs">
                2
              </span>
              <p className="leading-snug">
                Toca el botón de <strong>los 3 puntitos (⋮)</strong> en la esquina superior derecha de tu pantalla.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0 text-xs">
                3
              </span>
              <p className="leading-snug">
                Elige la opción que dice <strong>"Instalar aplicación"</strong> o <strong>"Agregar a la pantalla principal"</strong>.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                ✓
              </span>
              <p className="leading-snug">
                <strong>¡Listo!</strong> Se agregará el ícono con forma de casita morada en tu menú de apps. Ábrela cuando quieras, incluso en el metro o sin señal de internet.
              </p>
            </div>
          </div>
        </div>

        {/* Quick iOS note if they test on iPhone */}
        <div className="p-3 bg-purple-50/60 rounded-2xl border border-purple-100 text-xs text-slate-600 space-y-1">
          <strong className="text-purple-900 font-bold block">¿Tienes iPhone?</strong>
          <p className="leading-relaxed">
            En Safari, toca el botón <strong>Compartir (icono del cuadrito con flecha hacia arriba)</strong> y selecciona <strong>"Agregar al inicio"</strong>.
          </p>
        </div>

        {/* Offline & privacy reminder */}
        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-2xl">
          <WifiOff className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Tus presupuestos y listas se guardan en la memoria de tu cel y nunca se pierden.</span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-xs active:scale-98 transition cursor-pointer"
        >
          Entendido, ¡gracias! ❤️
        </button>
      </motion.div>
    </div>
  );
};
