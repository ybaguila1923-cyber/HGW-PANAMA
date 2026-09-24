import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DetoxPromoBanner } from './components/DetoxPromoBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { ScienceSection } from './components/ScienceSection';
import { OfficesSection } from './components/OfficesSection';
import { AffiliationSection } from './components/AffiliationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { YappyModal } from './components/YappyModal';
import { Footer } from './components/Footer';

import { PRODUCTS, Product } from './data/products';
import { CartItem, WHATSAPP_PHONE } from './types';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hgw_panama_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isYappyModalOpen, setIsYappyModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Navigation & Search State
  const [activeSection, setActiveSection] = useState('inicio');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hgw_panama_cart', JSON.stringify(cart));
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  // Scroll listener for back to top button and active nav
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['inicio', 'productos', 'detox', 'empresa', 'sedes', 'testimonios', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Navigation smoothly scrolls to anchor
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSearch = () => {
    handleNavigate('productos');
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  };

  const handleAddDetoxCombo = () => {
    const combo = PRODUCTS.find((p) => p.id === 'combo-colon-detox');
    if (combo) {
      handleAddToCart(combo, 1);
      setIsCartOpen(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={handleOpenSearch}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenYappyModal={() => setIsYappyModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio">
          <HeroSection
            onExploreProducts={() => handleNavigate('productos')}
            onExploreDetox={() => handleNavigate('detox')}
            onOpenYappyModal={() => setIsYappyModalOpen(true)}
          />
        </section>

        {/* Colon Detox Highlight Section */}
        <DetoxPromoBanner
          onAddComboToCart={handleAddDetoxCombo}
          onOpenYappyModal={() => setIsYappyModalOpen(true)}
        />

        {/* Interactive Products Catalog */}
        <ProductCatalog
          products={PRODUCTS}
          onOpenDetails={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Company & Science Section */}
        <ScienceSection />

        {/* International Offices Directory */}
        <OfficesSection />

        {/* Affiliation / Business Opportunity Section */}
        <AffiliationSection onOpenYappyModal={() => setIsYappyModalOpen(true)} />

        {/* Customer Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Form & Distribution Info */}
        <ContactSection onOpenYappyModal={() => setIsYappyModalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenYappyModal={() => setIsYappyModalOpen(true)}
      />

      {/* Modals and Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOpenYappyModal={() => {
          setIsCartOpen(false);
          setIsYappyModalOpen(true);
        }}
      />

      <YappyModal
        isOpen={isYappyModalOpen}
        onClose={() => setIsYappyModalOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Me comunico desde la página web de HGW Panamá.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center group"
        title="Chatear con Yamilka Batista en WhatsApp"
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          Chatear ahora
        </span>
      </a>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-white hover:bg-slate-100 text-slate-700 p-3 rounded-full shadow-lg border border-slate-200 hover:scale-105 transition duration-200 cursor-pointer"
          title="Subir al inicio"
          aria-label="Subir al inicio"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
