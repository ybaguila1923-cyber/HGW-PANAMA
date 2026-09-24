import { CartItem, CheckoutFormData, WHATSAPP_PHONE, SERVIENTREGA_COST } from '../types';
import { Product } from '../data/products';

export function createCartWhatsAppUrl(items: CartItem[], formData: CheckoutFormData): string {
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = formData.deliveryOption === 'servientrega' ? SERVIENTREGA_COST : 0;
  const total = subtotal + shipping;

  let text = `🌿 *NUEVO PEDIDO - HGW PANAMÁ*\n`;
  text += `¡Hola Yamilka! Deseo confirmar el siguiente pedido de productos HGW:\n\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `📦 *DETALLE DE PRODUCTOS:*\n`;

  items.forEach((item, index) => {
    const itemTotal = (item.product.price * item.quantity).toFixed(2);
    text += `${index + 1}. *${item.product.name}*\n   ▸ Cantidad: ${item.quantity} x B/. ${item.product.price.toFixed(2)} = B/. ${itemTotal}\n`;
  });

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `💵 *Subtotal:* B/. ${subtotal.toFixed(2)}\n`;
  text += `🚚 *Envío (${formData.deliveryOption === 'servientrega' ? 'SERVIENTREGA Nacional' : 'Retiro en Santiago'}):* B/. ${shipping.toFixed(2)}\n`;
  text += `💰 *TOTAL A PAGAR:* B/. ${total.toFixed(2)}\n\n`;

  text += `📋 *DATOS DE ENTREGA:*\n`;
  text += `👤 *Cliente:* ${formData.fullName.trim() || 'No especificado'}\n`;
  text += `📱 *Teléfono:* ${formData.phone.trim() || 'No especificado'}\n`;
  text += `📍 *Provincia:* ${formData.province || 'Panamá'}\n`;
  text += `🏢 *Dirección / Sucursal:* ${formData.addressOrBranch.trim() || 'Por coordinar'}\n`;
  text += `💳 *Método de Pago:* ${
    formData.paymentMethod === 'yappy'
      ? 'Yappy Banco General (+507 6760-3578)'
      : formData.paymentMethod === 'ach'
      ? 'Transferencia Bancaria (ACH)'
      : 'Efectivo / Pago contraentrega'
  }\n`;

  if (formData.notes && formData.notes.trim()) {
    text += `📝 *Notas adicionales:* ${formData.notes.trim()}\n`;
  }

  text += `\nQuedo atento(a) a los datos para realizar el pago por Yappy o confirmar el envío por Servientrega. ¡Muchas gracias!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function createSingleProductWhatsAppUrl(product: Product, quantity = 1): string {
  const total = (product.price * quantity).toFixed(2);
  let text = `🌿 *CONSULTA / PEDIDO HGW PANAMÁ*\n\n`;
  text += `¡Hola Yamilka! Me interesa comprar el siguiente producto:\n\n`;
  text += `✨ *${product.name}*\n`;
  text += `▸ Categoría: ${product.categoryLabel}\n`;
  text += `▸ Cantidad: ${quantity}\n`;
  text += `▸ Precio unitario: B/. ${product.price.toFixed(2)}\n`;
  text += `▸ Total estimado: B/. ${total}\n\n`;
  text += `¿Me podrías confirmar disponibilidad y costo de envío por Servientrega a mi provincia? También quisiera los datos para pagar por Yappy. ¡Gracias!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function createColonDetoxWhatsAppUrl(): string {
  const text = `🌿 *PROTOCOLO DE LIMPIEZA DE COLON HGW*\n\n¡Hola Yamilka! Deseo información y ordenar el *Protocolo de Limpieza de Colon Natural* (Fresh Drink Chang JingJing + Proshaping Tea por B/. 37.00).\n\nPadezco de digestión lenta / estreñimiento y me gustaría recibir tu asesoría personalizada para iniciar mi tratamiento de desintoxicación. ¿Cómo coordinamos el envío por Servientrega?`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function createAffiliationWhatsAppUrl(): string {
  const text = `🤝 *AFILIACIÓN / DISTRIBUIDOR HGW PANAMÁ*\n\n¡Hola Yamilka! Quisiera información sobre cómo afiliarme a HGW Panamá bajo tu patrocinio (*Código: Yamilka507*) para comprar los productos con descuento del 30% al 50% y generar ingresos. ¿Cuáles son los pasos a seguir?`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
