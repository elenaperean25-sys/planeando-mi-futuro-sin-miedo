import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  User, 
  DollarSign, 
  Check, 
  Info, 
  Sparkles, 
  Baby, 
  Dog, 
  Home, 
  Edit3, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { BudgetPlanType } from '../types';

interface BudgetSectionProps {
  // Shared persistent budget settings
  budgetState: {
    income1: number;
    income2: number;
    hasPartner: boolean;
    hasBaby: boolean;
    hasPets: boolean;
    customRent: number;
  };
  onUpdateBudgetState: (newState: any) => void;
}

export const BudgetSection: React.FC<BudgetSectionProps> = ({
  budgetState,
  onUpdateBudgetState
}) => {
  const [selectedPlan, setSelectedPlan] = useState<BudgetPlanType>('B');
  const [editingRent, setEditingRent] = useState(false);

  const { income1, income2, hasPartner, hasBaby, hasPets, customRent } = budgetState;
  const totalIncome = hasPartner ? income1 + income2 : income1;

  const updateField = (key: string, value: any) => {
    onUpdateBudgetState({
      ...budgetState,
      [key]: value
    });
  };

  // Dynamic calculations based on plan and custom rent
  // Plan A: Económico (Esencial, empezando con poco pero digno)
  // Plan B: Normal (Cómodos, con balance y disfrute)
  // Plan C: Completo (Holgado, ahorro fuerte e inversión a futuro)
  const getPlanBreakdown = (plan: BudgetPlanType) => {
    let rent = customRent;
    let foodMultiplier = 1;
    let transportMultiplier = 1;
    let savingsRate = 0.10;
    let funMultiplier = 1;
    let personalCareMultiplier = 1;
    let babyCost = hasBaby ? 2800 : 0;
    let petsCost = hasPets ? 850 : 0;

    if (plan === 'A') {
      // Económico
      rent = Math.max(2500, Math.round(customRent * 0.85));
      foodMultiplier = 0.75;
      transportMultiplier = 0.7;
      savingsRate = 0.10;
      funMultiplier = 0.4;
      personalCareMultiplier = 0.6;
      babyCost = hasBaby ? 2000 : 0;
      petsCost = hasPets ? 600 : 0;
    } else if (plan === 'B') {
      // Normal
      rent = customRent;
      foodMultiplier = 1.0;
      transportMultiplier = 1.0;
      savingsRate = 0.18;
      funMultiplier = 1.0;
      personalCareMultiplier = 1.0;
      babyCost = hasBaby ? 3200 : 0;
      petsCost = hasPets ? 1000 : 0;
    } else {
      // Completo
      rent = Math.round(customRent * 1.35);
      foodMultiplier = 1.4;
      transportMultiplier = 1.6;
      savingsRate = 0.28;
      funMultiplier = 2.0;
      personalCareMultiplier = 1.8;
      babyCost = hasBaby ? 5000 : 0;
      petsCost = hasPets ? 1600 : 0;
    }

    const baseFood = (hasPartner ? 4500 : 3000) * foodMultiplier;
    const light = plan === 'A' ? 250 : plan === 'B' ? 450 : 750;
    const water = plan === 'A' ? 120 : plan === 'B' ? 200 : 350;
    const gas = plan === 'A' ? 300 : plan === 'B' ? 500 : 750;
    const transport = (hasPartner ? 2000 : 1200) * transportMultiplier;
    const internet = plan === 'A' ? 380 : plan === 'B' ? 550 : 800;
    const mobile = (hasPartner ? 400 : 200) * (plan === 'C' ? 1.5 : 1);
    const personalCare = (hasPartner ? 800 : 500) * personalCareMultiplier;
    const fun = (hasPartner ? 1200 : 800) * funMultiplier;
    
    // Savings target
    const targetSavings = Math.round(totalIncome * savingsRate);

    const categories = [
      { name: 'Renta del hogar', icon: '🏠', amount: rent, desc: 'Techo seguro y cómodo' },
      { name: 'Comida y despensa', icon: '🛒', amount: Math.round(baseFood), desc: 'Mercado, súper y alimentos nutritivos' },
      { name: 'Luz (CFE)', icon: '💡', amount: light, desc: 'Focos LED y uso inteligente' },
      { name: 'Agua potable', icon: '💧', amount: water, desc: 'Servicio bimestral prorrateado al mes' },
      { name: 'Gas para cocinar y regadera', icon: '🔥', amount: gas, desc: 'Tanque o gas estacionario' },
      { name: 'Transporte (Metro/Camión/Gasolina)', icon: '🚌', amount: Math.round(transport), desc: 'Para ir al trabajo y moverse' },
      { name: 'Internet para la casa', icon: '📶', amount: internet, desc: 'Fibra óptica para streaming o home office' },
      { name: 'Planes de celular', icon: '📱', amount: Math.round(mobile), desc: 'Recargas o planes con datos' },
      { name: 'Ahorro para el futuro', icon: '💰', amount: targetSavings, desc: `Fondo de paz y metas (${Math.round(savingsRate * 100)}% de ingresos)` },
      { name: 'Cuidado personal y salud básica', icon: '🧴', amount: Math.round(personalCare), desc: 'Cortes de cabello, medicinas, higiene' },
      { name: 'Diversión y salidas en pareja', icon: '🍿', amount: Math.round(fun), desc: 'Cine, salidas y despejar la mente' },
      ...(hasBaby ? [{ name: 'Gastos del bebé', icon: '👶', amount: babyCost, desc: 'Pañales, leche, pediatra y ropa' }] : []),
      ...(hasPets ? [{ name: 'Gastos de mascotas', icon: '🐾', amount: petsCost, desc: 'Croquetas de calidad y vacunas' }] : []),
    ];

    const totalExpenses = categories.reduce((sum, c) => sum + c.amount, 0);
    const balance = totalIncome - totalExpenses;

    return {
      categories,
      totalExpenses,
      balance,
      savingsRate
    };
  };

  const planData = getPlanBreakdown(selectedPlan);

  return (
    <div className="space-y-6 pb-12">
      {/* Friendly banner */}
      <div className="bg-gradient-to-br from-emerald-100/90 via-emerald-50/70 to-purple-50/70 rounded-3xl p-5 border border-emerald-200/80 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <span>📊</span>
          <h3>Presupuesto Real sin Asfixias</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Poner orden en el dinero quita toda la ansiedad. Configura los ingresos de tu hogar
          y revisa los 3 planes: desde empezar con lo indispensable hasta llegar al estilo de vida
          que sueñan construir juntos.
        </p>
      </div>

      {/* Income & Household Setup Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">💼</span>
            <div>
              <h4 className="text-base font-bold text-slate-800">
                Tus Ingresos Mensuales
              </h4>
              <p className="text-xs text-slate-500">¿Cuánto entra a casa cada mes?</p>
            </div>
          </div>

          {/* Partner toggle */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl">
            <button
              onClick={() => updateField('hasPartner', false)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                !hasPartner ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Solo</span>
            </button>
            <button
              onClick={() => updateField('hasPartner', true)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                hasPartner ? 'bg-purple-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>En Pareja</span>
            </button>
          </div>
        </div>

        {/* Incomes Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              {hasPartner ? 'Tu sueldo mensual ($)' : 'Mi sueldo mensual ($)'}
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input
                type="number"
                step="500"
                value={income1 || ''}
                onChange={(e) => updateField('income1', Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white transition"
              />
            </div>
          </div>

          {hasPartner && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Sueldo de mi pareja ($)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  step="500"
                  value={income2 || ''}
                  onChange={(e) => updateField('income2', Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition"
                />
              </div>
            </div>
          )}
        </div>

        {/* Total Income Banner + Editable Rent Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase">Ingreso total del hogar:</span>
            <div className="text-2xl font-extrabold text-slate-800">
              ${totalIncome.toLocaleString('es-MX')} <span className="text-xs text-slate-500 font-normal">MXN/mes</span>
            </div>
          </div>

          {/* Editable Rent */}
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <Home className="w-4 h-4 text-purple-600 shrink-0" />
            <div className="text-xs">
              <span className="text-slate-500 block text-[10px]">Renta estimada base:</span>
              {editingRent ? (
                <div className="flex items-center gap-1">
                  <span className="font-bold text-slate-400">$</span>
                  <input
                    type="number"
                    value={customRent}
                    onChange={(e) => updateField('customRent', Number(e.target.value))}
                    className="w-20 px-1 py-0.5 border border-purple-300 rounded text-xs font-bold focus:outline-none"
                  />
                  <button
                    onClick={() => setEditingRent(false)}
                    className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <span>${customRent.toLocaleString('es-MX')}</span>
                  <button
                    onClick={() => setEditingRent(true)}
                    className="text-purple-600 hover:text-purple-800 p-0.5"
                    title="Editar renta"
                  >
                    <Edit3 className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Toggles for Baby & Pets */}
        <div className="flex items-center gap-3 flex-wrap pt-1 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-600">Incluir en mi presupuesto:</span>
          
          <button
            onClick={() => updateField('hasBaby', !hasBaby)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer ${
              hasBaby 
                ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-2xs' 
                : 'bg-slate-50 text-slate-600 border-slate-200'
            }`}
          >
            <Baby className="w-3.5 h-3.5 text-rose-500" />
            <span>{hasBaby ? '✓ Bebé / Hijos activo' : '+ Agregar Bebé'}</span>
          </button>

          <button
            onClick={() => updateField('hasPets', !hasPets)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer ${
              hasPets 
                ? 'bg-amber-50 text-amber-700 border-amber-300 shadow-2xs' 
                : 'bg-slate-50 text-slate-600 border-slate-200'
            }`}
          >
            <Dog className="w-3.5 h-3.5 text-amber-600" />
            <span>{hasPets ? '✓ Mascotas activo' : '+ Agregar Mascotas'}</span>
          </button>
        </div>
      </div>

      {/* THE 3 PROMINENT BUTTONS: PLAN A, PLAN B, PLAN C */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Elige tu plan para ver los números exactos
          </h4>
          <span className="text-xs font-semibold text-purple-600">3 estrategias</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* PLAN A */}
          <button
            onClick={() => setSelectedPlan('A')}
            className={`p-4 rounded-3xl border-2 text-left transition cursor-pointer relative overflow-hidden ${
              selectedPlan === 'A'
                ? 'bg-emerald-50/90 border-emerald-500 shadow-sm ring-2 ring-emerald-200'
                : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Plan A
              </span>
              <span className="text-xl">🌱</span>
            </div>
            <h5 className="font-extrabold text-slate-800 text-base">
              Económico
            </h5>
            <p className="text-xs text-slate-600 leading-snug mt-1">
              Empezando con poco, viviendo bien pero con lo esencial.
            </p>
          </button>

          {/* PLAN B */}
          <button
            onClick={() => setSelectedPlan('B')}
            className={`p-4 rounded-3xl border-2 text-left transition cursor-pointer relative overflow-hidden ${
              selectedPlan === 'B'
                ? 'bg-purple-50/90 border-purple-500 shadow-sm ring-2 ring-purple-200'
                : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                Plan B
              </span>
              <span className="text-xl">✨</span>
            </div>
            <h5 className="font-extrabold text-slate-800 text-base">
              Normal (Recomendado)
            </h5>
            <p className="text-xs text-slate-600 leading-snug mt-1">
              Viviendo cómodos, ahorrando constante y disfrutando.
            </p>
          </button>

          {/* PLAN C */}
          <button
            onClick={() => setSelectedPlan('C')}
            className={`p-4 rounded-3xl border-2 text-left transition cursor-pointer relative overflow-hidden ${
              selectedPlan === 'C'
                ? 'bg-indigo-50/90 border-indigo-500 shadow-sm ring-2 ring-indigo-200'
                : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                Plan C
              </span>
              <span className="text-xl">👑</span>
            </div>
            <h5 className="font-extrabold text-slate-800 text-base">
              Completo
            </h5>
            <p className="text-xs text-slate-600 leading-snug mt-1">
              Con todo lo que merecen, ahorro fuerte e inversión a futuro.
            </p>
          </button>
        </div>
      </div>

      {/* PLAN DETAILS BREAKDOWN */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                {selectedPlan === 'A' ? '🌱' : selectedPlan === 'B' ? '✨' : '👑'}
              </span>
              <h4 className="text-lg font-extrabold text-slate-800">
                Desglose Exacto: Plan {selectedPlan} ({selectedPlan === 'A' ? 'Económico' : selectedPlan === 'B' ? 'Normal' : 'Completo'})
              </h4>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Cantidades ajustadas con base en tu renta de ${customRent.toLocaleString('es-MX')} e ingresos
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs text-slate-400 uppercase font-semibold">Total de gastos planeados</span>
            <div className="text-xl font-extrabold text-purple-900">
              ${planData.totalExpenses.toLocaleString('es-MX')} <span className="text-xs font-normal text-slate-500">MXN</span>
            </div>
          </div>
        </div>

        {/* Balance alert */}
        <div className={`p-3.5 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-semibold border ${
          planData.balance >= 0 
            ? 'bg-emerald-50 text-emerald-900 border-emerald-200' 
            : 'bg-rose-50 text-rose-900 border-rose-200'
        }`}>
          <div className="flex items-center gap-2">
            {planData.balance >= 0 ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            )}
            <span>
              {planData.balance >= 0
                ? `¡Presupuesto saludable! Te sobran $${planData.balance.toLocaleString('es-MX')} para ahorro libre o imprevistos.`
                : `Atención: Te faltan $${Math.abs(planData.balance).toLocaleString('es-MX')} para este plan con tus ingresos actuales.`}
            </span>
          </div>
        </div>

        {/* Detailed categories list */}
        <div className="space-y-2.5">
          {planData.categories.map((cat, idx) => {
            const pctOfIncome = totalIncome > 0 ? Math.round((cat.amount / totalIncome) * 100) : 0;

            return (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/70 hover:bg-slate-100/70 border border-slate-100 transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-2xs shrink-0">
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-sm font-bold text-slate-800 truncate">
                      {cat.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 truncate">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 ml-2">
                  <div className="text-sm font-extrabold text-slate-800">
                    ${cat.amount.toLocaleString('es-MX')}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {pctOfIncome}% del ingreso
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Friend explanation for each plan */}
        <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200/80 text-xs text-amber-900 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-sm">
            <span>💡</span>
            <span>Consejo de amiga para el Plan {selectedPlan}:</span>
          </div>
          {selectedPlan === 'A' && (
            <p className="leading-relaxed">
              El Plan A no significa sufrir: significa <strong>protegerse</strong>. Si están empezando, vivan en Plan A los primeros 6 meses mientras juntan su fondo de emergencia de 3 a 6 meses. Una vez que tengan ese colchón, den el salto con total paz al Plan B.
            </p>
          )}
          {selectedPlan === 'B' && (
            <p className="leading-relaxed">
              El Plan B es el equilibrio perfecto para el 90% de las parejas jóvenes. Permite comer rico, tener fines de semana divertidos sin culpa y guardar un 18% para el enganche de su casa o su coche sin que nadie se sienta limitado.
            </p>
          )}
          {selectedPlan === 'C' && (
            <p className="leading-relaxed">
              El Plan C es su meta a mediano plazo conforme crezcan en sus trabajos o negocios. La clave aquí es que el 28% se va directo a inversión y ahorro para que su dinero trabaje por ustedes y en 5 o 10 años tengan propiedades propias.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
