import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  Copy, 
  Check, 
  ExternalLink, 
  Smartphone, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';
import { YAPPY_NUMBER, WHATSAPP_PHONE, DISTRIBUTOR_NAME } from '../types';

interface YappyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const YappyModal: React.FC<YappyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('67603578');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 animate-fadeIn text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-500 p-2 rounded-full transition cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-600/25">
          <CreditCard className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-black text-slate-900">
          Pagos Rápidos por Yappy
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Banco General • Sin comisiones adicionales
        </p>

        {/* QR Code Container */}
        <div className="mt-5 p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-xs mx-auto">
          <div className="bg-white p-3 rounded-xl shadow-inner border border-slate-100 mb-3">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fwa.me%2F50767603578%3Ftext%3DPago%20Yappy%20HGW%20Panama" 
              alt="QR Yappy HGW Panama"
              className="w-44 h-44 mx-auto object-contain"
            />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Titular Yappy:</span>
            <span className="text-sm font-black text-slate-800 block">{DISTRIBUTOR_NAME}</span>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 py-1 px-3 rounded-full inline-block mt-1">
              {YAPPY_NUMBER}
            </span>
          </div>

          {/* Copy phone button */}
          <button
            onClick={handleCopy}
            className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">¡Número 6760-3578 copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copiar número para Yappy</span>
              </>
            )}
          </button>
        </div>

        {/* 4 Steps */}
        <div className="mt-5 text-left text-xs space-y-2 text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
            <span>Abre tu app <strong>Banca Móvil de Banco General</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
            <span>Selecciona <strong>Yappy</strong> y busca el número <strong>6760-3578</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
            <span>Ingresa el monto de tu pedido y confirma el envío</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">4</span>
            <span>Envía la captura del comprobante a Yamilka por WhatsApp</span>
          </div>
        </div>

        <div className="mt-5">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Yamilka! Ya realicé mi pago por Yappy. Te adjunto mi comprobante para coordinar el envío por Servientrega.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar Comprobante por WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
