import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/app/components/ui/accordion';

const DEMO_BASE = '/demos/odontologia';

const services = [
    {
        title: "Limpieza y profilaxis",
        description: "Limpieza dental profesional completa que incluye remoción de sarro y placa bacteriana, pulido dental y aplicación de flúor. Incluye revisión del estado de encías y recomendaciones de higiene personalizada.",
        duration: "45-60 minutos",
        price: "$45",
        includes: ["Remoción de sarro", "Pulido dental", "Aplicación de flúor", "Revisión de encías"]
    },
    {
        title: "Blanqueamiento dental",
        description: "Tratamiento de blanqueamiento profesional con tecnología LED de última generación. Procedimiento seguro y controlado que aclara varios tonos el color de tus dientes.",
        duration: "60-90 minutos",
        price: "$280",
        includes: ["Limpieza previa", "Aplicación de gel blanqueador", "Activación LED", "Kit de mantenimiento"]
    },
    {
        title: "Carillas dentales",
        description: "Carillas de porcelana o composite para mejorar la forma, color y alineación de tus dientes. Procedimiento mínimamente invasivo que transforma tu sonrisa.",
        duration: "2-3 sesiones",
        price: "$450 por pieza",
        includes: ["Consulta y diseño digital", "Preparación dental mínima", "Carillas personalizadas", "Cementado permanente"]
    },
    {
        title: "Rehabilitación oral",
        description: "Restauración completa de función y estética dental mediante implantes, coronas, puentes y prótesis. Plan de tratamiento integral diseñado para tus necesidades.",
        duration: "Múltiples sesiones",
        price: "Desde $1,200 (consultar)",
        includes: ["Diagnóstico 3D", "Plan de tratamiento", "Implantes/coronas", "Seguimiento continuo"]
    },
    {
        title: "Endodoncia",
        description: "Tratamiento de conducto radicular con técnicas modernas y anestesia confortable. Eliminación de infección y preservación de tu diente natural.",
        duration: "90 minutos",
        price: "$320",
        includes: ["Radiografía digital", "Anestesia local", "Limpieza de conductos", "Sellado permanente"]
    },
    {
        title: "Estética dental integral",
        description: "Diseño de sonrisa personalizado que combina múltiples tratamientos para lograr resultados armónicos y naturales. Planificación digital previa con visualización de resultados.",
        duration: "Plan personalizado",
        price: "Consultar (desde $800)",
        includes: ["Análisis fotográfico", "Diseño digital de sonrisa", "Tratamientos combinados", "Seguimiento post-tratamiento"]
    },
    {
        title: "Ortodoncia estética",
        description: "Alineación dental con brackets transparentes o alineadores invisibles. Tratamiento discreto y efectivo para corregir maloclusiones.",
        duration: "12-24 meses",
        price: "Desde $1,800",
        includes: ["Estudio ortodóntico", "Brackets/alineadores", "Controles mensuales", "Retenedores finales"]
    },
    {
        title: "Implantes dentales",
        description: "Reemplazo de piezas dentales perdidas con implantes de titanio de grado médico. Solución permanente y biocompatible que recupera función y estética.",
        duration: "3-6 meses",
        price: "$1,200 por implante",
        includes: ["Cirugía de implante", "Tornillo de titanio", "Corona de porcelana", "Radiografías de control"]
    },
    {
        title: "Odontopediatría",
        description: "Atención dental especializada para niños en un ambiente amigable y relajado. Prevención, tratamiento de caries y educación en higiene oral.",
        duration: "30-45 minutos",
        price: "$40",
        includes: ["Revisión completa", "Limpieza adaptada", "Aplicación de flúor", "Educación en higiene"]
    }
];

const faqs = [
    {
        question: "¿Los tratamientos son dolorosos?",
        answer: "La mayoría de tratamientos se realizan con anestesia local, lo que garantiza que el procedimiento sea confortable. En procedimientos menores como limpiezas, generalmente no hay dolor."
    },
    {
        question: "¿Cuántas sesiones necesito?",
        answer: "Depende del tratamiento. Una limpieza es una sola sesión, mientras que carillas o rehabilitación requieren 2-3 visitas. En la consulta inicial evaluamos tu caso y te damos un plan claro."
    },
    {
        question: "¿Qué formas de pago aceptan?",
        answer: "Aceptamos efectivo, tarjetas de crédito y débito, y transferencias. Para tratamientos mayores ofrecemos planes de pago en cuotas sin interés."
    },
    {
        question: "¿Trabajan con seguros médicos?",
        answer: "Emitimos facturas que puedes presentar a tu aseguradora para reembolso. También trabajamos directamente con algunas aseguradoras."
    },
    {
        question: "¿Qué debo llevar a mi primera consulta?",
        answer: "Lleva tu cédula de identidad, radiografías previas si las tienes, y una lista de medicamentos que tomes."
    }
];

export default function DemoServices() {
    return (
        <div className="w-full">
            {/* Hero */}
            <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <Link to={DEMO_BASE} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Volver al inicio</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-6">
                            Nuestros servicios
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Tratamientos integrales de odontología con enfoque en estética, rehabilitación y prevención. Cada procedimiento incluye seguimiento y garantías.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-32 bg-background">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col">
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 pt-4 border-t border-border">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span className="text-muted-foreground">{service.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <DollarSign className="w-4 h-4 text-primary" />
                                            <span className="font-semibold text-primary">{service.price}</span>
                                        </div>
                                    </div>

                                    {service.includes && (
                                        <div className="mt-4 pt-4 border-t border-border">
                                            <p className="text-xs font-semibold text-foreground mb-2">Incluye:</p>
                                            <ul className="space-y-1">
                                                {service.includes.map((item, i) => (
                                                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-32 bg-secondary/30">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-4">
                                Preguntas frecuentes
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Respuestas a las dudas más comunes sobre nuestros tratamientos
                            </p>
                        </motion.div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                                >
                                    <AccordionTrigger className="text-left hover:no-underline py-6">
                                        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="bg-card rounded-3xl border border-border shadow-xl p-12 text-center">
                        <h2 className="text-3xl font-semibold text-foreground mb-4">
                            ¿Tienes dudas sobre qué tratamiento necesitas?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Agenda una consulta inicial sin compromiso. Evaluaremos tu caso y te daremos un plan claro.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to={`${DEMO_BASE}/reservar`}>
                                <Button size="lg" className="rounded-full">
                                    Agendar consulta
                                </Button>
                            </Link>
                            <Link to={`${DEMO_BASE}/contacto`}>
                                <Button size="lg" variant="outline" className="rounded-full">
                                    Contactar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky CTA (Desktop) */}
            <div className="hidden lg:block fixed bottom-8 right-8 z-40">
                <Link to={`${DEMO_BASE}/reservar`}>
                    <Button size="lg" className="rounded-full shadow-2xl">
                        Reservar cita
                    </Button>
                </Link>
            </div>
        </div>
    );
}
