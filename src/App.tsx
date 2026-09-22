import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  PiggyBank, 
  PieChart, 
  CheckSquare, 
  FileText, 
  Truck, 
  HeartPulse, 
  Sprout,
  ChevronLeft
} from 'lucide-react';

import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { SavingsGoalsSection } from './components/SavingsGoalsSection';
import { BudgetSection } from './components/BudgetSection';
import { NeedOrNotSection } from './components/NeedOrNotSection';
import { DocumentsSection } from './components/DocumentsSection';
import { MovingListSection } from './components/MovingListSection';
import { HealthGuideSection } from './components/HealthGuideSection';
import { GardenSection } from './components/GardenSection';
import { DownloadHelpModal } from './components/DownloadHelpModal';

import { 
  SectionId, 
  SavingsGoal, 
  ChecklistItem, 
  DocumentItem, 
  MovingItem, 
  HealthCheckItem, 
  PlantGuide 
} from './types';

import {
  INITIAL_SAVINGS_GOALS,
  INITIAL_CHECKLIST,
  INITIAL_DOCUMENTS,
  INITIAL_MOVING_CHECKLIST,
  INITIAL_HEALTH_CHECKS,
  INITIAL_PLANTS
} from './data/initialData';

export default function App() {
  // Navigation State: 'home' or one of the 7 section IDs
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Persistent savings goals
  const [savingsGoals, setSavingsGoals] = useState<SavingsGoal[]>(() => {
    try {
      const saved = localStorage.getItem('app_savings_goals');
      return saved ? JSON.parse(saved) : INITIAL_SAVINGS_GOALS;
    } catch {
      return INITIAL_SAVINGS_GOALS;
    }
  });

  // Persistent budget state
  const [budgetState, setBudgetState] = useState(() => {
    try {
      const saved = localStorage.getItem('app_budget_state');
      return saved
        ? JSON.parse(saved)
        : {
            income1: 12000,
            income2: 12000,
            hasPartner: true,
            hasBaby: false,
            hasPets: false,
            customRent: 6000
          };
    } catch {
      return {
        income1: 12000,
        income2: 12000,
        hasPartner: true,
        hasBaby: false,
        hasPets: false,
        customRent: 6000
      };
    }
  });

  // Persistent checklist
  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem('app_checklist_items');
      return saved ? JSON.parse(saved) : INITIAL_CHECKLIST;
    } catch {
      return INITIAL_CHECKLIST;
    }
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('app_savings_goals', JSON.stringify(savingsGoals));
  }, [savingsGoals]);

  useEffect(() => {
    localStorage.setItem('app_budget_state', JSON.stringify(budgetState));
  }, [budgetState]);

  useEffect(() => {
    localStorage.setItem('app_checklist_items', JSON.stringify(checklist));
  }, [checklist]);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Handlers
  const handleToggleChecklistItem = (id: string) => {
    setChecklist(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const totalCheckedNeeded = checklist.filter(i => i.isNeeded && i.checked).length;
  const totalNeeded = checklist.filter(i => i.isNeeded).length;
  const totalSavedAcrossGoals = savingsGoals.reduce((sum, g) => sum + g.currentAmount, 0);

  // Bottom Navigation Items
  const navItems: { id: 'home' | SectionId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Inicio', icon: <Home className="w-5 h-5" /> },
    { id: 'metas', label: 'Metas', icon: <PiggyBank className="w-5 h-5" /> },
    { id: 'presupuesto', label: 'Presupuesto', icon: <PieChart className="w-5 h-5" /> },
    { id: 'necesito', label: 'SÍ o NO', icon: <CheckSquare className="w-5 h-5" /> },
    { id: 'documentos', label: 'Papeles', icon: <FileText className="w-5 h-5" /> },
    { id: 'mudanza', label: 'Mudanza', icon: <Truck className="w-5 h-5" /> },
    { id: 'salud', label: 'Salud', icon: <HeartPulse className="w-5 h-5" /> },
    { id: 'huerto', label: 'Huerto', icon: <Sprout className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-800 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900 pb-20 sm:pb-12">
      {/* Top Header */}
      <Header
        currentSection={activeSection}
        onNavigate={setActiveSection}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 pt-3">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <HomeScreen
                onNavigate={(section) => setActiveSection(section)}
                onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
                checkedCount={totalCheckedNeeded}
                totalChecklistCount={totalNeeded}
                totalSaved={totalSavedAcrossGoals}
              />
            </motion.div>
          )}

          {activeSection === 'metas' && (
            <motion.div
              key="metas"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <SavingsGoalsSection
                goals={savingsGoals}
                onUpdateGoals={setSavingsGoals}
              />
            </motion.div>
          )}

          {activeSection === 'presupuesto' && (
            <motion.div
              key="presupuesto"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <BudgetSection
                budgetState={budgetState}
                onUpdateBudgetState={setBudgetState}
              />
            </motion.div>
          )}

          {activeSection === 'necesito' && (
            <motion.div
              key="necesito"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <NeedOrNotSection
                items={checklist}
                onToggleItem={handleToggleChecklistItem}
              />
            </motion.div>
          )}

          {activeSection === 'documentos' && (
            <motion.div
              key="documentos"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <DocumentsSection documents={INITIAL_DOCUMENTS} />
            </motion.div>
          )}

          {activeSection === 'mudanza' && (
            <motion.div
              key="mudanza"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <MovingListSection movingItems={INITIAL_MOVING_CHECKLIST} />
            </motion.div>
          )}

          {activeSection === 'salud' && (
            <motion.div
              key="salud"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <HealthGuideSection healthChecks={INITIAL_HEALTH_CHECKS} />
            </motion.div>
          )}

          {activeSection === 'huerto' && (
            <motion.div
              key="huerto"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
            >
              <GardenSection plants={INITIAL_PLANTS} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Floating Bar on Mobile for Instant Switching */}
      <nav 
        aria-label="Navegación principal"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-1.5 px-2 flex items-center justify-around max-w-2xl mx-auto shadow-lg sm:hidden"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center justify-center p-1 rounded-xl transition cursor-pointer ${
                isActive
                  ? 'text-purple-700 font-bold'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
              id={`nav-${item.id}`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-purple-100 text-purple-700' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[9px] mt-0.5 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Download / Install Help Modal */}
      <DownloadHelpModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
