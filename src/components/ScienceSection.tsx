import React, { useState } from 'react';
import { 
  SCIENCE_TOPICS, 
  ScienceTopic 
} from '../data/scienceInfo';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  BookOpen, 
  Activity, 
  Layers, 
  Clock, 
  Globe2, 
  Award,
  Users
} from 'lucide-react';

export const ScienceSection: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<'ganoderma' | 'arandanos' | 'turmalina'>('ganoderma');

  const activeTopic = SCIENCE_TOPICS.find((t) => t.id === activeTopicId) || SCIENCE_TOPICS[0];

  return (
    <section id="empresa" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Company & Scientific Foundation */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black uppercase px-3.5 py-1 rounded-full mb-3">
            <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Health Green World (HGW) • Ciencia & Naturaleza</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nuestra Empresa y los Pilares Científicos de HGW
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            HGW (Health Green World) es una corporación internacional líder en biotecnología nutricional y salud preventiva con presencia en más de 20 países. Respaldamos cada uno de nuestros productos con ingredientes milenarios validados por la ciencia moderna.
          </p>
        </div>

        {/* Company Quick Credentials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-emerald-50/60 p-6 rounded-3xl border border-emerald-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">Biotecnología & Patentes</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Formulaciones exclusivas con nanotecnología para maximizar la biodisponibilidad y absorción de nutrientes celulares.
              </p>
            </div>
          </div>

          <div className="bg-teal-50/60 p-6 rounded-3xl border border-teal-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">100% Orgánico & Seguro</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Sin pesticidas, metales pesados ni componentes sintéticos agresivos. Certificaciones de buenas prácticas de manufactura.
              </p>
            </div>
          </div>

          <div className="bg-amber-50/60 p-6 rounded-3xl border border-amber-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">Atención Directa en Panamá</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Liderado por <strong>Yamilka Batista</strong> desde Santiago de Veraguas, con envíos seguros y asesoría personalizada.
              </p>
            </div>
          </div>
        </div>

        {/* Scientific Deep Dive Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Section subtitle inside box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Enciclopedia Nutracéutica
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                La Ciencia de Nuestros 3 Ingredientes Estrella
              </h3>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700">
              <button
                onClick={() => setActiveTopicId('ganoderma')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTopicId === 'ganoderma'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Ganoderma Lucidum</span>
              </button>

              <button
                onClick={() => setActiveTopicId('arandanos')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTopicId === 'arandanos'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Arándanos Azules</span>
              </button>

              <button
                onClick={() => setActiveTopicId('turmalina')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTopicId === 'turmalina'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Zap className="w-4 h-4 text-emerald-300" />
                <span>Turmalina Natural</span>
              </button>
            </div>
          </div>

          {/* Active Topic Content */}
          <div className="pt-8 space-y-8 animate-fadeIn">
            
            {/* Header info of active topic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-2">
                <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold px-3 py-0.5 rounded-full">
                  {activeTopic.badge}
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeTopic.name}
                </h4>
                <p className="text-emerald-400 text-xs font-semibold">
                  {activeTopic.scientificName}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed pt-1">
                  {activeTopic.tagline}
                </p>
              </div>

              <div className="lg:col-span-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-xs">
                <span className="font-bold text-emerald-400 block mb-1">Historia & Descubrimiento:</span>
                <p className="text-slate-300 leading-relaxed">
                  {activeTopic.history}
                </p>
              </div>
            </div>

            {/* Key Active Compounds Grid */}
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Principales Compuestos Activos Identificados</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeTopic.keyActiveCompounds.map((comp, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80 hover:border-emerald-500/40 transition">
                    <h6 className="font-bold text-emerald-300 text-sm mb-1">{comp.name}</h6>
                    <p className="text-slate-400 text-xs leading-relaxed">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Actions Grid */}
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Mecanismo y Acción Terapéutica en el Cuerpo</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeTopic.healthActions.map((action, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-800/40 p-4 rounded-2xl border border-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h6 className="font-bold text-white text-sm">{action.title}</h6>
                      <p className="text-slate-300 text-xs mt-1 leading-relaxed">{action.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* If Ganoderma, show the 5 stages of action timeline */}
            {activeTopic.stagesOfAction && (
              <div className="bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/20">
                <h5 className="text-xs font-black uppercase tracking-wider text-emerald-300 mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Las 5 Etapas de Acción del Ganoderma en el Organismo</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {activeTopic.stagesOfAction.map((stage, idx) => (
                    <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-emerald-900/60">
                      <span className="text-[11px] font-bold text-amber-400 block">{stage.stage}</span>
                      <span className="text-[10px] text-emerald-300 font-semibold block mb-1">({stage.period})</span>
                      <p className="text-slate-300 text-[11px] leading-snug">{stage.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scientific Bibliography Reference Pill */}
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/60 flex items-start gap-3 text-xs text-slate-300">
              <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-0.5">Evidencia Médica & Ensayos Científicos:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                  {activeTopic.medicalStudiesSummary.map((study, idx) => (
                    <li key={idx}>{study}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
