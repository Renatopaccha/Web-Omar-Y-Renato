import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Award, 
  GraduationCap, 
  Briefcase, 
  BookOpen,
  Users,
  TrendingUp,
  Globe,
  Shield,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { CredentialCard } from '../components/CredentialCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const doctorImage = "https://images.unsplash.com/photo-1754715203698-70c7ad3a879d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcxMzU4MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const academicDegrees = [
  {
    title: "Doctor en Cirugía Dental (DDS)",
    institution: "Universidad Central del Ecuador",
    year: "2014",
    description: "Formación integral en odontología general, cirugía oral y diagnóstico clínico."
  },
  {
    title: "Maestría en Rehabilitación Oral",
    institution: "Universidad San Francisco de Quito",
    year: "2017",
    description: "Especialización avanzada en rehabilitación funcional y estética dental compleja."
  },
  {
    title: "Diplomado en Odontología Estética",
    institution: "Universidad de Buenos Aires",
    year: "2018",
    description: "Enfoque en diseño de sonrisa, carillas y procedimientos estéticos mínimamente invasivos."
  }
];

const certifications = [
  {
    title: "Certificación Internacional en Implantología",
    institution: "Asociación Latinoamericana de Implantología Oral",
    year: "2019"
  },
  {
    title: "Curso Avanzado de Endodoncia",
    institution: "ITI Switzerland",
    year: "2020"
  },
  {
    title: "Blanqueamiento Dental Profesional",
    institution: "Beyond Technology Corp",
    year: "2019"
  },
  {
    title: "Invisalign Certified Provider",
    institution: "Align Technology",
    year: "2021"
  },
  {
    title: "Protocolos de Bioseguridad",
    institution: "OMS / Ministerio de Salud Ecuador",
    year: "2020"
  },
  {
    title: "Actualización en CAD/CAM Dental",
    institution: "Dentsply Sirona Academy",
    year: "2022"
  }
];

const experience = [
  {
    title: "Práctica Privada",
    description: "Consultorio propio especializado en rehabilitación oral y estética dental",
    period: "2016 - Presente"
  },
  {
    title: "Hospital Clínica San Francisco",
    description: "Odontóloga general y especialista en urgencias dentales",
    period: "2014 - 2016"
  },
  {
    title: "Clínica Dental Universitaria",
    description: "Docente clínica y supervisión de estudiantes de odontología",
    period: "2018 - 2020"
  }
];

const affiliations = [
  "Colegio de Odontólogos del Azuay",
  "Asociación Latinoamericana de Odontología Estética (ALOE)",
  "International Congress of Oral Implantologists (ICOI)",
  "Federación Odontológica Ecuatoriana (FOE)"
];

const publications = [
  {
    title: "Rehabilitación estética en pacientes con desgaste dental severo",
    venue: "Revista Ecuatoriana de Odontología, Vol 12",
    year: "2021"
  },
  {
    title: "Protocolos de bioseguridad post-COVID en consultorios dentales",
    venue: "Congreso Latinoamericano de Odontología",
    year: "2020"
  }
];

const stats = [
  { icon: Users, value: "1,200+", label: "Pacientes atendidos" },
  { icon: TrendingUp, value: "98%", label: "Satisfacción" },
  { icon: Award, value: "10+", label: "Años de experiencia" },
  { icon: Sparkles, value: "500+", label: "Sonrisas transformadas" }
];

const areasOfInterest = [
  "Rehabilitación oral compleja",
  "Estética dental mínimamente invasiva",
  "Implantología avanzada",
  "Diseño digital de sonrisa",
  "Ortodoncia invisible",
  "Odontología biocompatible"
];

export default function Credentials() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-6">
              Perfil profesional
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Formación académica, experiencia clínica y certificaciones que respaldan un servicio de excelencia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Photo & Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="relative rounded-3xl overflow-hidden mb-6 border-4 border-[#D4AF79] shadow-xl">
                  <ImageWithFallback 
                    src={doctorImage}
                    alt="Dra. Valeria Romero"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Dra. Valeria Romero
                  </h2>
                  <p className="text-primary font-medium mb-1">
                    DDS, MSc Rehabilitación Oral
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Especialista en Odontología Estética y Rehabilitación
                  </p>
                  
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4 text-primary" />
                      <span>Cuenca, Ecuador</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Cédula profesional: 1234567890</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-16">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Perfil profesional</h3>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed mb-4">
                    Soy odontóloga con más de 10 años de experiencia en odontología estética y rehabilitación oral. Mi enfoque combina precisión técnica con una comunicación clara y empática, buscando que cada paciente comprenda su tratamiento y se sienta seguro en cada etapa.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    Creo en la odontología basada en evidencia y en la formación continua. Me especializo en tratamientos que devuelven función y estética dental con técnicas mínimamente invasivas, priorizando la conservación de tejido dental natural.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Mi práctica se caracteriza por protocolos de bioseguridad rigurosos, equipamiento moderno y un ambiente cálido donde la comodidad del paciente es prioritaria.
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-2xl font-semibold text-foreground mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Academic Degrees */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Títulos académicos</h3>
                </div>
                
                <div className="space-y-4">
                  {academicDegrees.map((degree, index) => (
                    <CredentialCard 
                      key={index}
                      title={degree.title}
                      institution={degree.institution}
                      year={degree.year}
                      description={degree.description}
                      type="degree"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Experiencia clínica</h3>
                </div>
                
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <CredentialCard 
                      key={index}
                      title={exp.title}
                      institution={exp.description}
                      year={exp.period}
                      type="experience"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF79]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#D4AF79]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Certificaciones y cursos</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <CredentialCard 
                      key={index}
                      title={cert.title}
                      institution={cert.institution}
                      year={cert.year}
                      type="certification"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Areas of Interest */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Áreas de interés</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {areasOfInterest.map((area, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Affiliations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Afiliaciones profesionales</h3>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <ul className="space-y-3">
                    {affiliations.map((affiliation, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{affiliation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Publications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Publicaciones y charlas</h3>
                </div>
                
                <div className="space-y-4">
                  {publications.map((pub, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground">{pub.venue}</p>
                      <span className="inline-block mt-2 text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {pub.year}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-card rounded-3xl border border-border shadow-xl p-12 text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              ¿Listo para comenzar tu tratamiento?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda tu consulta inicial y descubre cómo podemos ayudarte a lograr la sonrisa que deseas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/reservar">
                <Button size="lg" className="rounded-full">
                  Reservar cita
                </Button>
              </Link>
              <Link to="/servicios">
                <Button size="lg" variant="outline" className="rounded-full">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
