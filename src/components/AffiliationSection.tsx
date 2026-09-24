import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  ExternalLink, 
  QrCode, 
  Sparkles, 
  Award, 
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Percent
} from 'lucide-react';
import { SPONSOR_CODE, REGISTRATION_URL, WHATSAPP_PHONE } from '../types';
import { createAffiliationWhatsAppUrl } from '../utils/whatsapp';

interface AffiliationSectionProps {
  onOpenYappyModal: () => void;
}

export const AffiliationSection: React.FC<AffiliationSectionProps> = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-emerald-50/50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-emerald-800 to-teal-950 rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Oportunidad de Negocio & Consumo Inteligente</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Afíliate a HGW Panamá y Obtén del <span className="text-amber-400">30% al 50% de Descuento</span>
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Únete a nuestra red internacional de distribuidores independientes o ahorra consumiendo al por mayor. Recibe el respaldo directo de <strong>Yamilka Batista</strong> con entrenamientos semanales, material publicitario digital y acompañamiento constante.
              </p>

              {/* Benefits bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Percent className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Descuentos inmediatos desde tu primera orden</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <TrendingUp className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Plan de compensación de alta rentabilidad sin pérdidas de rango</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Comercializa productos con alta demanda y resultados comprobados</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Users className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Comunidad de apoyo y asesoría continua por WhatsApp</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg shadow-amber-400/20 transition cursor-pointer text-sm"
                >
                  <span>Afiliarme Online (Código: {SPONSOR_CODE})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={createAffiliationWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-5 py-3.5 rounded-xl transition cursor-pointer text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Preguntar por WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Card: QR Code & Sponsor Card */}
            <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-6 shadow-2xl text-center border border-emerald-200">
              
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
                <QrCode className="w-6 h-6" />
              </div>

              <h4 className="font-extrabold text-slate-900 text-base">
                Escanea el Código QR
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Enlace directo al formulario de registro en Health Green World
              </p>

              {/* QR Image Box */}
              <div className="w-48 h-48 mx-auto bg-slate-50 rounded-2xl p-3 border-2 border-dashed border-emerald-300 flex items-center justify-center shadow-inner relative group">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https%3A%2F%2Fwww.healthgreenworld.com%2F%3FuserName%3DYamilka507"
                  alt="QR Registro HGW Yamilka Batista"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="text-[11px] font-bold text-slate-500 block">Patrocinador Oficial HGW:</span>
                <span className="text-sm font-black text-emerald-800 tracking-wide font-mono">
                  {SPONSOR_CODE}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Yamilka Batista (Santiago de Veraguas)</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
