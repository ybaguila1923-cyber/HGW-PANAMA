import { Product } from './data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  province: string;
  city: string;
  deliveryOption: 'servientrega' | 'retiro';
  addressOrBranch: string;
  paymentMethod: 'yappy' | 'ach' | 'efectivo';
  notes: string;
}

export const PANAMA_PROVINCES = [
  'Veraguas (Santiago)',
  'Panamá Centro',
  'Panamá Oeste (Chorrera, Arraiján)',
  'Chiriquí (David, Boquete, Bugaba)',
  'Coclé (Penonomé, Aguadulce, Antón)',
  'Herrera (Chitré, Pesé)',
  'Los Santos (Las Tablas, Guararé)',
  'Colón',
  'Bocas del Toro (Changuinola, Isla Colón)',
  'Darién',
  'Comarca Ngäbe-Buglé',
  'Comarca Guna Yala'
];

export const YAPPY_NUMBER = '+507 6760-3578';
export const WHATSAPP_PHONE = '50767603578';
export const DISTRIBUTOR_NAME = 'Yamilka Batista';
export const DISTRIBUTOR_LOCATION = 'Santiago de Veraguas, Panamá';
export const DISTRIBUTOR_EMAIL = 'info.yamilka@gmail.com';
export const SPONSOR_CODE = 'Yamilka507';
export const REGISTRATION_URL = 'https://www.healthgreenworld.com/?userName=Yamilka507';
export const SERVIENTREGA_COST = 5.00;
