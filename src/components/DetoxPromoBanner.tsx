import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Truck, 
  CreditCard, 
  ShieldAlert, 
  ArrowRight,
  Leaf,
  Heart
} from 'lucide-react';
import { WHATSAPP_PHONE } from '../types';
import { createColonDetoxWhatsAppUrl } from '../utils/whatsapp';

interface DetoxPromoBannerProps {
  onAddComboToCart: () => void;
  onOpenYappyModal: () => void;
}

export const DetoxPromoBanner: React.FC<DetoxPromoBannerProps> = ({
  onAddComboToCart,
  onOpenYappyModal,
}) => {
  return (
    <section id="detox" className="py-14 lg:py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-950 text-xs font-black uppercase px-4 py-1.5 rounded-full mb-3 shadow-md tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Tratamiento Natural de Alta Eficacia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Protocolo de Limpieza de Colon & Desintoxicación
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-3 leading-relaxed">
            Especialmente formulado para hombres y mujeres en Panamá con digestión pesada, estreñimiento recurrente, hinchazón abdominal y exceso de toxinas. Resultados notables desde los primeros días.
          </p>
        </div>

        {/* The 2 Core Products Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-500/20 shadow-2xl">
          
          {/* Left Column: Product 1 (Fresh Drink) */}
          <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-emerald-400/40 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full">
                Paso 1: Evacuación & Alcalinidad
              </span>
              <span className="text-lg font-black text-amber-400">B/. 13.00</span>
            </div>

            <div className="aspect-4/3 flex items-center justify-center p-3 mb-4 bg-white/5 rounded-xl">
              <img 
                src="https://yamilkahgwpanama.shop/wp-content/uploads/2026/07/Fresh-Drink-Chang-JingJing-_-Bebida-Fresca-Chang-JingJing.png" 
                alt="Fresh Drink Chang JingJing"
                className="max-h-40 object-contain drop-shadow-lg"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <h3 className="text-xl font-black text-white">Fresh Drink Chang JingJing</h3>
            <p className="text-xs text-emerald-200 mt-1 mb-3">6 sobres de 21 g con hierba tierna de cebada, goji, regaliz y diente de león.</p>

            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Desprende residuos y materia fecal acumulada en las paredes del colon</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Suave y amigable: no produce cólicos dolorosos ni urgencias extremas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rico en clorofila para equilibrar el pH y desintoxicar el hígado</span>
              </li>
            </ul>
          </div>

          {/* Center Column: The Connection / Plus Sign & Combo Price */}
          <div className="lg:col-span-4 text-center space-y-4 py-2">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-amber-950 font-black text-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-400/20">
              +
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-300 block mb-1">
                COMBINA AMBOS Y OBTÉN EL TRATAMIENTO COMPLETO
              </span>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  B/. 37.00
                </span>
                <span className="text-lg text-slate-400 line-through font-bold">
                  B/. 42.00
                </span>
              </div>
              <p className="text-xs text-emerald-200/90 mt-1">
                ¡Ahorro directo en paquete promocional!
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-2.5 max-w-xs mx-auto pt-2">
              <button
                onClick={onAddComboToCart}
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 px-6 rounded-xl shadow-lg shadow-amber-400/20 transition cursor-pointer text-sm"
              >
                <span>Añadir Combo al Carrito</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={createColonDetoxWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl shadow-md transition cursor-pointer text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir por WhatsApp (+507 6760-3578)</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-300 pt-2">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                Envío Servientrega B/. 5.00
              </span>
              <button 
                onClick={onOpenYappyModal}
                className="flex items-center gap-1 text-amber-300 underline cursor-pointer hover:text-white"
              >
                <CreditCard className="w-3.5 h-3.5" />
                Paga por Yappy
              </button>
            </div>
          </div>

          {/* Right Column: Product 2 (Proshaping Tea) */}
          <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-emerald-400/40 transition">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-teal-300 bg-teal-950/60 px-3 py-1 rounded-full">
                Paso 2: Depuración & Quema Grasa
              </span>
              <span className="text-lg font-black text-amber-400">B/. 24.00</span>
            </div>

            <div className="aspect-4/3 flex items-center justify-center p-3 mb-4 bg-white/5 rounded-xl">
              <img 
                src="https://yamilkahgwpanama.shop/wp-content/uploads/2026/07/Pro-Shaping-Tea-_-Te-moldeador-profesional.png" 
                alt="Proshaping Tea"
                className="max-h-40 object-contain drop-shadow-lg"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <h3 className="text-xl font-black text-white">Pro-Shaping Tea</h3>
            <p className="text-xs text-teal-200 mt-1 mb-3">24 sobres filtrantes con té verde, espino blanco, semillas de casia y ginseng.</p>

            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Activa el metabolismo y favorece la quema de grasa localizada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Reduce niveles altos de colesterol, triglicéridos y retención</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Mantiene el tránsito intestinal diario sin efecto rebote</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Why Colon Cleanse Matters Breakdown Box */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Tiempo de Resultados</h4>
              <p className="text-slate-300 mt-1">La mayoría de nuestros clientes experimentan mayor frecuencia evacuatoria y alivio de pesadez entre el día 1 y 5.</p>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-800 text-teal-300 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Envíos a Todo Panamá</h4>
              <p className="text-slate-300 mt-1">Llegamos a Veraguas, Panamá, Chiriquí, Coclé, Herrera, Los Santos, Colón, Bocas del Toro, Darién y Comarcas.</p>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-800 text-amber-300 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Acompañamiento Personal</h4>
              <p className="text-slate-300 mt-1">Yamilka Batista te orienta paso a paso por WhatsApp durante todo tu tratamiento para garantizar tu bienestar.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
