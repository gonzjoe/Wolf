/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ServiceItem, 
  PlanItem, 
  FAQItem, 
  MemberItem, 
  MilestoneItem, 
  TestimonialItem, 
  StatItem,
  SectorItem
} from "./types";

import heroBg from "./assets/images/hero_elevator_1784243230101.jpg";
import technician from "./assets/images/elevator_technician_1784243242377.jpg";
import modernCabin from "./assets/images/elevator_modernization_1784243253597.jpg";

// Paths to generated images (dynamically created by AI Studio build tools)
export const IMAGES = {
  heroBg,
  technician,
  modernCabin,
};

export const STATS: StatItem[] = [
  { value: "+20", label: "Años de Experiencia", subLabel: "Líderes en el sector de elevación" },
  { value: "1,200+", label: "Ascensores Mantenidos", subLabel: "Contratos de confianza vigentes" },
  { value: "15 min", label: "Tiempo de Respuesta", subLabel: "En llamadas de rescate urgente" },
  { value: "99.8%", label: "Disponibilidad", subLabel: "Mantenimiento preventivo de precisión" }
];

export const SECTORS: SectorItem[] = [
  {
    id: "residencial",
    title: "Comunidades de Vecinos",
    description: "Garantizamos el confort, la accesibilidad y la seguridad diaria de las familias en sus fincas residenciales.",
    iconName: "Home"
  },
  {
    id: "comercial",
    title: "Edificios Comerciales y Oficinas",
    description: "Flujo continuo de personas en centros de alta densidad. Minimizamos los tiempos de inactividad de forma estricta.",
    iconName: "Building2"
  },
  {
    id: "industrial",
    title: "Sector Industrial y Carga",
    description: "Montacargas potentes y robustos para naves industriales que requieren mover mercancías pesadas con total fiabilidad.",
    iconName: "Boxes"
  },
  {
    id: "hospitales",
    title: "Centros Sanitarios y Hospitales",
    description: "Mantenimiento crítico de máxima prioridad para ascensores de camillas, donde cada segundo cuenta.",
    iconName: "HeartPulse"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ascensores-con-cuarto-de-maquina",
    title: "Ascensores con cuarto de maquina",
    shortDescription: "Soporte de sistemas tradicionales con sala de control dedicada para motores eléctricos o hidráulicos.",
    fullDescription: "Los ascensores con cuarto de máquinas son los sistemas tradicionales de tracción de poleas o sistemas hidráulicos que requieren una sala superior o lateral exclusiva para albergar el motor de tracción, el limitador de velocidad y el tablero electrónico de maniobra. Ofrecemos mantenimiento integral y repuestos originales para garantizar la fiabilidad de este tipo de sistemas.",
    benefits: [
      "Sencillez de mantenimiento al concentrar la maquinaria en un solo lugar",
      "Excelente durabilidad mecánica de poleas de tracción y pistones",
      "Fácil acceso para tareas de reparación o modernización electrónica",
      "Ideal para edificios residenciales de antigüedad media"
    ],
    imageUrl: IMAGES.technician,
    iconName: "Home"
  },
  {
    id: "ascensores-sin-cuarto-de-maquina",
    title: "Ascensores sin cuarto de maquina",
    shortDescription: "Tecnología moderna Gearless MRL con motor síncrono ultra-eficiente integrado en el propio hueco.",
    fullDescription: "Los sistemas MRL (Machine Room-Less) representan la vanguardia en el transporte vertical. Al integrar el motor síncrono de imanes permanentes y el limitador dentro del propio hueco del ascensor, se ahorra espacio edilicio y se elimina la necesidad de construir una sala de máquinas superior. Ofrecemos mantenimiento de precisión para esta tecnología altamente sofisticada.",
    benefits: [
      "Ahorro de hasta un 45% en consumo de energía eléctrica",
      "Eliminación de la sala de máquinas superior para optimizar espacio del edificio",
      "Suavidad y confort de viaje inigualables con control VVVF",
      "Nivelación milimétrica en todas las plantas"
    ],
    imageUrl: IMAGES.modernCabin,
    iconName: "Layers"
  },
  {
    id: "ascensores-panoramicos",
    title: "Ascensores panoramicos",
    shortDescription: "Cabinas de cristal de diseño exclusivo con engrase silencioso y sistemas de seguridad visibles.",
    fullDescription: "Los ascensores panorámicos combinan la excelencia de la ingeniería vertical con el diseño estético de vanguardia. Diseñados con cerramientos de vidrio templado de alta resistencia, ofrecen una experiencia de viaje visual única. Realizamos un mantenimiento riguroso enfocado en la suavidad de tracción, el cuidado de perfiles y la limpieza técnica de guías.",
    benefits: [
      "Alto valor estético y arquitectónico para centros comerciales y hoteles",
      "Sensación de amplitud, luz natural y confort psicológico para pasajeros",
      "Sistemas de tracción silenciosa y engranajes de alta precisión",
      "Estructuras de seguridad de cristal templado homologado"
    ],
    imageUrl: IMAGES.heroBg,
    iconName: "RefreshCw"
  },
  {
    id: "ascensores-de-carga",
    title: "Ascensores de carga",
    shortDescription: "Montacargas industriales robustos y plataformas diseñadas para trabajo pesado continuo.",
    fullDescription: "Los ascensores de carga o montacargas industriales están diseñados bajo rigurosos coeficientes de seguridad para soportar cargas pesadas de mercancías y uso continuo en bodegas, fábricas y supermercados. Realizamos inspecciones técnicas minuciosas en los frenos de seguridad, el guiado de cables, las vigas del chasis y las electroválvulas.",
    benefits: [
      "Capacidades de carga desde 500 kg hasta más de 5.000 kg",
      "Estructuras reforzadas de alta durabilidad contra golpes de carretillas",
      "Sistemas de seguridad redundantes contra sobrecargas accidentales",
      "Puertas de cabina de apertura manual o automática reforzada"
    ],
    imageUrl: IMAGES.technician,
    iconName: "Boxes"
  },
  {
    id: "ascensores-vehiculares",
    title: "Ascensores vehiculares",
    shortDescription: "Elevadores montacoches con sistemas electrohidráulicos reforzados de doble pistón.",
    fullDescription: "Los ascensores vehiculares o montacoches son soluciones de elevación robustas indispensables en edificios residenciales modernos o garajes sin rampas de acceso. Diseñados con dimensiones especiales y sistemas de nivelación automática exacta para el peso de coches, camiones y vehículos pesados.",
    benefits: [
      "Ahorro masivo de espacio en el diseño de sótanos y parqueaderos",
      "Sistemas hidráulicos de doble pistón para una fuerza de elevación equilibrada",
      "Sistemas de fotocélulas de seguridad y semáforos integrados",
      "Cabina de dimensiones amplias con protecciones laterales"
    ],
    imageUrl: IMAGES.modernCabin,
    iconName: "Settings"
  },
  {
    id: "ascensores-camilleros",
    title: "Ascensores camilleros",
    shortDescription: "Elevadores hospitalarios de cabinas alargadas con nivelación precisa milimétrica y prioridades de llamada.",
    fullDescription: "Los ascensores camilleros u hospitalarios son equipos críticos diseñados con cabinas de gran profundidad y puertas amplias de apertura lateral para facilitar el paso fluido de camillas, personal médico y equipamiento de soporte vital. Cuentan con un sistema de nivelación milimétrica perfecta y funciones de llamada preferencial.",
    benefits: [
      "Nivelación milimétrica exacta para evitar vibraciones en pacientes",
      "Interior de cabina con materiales antibacteriales y fácil desinfección",
      "Sistemas de llamada prioritario y maniobras de rescate en corte de luz",
      "Operación extremadamente silenciosa y arranques progresivos suaves"
    ],
    imageUrl: IMAGES.technician,
    iconName: "Accessibility"
  },
  {
    id: "bandas-trasportadoras",
    title: "Bandas Transportadoras",
    shortDescription: "Inspección, mantenimiento y repuestos de andenes móviles y rampas mecánicas de tráfico masivo.",
    fullDescription: "Las bandas transportadoras y pasillos móviles de supermercados o aeropuertos requieren un mantenimiento preventivo de alta exigencia mecánica. Nos encargamos de la lubricación continua de las cadenas, la inspección de rodillos, la alineación exacta de pasamanos de goma y la calibración de sistemas de emergencia.",
    benefits: [
      "Facilita el traslado fluido de usuarios con carritos de compra o maletas",
      "Operación continua de bajo desgaste mecánico y alta eficiencia",
      "Sistemas electrónicos inteligentes de ahorro energético en vacío",
      "Cumplimiento total con las normas de seguridad internacionales"
    ],
    imageUrl: IMAGES.heroBg,
    iconName: "ClipboardCheck"
  },
  {
    id: "escaleras-electricas",
    title: "Escaleras eléctricas",
    shortDescription: "Mantenimiento electromecánico de peldaños, lubricación de cadenas de tracción, y sistemas electrónicos.",
    fullDescription: "Las escaleras mecánicas comerciales experimentan un flujo masivo de tráfico diario continuo. Realizamos mantenimiento preventivo exhaustivo centrado en el engrase automatizado, revisión del desgaste de peldaños, alineación de pasamanos, verificación de peines y pruebas de frenado rápido.",
    benefits: [
      "Optimización del flujo peatonal continuo en grandes centros comerciales",
      "Sensores automáticos que reducen la velocidad cuando no hay usuarios",
      "Sistemas integrados de autodiagnóstico de fallas en tiempo real",
      "Garantía de repuestos originales de marcas líderes mundiales"
    ],
    imageUrl: IMAGES.modernCabin,
    iconName: "ShieldAlert"
  },
  {
    id: "modernizacion-de-ascensores",
    title: "Servicio de modernizacion",
    shortDescription: "Actualización electrónica integral, cambio de maniobras antiguas de relés por controles electrónicos microprocesados.",
    fullDescription: "El servicio de modernización técnica sustituye componentes obsoletos de ascensores antiguos por tecnología síncrona de vanguardia. Reemplazamos tableros de maniobras antiguas por microprocesadores con variador de frecuencia (VVVF), instalamos cabinas modernas de bajo consumo y optimizamos la seguridad general sin necesidad de una sustitución completa.",
    benefits: [
      "Ahorro de hasta un 50% de consumo energético con variadores VVVF",
      "Nivelación de parada óptima a ras de piso para evitar tropiezos de usuarios",
      "Funcionamiento silencioso, reducción de vibraciones y viajes suaves",
      "Mejora del valor estético y la revalorización de la copropiedad"
    ],
    imageUrl: IMAGES.modernCabin,
    iconName: "RefreshCw"
  }
];

