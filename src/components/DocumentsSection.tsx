import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Search, 
  MapPin, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  ExternalLink,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { DocumentItem } from '../types';

interface DocumentsSectionProps {
  documents: DocumentItem[];
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({ documents }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'rentar' | 'oficial' | 'trabajo-banco' | 'comprar-casa'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = documents.filter(doc => {
    const matchesTab = activeTab === 'todos' || doc.category === activeTab;
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.whatIsIt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.friendTip.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Friendly Intro */}
      <div className="bg-gradient-to-br from-indigo-100/90 via-indigo-50/70 to-purple-50/70 rounded-3xl p-5 sm:p-6 border border-indigo-200 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-indigo-900 font-bold text-base">
          <span>📄</span>
          <h3>Guía de Papeles para Toda tu Vida</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Los trámites suelen dar miedo o pereza porque nadie nos los enseñó en la escuela.
          Aquí te explico cada papel con palabras sencillas: qué es, dónde se tramita, cuánto cuesta
          y los secretos para que nadie te estafe al rentar o comprar.
        </p>
      </div>

      {/* ANTI-FRAUD SPECIAL WARNING BANNER */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-5 border-2 border-amber-300 shadow-xs space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shrink-0 shadow-2xs">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-extrabold text-amber-950">
              ¡Alerta de Oro: Cómo evitar que te estafen al rentar!
            </h4>
            <p className="text-xs text-amber-900 leading-relaxed mt-1">
              Muchas personas pierden sus ahorros por no pedir estos papeles. Sigue siempre estas 3 reglas:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
          <div className="bg-white/90 p-3 rounded-2xl border border-amber-200">
            <strong className="text-amber-900 block font-bold mb-1">1. Pide documentos del dueño:</strong>
            <p className="text-slate-600">
              Pídele copia de su INE y última boleta predial para comprobar que sí es el dueño legítimo del departamento.
            </p>
          </div>
          <div className="bg-white/90 p-3 rounded-2xl border border-amber-200">
            <strong className="text-amber-900 block font-bold mb-1">2. Nunca des adelanto sin ver:</strong>
            <p className="text-slate-600">
              Jamás transfieras dinero de "apartado" para que te muestren un departamento. Si te apuran, es estafa.
            </p>
          </div>
          <div className="bg-white/90 p-3 rounded-2xl border border-amber-200">
            <strong className="text-amber-900 block font-bold mb-1">3. ¿Pagar 3 meses de renta?:</strong>
            <p className="text-slate-600">
              Tener guardados 3 meses de renta te permite negociar un descuento del 5-10% mensual con el arrendador o garantizar contrato si no tienes aval.
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'todos', label: 'Todos los Papeles' },
            { id: 'rentar', label: '🏠 Para Rentar' },
            { id: 'oficial', label: '🪪 De Identidad (SAT/IMSS)' },
            { id: 'trabajo-banco', label: '💳 Banco & Trabajo' },
            { id: 'comprar-casa', label: '🏛️ Comprar Casa' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
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
            placeholder="Buscar trámite o documento (ej: INE, SAT, Escrituras, Contrato...)"
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-2xs"
          />
        </div>
      </div>

      {/* DOCUMENTS CARDS */}
      <div className="space-y-4">
        {filtered.map(doc => (
          <motion.div
            key={doc.id}
            layout
            className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-3.5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    doc.urgency === 'vital' 
                      ? 'bg-rose-100 text-rose-800' 
                      : doc.urgency === 'importante' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-indigo-100 text-indigo-800'
                  }`}>
                    {doc.urgency === 'vital' ? '🚨 IMPRESCINDIBLE' : doc.urgency === 'importante' ? '⭐ MUY IMPORTANTE' : '🏛️ PARA EL FUTURO'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {doc.category === 'rentar' ? 'Vivienda y Renta' : doc.category === 'oficial' ? 'Identidad Oficial' : doc.category === 'trabajo-banco' ? 'Finanzas Personales' : 'Patrimonio Raíz'}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-800">
                  {doc.name}
                </h4>
              </div>
            </div>

            {/* Quick Specs: Cost & Where */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Costo:</strong> {doc.cost}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="truncate"><strong>Dónde:</strong> {doc.where}</span>
              </div>
            </div>

            {/* What is it & What is it for */}
            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">¿Qué es?</strong> {doc.whatIsIt}
              </p>
              <p>
                <strong className="text-slate-800">¿Para qué sirve?</strong> {doc.whatIsItFor}
              </p>
            </div>

            {/* Friend Tip */}
            <div className="bg-purple-50/70 rounded-2xl p-3.5 border border-purple-100 text-xs text-purple-950 flex items-start gap-2.5">
              <span className="text-base shrink-0">💡</span>
              <p className="leading-relaxed">
                <strong className="font-bold">Consejo de amiga:</strong> {doc.friendTip}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
