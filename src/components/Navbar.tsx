import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Phone, 
  Leaf, 
  Sparkles, 
  Search, 
  MapPin, 
  CreditCard,
  MessageCircle
} from 'lucide-react';
import { YAPPY_NUMBER, WHATSAPP_PHONE } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenYappyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  activeSection,
  onNavigate,
  onOpenYappyModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Productos & Catálogo' },
    { id: 'detox', label: 'Limpieza de Colon' },
    { id: 'empresa', label: 'Empresa & Ciencia' },
    { id: 'sedes', label: 'Sedes Oficiales' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-emerald-100 transition-all">
      {/* Top Banner Announcement */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>🇵🇦 Envíos a todo Panamá por <strong>SERVIENTREGA B/. 5.00</strong> (1 a 5 días)</span>
            <span className="hidden md:inline text-emerald-300">|</span>
            <span className="hidden md:inline">Distribuidor Oficial: <strong>Yamilka Batista</strong></span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <button 
              onClick={onOpenYappyModal}
              className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-white px-2 py-0.5 rounded text-[11px] font-semibold transition cursor-pointer"
            >
              <CreditCard className="w-3 h-3 text-emerald-300" />
              <span>Yappy: {YAPPY_NUMBER}</span>
            </button>
            <a 
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Deseo información de productos HGW Panamá.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-200 hover:text-white transition font-medium"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition duration-300">
              <Leaf className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-emerald-950 font-display">
                  HGW
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                  Panamá
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight -mt-0.5">
                Salud & Bienestar Natural
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                  activeSection === item.id
                    ? 'text-emerald-700 bg-emerald-50 shadow-2xs'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-full transition cursor-pointer"
              title="Buscar productos"
              aria-label="Buscar productos"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-2 rounded-xl font-bold shadow-md shadow-emerald-700/20 transition hover:shadow-lg cursor-pointer text-sm"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Carrito</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-amber-950 text-xs font-black px-1.5 py-0.5 rounded-full min-w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-xl">
          <div className="pb-2 border-b border-slate-100 mb-2">
            <p className="text-xs text-slate-500 font-medium">Distribuidora Independiente:</p>
            <p className="text-sm font-bold text-slate-800">Yamilka Batista (Santiago de Veraguas)</p>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold transition ${
                activeSection === item.id
                  ? 'bg-emerald-50 text-emerald-800 border-l-4 border-emerald-600 pl-4'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenYappyModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-800 border border-blue-200 py-2.5 rounded-xl font-bold text-sm"
            >
              <CreditCard className="w-4 h-4 text-blue-600" />
              Pagar por Yappy Banco General
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Deseo hacer una consulta sobre los productos HGW Panamá.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chatear por WhatsApp (+507 6760-3578)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