export const PLANS: PlanItem[] = [
  {
    id: "plan-basico",
    name: "Plan Esencial Preventivo",
    priceRange: "$120.000 - $180.000",
    period: "mes / ascensor",
    recommendedFor: "Comunidades de vecinos pequeñas o unifamiliares con poco tráfico.",
    features: [
      "Visitas de mantenimiento preventivo bimensuales",
      "Atención telefónica en horario de oficina",
      "Revisión de cables y engrase general",
      "Asistencia en averías en menos de 4 horas",
      "Seguro de Responsabilidad Civil incluido",
      "Preparación técnica para inspección oficial de seguridad"
    ],
    isHighlighted: false
  },
  {
    id: "plan-estandar",
    name: "Plan Confort Wolf",
    priceRange: "$220.000 - $350.000",
    period: "mes / ascensor",
    recommendedFor: "Edificios residenciales medianos y oficinas. El equilibrio perfecto.",
    features: [
      "Visitas de mantenimiento preventivo MENSUALES",
      "Servicio de emergencias 24 horas (incluye festivos)",
      "Atención telefónica prioritaria 24/7/365",
      "Rescate de personas atrapadas prioritario (< 25 min)",
      "Piezas de desgaste común incluidas sin coste adicional",
      "Servicio técnico de guardia los fines de semana"
    ],
    isHighlighted: true
  },
  {
    id: "plan-premium",
    name: "Plan Premium 24/7 Total",
    priceRange: "$450.000 - $750.000",
    period: "mes / ascensor",
    recommendedFor: "Hoteles, clínicas, centros comerciales y edificios de alto tráfico.",
    features: [
      "Inspecciones preventivas quincenales a medida",
      "Cobertura TODO RIESGO (incluye sustitución de motores)",
      "Tiempo de respuesta garantizado por contrato (< 15 min)",
      "Técnico de zona asignado exclusivo",
      "Informes digitales de estado mensuales detallados",
      "Renovación estética anual de cabina de cortesía"
    ],
    isHighlighted: false
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    author: "María José Ramos",
    role: "Presidenta de Copropiedad",
    company: "Residencial Las Colinas, Manizales",
    rating: 5,
    text: "Llevábamos años con averías constantes en nuestro ascensor de 20 años. Ascensores Wolf asumió el servicio, realizó una modernización parcial de la cabina y la maniobra, y el cambio ha sido absoluto. Silencioso, rápido y no ha vuelto a fallar. Su servicio de atención telefónica es impecable."
  },
  {
    id: "2",
    author: "Carlos Mendoza",
    role: "Director de Operaciones",
    company: "Torre El Cable, Manizales",
    rating: 5,
    text: "En un edificio de oficinas con 15 plantas, el tiempo de inactividad de un ascensor es un desastre logístico. Ascensores Wolf mantiene nuestros 4 equipos de alta velocidad. Su servicio técnico de mantenimiento preventivo es tan profesional que realizan las revisiones a las 6:00 AM para no molestar a los usuarios."
  },
  {
    id: "3",
    author: "Alejandro Gómez",
    role: "Administrador de Fincas y Copropiedades",
    company: "Gómez & Asociados - Propiedad Horizontal Eje Cafetero",
    rating: 5,
    text: "Como administrador de fincas de más de 40 copropiedades, la tranquilidad de saber que Ascensores Wolf responde de inmediato a cualquier emergencia de atrapamiento no tiene precio. Ofrecen la mejor relación calidad-precio y una transparencia absoluta en las facturas."
  }
];

