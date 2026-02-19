import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Demos from './pages/Demos';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

// Dental demo module
import DemoLayout from '../features/demos/odontologia/DemoLayout';
import DemoHome from '../features/demos/odontologia/pages/DemoHome';
import DemoServices from '../features/demos/odontologia/pages/DemoServices';
import DemoCredentials from '../features/demos/odontologia/pages/DemoCredentials';
import DemoBookAppointment from '../features/demos/odontologia/pages/DemoBookAppointment';
import DemoContact from '../features/demos/odontologia/pages/DemoContact';
import DemoPrivacy from '../features/demos/odontologia/pages/DemoPrivacy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'demos', Component: Demos },
      { path: 'pricing', Component: Pricing },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'privacy', Component: Privacy },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '/demos/odontologia',
    Component: DemoLayout,
    children: [
      { index: true, Component: DemoHome },
      { path: 'servicios', Component: DemoServices },
      { path: 'credenciales', Component: DemoCredentials },
      { path: 'reservar', Component: DemoBookAppointment },
      { path: 'contacto', Component: DemoContact },
      { path: 'privacidad', Component: DemoPrivacy },
    ],
  },
]);