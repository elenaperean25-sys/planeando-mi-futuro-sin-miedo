import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  HeartPulse, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Activity,
  Smile
} from 'lucide-react';
import { HealthCheckItem } from '../types';

interface HealthGuideSectionProps {
  healthChecks: HealthCheckItem[];
}

export const HealthGuideSection: React.FC<HealthGuideSectionProps> = ({ healthChecks }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'general' | 'vista' | 'dental' | 'intima' | 'fertilidad'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = healthChecks.filter(item => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whyImportant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.friendAdvice.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Intro friendly note */}
      <div className="bg-gradient-to-br from-teal-100/90 via-teal-50/70 to-emerald-50/70 rounded-3xl p-5 sm:p-6 border border-teal-200 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-teal-950 font-bold text-base">
          <span>🩺</span>
          <h3>Guía de Salud: Precios Reales y Cuidado Sin Miedos</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Cuidar tu cuerpo no tiene por qué ser carísimo ni dar miedo. La medicina preventiva
          cuesta 10 veces menos que curar una urgencia. Aquí tienes los lugares más baratos
          y confiables (como <strong>Salud Digna, IMSS o Centros de Salud Públicos</strong>),
          con opciones baratas, normales y privadas.
        </p>
      </div>

      {/* Golden tip banner */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg shrink-0">
          💊
        </div>
        <div className="space-y-1 text-xs sm:text-sm text-slate-700">
          <h4 className="font-bold text-slate-900">
            ¿Sabías que muchos servicios son 100% gratuitos por ley?
          </h4>
          <p className="text-slate-600 text-xs leading-relaxed">
            En cualquier <strong>Centro de Salud Público</strong> de tu colonia, el Papanicolau, las vacunas del cuadro básico y métodos anticonceptivos (DIU de cobre o mirena, implante del brazo y pastillas) son <strong>completamente gratuitos</strong> aunque no tengas IMSS.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Todos los Chequeos' },
            { id: 'general', label: '🩸 Chequeo General' },
            { id: 'vista', label: '👓 Vista y Lentes' },
            { id: 'dental', label: '🦷 Dentista' },
            { id: 'intima', label: '🌸 Salud Íntima (Él y Ella)' },
            { id: 'fertilidad', label: '👶 Fertilidad en Pareja' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-teal-600 text-white border-teal-600 shadow-2xs'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar estudio (ej. química sanguínea, limpieza, papanicolau...)"
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-2xs"
          />
        </div>
      </div>

      {/* HEALTH CARDS */}
      <div className="space-y-4">
        {filtered.map(check => (
          <motion.div
            key={check.id}
            layout
            className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                  {check.category === 'general' ? 'General y Sangre' : check.category === 'vista' ? 'Ojos y Vista' : check.category === 'dental' ? 'Salud Bucal' : check.category === 'intima' ? 'Salud Sexual y Reproductiva' : 'Planificación Familiar'}
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {check.frequency}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-800">
                {check.name}
              </h4>
            </div>

            {/* Why it matters */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-800">¿Por qué es importante?</strong> {check.whyImportant}
            </p>

            {/* Price Comparison Grid: Barato vs Normal vs Caro */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Opciones de dónde ir y precios reales:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                {/* Cheap */}
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-emerald-900">
                    <span>🏷️ Opción Barata</span>
                    <span className="bg-emerald-200/80 text-emerald-950 px-2 py-0.5 rounded-md text-[11px]">
                      {check.cheapOption.price}
                    </span>
                  </div>
                  <p className="text-emerald-950 text-[11px] font-medium leading-snug">
                    {check.cheapOption.place}
                  </p>
                </div>

                {/* Normal */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-800">
                    <span>⭐ Opción Normal</span>
                    <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-md text-[11px]">
                      {check.normalOption.price}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] font-medium leading-snug">
                    {check.normalOption.place}
                  </p>
                </div>

                {/* Expensive */}
                <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                  <div className="flex items-center justify-between font-bold text-purple-900">
                    <span>💎 Opción Privada</span>
                    <span className="bg-purple-100 text-purple-950 px-2 py-0.5 rounded-md text-[11px]">
                      {check.expensiveOption.price}
                    </span>
                  </div>
                  <p className="text-purple-800 text-[11px] font-medium leading-snug">
                    {check.expensiveOption.place}
                  </p>
                </div>
              </div>
            </div>

            {/* Friend Advice */}
            <div className="bg-teal-50/70 rounded-2xl p-3.5 border border-teal-100 text-xs text-teal-950 flex items-start gap-2.5">
              <span className="text-base shrink-0">💡</span>
              <p className="leading-relaxed">
                <strong className="font-bold">Consejo de amiga:</strong> {check.friendAdvice}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
