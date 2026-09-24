import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  CreditCard, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CartItem, CheckoutFormData, PANAMA_PROVINCES, SERVIENTREGA_COST, YAPPY_NUMBER, WHATSAPP_PHONE } from '../types';
import { createCartWhatsAppUrl } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenYappyModal: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenYappyModal,
}) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    province: 'Veraguas (Santiago)',
    city: '',
    deliveryOption: 'servientrega',
    addressOrBranch: '',
    paymentMethod: 'yappy',
    notes: '',
  });

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = formData.deliveryOption === 'servientrega' ? SERVIENTREGA_COST : 0;
  const total = subtotal + shipping;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const url = createCartWhatsAppUrl(items, formData);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between animate-slideInRight"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-emerald-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Tu Carrito de Compras</h3>
              <p className="text-xs text-emerald-200">
                {items.length === 0 ? 'Vacío' : `${items.reduce((acc, i) => acc + i.quantity, 0)} artículos seleccionados`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-800 rounded-full transition cursor-pointer"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          
          {items.length === 0 ? (
            /* Empty Cart View */
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">Tu carrito está vacío</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explora nuestro catálogo interactivo y añade los mejores productos naturales para tu salud y bienestar.
              </p>
              <button
                onClick={onClose}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition shadow-md cursor-pointer"
              >
                Ver Productos
              </button>
            </div>
          ) : (
            /* Items List & Checkout Form */
            <div className="space-y-4">
              
              {/* Product items list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                  <span>Productos en la orden</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                  >
                    Vaciar todo
                  </button>
                </div>

                {items.map((item) => (
                  <div 
                    key={item.product.id}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name}
                      className="w-14 h-14 object-contain bg-white rounded-xl p-1 shrink-0 border border-slate-200"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-emerald-700 font-extrabold">
                        B/. {item.product.price.toFixed(2)} c/u
                      </p>

                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center border border-slate-200 bg-white rounded-lg overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-slate-700 ml-auto">
                          B/. {(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500 transition cursor-pointer"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Delivery and Customer Information Section */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(!showCheckoutForm)}
                  className="w-full flex items-center justify-between p-3.5 bg-emerald-50 text-emerald-900 rounded-xl font-bold text-xs border border-emerald-200 hover:bg-emerald-100 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{showCheckoutForm ? 'Ocultar datos de entrega' : 'Completar datos de entrega & pago'}</span>
                  </span>
                  <span className="text-emerald-700 underline text-[11px]">
                    {showCheckoutForm ? 'Cerrar' : 'Editar datos'}
                  </span>
                </button>

                {showCheckoutForm && (
                  <form className="mt-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs animate-fadeIn">
                    
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Celular / WhatsApp *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. 6760-0000"
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Provincia de Destino</label>
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500"
                      >
                        {PANAMA_PROVINCES.map((prov) => (
                          <option key={prov} value={prov}>{prov}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Tipo de Entrega</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, deliveryOption: 'servientrega' })}
                          className={`p-2.5 rounded-lg border text-left transition ${
                            formData.deliveryOption === 'servientrega'
                              ? 'bg-emerald-100/70 border-emerald-600 text-emerald-900 font-bold'
                              : 'bg-white border-slate-300 text-slate-600'
                          }`}
                        >
                          <span className="block font-bold text-[11px]">🚚 Servientrega</span>
                          <span className="text-[10px] text-slate-500">+ B/. 5.00 nacional</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, deliveryOption: 'retiro' })}
                          className={`p-2.5 rounded-lg border text-left transition ${
                            formData.deliveryOption === 'retiro'
                              ? 'bg-emerald-100/70 border-emerald-600 text-emerald-900 font-bold'
                              : 'bg-white border-slate-300 text-slate-600'
                          }`}
                        >
                          <span className="block font-bold text-[11px]">📍 Retiro en Santiago</span>
                          <span className="text-[10px] text-emerald-600 font-bold">Gratis</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Dirección de Entrega o Sucursal Servientrega
                      </label>
                      <input
                        type="text"
                        value={formData.addressOrBranch}
                        onChange={(e) => setFormData({ ...formData, addressOrBranch: e.target.value })}
                        placeholder="Ej. Sucursal Servientrega Albrook Mall o Dirección exacta"
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Método de Pago Preferido</label>
                      <div className="grid grid-cols-3 gap-1.5 text-center">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: 'yappy' })}
                          className={`p-2 rounded-lg border text-[11px] ${
                            formData.paymentMethod === 'yappy'
                              ? 'bg-blue-100 border-blue-600 text-blue-900 font-bold'
                              : 'bg-white border-slate-300 text-slate-600'
                          }`}
                        >
                          📱 Yappy
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: 'ach' })}
                          className={`p-2 rounded-lg border text-[11px] ${
                            formData.paymentMethod === 'ach'
                              ? 'bg-emerald-100 border-emerald-600 text-emerald-900 font-bold'
                              : 'bg-white border-slate-300 text-slate-600'
                          }`}
                        >
                          🏦 ACH
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: 'efectivo' })}
                          className={`p-2 rounded-lg border text-[11px] ${
                            formData.paymentMethod === 'efectivo'
                              ? 'bg-slate-200 border-slate-500 text-slate-900 font-bold'
                              : 'bg-white border-slate-300 text-slate-600'
                          }`}
                        >
                          💵 Efectivo
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Instrucciones o notas adicionales</label>
                      <input
                        type="text"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Ej. Entregar en horario de la tarde"
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                  </form>
                )}
              </div>

              {/* Yappy payment quick helper box */}
              <div className="bg-blue-50/80 p-3 rounded-xl border border-blue-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <div>
                    <span className="font-bold text-blue-950 block">Pagos por Yappy al:</span>
                    <span className="text-blue-800 font-mono font-bold">{YAPPY_NUMBER}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenYappyModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1 rounded-lg text-[11px] transition cursor-pointer"
                >
                  Ver QR Yappy
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Drawer Footer with Totals and WhatsApp Submit */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3">
            
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal de productos:</span>
                <span className="font-bold text-slate-900">B/. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío ({formData.deliveryOption === 'servientrega' ? 'Servientrega Panamá' : 'Retiro en Santiago'}):</span>
                <span className="font-bold text-slate-900">
                  {shipping > 0 ? `B/. ${shipping.toFixed(2)}` : 'GRATIS'}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-emerald-950 pt-2 border-t border-slate-200">
                <span>TOTAL A PAGAR:</span>
                <span className="text-xl text-emerald-700">B/. {total.toFixed(2)}</span>
              </div>
            </div>

            {/* Main Action WhatsApp Order */}
            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-xl transition cursor-pointer text-sm group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              <span>Confirmar Pedido por WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[10px] text-center text-slate-400">
              Al tocar el botón se abrirá WhatsApp con el resumen de tu pedido listo para enviar a Yamilka Batista (+507 6760-3578).
            </p>

          </div>
        )}

      </div>
    </div>
  );
};
