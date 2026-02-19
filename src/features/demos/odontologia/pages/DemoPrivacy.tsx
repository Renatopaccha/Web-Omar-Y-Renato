import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const DEMO_BASE = '/demos/odontologia';

const sections = [
    { title: 'Introducción', content: 'En el Consultorio de la Dra. Valeria Romero valoramos y respetamos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro sitio web y servicios de consulta odontológica.' },
    { title: 'Datos de contacto', list: ['Nombre completo', 'Número de teléfono', 'Dirección de correo electrónico', 'Preferencia de horario para citas'] },
    { title: 'Información clínica', list: ['Historia clínica dental', 'Radiografías y fotografías clínicas', 'Diagnósticos y planes de tratamiento', 'Alergias y medicamentos'], note: 'La información clínica NO se solicita en formularios web. Solo se recopila de forma presencial y segura en el consultorio.' },
    { title: 'Cómo usamos tu información', list: ['Coordinar y confirmar tus citas', 'Proporcionar servicios de atención odontológica', 'Enviar recordatorios de citas', 'Comunicar información relevante sobre tu tratamiento', 'Responder a tus consultas y solicitudes', 'Cumplir con obligaciones legales y regulatorias'] },
    { title: 'Protección de datos', list: ['Almacenamiento seguro de historias clínicas', 'Acceso restringido solo a personal autorizado', 'Cifrado de comunicaciones electrónicas', 'Cumplimiento de protocolos de bioseguridad'] },
    { title: 'Tus derechos', list: ['Acceder a tu información personal', 'Rectificar datos incorrectos o incompletos', 'Solicitar la eliminación de tus datos', 'Oponerte al procesamiento de tus datos', 'Solicitar una copia de tu historia clínica'] },
    { title: 'Cookies', content: 'Este sitio web puede utilizar cookies técnicas esenciales para su funcionamiento. No utilizamos cookies de terceros para publicidad o rastreo sin tu consentimiento.' },
    { title: 'Retención de datos', content: 'Las historias clínicas se conservan por un mínimo de 10 años según la normativa ecuatoriana de salud.' },
];

export default function DemoPrivacy() {
    return (
        <div className="w-full">
            <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <Link to={DEMO_BASE} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
                        <ArrowLeft className="w-5 h-5" /><span className="text-sm font-medium">Volver al inicio</span>
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"><Shield className="w-8 h-8 text-primary" /></div>
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-2">Política de privacidad</h1>
                            <p className="text-sm text-muted-foreground">Última actualización: Febrero 2026</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-12">
                                <h3 className="text-lg font-semibold text-foreground mb-2 mt-0">Nota sobre este DEMO</h3>
                                <p className="text-sm text-muted-foreground mb-0">Este es un sitio web de demostración. Los datos ingresados en formularios no se almacenan ni procesan. Esta política de privacidad es un ejemplo para plantilla reutilizable.</p>
                            </div>

                            {sections.map((section, index) => (
                                <div key={index} className="mb-12">
                                    <h2 className="text-3xl font-semibold text-foreground mb-4">{section.title}</h2>
                                    {section.content && <p className="text-foreground leading-relaxed">{section.content}</p>}
                                    {section.list && (
                                        <ul className="list-disc list-inside space-y-2 text-foreground ml-4 mb-6">
                                            {section.list.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    )}
                                    {section.note && (
                                        <div className="bg-secondary rounded-xl p-6">
                                            <p className="text-sm text-foreground font-semibold mb-2">Importante:</p>
                                            <p className="text-sm text-muted-foreground mb-0">{section.note}</p>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="mb-12">
                                <h2 className="text-3xl font-semibold text-foreground mb-4">Contacto</h2>
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <p className="text-foreground mb-2"><strong>Consultorio Dra. Valeria Romero</strong></p>
                                    <p className="text-muted-foreground mb-1">Av. 12 de Abril y Solano, Cuenca, Ecuador</p>
                                    <p className="text-muted-foreground mb-1">Email: <a href="mailto:consulta@draromero.com" className="text-primary hover:underline">consulta@draromero.com</a></p>
                                    <p className="text-muted-foreground">Teléfono: <a href="tel:+593991234567" className="text-primary hover:underline">+593 99 123 4567</a></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-secondary/30 border-t border-border">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">¿Listo para agendar tu consulta?</h2>
                    <p className="text-muted-foreground mb-6">Tu información está protegida en todo momento</p>
                    <Link to={`${DEMO_BASE}/reservar`}><Button className="rounded-full px-8 py-3">Reservar cita</Button></Link>
                </div>
            </section>
        </div>
    );
}
