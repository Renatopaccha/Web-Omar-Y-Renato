import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ES' | 'EN' | 'DE' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ES: {
    // Header & Navigation
    'nav.demos': 'Demos',
    'nav.pricing': 'Planes',
    'nav.process': 'Proceso',
    'nav.about': 'Sobre nosotros',
    'nav.contact': 'Contacto',
    'nav.cta': 'Pedir demo',
    
    // Hero Section
    'hero.title': 'Webs para consultorios que convierten visitas en citas',
    'hero.subtitle': 'Diseño moderno, rápido y claro. Listo para móvil. Reserva online, formularios y contacto según tu país. Entrega rápida.',
    'hero.cta.primary': 'Ver demos',
    'hero.cta.secondary': 'Pedir cotización',
    'hero.trust.1': 'Enfocado en salud',
    'hero.trust.2': 'Mobile-first y rápido',
    'hero.trust.3': 'Multi-idioma (ES/EN/DE/FR)',

    // Demos Section
    'demos.title': 'Demos de ejemplo',
    'demos.subtitle': 'Diseños pensados para consultorios. Personalizamos colores, fotos, textos y secciones según tus necesidades.',
    'demos.card1.title': 'Demo Odontología',
    'demos.card2.title': 'Demo Medicina general',
    'demos.card3.title': 'Demo Especialidad',
    'demos.feature1': 'Servicios',
    'demos.feature2': 'Ubicación',
    'demos.feature3': 'Agendar cita',
    'demos.cta': 'Ver demo',
    'demos.note': 'Nota:',
    'demos.note.text': 'Demos de ejemplo. Personalizamos colores, fotos, textos y secciones.',

    // Pricing Section
    'pricing.title': 'Planes y precios',
    'pricing.subtitle': 'Todos los planes incluyen diseño moderno, hosting y dominio por 1 año. Sin comisiones por cita.',
    'pricing.plan1.name': 'Presencia Profesional',
    'pricing.plan1.price': '$299',
    'pricing.plan1.badge': 'Lanzamiento',
    'pricing.plan1.feature1': 'Landing profesional',
    'pricing.plan1.feature2': 'Sección de servicios',
    'pricing.plan1.feature3': 'Ubicación y contacto',
    'pricing.plan1.feature4': 'Diseño móvil optimizado',
    'pricing.plan1.feature5': 'SEO local básico',
    'pricing.plan2.name': 'Citas por Contacto',
    'pricing.plan2.price': '$499',
    'pricing.plan2.badge': 'Más vendido',
    'pricing.plan2.feature1': 'Todo lo de Presencia Profesional',
    'pricing.plan2.feature2': 'Formulario de solicitud',
    'pricing.plan2.feature3': 'CTA a llamada/email',
    'pricing.plan2.feature4': 'Integración WhatsApp',
    'pricing.plan2.feature5': '2 rondas de cambios',
    'pricing.plan3.name': 'Reserva Online',
    'pricing.plan3.price': '$799',
    'pricing.plan3.feature1': 'Todo lo de Citas por Contacto',
    'pricing.plan3.feature2': 'Integración de calendario',
    'pricing.plan3.feature3': 'Sistema de reservas',
    'pricing.plan3.feature4': 'Confirmaciones automáticas',
    'pricing.plan3.feature5': 'Recordatorios básicos',
    'pricing.plan4.name': 'Pro con Panel Admin',
    'pricing.plan4.price': '$1,499',
    'pricing.plan4.feature1': 'Todo lo de Reserva Online',
    'pricing.plan4.feature2': 'Panel de administración',
    'pricing.plan4.feature3': 'Editar precios y servicios',
    'pricing.plan4.feature4': 'Gestión de solicitudes',
    'pricing.plan4.feature5': 'Roles básicos',
    'pricing.cta': 'Ver detalles',
    'pricing.note': 'Nota:',
    'pricing.note.text': 'Precios de lanzamiento válidos hasta 2026. Hosting y dominio incluidos por 1 año.',

    // Benefits Section
    'benefits.title': 'Qué obtienes con ClinicaWeb',
    'benefits.subtitle': 'No vendemos solo un sitio web. Te ayudamos a conseguir más citas y transmitir profesionalismo.',
    'benefits.1.title': 'Más confianza en tus pacientes',
    'benefits.1.description': 'Un sitio profesional genera credibilidad y tranquilidad desde la primera visita.',
    'benefits.2.title': 'Más solicitudes desde el celular',
    'benefits.2.description': 'Diseño optimizado para móvil donde tus pacientes realmente navegan.',
    'benefits.3.title': 'Información clara',
    'benefits.3.description': 'Servicios, precios y ubicación siempre visibles y actualizados.',
    'benefits.4.title': 'Diseño moderno y rápido',
    'benefits.4.description': 'Carga instantánea y navegación fluida para no perder visitantes.',
    'benefits.5.title': 'Multi-idioma internacional',
    'benefits.5.description': 'Atiende pacientes en ES, EN, DE y FR sin complicaciones.',
    'benefits.6.title': 'Actualizaciones fáciles',
    'benefits.6.description': 'Con el plan Pro, edita precios y servicios cuando quieras.',

    // Process Section
    'process.title': 'Proceso simple en 3 pasos',
    'process.subtitle': 'Sin complicaciones. Desde el primer contacto hasta tu sitio en vivo.',
    'process.step1.title': 'Nos envías tu información',
    'process.step1.description': 'Completa un formulario rápido con los datos de tu consultorio, servicios y preferencias.',
    'process.step2.title': 'Te mostramos la primera versión',
    'process.step2.description': 'En pocos días recibes un borrador completo para revisar y aprobar.',
    'process.step3.title': 'Ajustes y publicación',
    'process.step3.description': 'Hacemos 2 rondas de cambios incluidas y publicamos tu sitio listo para recibir pacientes.',
    'process.included': '2 rondas de cambios incluidas en todos los planes',

    // About Section
    'about.title': 'Sobre nosotros',
    'about.subtitle': 'Estudiantes del área de la salud creando soluciones para consultorios',
    'about.team.title': 'Nuestro equipo',
    'about.team.member1': 'Estudiantes de Medicina',
    'about.team.member2': 'Estudiantes de Odontología',
    'about.team.description': 'Somos estudiantes del área de la salud (medicina y odontología) que entendemos las necesidades reales de los profesionales. Creamos webs claras, rápidas y enfocadas en convertir visitas en citas.',
    'about.values.title': 'Nuestros valores',
    'about.value1.title': 'Claridad',
    'about.value1.description': 'Información directa y fácil de entender',
    'about.value2.title': 'Confianza',
    'about.value2.description': 'Diseños que transmiten profesionalismo',
    'about.value3.title': 'Velocidad',
    'about.value3.description': 'Entrega rápida sin comprometer calidad',

    // FAQ Section
    'faq.title': 'Preguntas frecuentes',
    'faq.subtitle': 'Resolvemos tus dudas sobre cómo trabajamos',
    'faq.q1': '¿Qué necesito para empezar?',
    'faq.a1': 'Solo necesitas tener clara la información de tu consultorio: nombre, servicios que ofreces, ubicación y datos de contacto. Nosotros nos encargamos del resto.',
    'faq.q2': '¿Cuánto tarda el proceso?',
    'faq.a2': 'Dependiendo del plan, entre 5 y 15 días hábiles. Te mostramos una primera versión en 3-5 días para que puedas dar feedback.',
    'faq.q3': '¿Incluye dominio y hosting?',
    'faq.a3': 'El hosting está incluido en el primer año. El dominio (ejemplo: tuconsultorio.com) puedes comprarlo tú o podemos ayudarte a gestionarlo por un costo adicional.',
    'faq.q4': '¿Puedo editar precios y servicios después?',
    'faq.a4': 'En el plan Pro con Panel Admin, sí. Puedes editar precios, servicios y contenido desde un panel sencillo. En los otros planes, los cambios los hacemos nosotros con el mantenimiento mensual.',
    'faq.q5': '¿Cómo funciona la reserva de citas?',
    'faq.a5': 'Integramos herramientas como Calendly o Cal.com que permiten a tus pacientes ver tu disponibilidad y agendar directamente. Recibes notificaciones por email.',
    'faq.q6': '¿Pueden hacerlo totalmente personalizado?',
    'faq.a6': 'Sí, podemos crear funciones especiales, múltiples sedes, integraciones con tu sistema actual o cualquier requerimiento. Cotizamos según el proyecto.',
    'faq.q7': '¿En qué idiomas pueden entregar el sitio?',
    'faq.a7': 'Entregamos el sitio en español por defecto. Podemos agregar inglés, alemán y francés como opciones adicionales con un selector visible para tus pacientes.',

    // Contact Section
    'contact.title': 'Pide tu cotización',
    'contact.subtitle': 'Cuéntanos sobre tu consultorio y te enviamos una propuesta personalizada',
    'contact.info.title': '¿Quieres una demo con tu información?',
    'contact.info.description': 'Envíanos el nombre del consultorio, ciudad y servicios principales. Te preparamos una vista previa personalizada.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.name': 'Tu nombre completo',
    'contact.form.consultorio': 'Nombre del consultorio',
    'contact.form.country': 'País',
    'contact.form.email': 'Email',
    'contact.form.whatsapp': 'WhatsApp (opcional)',
    'contact.form.service': 'Especialidad / Servicio',
    'contact.form.message': 'Cuéntanos qué necesitas',
    'contact.form.submit': 'Enviar solicitud',
    'contact.form.success': 'Formulario enviado. Nos pondremos en contacto pronto.',

    // Footer
    'footer.copyright': '© ClinicaWeb — Webs para salud',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.contact': 'Contacto',
    'footer.company': 'Empresa',
    'footer.product': 'Producto',
    'footer.legal': 'Legal',

    // Sticky CTA
    'sticky.cta': 'Pedir cotización',

    // Pages
    'page.demos.title': 'Demos de ejemplo',
    'page.demos.subtitle': 'Explora nuestros diseños especializados para profesionales de la salud',
    'page.pricing.title': 'Planes y precios',
    'page.pricing.subtitle': 'Elige el plan perfecto para tu consultorio',
    'page.about.title': 'Sobre nosotros',
    'page.about.subtitle': 'Estudiantes creando soluciones profesionales',
    'page.contact.title': 'Contáctanos',
    'page.contact.subtitle': 'Estamos aquí para ayudarte',
    'page.404.title': '404 - Página no encontrada',
    'page.404.description': 'Lo sentimos, la página que buscas no existe.',
    'page.404.cta': 'Volver al inicio',
  },
  EN: {
    // Header & Navigation
    'nav.demos': 'Demos',
    'nav.pricing': 'Pricing',
    'nav.process': 'Process',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'nav.cta': 'Request demo',
    
    // Hero Section
    'hero.title': 'Websites for healthcare practices that convert visits into appointments',
    'hero.subtitle': 'Modern, fast, and clear design. Mobile-ready. Online booking, forms, and contact options tailored to your country. Fast delivery.',
    'hero.cta.primary': 'View demos',
    'hero.cta.secondary': 'Request quote',
    'hero.trust.1': 'Healthcare-focused',
    'hero.trust.2': 'Mobile-first & fast',
    'hero.trust.3': 'Multi-language (ES/EN/DE/FR)',

    // Demos Section
    'demos.title': 'Sample Demos',
    'demos.subtitle': 'Designs created for healthcare practices. We customize colors, photos, text, and sections according to your needs.',
    'demos.card1.title': 'Dentistry Demo',
    'demos.card2.title': 'General Medicine Demo',
    'demos.card3.title': 'Specialty Demo',
    'demos.feature1': 'Services',
    'demos.feature2': 'Location',
    'demos.feature3': 'Book appointment',
    'demos.cta': 'View demo',
    'demos.note': 'Note:',
    'demos.note.text': 'Sample demos. We customize colors, photos, texts, and sections.',

    // Pricing Section
    'pricing.title': 'Plans and Pricing',
    'pricing.subtitle': 'All plans include modern design, hosting, and domain for 1 year. No commissions per appointment.',
    'pricing.plan1.name': 'Professional Presence',
    'pricing.plan1.price': '$299',
    'pricing.plan1.badge': 'Launch',
    'pricing.plan1.feature1': 'Professional landing page',
    'pricing.plan1.feature2': 'Services section',
    'pricing.plan1.feature3': 'Location and contact',
    'pricing.plan1.feature4': 'Mobile-optimized design',
    'pricing.plan1.feature5': 'Basic local SEO',
    'pricing.plan2.name': 'Contact Appointments',
    'pricing.plan2.price': '$499',
    'pricing.plan2.badge': 'Most popular',
    'pricing.plan2.feature1': 'All from Professional Presence',
    'pricing.plan2.feature2': 'Request form',
    'pricing.plan2.feature3': 'Call/email CTA',
    'pricing.plan2.feature4': 'WhatsApp integration',
    'pricing.plan2.feature5': '2 rounds of revisions',
    'pricing.plan3.name': 'Online Booking',
    'pricing.plan3.price': '$799',
    'pricing.plan3.feature1': 'All from Contact Appointments',
    'pricing.plan3.feature2': 'Calendar integration',
    'pricing.plan3.feature3': 'Booking system',
    'pricing.plan3.feature4': 'Automatic confirmations',
    'pricing.plan3.feature5': 'Basic reminders',
    'pricing.plan4.name': 'Pro with Admin Panel',
    'pricing.plan4.price': '$1,499',
    'pricing.plan4.feature1': 'All from Online Booking',
    'pricing.plan4.feature2': 'Admin panel',
    'pricing.plan4.feature3': 'Edit prices and services',
    'pricing.plan4.feature4': 'Request management',
    'pricing.plan4.feature5': 'Basic roles',
    'pricing.cta': 'View details',
    'pricing.note': 'Note:',
    'pricing.note.text': 'Launch prices valid until 2026. Hosting and domain included for 1 year.',

    // Benefits Section
    'benefits.title': 'What you get with ClinicaWeb',
    'benefits.subtitle': "We don't just sell websites. We help you get more appointments and convey professionalism.",
    'benefits.1.title': 'More trust from your patients',
    'benefits.1.description': 'A professional site generates credibility and peace of mind from the first visit.',
    'benefits.2.title': 'More requests from mobile',
    'benefits.2.description': 'Mobile-optimized design where your patients actually browse.',
    'benefits.3.title': 'Clear information',
    'benefits.3.description': 'Services, prices, and location always visible and updated.',
    'benefits.4.title': 'Modern and fast design',
    'benefits.4.description': 'Instant loading and smooth navigation to not lose visitors.',
    'benefits.5.title': 'Multi-language international',
    'benefits.5.description': 'Serve patients in ES, EN, DE, and FR without complications.',
    'benefits.6.title': 'Easy updates',
    'benefits.6.description': 'With the Pro plan, edit prices and services whenever you want.',

    // Process Section
    'process.title': 'Simple 3-step process',
    'process.subtitle': 'No complications. From first contact to your live site.',
    'process.step1.title': 'You send us your information',
    'process.step1.description': 'Fill out a quick form with your practice data, services, and preferences.',
    'process.step2.title': 'We show you the first version',
    'process.step2.description': 'In a few days you receive a complete draft to review and approve.',
    'process.step3.title': 'Adjustments and publication',
    'process.step3.description': 'We make 2 rounds of included revisions and publish your site ready to receive patients.',
    'process.included': '2 rounds of revisions included in all plans',

    // About Section
    'about.title': 'About us',
    'about.subtitle': 'Healthcare students creating solutions for practices',
    'about.team.title': 'Our team',
    'about.team.member1': 'Medical Students',
    'about.team.member2': 'Dentistry Students',
    'about.team.description': 'We are healthcare students (medicine and dentistry) who understand the real needs of professionals. We create clear, fast websites focused on converting visits into appointments.',
    'about.values.title': 'Our values',
    'about.value1.title': 'Clarity',
    'about.value1.description': 'Direct and easy to understand information',
    'about.value2.title': 'Trust',
    'about.value2.description': 'Designs that convey professionalism',
    'about.value3.title': 'Speed',
    'about.value3.description': 'Fast delivery without compromising quality',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'We answer your questions about how we work',
    'faq.q1': 'What do I need to get started?',
    'faq.a1': 'You only need clear information about your practice: name, services you offer, location, and contact details. We take care of the rest.',
    'faq.q2': 'How long does the process take?',
    'faq.a2': 'Depending on the plan, between 5 and 15 business days. We show you a first version in 3-5 days so you can give feedback.',
    'faq.q3': 'Does it include domain and hosting?',
    'faq.a3': 'Hosting is included in the first year. The domain (example: yourpractice.com) you can buy yourself or we can help you manage it for an additional cost.',
    'faq.q4': 'Can I edit prices and services later?',
    'faq.a4': 'In the Pro with Admin Panel plan, yes. You can edit prices, services, and content from a simple panel. In other plans, we make the changes with monthly maintenance.',
    'faq.q5': 'How does appointment booking work?',
    'faq.a5': 'We integrate tools like Calendly or Cal.com that allow your patients to see your availability and book directly. You receive email notifications.',
    'faq.q6': 'Can you make it completely custom?',
    'faq.a6': 'Yes, we can create special features, multiple locations, integrations with your current system, or any requirement. We quote according to the project.',
    'faq.q7': 'In what languages can you deliver the site?',
    'faq.a7': 'We deliver the site in Spanish by default. We can add English, German, and French as additional options with a visible selector for your patients.',

    // Contact Section
    'contact.title': 'Request your quote',
    'contact.subtitle': 'Tell us about your practice and we will send you a personalized proposal',
    'contact.info.title': 'Want a demo with your information?',
    'contact.info.description': 'Send us the practice name, city, and main services. We will prepare a personalized preview for you.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.name': 'Your full name',
    'contact.form.consultorio': 'Practice name',
    'contact.form.country': 'Country',
    'contact.form.email': 'Email',
    'contact.form.whatsapp': 'WhatsApp (optional)',
    'contact.form.service': 'Specialty / Service',
    'contact.form.message': 'Tell us what you need',
    'contact.form.submit': 'Submit request',
    'contact.form.success': 'Form submitted. We will contact you soon.',

    // Footer
    'footer.copyright': '© ClinicaWeb — Healthcare Websites',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.company': 'Company',
    'footer.product': 'Product',
    'footer.legal': 'Legal',

    // Sticky CTA
    'sticky.cta': 'Request quote',

    // Pages
    'page.demos.title': 'Sample Demos',
    'page.demos.subtitle': 'Explore our specialized designs for healthcare professionals',
    'page.pricing.title': 'Plans and Pricing',
    'page.pricing.subtitle': 'Choose the perfect plan for your practice',
    'page.about.title': 'About us',
    'page.about.subtitle': 'Students creating professional solutions',
    'page.contact.title': 'Contact us',
    'page.contact.subtitle': "We're here to help you",
    'page.404.title': '404 - Page not found',
    'page.404.description': "Sorry, the page you're looking for doesn't exist.",
    'page.404.cta': 'Back to home',
  },
  DE: {
    // Header & Navigation
    'nav.demos': 'Demos',
    'nav.pricing': 'Preise',
    'nav.process': 'Prozess',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Demo anfragen',
    
    // Hero Section
    'hero.title': 'Websites für Praxen, die Besuche in Termine verwandeln',
    'hero.subtitle': 'Modernes, schnelles und klares Design. Mobilfreundlich. Online-Buchung, Formulare und Kontaktoptionen für Ihr Land. Schnelle Lieferung.',
    'hero.cta.primary': 'Demos ansehen',
    'hero.cta.secondary': 'Angebot anfordern',
    'hero.trust.1': 'Gesundheitsfokussiert',
    'hero.trust.2': 'Mobile-first & schnell',
    'hero.trust.3': 'Mehrsprachig (ES/EN/DE/FR)',

    // Demos Section
    'demos.title': 'Beispiel-Demos',
    'demos.subtitle': 'Designs für Praxen entwickelt. Wir passen Farben, Fotos, Texte und Abschnitte nach Ihren Bedürfnissen an.',
    'demos.card1.title': 'Zahnmedizin-Demo',
    'demos.card2.title': 'Allgemeinmedizin-Demo',
    'demos.card3.title': 'Fachbereich-Demo',
    'demos.feature1': 'Dienstleistungen',
    'demos.feature2': 'Standort',
    'demos.feature3': 'Termin buchen',
    'demos.cta': 'Demo ansehen',
    'demos.note': 'Hinweis:',
    'demos.note.text': 'Beispiel-Demos. Wir passen Farben, Fotos, Texte und Abschnitte an.',

    // Pricing Section
    'pricing.title': 'Pakete und Preise',
    'pricing.subtitle': 'Alle Pakete beinhalten modernes Design, Hosting und Domain für 1 Jahr. Keine Provisionen pro Termin.',
    'pricing.plan1.name': 'Professionelle Präsenz',
    'pricing.plan1.price': '$299',
    'pricing.plan1.badge': 'Start',
    'pricing.plan1.feature1': 'Professionelle Landingpage',
    'pricing.plan1.feature2': 'Dienstleistungsbereich',
    'pricing.plan1.feature3': 'Standort und Kontakt',
    'pricing.plan1.feature4': 'Mobile-optimiertes Design',
    'pricing.plan1.feature5': 'Basis lokales SEO',
    'pricing.plan2.name': 'Termine per Kontakt',
    'pricing.plan2.price': '$499',
    'pricing.plan2.badge': 'Meistverkauft',
    'pricing.plan2.feature1': 'Alles aus Professionelle Präsenz',
    'pricing.plan2.feature2': 'Anfrageformular',
    'pricing.plan2.feature3': 'Anruf/E-Mail CTA',
    'pricing.plan2.feature4': 'WhatsApp-Integration',
    'pricing.plan2.feature5': '2 Änderungsrunden',
    'pricing.plan3.name': 'Online-Buchung',
    'pricing.plan3.price': '$799',
    'pricing.plan3.feature1': 'Alles aus Termine per Kontakt',
    'pricing.plan3.feature2': 'Kalender-Integration',
    'pricing.plan3.feature3': 'Buchungssystem',
    'pricing.plan3.feature4': 'Automatische Bestätigungen',
    'pricing.plan3.feature5': 'Basis-Erinnerungen',
    'pricing.plan4.name': 'Pro mit Admin-Panel',
    'pricing.plan4.price': '$1.499',
    'pricing.plan4.feature1': 'Alles aus Online-Buchung',
    'pricing.plan4.feature2': 'Admin-Panel',
    'pricing.plan4.feature3': 'Preise und Services bearbeiten',
    'pricing.plan4.feature4': 'Anfrageverwaltung',
    'pricing.plan4.feature5': 'Basis-Rollen',
    'pricing.cta': 'Details ansehen',
    'pricing.note': 'Hinweis:',
    'pricing.note.text': 'Startpreise gültig bis 2026. Hosting und Domain für 1 Jahr inbegriffen.',

    // Benefits Section
    'benefits.title': 'Was Sie mit ClinicaWeb erhalten',
    'benefits.subtitle': 'Wir verkaufen nicht nur Websites. Wir helfen Ihnen, mehr Termine zu bekommen und Professionalität zu vermitteln.',
    'benefits.1.title': 'Mehr Vertrauen bei Ihren Patienten',
    'benefits.1.description': 'Eine professionelle Website schafft Glaubwürdigkeit und Sicherheit vom ersten Besuch an.',
    'benefits.2.title': 'Mehr Anfragen vom Smartphone',
    'benefits.2.description': 'Mobile-optimiertes Design, wo Ihre Patienten tatsächlich surfen.',
    'benefits.3.title': 'Klare Informationen',
    'benefits.3.description': 'Services, Preise und Standort immer sichtbar und aktuell.',
    'benefits.4.title': 'Modernes und schnelles Design',
    'benefits.4.description': 'Sofortiges Laden und flüssige Navigation, um keine Besucher zu verlieren.',
    'benefits.5.title': 'Mehrsprachig international',
    'benefits.5.description': 'Betreuen Sie Patienten in ES, EN, DE und FR ohne Komplikationen.',
    'benefits.6.title': 'Einfache Aktualisierungen',
    'benefits.6.description': 'Mit dem Pro-Paket bearbeiten Sie Preise und Services wann Sie wollen.',

    // Process Section
    'process.title': 'Einfacher 3-Schritte-Prozess',
    'process.subtitle': 'Keine Komplikationen. Vom ersten Kontakt bis zu Ihrer Live-Website.',
    'process.step1.title': 'Sie senden uns Ihre Informationen',
    'process.step1.description': 'Füllen Sie ein schnelles Formular mit Ihren Praxisdaten, Services und Präferenzen aus.',
    'process.step2.title': 'Wir zeigen Ihnen die erste Version',
    'process.step2.description': 'In wenigen Tagen erhalten Sie einen vollständigen Entwurf zur Überprüfung und Genehmigung.',
    'process.step3.title': 'Anpassungen und Veröffentlichung',
    'process.step3.description': 'Wir führen 2 inbegriffene Änderungsrunden durch und veröffentlichen Ihre Website bereit für Patienten.',
    'process.included': '2 Änderungsrunden in allen Paketen inbegriffen',

    // About Section
    'about.title': 'Über uns',
    'about.subtitle': 'Gesundheitsstudenten schaffen Lösungen für Praxen',
    'about.team.title': 'Unser Team',
    'about.team.member1': 'Medizinstudenten',
    'about.team.member2': 'Zahnmedizinstudenten',
    'about.team.description': 'Wir sind Gesundheitsstudenten (Medizin und Zahnmedizin), die die realen Bedürfnisse von Fachleuten verstehen. Wir erstellen klare, schnelle Websites, die sich darauf konzentrieren, Besuche in Termine zu verwandeln.',
    'about.values.title': 'Unsere Werte',
    'about.value1.title': 'Klarheit',
    'about.value1.description': 'Direkte und leicht verständliche Informationen',
    'about.value2.title': 'Vertrauen',
    'about.value2.description': 'Designs, die Professionalität vermitteln',
    'about.value3.title': 'Geschwindigkeit',
    'about.value3.description': 'Schnelle Lieferung ohne Qualitätseinbußen',

    // FAQ Section
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Wir beantworten Ihre Fragen über unsere Arbeitsweise',
    'faq.q1': 'Was brauche ich, um zu starten?',
    'faq.a1': 'Sie benötigen nur klare Informationen über Ihre Praxis: Name, angebotene Services, Standort und Kontaktdaten. Um den Rest kümmern wir uns.',
    'faq.q2': 'Wie lange dauert der Prozess?',
    'faq.a2': 'Je nach Paket zwischen 5 und 15 Werktagen. Wir zeigen Ihnen eine erste Version in 3-5 Tagen, damit Sie Feedback geben können.',
    'faq.q3': 'Beinhaltet es Domain und Hosting?',
    'faq.a3': 'Hosting ist im ersten Jahr inbegriffen. Die Domain (Beispiel: ihrepraxis.com) können Sie selbst kaufen oder wir helfen Ihnen bei der Verwaltung gegen Aufpreis.',
    'faq.q4': 'Kann ich Preise und Services später bearbeiten?',
    'faq.a4': 'Im Pro mit Admin-Panel Paket, ja. Sie können Preise, Services und Inhalte über ein einfaches Panel bearbeiten. Bei anderen Paketen nehmen wir die Änderungen mit der monatlichen Wartung vor.',
    'faq.q5': 'Wie funktioniert die Terminbuchung?',
    'faq.a5': 'Wir integrieren Tools wie Calendly oder Cal.com, die Ihren Patienten ermöglichen, Ihre Verfügbarkeit zu sehen und direkt zu buchen. Sie erhalten E-Mail-Benachrichtigungen.',
    'faq.q6': 'Können Sie es komplett individualisieren?',
    'faq.a6': 'Ja, wir können spezielle Funktionen, mehrere Standorte, Integrationen mit Ihrem aktuellen System oder jede Anforderung erstellen. Wir erstellen ein Angebot je nach Projekt.',
    'faq.q7': 'In welchen Sprachen können Sie die Website liefern?',
    'faq.a7': 'Wir liefern die Website standardmäßig auf Spanisch. Wir können Englisch, Deutsch und Französisch als zusätzliche Optionen mit einem sichtbaren Selektor für Ihre Patienten hinzufügen.',

    // Contact Section
    'contact.title': 'Fordern Sie Ihr Angebot an',
    'contact.subtitle': 'Erzählen Sie uns von Ihrer Praxis und wir senden Ihnen ein personalisiertes Angebot',
    'contact.info.title': 'Möchten Sie eine Demo mit Ihren Informationen?',
    'contact.info.description': 'Senden Sie uns den Praxisnamen, Stadt und Hauptservices. Wir bereiten eine personalisierte Vorschau für Sie vor.',
    'contact.email': 'E-Mail',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.name': 'Ihr vollständiger Name',
    'contact.form.consultorio': 'Praxisname',
    'contact.form.country': 'Land',
    'contact.form.email': 'E-Mail',
    'contact.form.whatsapp': 'WhatsApp (optional)',
    'contact.form.service': 'Fachbereich / Service',
    'contact.form.message': 'Sagen Sie uns, was Sie benötigen',
    'contact.form.submit': 'Anfrage senden',
    'contact.form.success': 'Formular gesendet. Wir werden uns bald bei Ihnen melden.',

    // Footer
    'footer.copyright': '© ClinicaWeb — Gesundheitswebsites',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.contact': 'Kontakt',
    'footer.company': 'Unternehmen',
    'footer.product': 'Produkt',
    'footer.legal': 'Rechtliches',

    // Sticky CTA
    'sticky.cta': 'Angebot anfordern',

    // Pages
    'page.demos.title': 'Beispiel-Demos',
    'page.demos.subtitle': 'Entdecken Sie unsere spezialisierten Designs für Gesundheitsfachkräfte',
    'page.pricing.title': 'Pakete und Preise',
    'page.pricing.subtitle': 'Wählen Sie das perfekte Paket für Ihre Praxis',
    'page.about.title': 'Über uns',
    'page.about.subtitle': 'Studenten schaffen professionelle Lösungen',
    'page.contact.title': 'Kontaktieren Sie uns',
    'page.contact.subtitle': 'Wir sind hier, um Ihnen zu helfen',
    'page.404.title': '404 - Seite nicht gefunden',
    'page.404.description': 'Entschuldigung, die gesuchte Seite existiert nicht.',
    'page.404.cta': 'Zurück zur Startseite',
  },
  FR: {
    // Header & Navigation
    'nav.demos': 'Démos',
    'nav.pricing': 'Tarifs',
    'nav.process': 'Processus',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.cta': 'Demander une démo',
    
    // Hero Section
    'hero.title': 'Sites web pour cabinets qui convertissent les visites en rendez-vous',
    'hero.subtitle': 'Design moderne, rapide et clair. Adapté au mobile. Réservation en ligne, formulaires et contact selon votre pays. Livraison rapide.',
    'hero.cta.primary': 'Voir les démos',
    'hero.cta.secondary': 'Demander un devis',
    'hero.trust.1': 'Axé sur la santé',
    'hero.trust.2': 'Mobile-first & rapide',
    'hero.trust.3': 'Multi-langue (ES/EN/DE/FR)',

    // Demos Section
    'demos.title': 'Démos Exemples',
    'demos.subtitle': 'Designs conçus pour les cabinets. Nous personnalisons les couleurs, photos, textes et sections selon vos besoins.',
    'demos.card1.title': 'Démo Dentisterie',
    'demos.card2.title': 'Démo Médecine Générale',
    'demos.card3.title': 'Démo Spécialité',
    'demos.feature1': 'Services',
    'demos.feature2': 'Emplacement',
    'demos.feature3': 'Prendre rendez-vous',
    'demos.cta': 'Voir la démo',
    'demos.note': 'Remarque :',
    'demos.note.text': 'Démos exemples. Nous personnalisons couleurs, photos, textes et sections.',

    // Pricing Section
    'pricing.title': 'Plans et Tarifs',
    'pricing.subtitle': 'Tous les plans incluent design moderne, hébergement et domaine pour 1 an. Pas de commissions par rendez-vous.',
    'pricing.plan1.name': 'Présence Professionnelle',
    'pricing.plan1.price': '$299',
    'pricing.plan1.badge': 'Lancement',
    'pricing.plan1.feature1': 'Page professionnelle',
    'pricing.plan1.feature2': 'Section services',
    'pricing.plan1.feature3': 'Emplacement et contact',
    'pricing.plan1.feature4': 'Design mobile optimisé',
    'pricing.plan1.feature5': 'SEO local basique',
    'pricing.plan2.name': 'Rendez-vous par Contact',
    'pricing.plan2.price': '$499',
    'pricing.plan2.badge': 'Plus populaire',
    'pricing.plan2.feature1': 'Tout de Présence Professionnelle',
    'pricing.plan2.feature2': 'Formulaire de demande',
    'pricing.plan2.feature3': 'CTA appel/email',
    'pricing.plan2.feature4': 'Intégration WhatsApp',
    'pricing.plan2.feature5': '2 tours de modifications',
    'pricing.plan3.name': 'Réservation en Ligne',
    'pricing.plan3.price': '$799',
    'pricing.plan3.feature1': 'Tout de Rendez-vous par Contact',
    'pricing.plan3.feature2': 'Intégration calendrier',
    'pricing.plan3.feature3': 'Système de réservation',
    'pricing.plan3.feature4': 'Confirmations automatiques',
    'pricing.plan3.feature5': 'Rappels basiques',
    'pricing.plan4.name': 'Pro avec Panneau Admin',
    'pricing.plan4.price': '$1.499',
    'pricing.plan4.feature1': 'Tout de Réservation en Ligne',
    'pricing.plan4.feature2': 'Panneau d\'administration',
    'pricing.plan4.feature3': 'Modifier prix et services',
    'pricing.plan4.feature4': 'Gestion des demandes',
    'pricing.plan4.feature5': 'Rôles basiques',
    'pricing.cta': 'Voir les détails',
    'pricing.note': 'Remarque :',
    'pricing.note.text': 'Prix de lancement valables jusqu\'en 2026. Hébergement et domaine inclus pour 1 an.',

    // Benefits Section
    'benefits.title': 'Ce que vous obtenez avec ClinicaWeb',
    'benefits.subtitle': 'Nous ne vendons pas seulement des sites web. Nous vous aidons à obtenir plus de rendez-vous et à transmettre le professionnalisme.',
    'benefits.1.title': 'Plus de confiance de vos patients',
    'benefits.1.description': 'Un site professionnel génère crédibilité et tranquillité dès la première visite.',
    'benefits.2.title': 'Plus de demandes depuis le mobile',
    'benefits.2.description': 'Design optimisé pour mobile où vos patients naviguent réellement.',
    'benefits.3.title': 'Informations claires',
    'benefits.3.description': 'Services, prix et emplacement toujours visibles et à jour.',
    'benefits.4.title': 'Design moderne et rapide',
    'benefits.4.description': 'Chargement instantané et navigation fluide pour ne pas perdre de visiteurs.',
    'benefits.5.title': 'Multi-langue international',
    'benefits.5.description': 'Servez les patients en ES, EN, DE et FR sans complications.',
    'benefits.6.title': 'Mises à jour faciles',
    'benefits.6.description': 'Avec le plan Pro, modifiez prix et services quand vous voulez.',

    // Process Section
    'process.title': 'Processus simple en 3 étapes',
    'process.subtitle': 'Sans complications. Du premier contact jusqu\'à votre site en ligne.',
    'process.step1.title': 'Vous nous envoyez vos informations',
    'process.step1.description': 'Remplissez un formulaire rapide avec les données de votre cabinet, services et préférences.',
    'process.step2.title': 'Nous vous montrons la première version',
    'process.step2.description': 'En quelques jours vous recevez un brouillon complet pour réviser et approuver.',
    'process.step3.title': 'Ajustements et publication',
    'process.step3.description': 'Nous faisons 2 tours de modifications incluses et publions votre site prêt à recevoir des patients.',
    'process.included': '2 tours de modifications inclus dans tous les plans',

    // About Section
    'about.title': 'À propos de nous',
    'about.subtitle': 'Étudiants en santé créant des solutions pour cabinets',
    'about.team.title': 'Notre équipe',
    'about.team.member1': 'Étudiants en Médecine',
    'about.team.member2': 'Étudiants en Dentisterie',
    'about.team.description': 'Nous sommes des étudiants en santé (médecine et dentisterie) qui comprennent les besoins réels des professionnels. Nous créons des sites clairs, rapides et axés sur la conversion de visites en rendez-vous.',
    'about.values.title': 'Nos valeurs',
    'about.value1.title': 'Clarté',
    'about.value1.description': 'Informations directes et faciles à comprendre',
    'about.value2.title': 'Confiance',
    'about.value2.description': 'Designs qui transmettent le professionnalisme',
    'about.value3.title': 'Rapidité',
    'about.value3.description': 'Livraison rapide sans compromettre la qualité',

    // FAQ Section
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Nous répondons à vos questions sur notre façon de travailler',
    'faq.q1': 'De quoi ai-je besoin pour commencer ?',
    'faq.a1': 'Vous avez seulement besoin d\'informations claires sur votre cabinet : nom, services que vous offrez, emplacement et coordonnées. Nous nous occupons du reste.',
    'faq.q2': 'Combien de temps dure le processus ?',
    'faq.a2': 'Selon le plan, entre 5 et 15 jours ouvrables. Nous vous montrons une première version en 3-5 jours pour que vous puissiez donner votre avis.',
    'faq.q3': 'Inclut-il domaine et hébergement ?',
    'faq.a3': 'L\'hébergement est inclus la première année. Le domaine (exemple : votrecabinet.com) vous pouvez l\'acheter vous-même ou nous pouvons vous aider à le gérer pour un coût supplémentaire.',
    'faq.q4': 'Puis-je modifier prix et services après ?',
    'faq.a4': 'Dans le plan Pro avec Panneau Admin, oui. Vous pouvez modifier prix, services et contenu depuis un panneau simple. Dans les autres plans, nous faisons les modifications avec la maintenance mensuelle.',
    'faq.q5': 'Comment fonctionne la réservation de rendez-vous ?',
    'faq.a5': 'Nous intégrons des outils comme Calendly ou Cal.com qui permettent à vos patients de voir votre disponibilité et réserver directement. Vous recevez des notifications par email.',
    'faq.q6': 'Pouvez-vous le faire totalement personnalisé ?',
    'faq.a6': 'Oui, nous pouvons créer des fonctions spéciales, plusieurs emplacements, intégrations avec votre système actuel ou toute exigence. Nous établissons un devis selon le projet.',
    'faq.q7': 'Dans quelles langues pouvez-vous livrer le site ?',
    'faq.a7': 'Nous livrons le site en espagnol par défaut. Nous pouvons ajouter anglais, allemand et français comme options supplémentaires avec un sélecteur visible pour vos patients.',

    // Contact Section
    'contact.title': 'Demandez votre devis',
    'contact.subtitle': 'Parlez-nous de votre cabinet et nous vous enverrons une proposition personnalisée',
    'contact.info.title': 'Voulez-vous une démo avec vos informations ?',
    'contact.info.description': 'Envoyez-nous le nom du cabinet, ville et services principaux. Nous vous préparons un aperçu personnalisé.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.name': 'Votre nom complet',
    'contact.form.consultorio': 'Nom du cabinet',
    'contact.form.country': 'Pays',
    'contact.form.email': 'Email',
    'contact.form.whatsapp': 'WhatsApp (optionnel)',
    'contact.form.service': 'Spécialité / Service',
    'contact.form.message': 'Dites-nous ce dont vous avez besoin',
    'contact.form.submit': 'Envoyer la demande',
    'contact.form.success': 'Formulaire envoyé. Nous vous contacterons bientôt.',

    // Footer
    'footer.copyright': '© ClinicaWeb — Sites web santé',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    'footer.contact': 'Contact',
    'footer.company': 'Entreprise',
    'footer.product': 'Produit',
    'footer.legal': 'Légal',

    // Sticky CTA
    'sticky.cta': 'Demander un devis',

    // Pages
    'page.demos.title': 'Démos Exemples',
    'page.demos.subtitle': 'Explorez nos designs spécialisés pour professionnels de santé',
    'page.pricing.title': 'Plans et Tarifs',
    'page.pricing.subtitle': 'Choisissez le plan parfait pour votre cabinet',
    'page.about.title': 'À propos de nous',
    'page.about.subtitle': 'Étudiants créant des solutions professionnelles',
    'page.contact.title': 'Contactez-nous',
    'page.contact.subtitle': 'Nous sommes là pour vous aider',
    'page.404.title': '404 - Page non trouvée',
    'page.404.description': 'Désolé, la page que vous cherchez n\'existe pas.',
    'page.404.cta': 'Retour à l\'accueil',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES');

  // Persist language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('clinicaweb-language') as Language;
    if (savedLanguage && ['ES', 'EN', 'DE', 'FR'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('clinicaweb-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
