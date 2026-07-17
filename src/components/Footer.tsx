/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 pt-16 pb-8" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group focus:outline-none mb-4">
              <div className="w-9 h-9 bg-gradient-to-tr from-amber-brand-500 to-amber-brand-600 rounded flex items-center justify-center shadow-md">
                <div className="w-1.5 h-4 bg-navy-950 rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-extrabold text-white tracking-tight leading-none">
                  WOLF
                </span>
                <span className="text-[9px] font-semibold text-amber-brand-500 tracking-widest uppercase">
                  Ascensores
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Servicio profesional de mantenimiento y repuestos originales de ascensores para todas las marcas.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-amber-brand-500 hover:text-navy-950 flex items-center justify-center transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-amber-brand-500 hover:text-navy-950 flex items-center justify-center transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-amber-brand-500 hover:text-navy-950 flex items-center justify-center transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="text-white font-display font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-navy-900">
              Navegación
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-brand-500 transition-colors flex items-center gap-1">
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/empresa-de-ascensores-en-manizales" className="hover:text-amber-brand-500 transition-colors flex items-center gap-1">
                  <span>Quiénes Somos</span>
                </Link>
              </li>
              <li>
                <Link to="/modernizacion-de-ascensores" className="hover:text-amber-brand-500 transition-colors flex items-center gap-1">
                  <span>Servicios Detallados</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto-ascensores-manizales" className="hover:text-amber-brand-500 transition-colors flex items-center gap-1">
                  <span>Contacto y Soporte</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-brand-500 transition-colors flex items-center gap-1">
                  <span>Blog Técnico</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Main services */}
          <div>
            <p className="text-white font-display font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-navy-900">
              Nuestros Servicios
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/ascensores-con-cuarto-de-maquina" className="hover:text-amber-brand-500 transition-colors">
                  Ascensores con cuarto de máquina
                </Link>
              </li>
              <li>
                <Link to="/ascensores-sin-cuarto-de-maquina" className="hover:text-amber-brand-500 transition-colors">
                  Ascensores sin cuarto de máquina
                </Link>
              </li>
              <li>
                <Link to="/ascensores-panoramicos" className="hover:text-amber-brand-500 transition-colors">
                  Ascensores panorámicos
                </Link>
              </li>
              <li>
                <Link to="/ascensores-de-carga" className="hover:text-amber-brand-500 transition-colors">
                  Ascensores de carga
                </Link>
              </li>
              <li>
                <Link to="/ascensores-vehiculares" className="hover:text-amber-brand-500 transition-colors">
                  Ascensores vehiculares
                </Link>
              </li>
              <li>
                <Link to="/ascensores-camilleros" className="hover:text-amber-brand-500 transition-colors">
                  Ascensores camilleros / hospitalarios
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact and Registration */}
          <div>
            <p className="text-white font-display font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-navy-900">
              Contacto Central
            </p>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-amber-brand-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Manizales, Caldas, Colombia (Cobertura en Pereira, Armenia, Chinchiná)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-amber-brand-500 shrink-0" />
                <a href="tel:3003646565" className="hover:text-amber-brand-500 transition-colors font-semibold">
                  300 364 6565
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-amber-brand-500 shrink-0" />
                <a href="mailto:info@ascensoreswolf.com" className="hover:text-amber-brand-500 transition-colors">
                  info@ascensoreswolf.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-2 border-t border-navy-900">
                <ShieldCheck className="w-4.5 h-4.5 text-green-500 shrink-0" />
                <span className="text-xs text-slate-400">
                  Servicio Técnico Certificado y Confiable
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer division */}
        <div className="border-t border-navy-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>&copy; {currentYear} Ascensores Wolf. Todos los derechos reservados.</span>
            <div className="flex gap-4">
              <Link to="/aviso-legal" className="hover:text-amber-brand-500 transition-colors">Aviso Legal</Link>
              <Link to="/politica-de-privacidad" className="hover:text-amber-brand-500 transition-colors">Política de Privacidad</Link>
              <Link to="/cookies" className="hover:text-amber-brand-500 transition-colors">Política de Cookies</Link>
            </div>
          </div>

          <button 
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-amber-brand-500 hover:text-navy-950 transition-all font-semibold"
            aria-label="Subir arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
