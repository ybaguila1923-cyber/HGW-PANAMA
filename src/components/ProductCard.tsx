import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Eye, 
  MessageCircle, 
  Star, 
  Sparkles, 
  Check,
  Zap,
  Coffee,
  Leaf
} from 'lucide-react';
import { Product } from '../data/products';
import { createSingleProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToCart,
}) => {
  const [imageError, setImageError] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(createSingleProductWhatsAppUrl(product, 1), '_blank');
  };

  return (
    <div 
      onClick={() => onOpenDetails(product)}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs tracking-wide uppercase flex items-center gap-1 ${
            product.isPromo 
              ? 'bg-amber-400 text-amber-950 font-black' 
              : 'bg-emerald-700 text-white'
          }`}>
            <Sparkles className="w-3 h-3" />
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container with Fallback */}
      <div className="relative aspect-square w-full bg-slate-50 p-5 flex items-center justify-center overflow-hidden border-b border-slate-100 group-hover:bg-emerald-50/30 transition-colors">
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 shadow-xs">
              {product.category === 'cafes' ? (
                <Coffee className="w-8 h-8" />
              ) : product.category === 'turmalina' ? (
                <Zap className="w-8 h-8" />
              ) : (
                <Leaf className="w-8 h-8" />
              )}
            </div>
            <span className="text-xs font-bold text-slate-700">{product.name}</span>
            <span className="text-[10px] text-emerald-600 font-semibold">{product.categoryLabel}</span>
          </div>
        )}

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(product);
          }}
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-emerald-700 cursor-pointer"
          title="Ver detalles rápidos"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-extrabold text-base sm:text-lg text-slate-900 line-clamp-1 group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>

          {/* Product Subtitle */}
          <p className="text-xs text-slate-500 line-clamp-1 mb-2 font-medium">
            {product.subtitle}
          </p>

          {/* Short description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing and Actions */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Precio unitario</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-emerald-800">
                  B/. {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through font-semibold">
                    B/. {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-emerald-600 font-bold flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponible
              </span>
              <span className="text-[10px] text-slate-400 block">{product.presentation}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAdd}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition duration-200 cursor-pointer shadow-xs ${
                added
                  ? 'bg-emerald-800 text-white'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>¡Añadido!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Al Carrito</span>
                </>
              )}
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition duration-200 cursor-pointer"
              title="Pedir directamente por WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
