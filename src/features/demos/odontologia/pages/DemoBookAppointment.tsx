import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Phone, Mail, MessageCircle, ChevronRight, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

const DEMO_BASE = '/demos/odontologia';
const consultationTypes = ["Consulta inicial / diagnóstico", "Limpieza dental", "Blanqueamiento", "Carillas o estética", "Rehabilitación oral", "Endodoncia", "Implantes", "Urgencia dental", "Otro"];
const timePreferences = ["Mañana (9:00 - 12:00)", "Mediodía (12:00 - 14:00)", "Tarde (14:00 - 18:00)", "Sin preferencia"];

export default function DemoBookAppointment() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', consultationType: '', timePreference: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
    const handleChange = (field: string, value: string) => { setFormData(prev => ({ ...prev, [field]: value })); };

    return (
        <div className="w-full">
            <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <Link to={DEMO_BASE} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
                        <ArrowLeft className="w-5 h-5" /><span className="text-sm font-medium">Volver al inicio</span>
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-6">Reservar cita</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">Agenda tu consulta en 3 pasos simples. Te contactaremos en menos de 24 horas para confirmar.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2">
                            <div className="sticky top-24 space-y-8">
                                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-amber-800"><span className="font-semibold">Esto es un demo.</span> Los datos ingresados no se envían ni almacenan.</div>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-8">
                                    <h3 className="text-xl font-semibold text-foreground mb-6">Cómo funciona</h3>
                                    <div className="space-y-6">
                                        {[{ n: '1', t: 'Completa el formulario', d: 'Datos básicos de contacto y tipo de consulta' }, { n: '2', t: 'Confirmación', d: 'Te contactamos para confirmar día y hora' }, { n: '3', t: 'Tu cita', d: 'Recibes recordatorio y asistes al consultorio' }].map(s => (
                                            <div key={s.n} className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">{s.n}</div>
                                                <div><h4 className="font-semibold text-foreground mb-1">{s.t}</h4><p className="text-sm text-muted-foreground">{s.d}</p></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-secondary/50 border border-border rounded-2xl p-8">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Otros canales</h3>
                                    <div className="space-y-3">
                                        {[{ icon: Phone, label: 'Llamar', sub: '+593 99 123 4567', href: 'tel:+593991234567' }, { icon: Mail, label: 'Email', sub: 'consulta@draromero.com', href: 'mailto:consulta@draromero.com' }, { icon: MessageCircle, label: 'WhatsApp', sub: 'Recomendado', href: 'https://wa.me/593991234567' }].map(c => (
                                            <a key={c.label} href={c.href} target={c.href.startsWith('https') ? '_blank' : undefined} rel={c.href.startsWith('https') ? 'noopener noreferrer' : undefined} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors">
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><c.icon className="w-5 h-5 text-primary" /></div>
                                                <div className="flex-1"><div className="text-sm font-medium text-foreground">{c.label}</div><div className="text-xs text-muted-foreground">{c.sub}</div></div>
                                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-foreground"><span className="font-semibold">Privacidad:</span> No solicitamos datos clínicos en este formulario.</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                                    <div className="flex items-center gap-3 mb-6"><Calendar className="w-6 h-6 text-primary" /><h3 className="text-xl font-semibold text-foreground">Calendario de disponibilidad</h3></div>
                                    <div className="bg-secondary/30 rounded-xl p-12 text-center border-2 border-dashed border-border">
                                        <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                                        <p className="text-muted-foreground mb-2">Widget de calendario (Demo)</p>
                                        <p className="text-sm text-muted-foreground">En producción: Integración con Calendly o Google Calendar</p>
                                    </div>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-6"><Clock className="w-6 h-6 text-primary" /><h3 className="text-xl font-semibold text-foreground">Formulario de contacto</h3></div>
                                    {submitted ? (
                                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
                                            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                                            <h4 className="text-xl font-semibold text-foreground mb-2">¡Demo exitoso!</h4>
                                            <p className="text-muted-foreground mb-2">Esta funcionalidad enviaría los datos a tu sistema real de reservas.</p>
                                            <p className="text-sm text-muted-foreground mb-6">Los datos NO fueron almacenados — esto es solo una demostración.</p>
                                            <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">Probar de nuevo</Button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div><Label htmlFor="book-name">Nombre completo *</Label><Input id="book-name" placeholder="Tu nombre" value={formData.name} onChange={e => handleChange('name', e.target.value)} required className="mt-2 rounded-xl" /></div>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div><Label htmlFor="book-phone">Teléfono *</Label><Input id="book-phone" type="tel" placeholder="+593 99 123 4567" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} required className="mt-2 rounded-xl" /></div>
                                                <div><Label htmlFor="book-email">Email</Label><Input id="book-email" type="email" placeholder="tu@email.com" value={formData.email} onChange={e => handleChange('email', e.target.value)} className="mt-2 rounded-xl" /></div>
                                            </div>
                                            <div><Label>Tipo de consulta *</Label><Select value={formData.consultationType} onValueChange={v => handleChange('consultationType', v)}><SelectTrigger className="mt-2 rounded-xl"><SelectValue placeholder="Selecciona el tipo" /></SelectTrigger><SelectContent>{consultationTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></div>
                                            <div><Label>Preferencia de horario</Label><Select value={formData.timePreference} onValueChange={v => handleChange('timePreference', v)}><SelectTrigger className="mt-2 rounded-xl"><SelectValue placeholder="Selecciona tu preferencia" /></SelectTrigger><SelectContent>{timePreferences.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></div>
                                            <div><Label htmlFor="book-msg">Mensaje adicional (opcional)</Label><Textarea id="book-msg" placeholder="Cuéntanos brevemente..." value={formData.message} onChange={e => handleChange('message', e.target.value)} rows={4} className="mt-2 rounded-xl resize-none" /></div>
                                            <div className="bg-secondary/50 rounded-xl p-4 text-sm text-muted-foreground">Al enviar aceptas nuestra <Link to={`${DEMO_BASE}/privacidad`} className="text-primary hover:underline">política de privacidad</Link>.</div>
                                            <Button type="submit" size="lg" className="w-full rounded-full">Enviar solicitud de cita<ChevronRight className="w-5 h-5 ml-2" /></Button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-primary/5 border-y border-primary/20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div><h3 className="font-semibold text-foreground mb-1">¿Tienes una urgencia dental?</h3><p className="text-sm text-muted-foreground">Llámanos directamente para atención prioritaria</p></div>
                        <a href="tel:+593991234567"><Button size="lg" variant="outline" className="rounded-full"><Phone className="w-5 h-5 mr-2" />Llamar ahora</Button></a>
                    </div>
                </div>
            </section>
        </div>
    );
}
