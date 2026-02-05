export interface DestinationInfo {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  requirements: string[];
  included: string[];
  notIncluded: string[];
  terms: string[];
}

export const destinationsInfo: Record<string, DestinationInfo> = {
  bali: {
    id: 'bali',
    title: 'Bali - Yoga y Naturaleza',
    description: 'Sumérgete en el paraíso tropical de Bali mientras perfeccionas tus habilidades en Muay Thai. Nuestro programa combina entrenamiento intensivo con la belleza natural y la rica cultura de la isla.',
    highlights: [
      'Entrenamiento diario con instructores profesionales de Muay Thai',
      'Ubicación en el corazón de Bali, cerca de playas y templos',
      'Clases personalizadas según tu nivel de experiencia',
      'Acceso a instalaciones de entrenamiento de primera clase',
      'Experiencia cultural balinesa auténtica'
    ],
    requirements: [
      'Nivel básico de condición física',
      'Equipo de entrenamiento personal (guantes, vendas, etc.)',
      'Seguro de viaje que cubra actividades deportivas',
      'Vacunas actualizadas según recomendaciones de salud'
    ],
    included: [
      'Alojamiento en resort de lujo',
      'Entrenamiento diario de Muay Thai',
      'Desayuno y almuerzo',
      'Traslados desde/hacia el aeropuerto',
      'Excursiones culturales semanales',
      'Certificado de participación'
    ],
    notIncluded: [
      'Vuelos internacionales',
      'Cenas',
      'Actividades opcionales',
      'Gastos personales',
      'Seguro de viaje'
    ],
    terms: [
      'El programa requiere un mínimo de 7 días de estancia',
      'Las clases se imparten de lunes a sábado',
      'Se requiere reserva con al menos 30 días de anticipación',
      'Política de cancelación: 50% de reembolso hasta 15 días antes',
      'Los horarios de entrenamiento pueden variar según la temporada'
    ]
  },
  thailand: {
    id: 'thailand',
    title: 'Tailandia - Cuna del Muay Thai',
    description: 'Vive la auténtica experiencia del Muay Thai en su lugar de origen. Entrena en los mejores campamentos de Tailandia, donde el arte de las ocho extremidades se ha perfeccionado durante siglos.',
    highlights: [
      'Entrenamiento en campamentos tradicionales tailandeses',
      'Instructores con experiencia en competición profesional',
      'Técnicas auténticas de Muay Thai',
      'Inmersión en la cultura tailandesa',
      'Visitas a templos y lugares históricos'
    ],
    requirements: [
      'Nivel intermedio de condición física',
      'Equipo de entrenamiento completo',
      'Seguro médico internacional',
      'Visado de turista (si aplica)'
    ],
    included: [
      'Alojamiento en campamento de entrenamiento',
      'Entrenamiento diario intensivo',
      'Pensión completa',
      'Traslados locales',
      'Tour cultural de Bangkok',
      'Certificado de entrenamiento'
    ],
    notIncluded: [
      'Vuelos internacionales',
      'Gastos personales',
      'Actividades opcionales',
      'Seguro de viaje',
      'Propinas'
    ],
    terms: [
      'Mínimo 10 días de estancia requeridos',
      'Entrenamiento 6 días por semana',
      'Reserva mínima 45 días antes',
      'Política de cancelación: 30% de reembolso hasta 30 días antes',
      'Horarios sujetos a cambios según temporada'
    ]
  },
  vietnam: {
    id: 'vietnam',
    title: 'Vietnam - Muay Thai & Cultura',
    description: 'Combina el entrenamiento de Muay Thai con la rica historia y cultura de Vietnam. Un programa único que te permite desarrollar tus habilidades marciales mientras exploras uno de los destinos más fascinantes de Asia.',
    highlights: [
      'Entrenamiento de Muay Thai con influencias vietnamitas',
      'Exploración de la historia y cultura local',
      'Clases en gimnasios modernos y tradicionales',
      'Experiencia gastronómica vietnamita',
      'Visitas a lugares históricos y naturales'
    ],
    requirements: [
      'Nivel básico a intermedio de condición física',
      'Equipo de entrenamiento básico',
      'Seguro de viaje completo',
      'Documentación de viaje actualizada'
    ],
    included: [
      'Alojamiento en hotel boutique',
      'Entrenamiento diario de Muay Thai',
      'Desayuno y almuerzo',
      'Traslados locales',
      'Tours culturales semanales',
      'Certificado de participación'
    ],
    notIncluded: [
      'Vuelos internacionales',
      'Cenas',
      'Actividades opcionales',
      'Gastos personales',
      'Seguro de viaje'
    ],
    terms: [
      'Programa mínimo de 7 días',
      'Clases de lunes a sábado',
      'Reserva con 30 días de anticipación',
      'Política de cancelación: 40% de reembolso hasta 20 días antes',
      'Horarios adaptables según preferencias'
    ]
  }
}; 