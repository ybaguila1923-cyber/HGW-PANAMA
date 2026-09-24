export interface ScienceTopic {
  id: string;
  name: string;
  scientificName: string;
  tagline: string;
  icon: string;
  badge: string;
  history: string;
  keyActiveCompounds: { name: string; description: string }[];
  healthActions: { title: string; desc: string }[];
  stagesOfAction?: { stage: string; period: string; description: string }[];
  medicalStudiesSummary: string[];
}

export const SCIENCE_TOPICS: ScienceTopic[] = [
  {
    id: 'ganoderma',
    name: 'Ganoderma Lucidum',
    scientificName: 'Ganoderma lucidum (Reishi / Lingzhi)',
    tagline: 'El legendario "Hongo de la Inmortalidad" con más de 200 compuestos bioactivos',
    icon: 'ShieldCheck',
    badge: 'Adaptógeno Milenario',
    history: 'Ampliamente documentado en la farmacopea china más antigua "Shen Nong\'s Herbal Classic" hace más de 2,100 años como símbolo de longevidad, paz y vitalidad suprema para los emperadores. Hoy es una de las especies de hongos medicinales más estudiadas a nivel biotecnológico mundial.',
    keyActiveCompounds: [
      { name: 'Polisacáridos (1,3-ß-D-glucanos)', description: 'Estimulan la producción de linfocitos, macrófagos y anticuerpos, con potente acción antitumoral e inmunomoduladora.' },
      { name: 'Triterpenos / Ácidos Ganodéricos', description: 'Compuestos amargos que protegen el hígado, reducen el colesterol, inhiben la agregación plaquetaria y calman alergias suprimiendo histamina.' },
      { name: 'Germanio Orgánico', description: 'Multiplica la capacidad de los glóbulos rojos para transportar oxígeno en la sangre hasta 2 veces más, combatiendo la fatiga celular.' },
      { name: 'Superóxido Dismutasa (SOD) & Enzimas', description: 'Enzima antioxidante maestra que neutraliza los radicales libres más lesivos para retardar el envejecimiento prematuro.' }
    ],
    healthActions: [
      { title: 'Inmunomodulación Activa', desc: 'Regula las defensas tanto si están deprimidas como hiperactivas, aumentando la producción de interleucina-2 e interferón.' },
      { title: 'Depuración y Protección Hepática', desc: 'Promueve la expulsión de toxinas acumuladas a través del sistema circulatorio, orina, heces y sudor.' },
      { title: 'Efecto Reductor de Glucemia', desc: 'Los ganoderanos ayudan a incrementar la sensibilidad insulínica y la absorción periférica de glucosa.' },
      { title: 'Regulación de la Presión y Colesterol', desc: 'Inhibe la síntesis hepática de colesterol y relaja las paredes arteriales.' }
    ],
    stagesOfAction: [
      { stage: '1. Exploración', period: '1 a 30 días', description: 'Los principios activos detectan toxinas y desequilibrios internos en el cuerpo.' },
      { stage: '2. Desintoxicación', period: '1 a 30 semanas', description: 'Eliminación activa de ácido úrico, grasa, toxinas y residuos por las vías naturales.' },
      { stage: '3. Regulación', period: '1 a 12 meses', description: 'Los componentes restauran funciones glandulares y celulares visibles y tangibles.' },
      { stage: '4. Construcción', period: '6 a 24 meses', description: 'Fortalecimiento inmune continuo, reparación de tejidos y optimización metabólica.' },
      { stage: '5. Regeneración', period: '1 a 3 años', description: 'Mantenimiento del cuerpo en su máximo nivel biológico con vitalidad renovada.' }
    ],
    medicalStudiesSummary: [
      'Estudios en China y EE. UU. (Huie and Di; Sliva et al.) confirmaron la capacidad citostática y antiproliferativa de los ácidos ganodéricos.',
      'Investigaciones clínicas (Tao and Feng) demostraron notable incremento de interferón (IFN) y citoquinas protectoras.',
      'Comprobado científicamente: administración oral segura sin toxicidad hepática ni renal.'
    ]
  },
  {
    id: 'arandanos',
    name: 'Arándanos Silvestres (Blueberries)',
    scientificName: 'Vaccinium myrtillus / Vaccinium corymbosum',
    tagline: 'El superalimento antioxidante número 1 del siglo XXI para la vista, corazón y cerebro',
    icon: 'Sparkles',
    badge: 'Superfruta Antioxidante',
    history: 'Reconocidos por la ciencia moderna y nutricionistas como una de las fuentes vegetales con mayor capacidad de absorción de radicales de oxígeno (ORAC). Sus frutos concentran pigmentos flavonoides únicos.',
    keyActiveCompounds: [
      { name: 'Antocianinas Bioactivas', description: 'Pigmentos naturales con actividad antioxidante 50 veces superior a la vitamina E y 200 veces a la vitamina C.' },
      { name: 'Proantocianidinas (PACs)', description: 'Impiden la adhesión de bacterias como E. Coli a las paredes del tracto urinario, previniendo infecciones urinarias recurrentes.' },
      { name: 'Polifenoles & Resveratrol', description: 'Mejoran la función del endotelio vascular, flexibilizando arterias y reduciendo el colesterol LDL oxidado.' },
      { name: 'Fibras Prebióticas Solubles', description: 'Nutren selectivamente bacterias benéficas como Lactobacillus y Bifidobacterias, mejorando el tránsito del colon.' }
    ],
    healthActions: [
      { title: 'Salud Visual y Mácula Ocular', desc: 'Estimula la regeneración de rodopsina en la retina, aliviando la fatiga visual por pantallas y mejorando la visión nocturna.' },
      { title: 'Microbiota y Limpieza Intestinal', desc: 'Actúa como prebiótico natural en el intestino grueso, aliviando el estreñimiento y desinflamando el colon.' },
      { title: 'Agilidad Mental y Memoria', desc: 'Aumenta la plasticidad sináptica y retrasa el deterioro cognitivo cerebral asociado a la edad.' },
      { title: 'Recuperación Muscular', desc: 'Reduce el dolor muscular post-ejercicio y acelera la reparación de fibras gracias a su acción antiinflamatoria.' }
    ],
    medicalStudiesSummary: [
      'Publicaciones en Critical Reviews in Food Science and Nutrition (Silva et al.) ratifican el impacto en salud vascular y control de glucosa.',
      'Ensayos clínicos doble ciego (Stote et al., 2020) constataron reducción de parámetros cardiometabólicos en personas con glucosa elevada.',
      'Investigación neurocognitiva (Devore et al., Annals of Neurology) vinculó el consumo constante de berries con mayor longevidad mental.'
    ]
  },
  {
    id: 'turmalina',
    name: 'Turmalina Natural',
    scientificName: 'Cristal mineral de borosilicato complejo',
    tagline: 'La "Piedra Eléctrica" que emite calor infrarrojo lejano y aniones purificadores',
    icon: 'Zap',
    badge: 'Energía Cuántica Natural',
    history: 'Descrita en el siglo XVIII por el insigne botánico Carl Von Linné como "la piedra eléctrica" por su capacidad piroeléctrica y piezoeléctrica: al frotarse o cambiar de temperatura, se polariza eléctricamente emitiendo microcorrientes bioenergéticas.',
    keyActiveCompounds: [
      { name: 'Microcorriente Biológica (0.06 mA)', description: 'Coincide con la corriente eléctrica natural del sistema nervioso del cuerpo humano, favoreciendo la relajación muscular.' },
      { name: 'Emisión de Rayos Infrarrojos Lejanos (FIR)', description: 'Ondas electromagnéticas térmicas suaves que penetran profundamente en los tejidos, dilatando capilares y aliviando el dolor.' },
      { name: 'Generación Permanente de Iones Negativos', description: 'Neutraliza los radicales libres y iones positivos nocivos generados por pantallas, computadoras y contaminación electromagnética (EMF).' }
    ],
    healthActions: [
      { title: 'Alivio Inmediato del Dolor y Rigidez', desc: 'El calor natural relaja contracturas en cuello, lumbares, rodillas y pies sin necesidad de medicamentos analgésicos.' },
      { title: 'Estimulación de la Microcirculación', desc: 'Acelera el transporte de oxígeno y nutrientes a los tejidos lesionados, desvaneciendo hematomas y pesadez en piernas.' },
      { title: 'Escudo Protector contra Radiación EMF', desc: 'Ayuda a disipar la polución electromagnética emitida por smartphones, enrutadores Wi-Fi y dispositivos de oficina.' },
      { title: 'Alcalinización Natural del Agua', desc: 'En termos como Waterson HGW, ioniza el agua corriente neutralizando la acidez gástrica.' }
    ],
    medicalStudiesSummary: [
      'Ensayos biofísicos comprobaron la estimulación de la microcirculación capilar y aumento de la temperatura dérmica local tras 20 minutos de uso.',
      'Utilizada en medicina holística oriental y terapia deportiva para recuperación articular no invasiva.',
      'Durabilidad de por vida: no contiene baterías ni compuestos químicos degradables.'
    ]
  }
];
