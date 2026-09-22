import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  SlidersHorizontal,
  ThumbsUp,
  Ban
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ChecklistItem } from '../types';

interface NeedOrNotSectionProps {
  items: ChecklistItem[];
  onToggleItem: (id: string) => void;
}

const CATEGORIES = [
  'Todos',
  'Dormitorio',
  'Cocina',
  'Baño',
  'Sala',
  'Patio / Balcón',
  'Para ti y tu pareja',
  'Para el bebé',
  'Para mascotas'
];

export const NeedOrNotSection: React.FC<NeedOrNotSectionProps> = ({
  items,
  onToggleItem
}) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [filterType, setFilterType] = useState<'all' | 'needed' | 'not-needed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items
  const filtered = items.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    const matchesFilter = 
      filterType === 'all' 
        ? true 
        : filterType === 'needed' 
          ? item.isNeeded 
          : !item.isNeeded;
    const matchesSearch = item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.reason && item.reason.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesFilter && matchesSearch;
  });

  const neededCount = items.filter(i => i.isNeeded).length;
  const neededCheckedCount = items.filter(i => i.isNeeded && i.checked).length;
  const completionPct = neededCount > 0 ? Math.round((neededCheckedCount / neededCount) * 100) : 0;

  const handleCheck = (id: string, currentState: boolean) => {
    onToggleItem(id);
    if (!currentState) {
      confetti({ particleCount: 35, spread: 40, origin: { y: 0.8 } });
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Friendly Golden Rule Banner */}
      <div className="bg-gradient-to-br from-amber-100/90 via-[#FFFDF9] to-rose-50/80 rounded-3xl p-5 sm:p-6 border border-amber-200 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-extrabold text-base">
          <span className="text-xl">💡</span>
          <h3>La Regla de Oro que Salvará tu Dinero</h3>
        </div>
        <p className="text-sm sm:text-base font-bold text-amber-950 leading-relaxed italic bg-white/80 p-3.5 rounded-2xl border border-amber-200/70">
          "Si no te deja dormir, comer o bañarte → SÍ lo necesitas ya. Si solo se ve bonito pero puedes vivir sin ello → PUEDES ESPERAR." 💛✨
        </p>
        <p className="text-xs text-slate-600">
          Al independizarse, el mayor error es querer amueblar todo en la primera semana con tarjetas de crédito.
          Usa esta lista para marcar lo que ya tienen y descubrir qué cosas son trampas que solo quitan dinero.
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-auto space-y-1">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h4 className="font-bold text-slate-800 text-sm sm:text-base">
              Progreso de lo que SÍ necesitas
            </h4>
          </div>
          <p className="text-xs text-slate-500">
            Llevas <strong>{neededCheckedCount}</strong> de <strong>{neededCount}</strong> artículos esenciales listos ({completionPct}%)
          </p>
        </div>

        <div className="w-full sm:w-48 h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 shrink-0">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPct}%` }}
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300"
          />
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-3">
        {/* SÍ vs NO Filter Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl">
          <button
            onClick={() => setFilterType('all')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer text-center ${
              filterType === 'all'
                ? 'bg-white text-slate-800 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ver Todo ({items.length})
          </button>
          <button
            onClick={() => setFilterType('needed')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer text-center flex items-center justify-center gap-1.5 ${
              filterType === 'needed'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>SÍ Necesitas</span>
          </button>
          <button
            onClick={() => setFilterType('not-needed')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer text-center flex items-center justify-center gap-1.5 ${
              filterType === 'not-needed'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'text-rose-700 hover:bg-rose-50'
            }`}
          >
            <Ban className="w-3.5 h-3.5" />
            <span>NO Necesitas</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar artículo (ej. colchón, cubeta, licuadora...)"
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-2xs"
          />
        </div>

        {/* Categories Pills Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white border-purple-600 shadow-2xs'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ITEMS LIST */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-3xl border border-slate-200 p-6 text-slate-500 text-sm">
            No se encontraron elementos con ese filtro o búsqueda.
          </div>
        ) : (
          filtered.map(item => (
            <motion.div
              key={item.id}
              layout
              className={`p-4 rounded-2xl sm:rounded-3xl border transition shadow-2xs flex items-start gap-3.5 ${
                item.isNeeded 
                  ? item.checked 
                    ? 'bg-emerald-50/60 border-emerald-200 text-slate-700' 
                    : 'bg-white border-emerald-100/90 hover:border-emerald-300'
                  : 'bg-rose-50/40 border-rose-200/80'
              }`}
            >
              {/* Checkbox only makes sense for SÍ necesitas or items you want to tick off */}
              <button
                onClick={() => handleCheck(item.id, item.checked)}
                className={`w-7 h-7 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition cursor-pointer ${
                  item.checked
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-2xs'
                    : 'bg-white border-slate-300 hover:border-emerald-500'
                }`}
                title={item.checked ? 'Marcar como pendiente' : 'Marcar como ya lo tengo'}
                aria-label={item.text}
              >
                {item.checked && <Check className="w-4 h-4 stroke-[3]" />}
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    item.isNeeded ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {item.isNeeded ? '✅ SÍ NECESITAS' : '❌ NO NECESITAS'}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {item.category}
                  </span>
                </div>

                <p className={`text-sm font-bold text-slate-800 ${item.checked ? 'line-through text-slate-400' : ''}`}>
                  {item.text}
                </p>

                {item.reason && (
                  <p className="text-xs text-slate-500 leading-relaxed pt-0.5">
                    💡 <strong className="font-semibold text-slate-700">Por qué:</strong> {item.reason}
                  </p>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};
