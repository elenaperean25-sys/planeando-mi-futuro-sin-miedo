import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sprout, 
  Sun, 
  Droplet, 
  Clock, 
  DollarSign, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ShieldCheck,
  Bug
} from 'lucide-react';
import { PlantGuide } from '../types';

interface GardenSectionProps {
  plants: PlantGuide[];
}

export const GardenSection: React.FC<GardenSectionProps> = ({ plants }) => {
  const [expandedPlantId, setExpandedPlantId] = useState<string | null>('planta-cilantro');

  return (
    <div className="space-y-6 pb-12">
      {/* Intro friendly note */}
      <div className="bg-gradient-to-br from-green-100/90 via-emerald-50/70 to-lime-50/70 rounded-3xl p-5 sm:p-6 border border-green-200 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-green-950 font-bold text-base">
          <span>🌱</span>
          <h3>Mi Mini Huerto en Macetas: Fresco, Barato y Terapéutico</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Tener tus propias hierbas en la ventana o balcón no solo te ahorra dinero en el súper:
          también alegra tu nuevo hogar y te conecta con la vida. Empezar cuesta menos de $50 pesos
          usando envases reciclados. ¡Aquí te enseño las plantas que nunca fallan!
        </p>
      </div>

      {/* 4 Golden Gardening Secrets */}
      <div className="bg-white rounded-3xl p-5 border border-green-100 shadow-xs space-y-3.5">
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">
            4 Secretos de Oro para que NINGUNA planta se te muera
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
            <strong className="text-emerald-950 font-bold flex items-center gap-1.5">
              <Droplet className="w-4 h-4 text-emerald-600" />
              1. La técnica del dedito en la tierra:
            </strong>
            <p className="text-slate-600 leading-relaxed">
              Mete tu dedo 2 cm en la tierra. Si sale con tierra húmeda pegada, <strong>¡NO riegues!</strong> La mayoría de plantas mueren por exceso de agua, no por falta de ella.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
            <strong className="text-emerald-950 font-bold flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-500" />
              2. El drenaje es obligatorio:
            </strong>
            <p className="text-slate-600 leading-relaxed">
              Cualquier bote, lata o maceta debe tener 3 o 4 hoyitos en el fondo para que el agua salga libremente y las raíces no se pudran.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
            <strong className="text-emerald-950 font-bold flex items-center gap-1.5">
              <Bug className="w-4 h-4 text-rose-500" />
              3. Insecticida casero infalible:
            </strong>
            <p className="text-slate-600 leading-relaxed">
              Hierve 1 diente de ajo machacado en 1 litro de agua con media cucharadita de jabón neutro. Rocía las hojas de noche si ves mosquitas o pulgones.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
            <strong className="text-emerald-950 font-bold flex items-center gap-1.5">
              <Sprout className="w-4 h-4 text-green-600" />
              4. Cosecha siempre por fuera:
            </strong>
            <p className="text-slate-600 leading-relaxed">
              Corta las ramitas exteriores con tijera limpia y deja el cogollo central; así la planta sigue produciendo hojas nuevas por meses.
            </p>
          </div>
        </div>
      </div>

      {/* PLANTS LIST */}
      <div className="space-y-4">
        {plants.map(plant => {
          const isExpanded = expandedPlantId === plant.id;

          return (
            <motion.div
              key={plant.id}
              layout
              className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-3xl shrink-0">
                    {plant.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-green-100 text-green-800">
                        {plant.difficulty.toUpperCase()}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {plant.initialCost}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
                      {plant.name}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedPlantId(isExpanded ? null : plant.id)}
                  className="p-2 text-slate-500 hover:text-green-700 rounded-xl hover:bg-green-50 transition cursor-pointer"
                  title="Ver guía paso a paso"
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Fast Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-slate-400 font-semibold text-[10px] uppercase flex items-center gap-1">
                    <Sun className="w-3 h-3 text-amber-500" /> Luz de Sol
                  </span>
                  <p className="text-slate-700 font-medium text-[11px] leading-snug">
                    {plant.sunlight}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <span className="text-slate-400 font-semibold text-[10px] uppercase flex items-center gap-1">
                    <Droplet className="w-3 h-3 text-cyan-500" /> Riego
                  </span>
                  <p className="text-slate-700 font-medium text-[11px] leading-snug">
                    {plant.watering}
                  </p>
                </div>

                <div className="space-y-0.5 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 font-semibold text-[10px] uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-500" /> Cosecha en
                  </span>
                  <p className="text-slate-700 font-medium text-[11px] leading-snug">
                    {plant.daysToHarvest}
                  </p>
                </div>
              </div>

              {/* Container recommendation */}
              <p className="text-xs text-slate-600">
                <strong className="text-slate-800">Maceta o bote ideal:</strong> {plant.idealContainer}
              </p>

              {/* Step by step instructions */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3 pt-2 border-t border-slate-100"
                >
                  <div className="space-y-1.5">
                    <strong className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Cómo sembrar y cuidar paso a paso:
                    </strong>
                    <div className="space-y-1.5">
                      {plant.steps.map((step, idx) => (
                        <div key={idx} className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100/80 leading-relaxed">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secret of a friend */}
                  <div className="bg-green-50/80 rounded-2xl p-3.5 border border-green-200/80 text-xs text-green-950 flex items-start gap-2.5">
                    <span className="text-base shrink-0">💡</span>
                    <p className="leading-relaxed">
                      <strong className="font-bold">Secreto de amiga:</strong> {plant.friendSecrets}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
