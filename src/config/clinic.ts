export const clinic = {
  name: "Anna estética integral y bienestar",
  logo: "/images/logo.png",
  tagline: "Tu bienestar y belleza en Tomelloso",
  description: "Anna estética integral y bienestar es tu centro de referencia en Tomelloso, Ciudad Real, con 4.9 estrellas y 68 reseñas en Google. Especialistas en tratamientos faciales, manicura y pedicura, depilación, maquillaje profesional y cuidado personalizado. Anna y su equipo te ofrecen un trato cercano, profesional y adaptado a tus necesidades, con protocolos de seguridad que garantizan tu confianza en cada visita.",
  colors: {
    primary: "#C9A86C",
    secondary: "#2D2D2D",
    accent: "#D4A574",
    neutral: "#FAF8F5"
  },
  phone: "695 30 35 88",
  whatsapp: "+34695303588",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "C. Estación, 90, 13700 Tomelloso, Ciudad Real, España",
    city: "Tomelloso",
    province: "Ciudad Real",
    postalCode: "13700",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=857098342098481482&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Anna%20est%C3%A9tica%20integral%20y%20bienestar%20%4039.148%2C-3.02816&z=16&output=embed",
  coordinates: {
    lat: 39.148,
    lng: -3.02816
  },
  schedule: [
    {
      days: "lunes",
      hours: "Cerrado"
    },
    {
      days: "martes - viernes",
      hours: "9:00–13:00, 16:00–21:00"
    },
    {
      days: "sábado",
      hours: "9:00–14:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.9,
    count: 68,
    url: "https://maps.google.com/?cid=857098342098481482&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Luis Ballesteros",
        rating: 5,
        text: "Trato esquisto, cercanía y comodidad, buscando la comodidad del cliente. Trato personalizado y atención maravillosa, además es una gerente que trabaja con colectivos en riesgo de inclusión social y dedica parte de sus ganancias a las personas con discapacidad, realizando bajadas de precios. En definitiva una mujer empatica y cariñosa. Merece la pena utilizar sus servicios.",
        date: "Hace 3 años"
      },
      {
        author: "Maria Del Mar Ponce Jimenez",
        rating: 5,
        text: "Centro muy personalizado a las necesidades del cliente. Cercanía en el trato y profesionalidad. Cuidado de la persona. Ante la situación actual de Covid se cumple todo protocolo y da mucha confianza. En lo que se refiere al trato conmigo, le pongo una alta puntuación en todos los campos. Gracias.",
        date: "Hace 5 años"
      },
      {
        author: "Mar Gomez",
        rating: 5,
        text: "Ana una muy buena persona,  superagradale, tiene un trato tan especial con los client@s que te hace sentir cómod@ en todo momento.\nMuy buena profesional, que lo sepas estoy encantada contigo.\nANA LA RECOMIENDO 100%\nPor muchos años MÁS .\nUn besazo guapísima ¡!!! Nos vemos 😜💋",
        date: "Hace 3 años"
      },
      {
        author: "Elisa Alvarez Lara",
        rating: 5,
        text: "Ana es una profesional de 10, es muy atenta, muy amable y muy profesional, siempre salgo súper contenta y con las uñas perfectas y muy duraderas. La cera la hace con muchísimo cuidado y apenas lo notas, increíble y es muy buena maquilladora.La recomiendo sin dudar.",
        date: "Hace 5 años"
      },
      {
        author: "Juan Miguel Morales López",
        rating: 5,
        text: "Ana, una maravillosa profesional.  Un amplio abanico de servicios impecables y un trato cercano.  Totalmente recomendado.",
        date: "Hace 6 meses"
      }
    ]
  },
  services: [
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados para cada tipo de piel con productos de alta gama. Tratamientos de hidratación profunda, antiedad y luminosidad que devuelven la vitalidad a tu rostro. Analizamos tu piel y diseñamos el protocolo perfecto para ti.",
      benefits: [
        "Hidratación profunda y duradera",
        "Reducción visible de líneas de expresión",
        "Luminosidad y textura mejorada"
      ],
      icon: "Sparkles"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con esmaltes de alta calidad y acabados impecables. Nuestras clientas destacan la durabilidad y perfección de nuestras uñas. Desde manicuras clásicas hasta diseños personalizados que duran semanas.",
      benefits: [
        "Uñas perfectas y muy duraderas",
        "Esmaltes de larga duración",
        "Diseños personalizados a tu estilo"
      ],
      icon: "Hand"
    },
    {
      id: "depilacion",
      name: "Depilación con Cera",
      description: "Técnica de depilación profesional realizada con muchísimo cuidado para minimizar molestias. Utilizamos productos de calidad que respetan tu piel y ofrecen resultados suaves y duraderos. Nuestras clientas destacan lo poco que se nota el proceso.",
      benefits: [
        "Técnica cuidadosa y casi indolora",
        "Piel suave durante semanas",
        "Productos que respetan tu piel"
      ],
      icon: "Flower2"
    },
    {
      id: "maquillaje-profesional",
      name: "Maquillaje Profesional",
      description: "Servicio de maquillaje para eventos, celebraciones o tu día a día. Anna es reconocida como excelente maquilladora, creando looks naturales o sofisticados según la ocasión. Resaltamos tu belleza natural con técnicas profesionales y productos de primera calidad.",
      benefits: [
        "Maquillaje adaptado a cada ocasión",
        "Técnicas profesionales de larga duración",
        "Resultados naturales y favorecedores"
      ],
      icon: "Sparkles"
    },
    {
      id: "tratamientos-corporales",
      name: "Tratamientos Corporales",
      description: "Tratamientos reductores, reafirmantes y anticelulíticos diseñados para modelar tu silueta. Combinamos técnicas manuales con tecnología avanzada para resultados visibles. Cada sesión está adaptada a tus objetivos y necesidades específicas.",
      benefits: [
        "Reducción de medidas visible",
        "Piel más firme y tonificada",
        "Tratamiento personalizado a tus objetivos"
      ],
      icon: "Heart"
    },
    {
      id: "micropigmentacion",
      name: "Micropigmentación",
      description: "Maquillaje semipermanente para cejas, labios y ojos con resultados naturales y armoniosos. Diseñamos la forma perfecta para tu rostro y utilizamos pigmentos de máxima calidad. Despierta perfecta cada mañana sin necesidad de maquillarte.",
      benefits: [
        "Resultados naturales y duraderos",
        "Diseño personalizado para tu rostro",
        "Ahorra tiempo en tu rutina diaria"
      ],
      icon: "Eye"
    },
    {
      id: "extensiones-pestanas",
      name: "Extensiones de Pestañas",
      description: "Mirada impactante con extensiones pelo a pelo que respetan tus pestañas naturales. Conseguimos el efecto que deseas: natural, volumen o glamuroso. Aplicación cuidadosa para máxima comodidad y durabilidad.",
      benefits: [
        "Mirada más intensa y expresiva",
        "Aplicación pelo a pelo respetuosa",
        "Duración de varias semanas"
      ],
      icon: "Eye"
    },
    {
      id: "asesoramiento-personalizado",
      name: "Asesoramiento Personalizado",
      description: "Estudiamos tus necesidades específicas y diseñamos un plan de tratamientos adaptado a ti. En Anna estética integral y bienestar cada cliente es único y merece una atención exclusiva. Te acompañamos en tu proceso de bienestar con seguimiento continuo.",
      benefits: [
        "Plan de tratamientos a tu medida",
        "Seguimiento continuo de resultados",
        "Atención cercana y profesional"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 695 30 35 88 o escríbenos por WhatsApp para solicitar tu cita. Te atendemos con cercanía y te asesoramos sobre el mejor momento para tu visita."
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "En tu primera visita, Anna analizará tus necesidades específicas y diseñará un tratamiento completamente adaptado a ti. Buscamos tu comodidad desde el primer momento."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Realizamos tu tratamiento con técnicas avanzadas, productos premium y el máximo cuidado. Cumplimos todos los protocolos de seguridad para que te sientas tranquila y confiada."
    },
    {
      step: 4,
      title: "Resultados y Seguimiento",
      description: "Disfruta de resultados visibles y duraderos. Te acompañamos con seguimiento personalizado y consejos para mantener los beneficios de tu tratamiento en el tiempo."
    }
  ],
  whyUs: [
    {
      title: "4.9 Estrellas en Google",
      description: "Más de 68 clientas satisfechas avalan nuestro trabajo con valoraciones excelentes. Nuestro compromiso con la calidad y el trato personalizado nos convierte en el centro de estética de referencia en Tomelloso.",
      icon: "Sparkles"
    },
    {
      title: "Trato Personalizado y Cercano",
      description: "En Anna estética integral y bienestar cada cliente es único. Buscamos tu comodidad desde el primer momento, adaptamos cada tratamiento a tus necesidades específicas y te hacemos sentir cómoda en todo momento con un trato empático y profesional.",
      icon: "Heart"
    },
    {
      title: "Profesionalidad Reconocida",
      description: "Anna es una profesional de 10 con amplia experiencia en todos los servicios de estética. Nuestras clientas destacan especialmente la calidad de la manicura de larga duración, la depilación cuidadosa y el maquillaje profesional impecable.",
      icon: "Zap"
    },
    {
      title: "Compromiso Social y Valores",
      description: "Trabajamos con colectivos en riesgo de exclusión social y dedicamos parte de nuestros recursos a personas con discapacidad. En Anna estética integral y bienestar la belleza va unida a valores de empatía, inclusión y responsabilidad social.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Anna",
      role: "Directora y Especialista en Estética Integral",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En Anna estética integral y bienestar nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Anna estética integral y bienestar - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Anna estética integral y bienestar - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Anna estética integral y bienestar - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Anna estética integral y bienestar - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Anna estética integral y bienestar - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Anna estética integral y bienestar - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Anna estética integral y bienestar - Imagen 7"
    }
  ],
  faq: [
    {
      question: "¿Qué servicios ofrece Anna estética integral y bienestar?",
      answer: "En Anna estética integral y bienestar ofrecemos una amplia gama de servicios: tratamientos faciales personalizados, manicura y pedicura de larga duración, depilación con cera, maquillaje profesional, tratamientos corporales reductores y reafirmantes, micropigmentación y extensiones de pestañas. Cada servicio está diseñado con atención personalizada y productos de alta calidad."
    },
    {
      question: "¿Cómo puedo reservar mi cita?",
      answer: "Reservar tu cita es muy sencillo. Puedes llamarnos directamente al 695 30 35 88 o escribirnos por WhatsApp al mismo número. Te atenderemos con cercanía y te ayudaremos a encontrar el mejor horario según tus necesidades. Nuestro trato personalizado empieza desde el primer contacto."
    },
    {
      question: "¿Qué medidas de seguridad e higiene seguís?",
      answer: "En Anna estética integral y bienestar cumplimos estrictamente todos los protocolos de seguridad e higiene. Nuestras clientas destacan en sus reseñas la confianza que les genera nuestro cumplimiento de las medidas sanitarias. Esterilizamos todo el material, utilizamos productos desechables cuando es necesario y mantenemos espacios perfectamente desinfectados."
    },
    {
      question: "¿Por qué las clientas recomiendan tanto Anna estética integral y bienestar?",
      answer: "Nuestras 68 reseñas con 4.9 estrellas en Google hablan por sí solas. Las clientas destacan nuestro trato cercano y personalizado, la profesionalidad de Anna, la comodidad durante los tratamientos y la durabilidad de los resultados. Además, valoran especialmente la empatía, el cuidado de la persona y la atención a las necesidades individuales de cada cliente."
    },
    {
      question: "¿Cuánto duran los tratamientos de manicura y pedicura?",
      answer: "Nuestras clientas destacan especialmente la durabilidad de nuestras manicuras y pedicuras. Utilizamos esmaltes de alta calidad y técnicas profesionales que garantizan uñas perfectas durante semanas. La duración exacta depende del tipo de esmalte elegido y de tus cuidados, pero te asesoraremos personalmente para maximizar los resultados."
    },
    {
      question: "¿La depilación con cera duele mucho?",
      answer: "En Anna estética integral y bienestar realizamos la depilación con cera con muchísimo cuidado y técnicas que minimizan las molestias. Nuestras clientas comentan en sus reseñas que apenas lo notan y destacan lo cuidadoso del proceso. Utilizamos productos de calidad que respetan tu piel y hacemos todo lo posible para que tu experiencia sea lo más confortable posible."
    },
    {
      question: "¿Ofrecéis tratamientos para ocasiones especiales?",
      answer: "Sí, Anna es reconocida como excelente maquilladora profesional y ofrecemos servicios específicos para bodas, eventos y ocasiones especiales. Creamos looks personalizados que resaltan tu belleza natural. También podemos combinar maquillaje con tratamientos faciales previos para que luzcas radiante en tu día especial."
    },
    {
      question: "¿Dónde se encuentra Anna estética integral y bienestar?",
      answer: "Estamos ubicados en Tomelloso, Ciudad Real. Somos el centro de estética de referencia en la zona, con más de 68 reseñas que avalan nuestra calidad y profesionalidad. Para conocer nuestra dirección exacta y cómo llegar, contáctanos al 695 30 35 88 y te indicaremos cómo encontrarnos fácilmente."
    }
  ],
  seo: {
    titleTemplate: "%s | Anna estética integral y bienestar",
    defaultTitle: "Anna estética integral y bienestar | Tomelloso",
    defaultDescription: "Centro de estética en Tomelloso con 4.9★. Tratamientos faciales, manicura, depilación, maquillaje profesional y más. Trato personalizado y cercano. ☎ 695 30 35 88",
    keywords: [
      "estética Tomelloso",
      "centro estética Tomelloso",
      "Anna estética integral bienestar",
      "manicura Tomelloso",
      "tratamientos faciales Tomelloso",
      "depilación Tomelloso",
      "maquillaje profesional Tomelloso",
      "pedicura Tomelloso",
      "estética Ciudad Real",
      "centro belleza Tomelloso",
      "micropigmentación Tomelloso",
      "extensiones pestañas Tomelloso"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Anna estética integral y bienestar",
    cif: "",
    registeredAddress: "C. Estación, 90, 13700 Tomelloso, Ciudad Real, España, Tomelloso, Ciudad Real"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Tomelloso"
  ],
  heroDescription: "En Anna estética integral y bienestar encontrarás más que tratamientos de belleza: descubrirás un espacio de confianza donde cada servicio está diseñado para ti. Con un trato personalizado, cercanía y profesionalidad, te ayudamos a sentirte bien contigo misma con técnicas avanzadas y productos de alta calidad.",
  specialty: "Estética Personalizada",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para sentirte radiante y cuidada?",
  ctaDescription: "Reserva tu cita en Anna estética integral y bienestar y descubre el trato personalizado que más de 68 clientes han valorado con 4.9 estrellas. Tu bienestar es nuestra prioridad.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
