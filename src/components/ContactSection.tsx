import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  CreditCard, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle,
  HelpCircle,
  Building,
  ShieldCheck
} from 'lucide-react';
import { 
  WHATSAPP_PHONE, 
  YAPPY_NUMBER, 
  DISTRIBUTOR_NAME, 
  DISTRIBUTOR_LOCATION, 
  DISTRIBUTOR_EMAIL, 
  SERVIENTREGA_COST 
} from '../types';

interface ContactSectionProps {
  onOpenYappyModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenYappyModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Protocolo Limpieza de Colon');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    // Build whatsapp text option
    const text = `🌿 *MENSAJE DESDE LA WEB HGW PANAMÁ*\n\n` +
      `👤 *Nombre:* ${name.trim()}\n` +
      `📱 *Teléfono:* ${phone.trim()}\n` +
      `✉️ *Correo:* ${email.trim() || 'No especificado'}\n` +
      `📋 *Tema de Interés:* ${topic}\n` +
      `💬 *Mensaje:* ${message.trim()}\n`;

    // Open WhatsApp
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-black uppercase px-3.5 py-1 rounded-full mb-3">
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Atención Personalizada en Panamá</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contáctanos y Haz tu Pedido Hoy Mismo
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            ¿Tienes dudas sobre qué producto elegir para tu condición o cómo funciona el envío? Escríbenos directamente o completa el formulario a continuación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Distributor Profile Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200 space-y-4">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white font-black text-xl flex items-center justify-center shadow-md">
                  YB
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{DISTRIBUTOR_NAME}</h3>
                  <p className="text-xs text-emerald-700 font-bold">Emprendedora Digital & Distribuidora HGW</p>
                  <p className="text-xs text-slate-500">{DISTRIBUTOR_LOCATION}</p>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 text-xs">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Me comunico desde la página web de HGW Panamá.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-emerald-700">WhatsApp / Pedidos:</span>
                    <span className="text-sm font-black text-slate-900">+507 6760-3578</span>
                  </div>
                </a>

                <a
                  href={`mailto:${DISTRIBUTOR_EMAIL}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 transition group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-500">Correo Electrónico:</span>
                    <span className="text-xs font-bold text-slate-800">{DISTRIBUTOR_EMAIL}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900">
                  <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-500">Ubicación Base:</span>
                    <span className="text-xs font-bold text-slate-800">Santiago de Veraguas, Panamá</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Shipping & Payment Box */}
            <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <h4 className="font-extrabold text-base flex items-center gap-2 text-emerald-200">
                <Truck className="w-5 h-5 text-emerald-400" />
                <span>Cobertura de Envíos Nacionales</span>
              </h4>

              <div className="space-y-2 text-xs text-slate-200">
                <p>
                  Envíos a todo el territorio panameño a través de <strong>SERVIENTREGA</strong> por una tarifa fija de <strong>B/. {SERVIENTREGA_COST.toFixed(2)}</strong>.
                </p>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <span className="block text-[11px] font-bold text-emerald-300 mb-1">Provincias con cobertura:</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Veraguas, Ciudad de Panamá, Panamá Oeste, Chiriquí, Coclé, Herrera, Los Santos, Colón, Bocas del Toro, Darién y Comarcas.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-amber-300">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Tiempo de entrega estimado: <strong>hasta 5 días hábiles</strong></span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>Pagos por <strong>Yappy</strong></span>
                </div>
                <button
                  onClick={onOpenYappyModal}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-[11px] font-black px-3 py-1.5 rounded-lg transition cursor-pointer"
                >
                  Ver Datos Yappy
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Envíanos tu Consulta
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Te responderemos a la brevedad con información detallada, costos de envío a tu provincia y disponibilidad de stock.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-base text-emerald-950">¡Mensaje Preparado!</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Hemos transferido tu consulta a WhatsApp. Si no se abrió automáticamente tu aplicación, puedes hacer clic en el botón a continuación.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`¡Hola Yamilka! Soy ${name}, consulta: ${message}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir WhatsApp Ahora</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">Tu Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Roberto Sánchez"
                      className="w-full p-3 bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 6760-0000"
                      className="w-full p-3 bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">Correo Electrónico (Opcional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tunombre@ejemplo.com"
                      className="w-full p-3 bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1.5">Motivo de tu Consulta</label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full p-3 bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    >
                      <option value="Protocolo Limpieza de Colon">Protocolo Limpieza de Colon (Combo B/. 37)</option>
                      <option value="Consulta sobre Cafés Saludables">Cafés con Ganoderma / Cordyceps / Arándano</option>
                      <option value="Artículos con Turmalina">Artículos Terapéuticos con Turmalina</option>
                      <option value="Afiliación y Descuentos HGW">Afiliación como Distribuidor / Descuentos</option>
                      <option value="Consulta General de Salud">Consulta General de Salud / Envíos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Mensaje o Consulta Específica *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe tus síntomas, qué producto te interesa o tu provincia para cotizar el envío..."
                    className="w-full p-3 bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition duration-200 shadow-md shadow-emerald-700/20 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Tu privacidad está protegida. No compartimos tus datos con terceros.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
