# Consultorio Médico/Odontológico - Plantilla Demo

## Descripción

Sitio web demo premium para consultorio médico u odontológico. Plantilla completamente reutilizable con estética elegante, moderna y profesional.

## Características principales

### Diseño
- Estética premium: colores cálidos (marfil, grises cálidos, azul profundo)
- Detalles sutiles en champagne/gold
- Totalmente responsive (desktop 1440px y mobile 390px)
- Animaciones suaves y fluidas
- Tipografía Inter (sans-serif premium)

### Páginas incluidas
1. **Inicio** - Hero con múltiples secciones (credenciales, servicios, testimonios, precios, ubicación)
2. **Servicios** - Listado completo con descripciones, duración y precios
3. **Credenciales** - Perfil profesional detallado con títulos, experiencia y certificaciones
4. **Reservar cita** - Formulario de contacto y métodos alternativos
5. **Contacto** - Información de contacto y formulario de mensajes
6. **Privacidad** - Política de privacidad completa

### Funcionalidades
- Navegación sticky con selector de idioma (ES/EN/DE/FR demo)
- Formularios interactivos con validación
- Componentes reutilizables
- React Router para navegación
- Imágenes profesionales de Unsplash

## Personalización

### Datos editables (buscar en el código)

#### Información del profesional
- `Dra. Valeria Romero` → Cambiar por el nombre del doctor
- `DDS, MSc Rehabilitación Oral` → Títulos académicos
- `Odontología Estética y Rehabilitación` → Especialidad
- `Cuenca, Ecuador` → Ciudad/ubicación

#### Contacto
- `+593 99 123 4567` → Teléfono
- `consulta@draromero.com` → Email
- `Av. 12 de Abril y Solano` → Dirección

#### Credenciales y experiencia
Editar en `/src/app/pages/Credentials.tsx`:
- Títulos académicos
- Certificaciones
- Años de experiencia
- Afiliaciones

#### Servicios y precios
Editar en `/src/app/pages/Home.tsx` y `/src/app/pages/Services.tsx`

## Colores del tema

Definidos en `/src/styles/theme.css`:
- Background: `#FEFAF6` (marfil suave)
- Primary: `#0B4A6F` (azul profundo)
- Accent: `#1A5F7A` (teal oscuro)
- Gold accent: `#D4AF79` (champagne/gold)
- Border radius: `1rem` (16px)

## Tecnologías

- React 18
- React Router 7
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide React (iconos)
- Radix UI (componentes)

## Estructura de archivos

```
/src/app/
├── App.tsx                    # Punto de entrada
├── routes.ts                  # Configuración de rutas
├── components/
│   ├── Header.tsx            # Navegación sticky
│   ├── Footer.tsx            # Pie de página
│   ├── ServiceCard.tsx       # Card de servicio
│   ├── TrustBadge.tsx        # Badge de confianza
│   ├── TestimonialCard.tsx   # Card de testimonio
│   ├── CredentialCard.tsx    # Card de credencial
│   └── StatCard.tsx          # Card de estadística
└── pages/
    ├── Root.tsx              # Layout principal
    ├── Home.tsx              # Página de inicio
    ├── Services.tsx          # Página de servicios
    ├── Credentials.tsx       # Página de credenciales
    ├── BookAppointment.tsx   # Página de reservas
    ├── Contact.tsx           # Página de contacto
    └── Privacy.tsx           # Política de privacidad
```

## Notas importantes

### Para producción
- Reemplazar imágenes de Unsplash con fotos reales del consultorio
- Integrar calendario real (Calendly, Google Calendar, etc.)
- Conectar formularios a backend o servicio de email
- Agregar Google Maps embed real
- Implementar multiidioma completo si es necesario
- Agregar analytics (Google Analytics, etc.)

### Privacidad
- El demo NO recopila datos reales
- Incluye advertencias sobre no solicitar datos clínicos en formularios web
- Política de privacidad es un ejemplo editable

## Licencia

Plantilla demo reutilizable. Libre para personalizar y usar en proyectos reales.
