import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Award, 
  Leaf, 
  HeartHandshake,
  CreditCard
} from 'lucide-react';
import { WHATSAPP_PHONE, SERVIENTREGA_COST } from '../types';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onExploreDetox: () => void;
  onOpenYappyModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onExploreDetox,
  onOpenYappyModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-emerald-100/60">
      {/* Decorative organic background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Call To Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Tag / Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-2xs border border-emerald-200">
              <Leaf className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>HGW Health Green World • Distribuidor Oficial Panamá</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Tu Salud y Vitalidad con la Fuerza de la <span className="text-emerald-700 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">Naturaleza</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Descubre el poder restaurador del <strong>Ganoderma Lucidum</strong>, los antioxidantes del <strong>Arándano Silvestre</strong> y la terapia celular de la <strong>Turmalina</strong>. Especialistas en el <em>Protocolo Natural de Limpieza de Colon</em> para aliviar el estreñimiento y desinflamar tu cuerpo.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Limpieza de colon en 1 a 5 días</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Envíos Servientrega B/. 5.00</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Pagos fáciles por Yappy</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-700/25 hover:shadow-xl transition-all duration-200 cursor-pointer text-base group"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreDetox}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-md shadow-amber-500/20 transition-all duration-200 cursor-pointer text-base"
              >
                <Sparkles className="w-5 h-5 text-amber-950" />
                <span>Protocolo Colon Detox</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Me gustaría recibir asesoría sobre los productos HGW Panamá.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 font-bold px-5 py-3 rounded-xl transition cursor-pointer text-base shadow-2xs"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Distributor Trust Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                YB
              </div>
              <p>
                Asesoría personalizada por <strong>Yamilka Batista</strong> • Santiago de Veraguas, Panamá
              </p>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Highlight Card */}
              <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-emerald-950/10 border border-emerald-100">
                
                {/* Floating promo sticker */}
                <div className="absolute -top-3.5 -right-2 sm:-right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-md transform rotate-2 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COMBO DETOX B/. 37.00</span>
                </div>

                {/* Visual Image Grid / Card Header */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 mb-5 border border-emerald-100/70 text-center relative overflow-hidden">
                  <div className="flex items-center justify-center gap-4 py-2">
                    <div className="text-center group">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-md p-2 flex items-center justify-center mx-auto border border-emerald-100 transition-transform group-hover:scale-105">
                        <img 
                          src="https://yamilkahgwpanama.shop/wp-content/uploads/2026/07/Fresh-Drink-Chang-JingJing-_-Bebida-Fresca-Chang-JingJing.png" 
                          alt="Fresh Drink Chang JingJing"
                          className="max-h-full object-contain"
                          onError={(e) => {
                            // Fallback if network blocked
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="text-emerald-700 font-bold text-xs">Fresh Drink</div>
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 mt-1 block">Fresh Drink B/. 13</span>
                    </div>

                    <span className="text-2xl font-black text-emerald-600">+</span>

                    <div className="text-center group">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-md p-2 flex items-center justify-center mx-auto border border-emerald-100 transition-transform group-hover:scale-105">
                        <img 
                          src="https://yamilkahgwpanama.shop/wp-content/uploads/2026/07/Pro-Shaping-Tea-_-Te-moldeador-profesional.png" 
                          alt="Proshaping Tea"
                          className="max-h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="text-emerald-700 font-bold text-xs">Proshaping Tea</div>
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 mt-1 block">Pro Shaping B/. 24</span>
                    </div>
                  </div>

                  <p className="text-xs text-emerald-900 font-medium mt-2 bg-emerald-200/60 py-1 px-3 rounded-full inline-block">
                    🌿 Tratamiento para Colon, Estreñimiento & Sobrepeso
                  </p>
                </div>

                {/* Quick Info Points */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Fresh Drink Chang JingJing</h4>
                      <p className="text-xs text-slate-500">6 sobres con cebada, goji y clorofila para disolver residuos del colon.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Pro-Shaping Tea</h4>
                      <p className="text-xs text-slate-500">24 sachets de té milenario para quemar grasa y regular el colesterol.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Entrega Rápida en Panamá</h4>
                      <p className="text-xs text-slate-500">Enviamos a tu sucursal o domicilio por Servientrega (B/. 5.00).</p>
                    </div>
                  </div>
                </div>

                {/* Direct Order Button on card */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">Precio Promocional</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-emerald-700">B/. 37.00</span>
                      <span className="text-xs text-slate-400 line-through">B/. 42.00</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Deseo ordenar el Combo de Limpieza de Colon por B/. 37.00.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir Combo</span>
                  </a>
                </div>

              </div>

              {/* Bottom decorative stats bar */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/80 p-2 rounded-xl border border-slate-200">
                  <span className="block text-base font-extrabold text-emerald-800">+10,000</span>
                  <span className="text-[10px] text-slate-500 font-medium">Clientes Felices</span>
                </div>
                <div className="bg-white/80 p-2 rounded-xl border border-slate-200">
                  <span className="block text-base font-extrabold text-emerald-800">100%</span>
                  <span className="text-[10px] text-slate-500 font-medium">Orgánico & Seguro</span>
                </div>
                <div className="bg-white/80 p-2 rounded-xl border border-slate-200">
                  <span className="block text-base font-extrabold text-emerald-800">5 Días</span>
                  <span className="text-[10px] text-slate-500 font-medium">Entrega Máxima</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