export const TEAM: MemberItem[] = [
  {
    id: "1",
    name: "Ing. Fernando Wolf",
    role: "Fundador y Director General",
    description: "Ingeniero Industrial con más de 25 años de experiencia en sistemas de elevación vertical hidráulicos y eléctricos.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "2",
    name: "Laura San Martín",
    role: "Directora de Operaciones y Clientes",
    description: "Responsable de coordinar la logística de las rutas de mantenimiento técnico urgente y atención posventa de copropiedades.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "3",
    name: "Daniel Vargas",
    role: "Jefe de Servicio Técnico de Guardia",
    description: "Especialista en diagnóstico de averías complejas y rescate en altura con formación avanzada de seguridad.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "4",
    name: "Sofía Benítez",
    role: "Ingeniera de Accesibilidad y Proyectos",
    description: "Especializada en eliminación de barreras, estudios estructurales y proyectos de instalación de ascensores en fachadas.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: "2006",
    title: "Fundación de Ascensores Wolf",
    description: "Nace la empresa en Manizales con un equipo de técnicos comprometidos con ofrecer el servicio de mantenimiento más rápido de la región."
  },
  {
    year: "2012",
    title: "Expansión al Eje Cafetero",
    description: "Abrimos nuestras primeras delegaciones técnicas en Pereira y Armenia, expandiendo la cobertura de mantenimiento a clínicas y centros comerciales."
  },
  {
    year: "2016",
    title: "Sostenibilidad de Vanguardia",
    description: "Introducción de motores sin engranajes (Gearless) de última generación, ahorrando energía y mejorando el confort de los pasajeros."
  },
  {
    year: "2020",
    title: "Sistemas Inteligentes e IoT",
    description: "Digitalizamos nuestra flota técnica. Conectamos los ascensores a una central que detecta anomalías de funcionamiento de forma predictiva."
  },
  {
    year: "2025",
    title: "Líderes de Confianza en Manizales",
    description: "Consolidamos más de 1.200 ascensores bajo contrato de mantenimiento con excelente índice de satisfacción y seguridad total."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Con qué rapidez atienden una emergencia por atrapamiento?",
    answer: "Nuestra prioridad absoluta son las emergencias. Gracias a nuestra flota con geolocalización permanente, el técnico libre más cercano en Manizales o el Eje Cafetero se desplaza de inmediato. Garantizamos por contrato un tiempo de llegada menor a 20 minutos dentro de nuestra zona de cobertura en cualquier momento del día o la noche."
  },
  {
    id: "faq-2",
    question: "¿Es obligatorio por ley tener un contrato de mantenimiento de ascensor?",
    answer: "Sí, la legislación colombiana vigente (incluyendo las normas distritales y municipales de seguridad en transporte vertical) obliga a todas las copropiedades, empresas y particulares que tengan un elevador (sea ascensor, montacargas o rampa) a tener contratado un servicio de mantenimiento preventivo mensual con una empresa certificada e inscrita oficialmente (como Ascensores Wolf)."
  },
  {
    id: "faq-3",
    question: "¿Qué es la revisión técnica reglamentaria y cada cuánto se realiza?",
    answer: "Es la inspección anual obligatoria realizada por un organismo de certificación acreditado (bajo normas de seguridad NTC 5926). Evalúa de manera exhaustiva los sistemas de seguridad de la cabina, el motor y el sistema eléctrico para emitir el certificado de conformidad de funcionamiento seguro."
  },
  {
    id: "faq-4",
    question: "¿Cómo sé qué plan de mantenimiento se adapta mejor a nuestra copropiedad?",
    answer: "Nuestro equipo realiza un diagnóstico gratuito del estado de su ascensor y su tráfico diario. Para conjuntos residenciales medianos y pequeños, el Plan Confort Wolf es el ideal, ya que incluye cobertura técnica contra incidencias 24/7 y fines de semana. Para oficinas o centros médicos, recomendamos el Plan Premium Todo Riesgo."
  },
  {
    id: "faq-5",
    question: "¿Ofrecen repuestos originales y soporte para todas las marcas?",
    answer: "Sí, en Ascensores Wolf contamos con un amplio stock de repuestos originales para las principales marcas nacionales e internacionales. Además, todos nuestros técnicos están altamente capacitados en maniobras multimarca eléctricas e hidráulicas."
  },
  {
    id: "faq-6",
    question: "¿Es posible cambiar de empresa mantenedora si tenemos un contrato vigente?",
    answer: "Sí, es completamente posible. Le asesoramos de forma gratuita para revisar las condiciones de vencimiento o renovación de su contrato actual. En Ascensores Wolf le ayudamos con el trámite de transición para que no sufra ninguna interrupción en la seguridad ni penalizaciones injustas."
  }
];
