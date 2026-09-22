import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Calendar, 
  DollarSign, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Info, 
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SavingsGoal } from '../types';

interface SavingsGoalsSectionProps {
  goals: SavingsGoal[];
  onUpdateGoals: (goals: SavingsGoal[]) => void;
}

export const SavingsGoalsSection: React.FC<SavingsGoalsSectionProps> = ({
  goals,
  onUpdateGoals
}) => {
  // Custom Calculator State
  const [calcTitle, setCalcTitle] = useState('');
  const [calcAmount, setCalcAmount] = useState<number>(30000);
  const [calcMonths, setCalcMonths] = useState<number>(12);
  const [showCalculator, setShowCalculator] = useState(true);

  // Selected goal to expand real cost details
  const [expandedGoalId, setExpandedGoalId] = useState<string | null>('emergencia-1ano');

  // New emergency fund reference slider
  const [emergencyWeeklyReference, setEmergencyWeeklyReference] = useState<number>(500);

  // Calculate daily, weekly, biweekly, monthly
  const monthlySavings = calcMonths > 0 ? Math.ceil(calcAmount / calcMonths) : 0;
  const biweeklySavings = Math.ceil(monthlySavings / 2);
  const weeklySavings = Math.ceil(monthlySavings / 4.33);
  const dailySavings = Math.ceil(monthlySavings / 30);

  // Add custom goal to saved goals
  const handleSaveCustomGoal = () => {
    if (!calcTitle.trim() || calcAmount <= 0 || calcMonths <= 0) return;

    const newGoal: SavingsGoal = {
      id: `custom-${Date.now()}`,
      title: calcTitle.trim(),
      category: 'personalizado',
      icon: '🎯',
      targetAmount: calcAmount,
      currentAmount: 0,
      targetMonths: calcMonths,
      notes: `Meta calculada a ${calcMonths} meses ($${monthlySavings.toLocaleString('es-MX')}/mes).`
    };

    onUpdateGoals([newGoal, ...goals]);
    setCalcTitle('');
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  // Add savings progress to a goal
  const handleAddSavings = (goalId: string, delta: number) => {
    const updated = goals.map(g => {
      if (g.id === goalId) {
        const nextAmount = Math.max(0, g.currentAmount + delta);
        if (nextAmount >= g.targetAmount && g.currentAmount < g.targetAmount) {
          confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        }
        return { ...g, currentAmount: nextAmount };
      }
      return g;
    });
    onUpdateGoals(updated);
  };

  // Delete custom goal
  const handleDeleteGoal = (goalId: string) => {
    onUpdateGoals(goals.filter(g => g.id !== goalId));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Intro friendly note */}
      <div className="bg-gradient-to-br from-purple-100/90 via-purple-50/70 to-emerald-50/70 rounded-3xl p-5 border border-purple-200/80 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-purple-800 font-bold text-base">
          <span>💰</span>
          <h3>Calculadora Inteligente de Metas</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Tener metas claras es el secreto para que no te dé miedo gastar en lo que de verdad importa.
          Pon cuánto necesitas y en cuántos meses: la app divide el monto al día y a la semana para que
          veas que sí es posible con disciplina diaria.
        </p>
      </div>

      {/* Main Interactive Calculator */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
              ✨
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-800">
                Calcula tu meta personalizada
              </h4>
              <p className="text-xs text-slate-500">¿Cuánto necesitas juntar y en cuánto tiempo?</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Goal Name */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Nombre de tu meta
            </label>
            <input
              type="text"
              value={calcTitle}
              onChange={(e) => setCalcTitle(e.target.value)}
              placeholder="Ej: Depósito de mudanza, Coche para el trabajo, etc."
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition"
            />
          </div>

          {/* Target Amount */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center justify-between">
              <span>Monto total que necesitas ($)</span>
              <span className="text-purple-600 font-bold">${calcAmount.toLocaleString('es-MX')}</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input
                type="number"
                min="500"
                step="500"
                value={calcAmount || ''}
                onChange={(e) => setCalcAmount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Months */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center justify-between">
              <span>Tiempo para lograrlo</span>
              <span className="text-purple-600 font-bold">{calcMonths} meses</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="1"
                max="48"
                value={calcMonths}
                onChange={(e) => setCalcMonths(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1.5 rounded-xl shrink-0">
                {calcMonths}m
              </span>
            </div>
          </div>
        </div>

        {/* Calculated Breakdown Display */}
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50/60 to-emerald-50/60 rounded-2xl p-4 border border-purple-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-white/80 rounded-xl p-2.5 shadow-2xs border border-white">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Al Día</span>
            <div className="text-lg font-extrabold text-purple-700">
              ${dailySavings.toLocaleString('es-MX')}
            </div>
            <span className="text-[10px] text-slate-500">Un café o antojo</span>
          </div>

          <div className="bg-white/80 rounded-xl p-2.5 shadow-2xs border border-white">
            <span className="text-[11px] font-bold text-slate-500 uppercase">A la Semana</span>
            <div className="text-lg font-extrabold text-indigo-700">
              ${weeklySavings.toLocaleString('es-MX')}
            </div>
            <span className="text-[10px] text-slate-500">Separar cada domingo</span>
          </div>

          <div className="bg-white/80 rounded-xl p-2.5 shadow-2xs border border-white">
            <span className="text-[11px] font-bold text-slate-500 uppercase">A la Quincena</span>
            <div className="text-lg font-extrabold text-emerald-700">
              ${biweeklySavings.toLocaleString('es-MX')}
            </div>
            <span className="text-[10px] text-slate-500">En cada pago</span>
          </div>

          <div className="bg-white/80 rounded-xl p-2.5 shadow-2xs border border-white">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Al Mes</span>
            <div className="text-lg font-extrabold text-purple-900">
              ${monthlySavings.toLocaleString('es-MX')}
            </div>
            <span className="text-[10px] text-slate-500">En tu presupuesto</span>
          </div>
        </div>

        {calcTitle.trim() && (
          <button
            onClick={handleSaveCustomGoal}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-sm active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Guardar "{calcTitle}" en mis metas activas</span>
          </button>
        )}
      </div>

      {/* Special Pre-configured Goals with Real Expenses */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h3 className="text-base font-extrabold text-slate-800">
              Metas Especiales con Costos y Gastos Reales
            </h3>
            <p className="text-xs text-slate-500">
              Precios reales de mercado para que nada los tome por sorpresa
            </p>
          </div>
        </div>

        {/* 1 YEAR EMERGENCY FUND SPECIAL CARD */}
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white rounded-3xl p-5 sm:p-6 border-2 border-emerald-200/90 shadow-sm space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
              🛡️
            </div>
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Seguridad Total Contra el Miedo
              </div>
              <h4 className="text-lg font-extrabold text-slate-800">
                Fondo de Emergencia: 1 Año de Ahorro
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tener un año de gastos básicos guardados en el banco significa que si te corren del trabajo,
                si te enfermas o hay crisis, <strong>tienes 12 meses enteros de tranquilidad absoluta sin pedir prestado</strong>.
              </p>
            </div>
          </div>

          {/* Reference selector $250 to $1,000 */}
          <div className="bg-white rounded-2xl p-4 border border-emerald-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">
                ¿Cuánto puedes separar por semana? (Referencia: $250 a $1,000+)
              </span>
              <span className="text-sm font-extrabold text-emerald-700">
                ${emergencyWeeklyReference} / semana
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[250, 500, 750, 1000].map(val => (
                <button
                  key={val}
                  onClick={() => setEmergencyWeeklyReference(val)}
                  className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    emergencyWeeklyReference === val
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-600 bg-emerald-50/50 rounded-xl p-3 space-y-1">
              <div className="flex justify-between font-semibold text-slate-700">
                <span>Ahorro al mes:</span>
                <span className="text-emerald-700 font-bold">${(emergencyWeeklyReference * 4.33).toFixed(0)} MXN</span>
              </div>
              <div className="flex justify-between font-semibold text-slate-700">
                <span>En 1 año juntas:</span>
                <span className="text-emerald-700 font-bold">${(emergencyWeeklyReference * 52).toLocaleString('es-MX')} MXN</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                💡 Consejo de amiga: Guarda este dinero en una cuenta de rendimiento a la vista como Nu (cajita), Hey Banco o Cetesdirecto para que la inflación no se coma tu dinero.
              </p>
            </div>
          </div>
        </div>

        {/* LIST OF SAVINGS GOALS CARDS */}
        <div className="space-y-3.5">
          {goals.map((goal) => {
            const isExpanded = expandedGoalId === goal.id;
            const percentage = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
            const monthlyReq = Math.ceil((goal.targetAmount - goal.currentAmount) / (goal.targetMonths || 12));

            return (
              <motion.div
                key={goal.id}
                layout
                className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl shrink-0">
                      {goal.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800">
                        {goal.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        Meta: <strong className="text-purple-700 font-extrabold">${goal.targetAmount.toLocaleString('es-MX')}</strong> • Plazo: {goal.targetMonths} meses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {goal.category === 'personalizado' && (
                      <button
                        onClick={() => handleDeleteGoal(goal.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition cursor-pointer"
                        title="Eliminar meta"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => setExpandedGoalId(isExpanded ? null : goal.id)}
                      className="p-2 text-slate-500 hover:text-purple-700 rounded-xl hover:bg-purple-50 transition cursor-pointer"
                      title="Ver detalles de costos"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">
                      Llevas guardado: <strong className="text-slate-800">${goal.currentAmount.toLocaleString('es-MX')}</strong>
                    </span>
                    <span className="font-bold text-purple-700">{percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5 }}
                      className={`h-full rounded-full ${
                        percentage >= 100 
                          ? 'bg-emerald-500' 
                          : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Te faltan: ${(Math.max(0, goal.targetAmount - goal.currentAmount)).toLocaleString('es-MX')}</span>
                    <span>Ahorro sugerido: <strong>${monthlyReq.toLocaleString('es-MX')}/mes</strong></span>
                  </div>
                </div>

                {/* Quick Add Savings Buttons */}
                <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium shrink-0">Sumar ahorro:</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[200, 500, 1000].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => handleAddSavings(goal.id, amt)}
                        className="px-2.5 py-1 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200/60 active:scale-95 transition cursor-pointer"
                      >
                        +${amt}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        const val = prompt('¿Cuánto dinero quieres agregar a este ahorro?', '1000');
                        if (val && !isNaN(Number(val))) handleAddSavings(goal.id, Number(val));
                      }}
                      className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium active:scale-95 transition cursor-pointer"
                    >
                      Otro monto
                    </button>
                  </div>
                </div>

                {/* EXPANDED SECTION: REAL COSTS BREAKDOWN */}
                <AnimatePresence>
                  {isExpanded && goal.realCosts && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-3 border-t border-slate-100 space-y-3"
                    >
                      <div className="bg-purple-50/70 rounded-2xl p-3.5 space-y-2.5 border border-purple-100">
                        <div className="flex items-center gap-1.5 text-purple-900 font-bold text-xs">
                          <Info className="w-4 h-4 text-purple-600" />
                          <span>Desglose de Costos Reales y Mantenimiento</span>
                        </div>

                        <div className="space-y-2">
                          {goal.realCosts.map((cost, idx) => (
                            <div
                              key={idx}
                              className="bg-white/90 rounded-xl p-2.5 text-xs space-y-1 border border-purple-100/60 shadow-2xs"
                            >
                              <div className="flex items-center justify-between font-bold text-slate-800">
                                <span>{cost.item}</span>
                                <span className="text-purple-700 shrink-0 ml-2">
                                  ${cost.cost.toLocaleString('es-MX')} {cost.period !== 'único' ? `/${cost.period}` : ''}
                                </span>
                              </div>
                              <p className="text-slate-500 text-[11px] leading-relaxed">
                                {cost.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        {goal.notes && (
                          <div className="p-2.5 bg-amber-50/80 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                            <span className="text-sm">💡</span>
                            <p className="leading-snug">
                              <strong>Consejo de amiga:</strong> {goal.notes}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
