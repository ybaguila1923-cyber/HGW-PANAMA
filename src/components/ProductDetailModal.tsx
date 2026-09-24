import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  Check, 
  ShieldCheck, 
  Leaf, 
  AlertCircle, 
  Package, 
  Play, 
  Sparkles,
  Plus,
  Minus
} from 'lucide-react';
import { Product } from '../data/products';
import { createSingleProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  const [added, setAdded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const handleDirectWhatsApp = () => {
    window.open(createSingleProductWhatsAppUrl(product, quantity), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-800 p-2 rounded-full transition shadow-xs cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Product Image & Video */}
          <div className="md:col-span-5 bg-gradient-to-b from-slate-50 to-emerald-50/40 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 relative">
            
            {product.badge && (
              <span className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {product.badge}
              </span>
            )}

            <div className="w-full aspect-square flex items-center justify-center p-4">
              {!imageError ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  onError={() => setImageError(true)}
                  className="max-h-64 max-w-full object-contain filter drop-shadow-md hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-32 h-32 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Leaf className="w-16 h-16" />
                </div>
              )}
            </div>

            {/* Video preview trigger if available */}
            {product.youtubeId && (
              <div className="w-full mt-3">
                {!showVideo ? (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-red-600 text-red-600" />
                    <span>Ver Video Demostrativo</span>
                  </button>
                ) : (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mt-2 shadow-inner border border-slate-200">
                    <iframe
                      src={`https://www.youtube.com/embed/${product.youtubeId}?autoplay=1`}
                      title="Video producto HGW"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}

            {/* Presentation detail pill */}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 bg-white/80 py-1.5 px-3 rounded-xl border border-slate-200">
              <Package className="w-4 h-4 text-emerald-600" />
              <span>{product.presentation}</span>
            </div>
          </div>

          {/* Right Column: Product Detailed Information */}
          <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-xs text-slate-400 font-normal">({product.reviewsCount} opiniones verificadas)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {product.name}
                </h2>
                <p className="text-sm font-semibold text-emerald-700 mt-0.5">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-3xl font-black text-emerald-800">
                  B/. {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through font-bold">
                    B/. {product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-600 ml-auto bg-emerald-100/70 px-2.5 py-1 rounded-full">
                  ✓ En existencia para entrega inmediata
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Beneficios Principales</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {product.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ingredients & How to Use */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <h5 className="font-bold text-emerald-900 mb-1 flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ingredientes</span>
                  </h5>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {product.ingredients.join(', ')}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <h5 className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                    <Package className="w-3.5 h-3.5 text-slate-600" />
                    <span>Modo de Uso</span>
                  </h5>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {product.usage}
                  </p>
                </div>
              </div>

              {product.precautions && (
                <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Nota:</strong> {product.precautions}</span>
                </div>
              )}

            </div>

            {/* Bottom Controls: Quantity + Add to Cart + WhatsApp */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">Cantidad:</span>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                    <button
                      onClick={handleDecrement}
                      className="p-2 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-9 text-center font-black text-sm text-slate-800">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="p-2 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block font-medium">Subtotal estimado</span>
                  <span className="text-lg font-black text-emerald-800">
                    B/. {(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleAddToCart}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm shadow-md transition duration-200 cursor-pointer ${
                    added
                      ? 'bg-emerald-900 text-white'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>¡Agregado al Carrito!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Agregar al Carrito</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir por WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🚚 Envíos a todas las provincias de Panamá por SERVIENTREGA (B/. 5.00). Pagos por Yappy al 6760-3578.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
