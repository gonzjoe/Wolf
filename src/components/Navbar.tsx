/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Phone, 
  Menu, 
  X, 
  ShieldAlert, 
  Clock, 
  ChevronRight,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Quiénes Somos", path: "/empresa-de-ascensores-en-manizales" },
    { 
      name: "Servicios", 
      path: "/modernizacion-de-ascensores", 
      isDropdown: true,
      subLinks: [
        { name: "Modernización de Ascensores", path: "/modernizacion-de-ascensores" },
        { name: "Ascensores con Cuarto de Máquina", path: "/ascensores-con-cuarto-de-maquina" },
        { name: "Ascensores sin Cuarto de Máquina", path: "/ascensores-sin-cuarto-de-maquina" },
        { name: "Ascensores Panorámicos", path: "/ascensores-panoramicos" },
        { name: "Ascensores de Carga", path: "/ascensores-de-carga" },
        { name: "Ascensores Vehiculares", path: "/ascensores-vehiculares" },
        { name: "Ascensores Camilleros", path: "/ascensores-camilleros" },
        { name: "Bandas Transportadoras", path: "/bandas-trasportadoras" },
        { name: "Escaleras Eléctricas", path: "/escaleras-electricas" },
      ]
    },
    { name: "Contáctanos", path: "/contacto-ascensores-manizales" }
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Upper bar for urgent alerts and contact */}
      <div className="bg-navy-950 text-white text-xs py-2 px-4 sm:px-6 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-brand-500 animate-pulse" />
            <span>Atención de Emergencias: </span>
            <span className="text-amber-brand-500 font-semibold flex items-center gap-1 bg-navy-900/50 px-2 py-0.5 rounded border border-navy-800">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              24 Horas / 365 Días
            </span>
          </div>
          
          <div className="flex items-center gap-5">
            <a 
              href="tel:3003646565" 
              className="flex items-center gap-1.5 hover:text-amber-brand-500 transition-colors font-semibold"
              id="top-bar-phone"
            >
              <Phone className="w-3.5 h-3.5 text-amber-brand-500" />
              <span>300 364 6565</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">Manizales y Eje Cafetero</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100" 
            : "bg-white py-4 border-b border-slate-100/50"
        }`}
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group focus:outline-none"
            id="logo-link"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-navy-900 to-navy-700 rounded-lg flex items-center justify-center shadow-md relative overflow-hidden group-hover:scale-105 transition-transform">
              {/* Dynamic vertical elevator elevator track line visual */}
              <div className="absolute top-1 bottom-1 left-4 w-0.5 bg-amber-brand-500"></div>
              <div className="absolute w-2 h-2 bg-white rounded-sm left-3 top-1/2 -translate-y-1/2 animate-bounce shadow"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-extrabold text-navy-950 tracking-tight leading-none">
                WOLF
              </span>
              <span className="text-[10px] font-semibold text-amber-brand-600 tracking-widest uppercase">
                Ascensores
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  const isAnySubActive = link.subLinks?.some(sub => location.pathname === sub.path);
                  return (
                    <div 
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 font-sans text-sm font-semibold py-2 transition-all duration-200 cursor-pointer ${
                          isActive(link.path) || isAnySubActive
                            ? "text-navy-900 font-bold"
                            : "text-slate-600 hover:text-navy-900"
                        }`}
                        id="nav-link-servicios-trigger"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-amber-brand-500" : ""}`} />
                      </button>

                      {/* Dropdown Menu Container */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-fade-in">
                          <div className="absolute top-0 left-1/2 w-3 h-3 bg-white border-t border-l border-slate-100 -translate-x-1/2 -translate-y-1.5 rotate-45"></div>
                          {link.subLinks?.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setServicesDropdownOpen(false)}
                              className={`block px-5 py-2 text-xs font-semibold font-sans transition-all duration-150 border-l-4 ${
                                location.pathname === sub.path
                                  ? "bg-navy-50 text-navy-900 border-amber-brand-500 pl-4"
                                  : "text-slate-600 hover:text-navy-950 hover:bg-slate-50 border-transparent"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative font-sans text-sm font-semibold py-2 transition-all duration-200 ${
                      isActive(link.path)
                        ? "text-navy-900 font-bold"
                        : "text-slate-600 hover:text-navy-900"
                    }`}
                    id={`nav-link-${link.path.replace("/", "root")}`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-brand-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              to="/contacto-ascensores-manizales"
              className="bg-navy-900 hover:bg-navy-800 text-white font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow hover:shadow-md hover:-translate-y-0.5"
              id="cta-navbar"
            >
              <span>Pedir Presupuesto</span>
              <ArrowUpRight className="w-4 h-4 text-amber-brand-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="tel:3003646565" 
              className="p-2 bg-amber-brand-500 text-navy-950 rounded-full shadow"
              aria-label="Llamar Urgencia"
            >
              <Phone className="w-4 h-4 animate-pulse" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy-950 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Abrir Menú"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="absolute top-0 right-0 w-4/5 max-w-sm h-screen bg-white shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-navy-900 rounded flex items-center justify-center">
                    <div className="w-1.5 h-4 bg-amber-brand-500 rounded-sm"></div>
                  </div>
                  <span className="text-lg font-display font-extrabold text-navy-950">WOLF</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  if (link.isDropdown) {
                    const isAnySubActive = link.subLinks?.some(sub => location.pathname === sub.path);
                    return (
                      <div key={link.path} className="flex flex-col">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                            isAnySubActive
                              ? "bg-navy-50 text-navy-900"
                              : "text-slate-600 hover:bg-slate-50 hover:text-navy-950"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-amber-brand-500" : "opacity-50"}`} />
                        </button>
                        
                        {mobileServicesOpen && (
                          <div className="pl-4 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 ml-6">
                            {link.subLinks?.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                                  location.pathname === sub.path
                                    ? "text-amber-brand-600 font-bold bg-amber-brand-50/50"
                                    : "text-slate-500 hover:text-navy-950 hover:bg-slate-50"
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        isActive(link.path)
                          ? "bg-navy-50 text-navy-900 border-l-4 border-amber-brand-500 pl-3"
                          : "text-slate-600 hover:bg-slate-50 hover:text-navy-950"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="bg-amber-brand-500/10 rounded-xl p-4 border border-amber-brand-500/20">
                <div className="flex items-center gap-2 text-amber-brand-600 font-bold text-xs uppercase mb-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Urgencias 24h</span>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Técnicos de guardia disponibles de forma inmediata.
                </p>
                <a 
                  href="tel:3003646565" 
                  className="w-full bg-navy-950 text-white text-center py-2.5 rounded-lg text-xs font-bold block hover:bg-navy-900 transition-colors"
                >
                  Llamar 300 364 6565
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
