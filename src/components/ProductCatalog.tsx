import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  Sparkles, 
  Tag, 
  Leaf, 
  Coffee, 
  HeartPulse, 
  Smile, 
  Zap, 
  Award,
  Filter
} from 'lucide-react';
import { Product, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onOpenDetails,
  onAddToCart,
  selectedCategory = 'todos',
  onSelectCategory,
  searchTerm = '',
  onSearchChange,
}) => {
  const [internalCategory, setInternalCategory] = useState('todos');
  const [internalSearch, setInternalSearch] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'name'>('popular');
  const [onlyPromos, setOnlyPromos] = useState(false);

  const activeCategory = onSelectCategory ? selectedCategory : internalCategory;
  const setCategory = onSelectCategory || setInternalCategory;

  const currentSearch = onSearchChange ? searchTerm : internalSearch;
  const setSearch = onSearchChange || setInternalSearch;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (activeCategory !== 'todos' && p.category !== activeCategory) {
          return false;
        }

        // Only promos filter
        if (onlyPromos && !p.isPromo) {
          return false;
        }

        // Search filter
        if (currentSearch.trim() !== '') {
          const term = currentSearch.toLowerCase();
          const matchName = p.name.toLowerCase().includes(term);
          const matchSubtitle = p.subtitle.toLowerCase().includes(term);
          const matchDesc = p.description.toLowerCase().includes(term);
          const matchCat = p.categoryLabel.toLowerCase().includes(term);
          const matchIngredients = p.ingredients.some((ing) => ing.toLowerCase().includes(term));
          const matchBenefits = p.benefits.some((ben) => ben.toLowerCase().includes(term));
          return matchName || matchSubtitle || matchDesc || matchCat || matchIngredients || matchBenefits;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          return (b.reviewsCount || 0) - (a.reviewsCount || 0);
        }
        if (sortBy === 'price-asc') {
          return a.price - b.price;
        }
        if (sortBy === 'price-desc') {
          return b.price - a.price;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [products, activeCategory, currentSearch, sortBy, onlyPromos]);

  // Icon mapper helper
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'combos': return <Tag className="w-4 h-4" />;
      case 'detox': return <Leaf className="w-4 h-4" />;
      case 'cafes': return <Coffee className="w-4 h-4" />;
      case 'suplementos': return <HeartPulse className="w-4 h-4" />;
      case 'candys': return <Smile className="w-4 h-4" />;
      case 'turmalina': return <Zap className="w-4 h-4" />;
      case 'belleza': return <Award className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const handleClearFilters = () => {
    setCategory('todos');
    setSearch('');
    setOnlyPromos(false);
    setSortBy('popular');
  };

  return (
    <section id="productos" className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-black uppercase px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Catálogo Interactivo HGW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Productos en Panamá
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Filtra por categoría, busca por síntomas o beneficios deseados y haz tu pedido en un clic con entrega rápida nacional vía Servientrega.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 mb-8 space-y-4">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input Box */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={currentSearch}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nombre, síntoma (ej. estreñimiento, dolor, colágeno, café)..."
                className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 pl-11 pr-10 py-3 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 transition"
              />
              {currentSearch && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full transition cursor-pointer"
                  title="Limpiar búsqueda"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Quick Filter */}
            <div className="flex items-center gap-2.5">
              
              {/* Only Promos Toggle */}
              <button
                onClick={() => setOnlyPromos(!onlyPromos)}
                className={`flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  onlyPromos
                    ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Solo Promociones</span>
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl px-3 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition cursor-pointer appearance-none"
                >
                  <option value="popular">Más Populares</option>
                  <option value="price-asc">Menor Precio</option>
                  <option value="price-desc">Mayor Precio</option>
                  <option value="name">Alfabético (A-Z)</option>
                </select>
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

            </div>

          </div>

          {/* Category Tabs Scrollable Horizontal Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'todos' 
                ? products.length 
                : products.filter(p => p.category === cat.id).length;

              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    isSelected ? 'bg-emerald-900/60 text-emerald-100' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter and Active Filter Pill */}
        <div className="flex items-center justify-between gap-4 mb-6 text-xs text-slate-500">
          <p>
            Mostrando <strong>{filteredProducts.length}</strong> de {products.length} productos
            {currentSearch && <span> para "{currentSearch}"</span>}
          </p>

          {(activeCategory !== 'todos' || currentSearch || onlyPromos) && (
            <button
              onClick={handleClearFilters}
              className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center max-w-lg mx-auto border border-slate-200 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              No se encontraron productos
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Intenta con otro término de búsqueda o selecciona otra categoría para explorar el catálogo.
            </p>
            <button
              onClick={handleClearFilters}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition cursor-pointer shadow-sm"
            >
              Ver todos los productos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
