import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Phone, 
  Search, 
  Globe2, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { HGW_OFFICES, HgwOffice } from '../data/offices';
import { SPONSOR_CODE, REGISTRATION_URL, WHATSAPP_PHONE } from '../types';

export const OfficesSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique countries
  const countries = useMemo(() => {
    const list = Array.from(new Set(HGW_OFFICES.map((o) => o.country)));
    return ['todos', ...list];
  }, []);

  const filteredOffices = useMemo(() => {
    return HGW_OFFICES.filter((office) => {
      const matchCountry = selectedCountry === 'todos' || office.country === selectedCountry;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        office.city.toLowerCase().includes(q) ||
        office.address.toLowerCase().includes(q) ||
        office.country.toLowerCase().includes(q);
      return matchCountry && matchSearch;
    });
  }, [selectedCountry, searchQuery]);

  return (
    <section id="sedes" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-black uppercase px-3.5 py-1 rounded-full mb-3">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Presencia Global • Sedes Físicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Directorio Oficial de Oficinas HGW Hispanoamérica
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            HGW cuenta con centros de distribución y oficinas corporativas autorizadas en Panamá, Colombia, México, Perú, Bolivia, Ecuador, República Dominicana, El Salvador, Chile y España.
          </p>
        </div>

        {/* Important purchase notice box */}
        <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold mt-1 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-black text-amber-950">
                Nota Importante para Compras en Oficinas HGW
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Para realizar compras directamente en ventanilla en cualquiera de las oficinas oficiales de HGW a nivel nacional o internacional, es indispensable contar con un <strong>código de usuario registrado</strong>.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Si aún no tienes tu código de usuario, puedes crearlo de inmediato con mi patrocinio oficial:
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-xs cursor-pointer"
                >
                  <span>Crear Cuenta con Patrocinador: <strong>{SPONSOR_CODE}</strong></span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Deseo que me registres como cliente/distribuidor para comprar en oficinas de HGW con tu código.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white border border-emerald-600 text-emerald-800 font-bold text-xs px-4 py-2 rounded-xl hover:bg-emerald-50 transition cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ayuda por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Country Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold capitalize whitespace-nowrap transition cursor-pointer ${
                  selectedCountry === country
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {country === 'todos' ? '🌎 Todos los Países' : country}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar ciudad o dirección..."
              className="w-full bg-white border border-slate-200 pl-9 pr-3 py-2 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

        </div>

        {/* Offices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffices.map((office) => (
            <div
              key={office.id}
              className={`bg-white rounded-2xl p-5 sm:p-6 border transition hover:shadow-lg flex flex-col justify-between ${
                office.country === 'Panamá'
                  ? 'border-2 border-emerald-500 shadow-md ring-2 ring-emerald-500/10'
                  : 'border-slate-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{office.flag}</span>
                    <span className="text-xs font-extrabold text-slate-500 uppercase">
                      {office.country}
                    </span>
                  </div>
                  {office.country === 'Panamá' && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                      Sede Panamá
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-slate-900">
                  {office.city}
                </h3>

                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{office.address}</span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{office.schedule}</span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div className="flex flex-wrap gap-1.5">
                    {office.phones.map((phone, idx) => (
                      <span key={idx} className="font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        {phone}
                      </span>
                    ))}
                  </div>
                </div>

                {office.notes && (
                  <p className="text-[11px] text-emerald-800 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                    💡 {office.notes}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Patrocinador: Yamilka507</span>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`¡Hola Yamilka! Deseo orientación para comprar en la oficina de HGW en ${office.city}, ${office.country}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consultar</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
