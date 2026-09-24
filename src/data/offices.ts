export interface HgwOffice {
  id: string;
  country: string;
  city: string;
  address: string;
  schedule: string;
  phones: string[];
  notes?: string;
  flag: string;
}

export const HGW_OFFICES: HgwOffice[] = [
  {
    id: 'panama-main',
    country: 'Panamá',
    city: 'Ciudad de Panamá',
    address: 'Avenida Porras, Plaza Royal Blue, Local No. 6, Corregimiento de San Francisco, Provincia de Panamá',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+507 392-8415', '+507 6760-3578'],
    notes: 'Sede Principal en Panamá. Distribuidora en Santiago de Veraguas: Yamilka Batista (+507 6760-3578).',
    flag: '🇵🇦'
  },
  {
    id: 'colombia-bogota',
    country: 'Colombia',
    city: 'Bogotá',
    address: 'Calle 119 #14-42, Barrio Santa Bárbara Central, Bogotá',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+57 321 221 8855', '+57 311 433 8501', '+57 321 221 8805', '+57 321 221 7498'],
    flag: '🇨🇴'
  },
  {
    id: 'colombia-medellin',
    country: 'Colombia',
    city: 'Medellín',
    address: 'Carrera 43, 25 A 233, Lomas de San Julián, Medellín',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+57 321 221 8855', '+57 311 434 2391', '+57 311 434 3563'],
    flag: '🇨🇴'
  },
  {
    id: 'colombia-cali',
    country: 'Colombia',
    city: 'Cali',
    address: 'Av. 8 Norte 17-26, Barrio Granada, Cali',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+57 321 221 8855', '+57 314 291 2647'],
    flag: '🇨🇴'
  },
  {
    id: 'colombia-yopal',
    country: 'Colombia',
    city: 'Yopal',
    address: 'Calle 21 #19a – 29, Barrio Gabán, Yopal',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+57 314 291 6428', '+57 314 291 8958', '+57 321 221 8855'],
    flag: '🇨🇴'
  },
  {
    id: 'mexico-cdmx',
    country: 'México',
    city: 'Ciudad de México',
    address: 'Av. Insurgentes Sur No. 1216, Int. 408 y 409, Col. del Valle Centro, C.P. 03100, CDMX',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 12:00pm',
    phones: ['+52 55 5064 6959'],
    flag: '🇲🇽'
  },
  {
    id: 'peru-lima',
    country: 'Perú',
    city: 'Lima',
    address: 'Av. Arequipa 4446, Miraflores, Lima',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm (Refrigerio 1pm-2pm) | Sábados: 09:00am a 13:00pm',
    phones: ['+51 972 014 926', '+51 967 678 797'],
    flag: '🇵🇪'
  },
  {
    id: 'peru-arequipa',
    country: 'Perú',
    city: 'Arequipa',
    address: 'Urb. León XIII Mz. H Lt. 05, Arequipa',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+51 913 622 247'],
    flag: '🇵🇪'
  },
  {
    id: 'peru-huancayo',
    country: 'Perú',
    city: 'Huancayo',
    address: 'Jr. Cusco N. 155, Huancayo',
    schedule: 'Lunes a Viernes: 10:00am a 19:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+51 913 661 118'],
    flag: '🇵🇪'
  },
  {
    id: 'peru-jaen',
    country: 'Perú',
    city: 'Jaén',
    address: 'Ca. Pardo Miguel N.369, Jaén, Cajamarca',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+51 952 400 705'],
    flag: '🇵🇪'
  },
  {
    id: 'peru-tacna',
    country: 'Perú',
    city: 'Tacna',
    address: 'Av. Pinto Nº K-14 (1265), Alto de Alianza (Frente a Polvos Rosados), Tacna',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+51 956 383 885'],
    flag: '🇵🇪'
  },
  {
    id: 'bolivia-la-paz',
    country: 'Bolivia',
    city: 'La Paz',
    address: 'Calle 23, Eduardo Diez de Medina No. 105, Ed. Torre TITANIUM, Of. 101, Calacoto, La Paz',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados y Domingos: Cerrado',
    phones: ['+591 601 30676'],
    flag: '🇧🇴'
  },
  {
    id: 'bolivia-cochabamba',
    country: 'Bolivia',
    city: 'Cochabamba',
    address: 'Calle 25 de Mayo entre Mayor Rocha y Ecuador #0375, Piso 2 Of. 4, Cochabamba',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm',
    phones: ['+591 720 55536'],
    flag: '🇧🇴'
  },
  {
    id: 'bolivia-santa-cruz',
    country: 'Bolivia',
    city: 'Santa Cruz',
    address: 'Av. Irala N.615 (a 2 cuadras y media de Av. Cañoto), Santa Cruz',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm',
    phones: ['+591 720 30346'],
    flag: '🇧🇴'
  },
  {
    id: 'bolivia-el-alto',
    country: 'Bolivia',
    city: 'El Alto',
    address: 'Zona 12 de Octubre, calle 1 esq. Av. Franco Valle (diag. Plaza Lustrabotas), El Alto',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm',
    phones: ['+591 712 31091'],
    flag: '🇧🇴'
  },
  {
    id: 'bolivia-sucre',
    country: 'Bolivia',
    city: 'Sucre',
    address: 'Av. Hernando Siles #713, CC “Roacaf”, Piso 2, Oficinas 18 y 19, Sucre',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm',
    phones: ['+591 643 21961'],
    flag: '🇧🇴'
  },
  {
    id: 'ecuador-quito',
    country: 'Ecuador',
    city: 'Quito',
    address: 'Av. 6 de Diciembre N25-96 y Pasaje Batallas, Quito',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 10:00am a 14:00pm',
    phones: ['+593 098 589 1669'],
    flag: '🇪🇨'
  },
  {
    id: 'ecuador-guayaquil',
    country: 'Ecuador',
    city: 'Guayaquil',
    address: 'Luis Urdaneta 1100, entre Av. Quito y Av. Machala, Guayaquil',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 10:00am a 14:00pm',
    phones: ['+593 980 609 976'],
    flag: '🇪🇨'
  },
  {
    id: 'ecuador-machala',
    country: 'Ecuador',
    city: 'Machala',
    address: 'Rocafuerte entre Napoleón Mera y 23 de Abril, Machala',
    schedule: 'Lunes a Viernes: 09:00am a 13:00pm y 13:30pm a 17:30pm | Sábados: 10:00am a 14:00pm',
    phones: ['+593 992 382 749'],
    flag: '🇪🇨'
  },
  {
    id: 'republica-dominicana',
    country: 'República Dominicana',
    city: 'Santo Domingo',
    address: 'Av. 27 de Febrero No. 251, casi esq. Abraham Lincoln, Ensanche Naco, Santo Domingo',
    schedule: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+1 809 855 7167', '+1 809 993 9262'],
    flag: '🇩🇴'
  },
  {
    id: 'el-salvador',
    country: 'El Salvador',
    city: 'San Salvador',
    address: 'Calle Padres Aguilar #2, Local No. 3 entre 85 y 87 Av. Sur, Colonia Escalón, San Salvador',
    schedule: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 13:00pm',
    phones: ['+503 2556 8699', '+503 7573 7265'],
    flag: '🇸🇻'
  },
  {
    id: 'chile-santiago',
    country: 'Chile',
    city: 'Santiago',
    address: 'Andrés Bello #2325, Local 1, Providencia, Región Metropolitana',
    schedule: 'Lunes a Jueves: 09:00am a 19:00pm | Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    phones: ['+56 9 4028 7186', '+56 9 4028 7193'],
    flag: '🇨🇱'
  },
  {
    id: 'espana-barcelona',
    country: 'España',
    city: 'Barcelona',
    address: 'Calle Joan Güell 144, BJ 1, 08028, Barcelona',
    schedule: 'Lunes a Viernes: 09:30h a 13:00h y 15:00h a 19:00h | Sábados: 10:00h a 14:00h',
    phones: ['+34 623 465 013'],
    flag: '🇪🇸'
  }
];
