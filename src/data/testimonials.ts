export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  productUsed: string;
  comment: string;
  date: string;
  verified: boolean;
  avatarBg: string;
}

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marta Elena González',
    location: 'Santiago de Veraguas, Panamá',
    rating: 5,
    productUsed: 'Protocolo Limpieza de Colon (Fresh Drink + Proshaping Tea)',
    comment: 'Padecía de estreñimiento severo desde hacía años, pasaba hasta 4 días sin ir al baño y con el abdomen siempre inflado. Yamilka me asesoró con mucha paciencia por WhatsApp. Al segundo día de tomar el Fresh Drink en ayunas y el Proshaping Tea sentí un alivio increíble, sin dolores de estómago ni cólicos. ¡Me siento ligera y con energía renovada!',
    date: 'Hace 3 días',
    verified: true,
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 'test-2',
    name: 'Carlos Alberto Ríos',
    location: 'Ciudad de Panamá (San Francisco)',
    rating: 5,
    productUsed: 'Faja Lumbar de Turmalina & Café Ganoderma',
    comment: 'Trabajo sentado 9 horas al día en oficina y los dolores lumbares no me dejaban dormir. La faja de turmalina genera un calorcito relajante que me quita el dolor en 20 minutos sin pastillas. Además cambié mi café habitual por el de Ganoderma HGW: cero acidez estomacal y me mantiene enfocado. El pedido me llegó en 2 días por Servientrega.',
    date: 'Hace 1 semana',
    verified: true,
    avatarBg: 'bg-teal-600'
  },
  {
    id: 'test-3',
    name: 'Doris Rodríguez P.',
    location: 'David, Chiriquí',
    rating: 5,
    productUsed: 'Péptido de Colágeno y Arándanos',
    comment: 'Tengo 52 años y me dolían mucho las rodillas al bajar escaleras. Llevo 3 semanas tomando los sachets de colágeno líquido con arándanos y el cambio ha sido rotundo: las rodillas ya no me truenan y mi piel luce mucho más hidratada y luminosa. El sabor frutal es exquisito.',
    date: 'Hace 2 semanas',
    verified: true,
    avatarBg: 'bg-amber-600'
  },
  {
    id: 'test-4',
    name: 'Lic. Roberto Castillero',
    location: 'Chitré, Herrera',
    rating: 5,
    productUsed: 'Plantillas de Turmalina para Calzado',
    comment: 'Paso muchas horas de pie en el trabajo y terminaba con los talones y pantorrillas ardiendo. Las plantillas de turmalina HGW fueron la solución definitiva. Se adaptan perfecto a mis zapatos y descansan los pies de una manera impresionante. Pagué por Yappy en 1 minuto y todo fue muy transparente.',
    date: 'Hace 2 semanas',
    verified: true,
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'test-5',
    name: 'Ana Patricia Morales',
    location: 'La Chorrera, Panamá Oeste',
    rating: 5,
    productUsed: 'Toallas Sanitarias con Turmalina & Biolacti Candy',
    comment: 'Recomiendo 100% las toallas higiénicas con turmalina. Sufría de cólicos menstruales intensos y con estas toallas disminuyó la inflamación por completo, además de la frescura que dan. Y los caramelos Biolacti con probióticos son una maravilla para los gases de mis niños.',
    date: 'Hace 3 semanas',
    verified: true,
    avatarBg: 'bg-rose-600'
  },
  {
    id: 'test-6',
    name: 'Ing. Javier Méndez',
    location: 'Colón, Panamá',
    rating: 5,
    productUsed: 'Café Cordyceps Cream & Berry Juice High VC',
    comment: 'Hago ciclismo los fines de semana y el café con Cordyceps me da un rendimiento pulmonar fuera de serie. Y el Berry Juice sabe delicioso y me mantiene con las defensas altas. La atención de Yamilka Batista es de 10 estrellas, siempre pendiente del tracking de Servientrega.',
    date: 'Hace 1 mes',
    verified: true,
    avatarBg: 'bg-indigo-600'
  }
];
