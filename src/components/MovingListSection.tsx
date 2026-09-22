import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  Search, 
  Eye, 
  ShieldCheck, 
  Home,
  Check,
  ChevronRight
} from 'lucide-react';
import { MovingItem } from '../types';

interface MovingListSectionProps {
  movingItems: MovingItem[];
}

export const MovingListSection: React.FC<MovingListSectionProps> = ({ movingItems }) => {
  const [activePhase, setActivePhase] = useState<'all' | 'dia1' | '7dias' | 'meses' | 'nunca'>('all');
  const [priceFilter, setPriceFilter] = useState<'all' | 'barato' | 'normal' | 'caro'>('all');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('moving_checklist_checked');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecked = (id: string) => {
    const next = { ...checkedIds, [id]: !checkedIds[id] };
    setCheckedIds(next);
    localStorage.setItem('moving_checklist_checked', JSON.stringify(next));
  };

  const filtered = movingItems.filter(item => {
    const matchesPhase = activePhase === 'all' || item.phase === activePhase;
    const matchesPrice = priceFilter === 'all' || item.priceLevel === priceFilter;
    return matchesPhase && matchesPrice;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Intro friendly note */}
      <div className="bg-gradient-to-br from-amber-100/90 via-amber-50/70 to-purple-50/70 rounded-3xl p-5 sm:p-6 border border-amber-200 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
          <span>🚚</span>
          <h3>Lista de Mudanza por Orden Estricto de Prioridad</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Mudarse puede ser abrumador si crees que debes comprar todo el primer día.
          Sigue este orden cronológico probado: <strong>Día 1</strong> (para dormir y descansar),
          <strong>Primeros 7 días</strong> (para comer y asearse), <strong>Unos meses después</strong> (comodidades),
          y <strong>Nunca al principio</strong> (las trampas que te endeudan sin necesidad).
        </p>
      </div>

      {/* INSPECTION CHECKLIST BEFORE RENTING/BUYING */}
      <div className="bg-white rounded-3xl p-5 border-2 border-purple-200/90 shadow-xs space-y-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
            🔍
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-800">
              Checklist de Inspección: Revisa esto antes de dar dinero
            </h4>
            <p className="text-xs text-slate-500">Haz esta prueba de 5 minutos cuando visites la casa</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
              <span>💧</span> Presión de agua y regadera:
            </strong>
            <p className="text-slate-600">
              Abre la regadera y la llave del lavabo a la vez. Revisa si sale con buena presión o solo un hilito.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
              <span>🔌</span> Enchufes de luz activos:
            </strong>
            <p className="text-slate-600">
              Lleva tu cargador de cel y pruébalo en cada contacto de la recámara y cocina. Asegúrate de que sirvan.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
              <span>🌧️</span> Humedad en techos y esquinas:
            </strong>
            <p className="text-slate-600">
              Mira arriba de la regadera y closet. Manchas amarillas o pintura inflada avisan de goteras caras.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
              <span>🔐</span> Cerraduras y chapas:
            </strong>
            <p className="text-slate-600">
              Pide cambiar la combinación o chapa principal el día que te mudes para que nadie más tenga llaves.
            </p>
          </div>
        </div>
      </div>

      {/* Chronological Phase Filter Tabs */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          <button
            onClick={() => setActivePhase('all')}
            className={`py-2 px-3 rounded-2xl text-xs font-bold transition cursor-pointer text-center ${
              activePhase === 'all'
                ? 'bg-slate-800 text-white shadow-2xs'
                : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
            }`}
          >
            Ver Todo
          </button>
          <button
            onClick={() => setActivePhase('dia1')}
            className={`py-2 px-3 rounded-2xl text-xs font-bold transition cursor-pointer text-center ${
              activePhase === 'dia1'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white hover:bg-rose-50 text-rose-700 border border-rose-200'
            }`}
          >
            🔴 DÍA 1
          </button>
          <button
            onClick={() => setActivePhase('7dias')}
            className={`py-2 px-3 rounded-2xl text-xs font-bold transition cursor-pointer text-center ${
              activePhase === '7dias'
                ? 'bg-amber-500 text-white shadow-2xs'
                : 'bg-white hover:bg-amber-50 text-amber-700 border border-amber-200'
            }`}
          >
            🟡 7 DÍAS
          </button>
          <button
            onClick={() => setActivePhase('meses')}
            className={`py-2 px-3 rounded-2xl text-xs font-bold transition cursor-pointer text-center ${
              activePhase === 'meses'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}
          >
            🟢 DESPUÉS
          </button>
          <button
            onClick={() => setActivePhase('nunca')}
            className={`py-2 px-3 rounded-2xl text-xs font-bold transition cursor-pointer text-center col-span-2 sm:col-span-1 ${
              activePhase === 'nunca'
                ? 'bg-purple-700 text-white shadow-2xs'
                : 'bg-white hover:bg-purple-50 text-purple-800 border border-purple-200'
            }`}
          >
            ⛔ NUNCA
          </button>
        </div>

        {/* Barato / Normal / Caro filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-bold shrink-0">Nivel de gasto:</span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'barato', label: '🏷️ Barato / Ingenioso' },
              { id: 'normal', label: '⭐ Normal' },
              { id: 'caro', label: '💎 Caro (Evitar al inicio)' },
            ].map(lvl => (
              <button
                key={lvl.id}
                onClick={() => setPriceFilter(lvl.id as any)}
                className={`px-3 py-1 rounded-full font-semibold transition cursor-pointer border ${
                  priceFilter === lvl.id
                    ? 'bg-purple-600 text-white border-purple-600 shadow-2xs'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ITEMS ACCORDION / LIST */}
      <div className="space-y-3">
        {filtered.map(item => {
          const isChecked = !!checkedIds[item.id];
          const phaseColor = 
            item.phase === 'dia1' 
              ? 'border-rose-200 bg-rose-50/40 text-rose-900' 
              : item.phase === '7dias' 
                ? 'border-amber-200 bg-amber-50/40 text-amber-900' 
                : item.phase === 'meses' 
                  ? 'border-emerald-200 bg-emerald-50/40 text-emerald-900' 
                  : 'border-purple-200 bg-purple-50/40 text-purple-900';

          const phaseBadge = 
            item.phase === 'dia1' ? '🔴 Día 1' : item.phase === '7dias' ? '🟡 7 Días' : item.phase === 'meses' ? '🟢 En unos meses' : '⛔ Nunca al inicio';

          return (
            <motion.div
              key={item.id}
              layout
              className={`p-4 rounded-3xl border transition shadow-2xs flex items-start gap-3.5 bg-white ${
                isChecked ? 'opacity-70 bg-slate-50/80' : ''
              }`}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleChecked(item.id)}
                className={`w-7 h-7 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition cursor-pointer ${
                  isChecked
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-2xs'
                    : 'bg-white border-slate-300 hover:border-purple-400'
                }`}
                title={isChecked ? 'Marcar como pendiente' : 'Marcar como listo'}
              >
                {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${phaseColor}`}>
                    {phaseBadge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase">
                    {item.category}
                  </span>
                  {item.estimatedCost && (
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md ml-auto">
                      {item.estimatedCost}
                    </span>
                  )}
                </div>

                <h5 className={`text-sm font-bold text-slate-800 ${isChecked ? 'line-through text-slate-400' : ''}`}>
                  {item.name}
                </h5>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.advice}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
