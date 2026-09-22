/**
 * Tipos de datos para "Planeando mi futuro sin miedo"
 */

export type SectionId = 
  | 'home'
  | 'metas'
  | 'presupuesto'
  | 'necesito'
  | 'documentos'
  | 'mudanza'
  | 'salud'
  | 'huerto';

export interface SavingsGoal {
  id: string;
  title: string;
  category: 'moto-coche' | 'casa' | 'bebe' | 'mascota' | 'emergencia' | 'personalizado';
  icon: string;
  targetAmount: number;
  currentAmount: number;
  targetMonths: number;
  targetDate?: string;
  notes?: string;
  // Detalle de costos reales
  realCosts?: {
    item: string;
    cost: number;
    period: 'único' | 'mensual' | 'anual';
    description: string;
  }[];
}

export interface BudgetInput {
  incomePerson1: number;
  incomePerson2: number;
  hasPartner: boolean;
  hasBaby: boolean;
  hasPets: boolean;
  // Costos base personalizables
  customRent: number;
  customFood: number;
}

export type BudgetPlanType = 'A' | 'B' | 'C';

export interface BudgetCategoryItem {
  id: string;
  name: string;
  icon: string;
  amountA: number;
  amountB: number;
  amountC: number;
  explanation: string;
  tag: 'esencial' | 'comodidad' | 'futuro' | 'opcional';
}

export interface ChecklistItem {
  id: string;
  category: string;
  text: string;
  isNeeded: boolean; // true = SÍ necesitas, false = NO necesitas
  checked: boolean;
  tag?: string;
  reason?: string;
  priority?: 'dia1' | '7dias' | 'meses' | 'nunca';
}

export interface DocumentItem {
  id: string;
  name: string;
  category: 'rentar' | 'oficial' | 'trabajo-banco' | 'comprar-casa';
  urgency: 'vital' | 'importante' | 'futuro';
  cost: string;
  where: string;
  whatIsIt: string;
  whatIsItFor: string;
  friendTip: string;
}

export interface MovingItem {
  id: string;
  phase: 'dia1' | '7dias' | 'meses' | 'nunca';
  category: 'dormitorio' | 'cocina' | 'baño' | 'sala' | 'patio' | 'limpieza' | 'extras';
  name: string;
  isNeeded: boolean;
  priceLevel?: 'barato' | 'normal' | 'caro';
  estimatedCost?: string;
  advice: string;
}

export interface HealthCheckItem {
  id: string;
  name: string;
  category: 'general' | 'vista' | 'dental' | 'intima' | 'fertilidad';
  frequency: string;
  cheapOption: { place: string; price: string };
  normalOption: { place: string; price: string };
  expensiveOption: { place: string; price: string };
  whyImportant: string;
  friendAdvice: string;
}

export interface PlantGuide {
  id: string;
  name: string;
  difficulty: 'fácil' | 'muy fácil' | 'medio';
  sunlight: string;
  watering: string;
  daysToHarvest: string;
  initialCost: string;
  icon: string;
  idealContainer: string;
  steps: string[];
  friendSecrets: string;
}
