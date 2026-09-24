import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  Plus, 
  Send, 
  ShieldCheck, 
  Sparkles,
  UserCheck
} from 'lucide-react';
import { INITIAL_TESTIMONIALS, Testimonial } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // New review form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [productUsed, setProductUsed] = useState('Protocolo Limpieza de Colon');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || 'Panamá',
      rating,
      productUsed,
      comment: comment.trim(),
      date: 'Reciente',
      verified: true,
      avatarBg: 'bg-emerald-600',
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setName('');
    setLocation('');
    setComment('');
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Experiencias Reales en Panamá</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Lo que Dicen Quienes Ya Probaron HGW
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Cientos de personas en Santiago de Veraguas, Ciudad de Panamá, Chiriquí y todo el país han recuperado su bienestar digestivo y calidad de vida.
            </p>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition cursor-pointer shadow-md shrink-0 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>{showAddForm ? 'Cancelar' : 'Dejar mi Testimonio'}</span>
          </button>
        </div>

        {/* Add Testimonial Modal/Accordion Form */}
        {showAddForm && (
          <div className="mb-12 bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-8 animate-fadeIn max-w-2xl mx-auto shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-1">
              Comparte tu Experiencia con HGW Panamá
            </h3>
            <p className="text-xs text-slate-600 mb-5">
              Tu testimonio ayuda a más personas que buscan una solución natural para su salud.
            </p>

            {formSuccess ? (
              <div className="bg-emerald-100 text-emerald-900 p-4 rounded-xl text-center font-bold text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>¡Gracias por compartir tu testimonio! Ha sido agregado exitosamente.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Tu Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Gloria Mendoza"
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Tu Ubicación / Provincia</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ej. Santiago, Veraguas"
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Producto o Tratamiento Utilizado</label>
                    <input
                      type="text"
                      value={productUsed}
                      onChange={(e) => setProductUsed(e.target.value)}
                      placeholder="Ej. Protocolo Limpieza de Colon, Café Ganoderma..."
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Calificación</label>
                    <div className="flex items-center gap-1.5 pt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 text-amber-400 hover:scale-125 transition cursor-pointer"
                        >
                          <Star className={`w-5 h-5 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-600 ml-2">{rating} de 5 estrellas</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tu Reseña o Testimonio *</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Cuéntanos cómo te ayudó el producto, en cuánto tiempo notaste el cambio y qué tal fue la atención de Yamilka..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-6 rounded-xl transition cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Publicar Testimonio</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-200 hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>

                  {t.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                      <UserCheck className="w-3 h-3" />
                      <span>Compra Verificada</span>
                    </span>
                  )}
                </div>

                {/* Product used pill */}
                <span className="inline-block text-[11px] font-bold text-emerald-800 bg-white border border-emerald-100 px-2.5 py-1 rounded-lg">
                  🌿 {t.productUsed}
                </span>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full ${t.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">{t.location}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
