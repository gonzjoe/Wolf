/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none antialiased">
        {/* Navbar component */}
        <Navbar />

        {/* Main pages container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Render both traditional and new SEO routes directly so that no content is lost under any URL structure */}
            <Route path="/quienes-somos" element={<AboutUs />} />
            <Route path="/quienes-somos/" element={<AboutUs />} />
            <Route path="/empresa-de-ascensores-en-manizales" element={<AboutUs />} />
            <Route path="/empresa-de-ascensores-en-manizales/" element={<AboutUs />} />
            
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/" element={<Services />} />
            <Route path="/modernizacion-de-ascensores" element={<Services initialServiceId="modernizacion-de-ascensores" />} />
            <Route path="/modernizacion-de-ascensores/" element={<Services initialServiceId="modernizacion-de-ascensores" />} />
            
            {/* Specific SEO pages with pre-selected vertical transport types */}
            <Route path="/ascensores-con-cuarto-de-maquina" element={<Services initialServiceId="ascensores-con-cuarto-de-maquina" />} />
            <Route path="/ascensores-con-cuarto-de-maquina/" element={<Services initialServiceId="ascensores-con-cuarto-de-maquina" />} />
            <Route path="/ascensores-con-cuarto-de-maquinas" element={<Services initialServiceId="ascensores-con-cuarto-de-maquina" />} />
            <Route path="/ascensores-con-cuarto-de-maquinas/" element={<Services initialServiceId="ascensores-con-cuarto-de-maquina" />} />
            
            <Route path="/ascensores-sin-cuarto-de-maquina" element={<Services initialServiceId="ascensores-sin-cuarto-de-maquina" />} />
            <Route path="/ascensores-sin-cuarto-de-maquina/" element={<Services initialServiceId="ascensores-sin-cuarto-de-maquina" />} />
            <Route path="/ascensores-sin-cuarto-de-maquinas" element={<Services initialServiceId="ascensores-sin-cuarto-de-maquina" />} />
            <Route path="/ascensores-sin-cuarto-de-maquinas/" element={<Services initialServiceId="ascensores-sin-cuarto-de-maquina" />} />
            
            <Route path="/ascensores-panoramicos" element={<Services initialServiceId="ascensores-panoramicos" />} />
            <Route path="/ascensores-panoramicos/" element={<Services initialServiceId="ascensores-panoramicos" />} />
            
            <Route path="/ascensores-de-carga" element={<Services initialServiceId="ascensores-de-carga" />} />
            <Route path="/ascensores-de-carga/" element={<Services initialServiceId="ascensores-de-carga" />} />
            
            <Route path="/ascensores-vehiculares" element={<Services initialServiceId="ascensores-vehiculares" />} />
            <Route path="/ascensores-vehiculares/" element={<Services initialServiceId="ascensores-vehiculares" />} />
            
            <Route path="/ascensores-camilleros" element={<Services initialServiceId="ascensores-camilleros" />} />
            <Route path="/ascensores-camilleros/" element={<Services initialServiceId="ascensores-camilleros" />} />
            
            <Route path="/bandas-trasportadoras" element={<Services initialServiceId="bandas-trasportadoras" />} />
            <Route path="/bandas-trasportadoras/" element={<Services initialServiceId="bandas-trasportadoras" />} />
            
            <Route path="/escaleras-electricas" element={<Services initialServiceId="escaleras-electricas" />} />
            <Route path="/escaleras-electricas/" element={<Services initialServiceId="escaleras-electricas" />} />
 
            <Route path="/contactanos" element={<Contact />} />
            <Route path="/contactanos/" element={<Contact />} />
            <Route path="/contacto-ascensores-manizales" element={<Contact />} />
            <Route path="/contacto-ascensores-manizales/" element={<Contact />} />
 
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/" element={<Navigate to="/blog" replace />} />
 
            <Route path="/aviso-legal" element={<Legal />} />
            <Route path="/aviso-legal/" element={<Navigate to="/aviso-legal" replace />} />
            <Route path="/politica-de-privacidad" element={<Privacy />} />
            <Route path="/politica-de-privacidad/" element={<Navigate to="/politica-de-privacidad" replace />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cookies/" element={<Navigate to="/cookies" replace />} />
          </Routes>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}
