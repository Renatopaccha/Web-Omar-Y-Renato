import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Credentials from "./pages/Credentials";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Services },
      { path: "credenciales", Component: Credentials },
      { path: "reservar", Component: BookAppointment },
      { path: "contacto", Component: Contact },
      { path: "privacidad", Component: Privacy },
    ],
  },
]);
