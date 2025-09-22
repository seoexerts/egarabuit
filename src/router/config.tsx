
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Empresa from "../pages/empresa/page";
import Servicios from "../pages/servicios/page";
import FAQ from "../pages/faq/page";
import Contacto from "../pages/contacto/page";
import PoliticaCookies from "../pages/politica-cookies/page";
import AvisoLegal from "../pages/aviso-legal/page";
import PoliticaPrivacidad from "../pages/politica-privacidad/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/empresa",
    element: <Empresa />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/politica-cookies",
    element: <PoliticaCookies />,
  },
  {
    path: "/aviso-legal",
    element: <AvisoLegal />,
  },
  {
    path: "/politica-privacidad",
    element: <PoliticaPrivacidad />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
