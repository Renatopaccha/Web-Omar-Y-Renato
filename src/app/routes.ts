import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Demos from './pages/Demos';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import {
  OdontologiaLayout,
  OdontologiaHome,
  OdontologiaServices,
  OdontologiaCredentials,
  OdontologiaBookAppointment,
  OdontologiaContact,
  OdontologiaPrivacy,
} from '../features/demos/odontologia';

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
    Component: OdontologiaLayout,
    children: [
      { index: true, Component: OdontologiaHome },
      { path: 'servicios', Component: OdontologiaServices },
      { path: 'credenciales', Component: OdontologiaCredentials },
      { path: 'reservar', Component: OdontologiaBookAppointment },
      { path: 'contacto', Component: OdontologiaContact },
      { path: 'privacidad', Component: OdontologiaPrivacy },
    ],
  },
]);
