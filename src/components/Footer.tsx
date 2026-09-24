import React from 'react';
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { 
  DISTRIBUTOR_NAME, 
  DISTRIBUTOR_LOCATION, 
  DISTRIBUTOR_EMAIL, 
  WHATSAPP_PHONE, 
  YAPPY_NUMBER, 
  REGISTRATION_URL,
  SPONSOR_CODE
} from '../types';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenYappyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenYappyModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Leaf className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">HGW Panamá</span>
                <p className="text-[11px] text-emerald-400 font-medium -mt-0.5">Salud & Bienestar Natural</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Promovemos un estilo de vida saludable mediante suplementos de alta tecnología, cafés funcionales con Ganoderma y Cordyceps, y accesorios terapéuticos de turmalina en toda la República de Panamá.
            </p>

            <div className="pt-2 text-slate-400 space-y-1.5">
              <p>
                <strong className="text-white">Distribuidora Autorizada:</strong> {DISTRIBUTOR_NAME}
              </p>
              <p>
                <strong className="text-white">Sede Base:</strong> {DISTRIBUTOR_LOCATION}
              </p>
              <p>
                <strong className="text-white">Código Patrocinador:</strong>{' '}
                <span className="text-emerald-400 font-mono font-bold">{SPONSOR_CODE}</span>
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('productos')}
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Catálogo de Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('detox')}
                  className="hover:text-emerald-400 transition cursor-pointer text-amber-300 font-semibold"
                >
                  Protocolo Limpieza de Colon
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('empresa')}
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Empresa & Ciencia HGW
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('sedes')}
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Sedes Internacionales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('testimonios')}
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Testimonios de Clientes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Contacto & Envíos
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Líneas HGW
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Limpieza de Colon & Tés</li>
              <li>Cafés con Ganoderma & Cordyceps</li>
              <li>Chocolates con Arándano</li>
              <li>Péptidos de Colágeno Marino</li>
              <li>Serie Candys Funcionales</li>
              <li>Terapéuticos con Turmalina</li>
              <li>Cuidado Íntimo Femenino</li>
            </ul>
          </div>

          {/* Envíos y Pagos */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Envíos & Pagos
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Envíos por <strong>SERVIENTREGA B/. 5.00</strong> a nivel nacional</span>
              </li>
              <li className="flex items-start gap-2">
                <CreditCard className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <button 
                    onClick={onOpenYappyModal}
                    className="text-white hover:text-blue-300 font-bold underline cursor-pointer text-left"
                  >
                    Pagos por Yappy: {YAPPY_NUMBER}
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 font-semibold"
                >
                  Registro Oficial HGW ({SPONSOR_CODE})
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="py-6 text-[11px] text-slate-500 leading-relaxed text-center max-w-4xl mx-auto space-y-2">
          <p>
            <strong>Aviso Legal:</strong> Este sitio es operado por un afiliado independiente de HGW Health Green World ({DISTRIBUTOR_NAME}). Aunque no es el sitio web corporativo oficial, la distribuidora posee amplio conocimiento sobre los productos y plan de compensación, ofreciendo asesoramiento experto y transparente. Para información oficial de la compañía visite www.healthgreenworld.com.
          </p>
          <p className="text-slate-400">
            © {new Date().getFullYear()} HGW Panamá • Distribuidor Independiente Yamilka Batista. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
