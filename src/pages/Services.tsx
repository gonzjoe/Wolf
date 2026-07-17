/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Check, 
  Settings, 
  ShieldAlert, 
  Layers, 
  RefreshCw, 
  Accessibility, 
  ClipboardCheck, 
  Phone, 
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { SERVICES, PLANS } from "../data";

// Helper component to resolve Lucide icons dynamically for services
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Settings":
      return <Settings className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "RefreshCw":
      return <RefreshCw className={className} />;
    case "Accessibility":
      return <Accessibility className={className} />;
    case "ClipboardCheck":
      return <ClipboardCheck className={className} />;
    default:
      return <Settings className={className} />;
  }
};

export default function Services({ initialServiceId }: { initialServiceId?: string }) {
  const [selectedService, setSelectedService] = useState(initialServiceId || SERVICES[0].id);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  const activeServiceData = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  return (
    <div className="pt-[104px] overflow-hidden" id="services-page">
      
      {/* HERO BANNER */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.06),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-brand-500 uppercase tracking-widest block mb-3">
              Catálogo de Soluciones de Elevación
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6">
              Servicios especializados con la máxima garantía técnica
            </h1>
            <p className="text-lg text-slate-300 font-sans leading-relaxed">
              Mantenemos, instalamos y modernizamos todo tipo de ascensores. Diseñamos planes a medida y garantizamos una cobertura 24/7 real y verificable.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES LIST INTERACTIVE TAB */}
      <section className="py-20 bg-white" id="detailed-services-catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-3">
              Servicios al Detalle
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-950 mb-4">
              Nuestra Especialidad es tu Tranquilidad
            </h2>
            <p className="text-slate-600 font-sans">
              Haz clic en cualquier servicio del menú izquierdo para explorar en profundidad su descripción, beneficios clave y metodología de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar selection menu */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-4 mb-2">Selecciona un servicio:</span>
              <div className="space-y-1">
                {SERVICES.map((s) => {
                  const isSelected = s.id === selectedService;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl font-display font-bold text-sm transition-all flex items-center justify-between group ${
                        isSelected 
                          ? "bg-navy-950 text-white shadow-md border-l-4 border-amber-brand-500 pl-4" 
                          : "text-slate-700 hover:bg-slate-50 border-l-4 border-transparent hover:border-slate-200"
                      }`}
                      id={`btn-service-${s.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? "text-amber-brand-500 bg-white/10" : "text-navy-950 bg-navy-50"}`}>
                          <ServiceIcon name={s.iconName} className="w-4.5 h-4.5" />
                        </div>
                        <span className="truncate max-w-[220px]">{s.title}</span>
                      </div>
                      <span className={`text-[10px] font-semibold tracking-wider uppercase shrink-0 ml-2 ${
                        isSelected ? "text-amber-brand-500" : "text-slate-400"
                      }`}>
                        {isSelected ? "Activo" : "Ver"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service Detail view */}
            <div className="lg:col-span-8 bg-slate-50/50 rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-sm" id="service-detail-view">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Detail text */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-900 px-3 py-1 rounded-lg text-xs font-bold">
                    <ServiceIcon name={activeServiceData.iconName} className="w-4 h-4 text-amber-brand-600" />
                    <span>Especialidad Técnica</span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-navy-950">
                    {activeServiceData.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {activeServiceData.fullDescription}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-xs text-navy-950 uppercase tracking-wider">Beneficios Directos:</h4>
                    <ul className="space-y-2">
                      {activeServiceData.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contacto-ascensores-manizales"
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-sans text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-colors shadow"
                  >
                    Pedir cotización de este servicio
                  </Link>
                </div>

                {/* Detail image */}
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow border border-slate-100">
                  <img 
                    src={activeServiceData.imageUrl} 
                    alt={activeServiceData.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EMERGENCY 24/7 SPECIAL ACCENT BLOCK */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden" id="emergency-alert-block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.15),transparent)]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-red-950/40 rounded-3xl p-8 sm:p-10 border border-red-900/40 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                <span>Atención Prioritaria 24/7/365</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                ¿Su ascensor se ha detenido o hay personas atrapadas?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Nuestros equipos móviles de rescate rápido están de guardia permanente para actuar en cualquier momento. Nos comprometemos a un tiempo medio de llegada inferior a 20 minutos en incidencias con usuarios atrapados.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
              <a 
                href="tel:3003646565" 
                className="bg-red-600 hover:bg-red-500 text-white text-center font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-900/20 font-sans text-sm uppercase tracking-wide"
              >
                <Phone className="w-4 h-4" />
                <span>Urgencias: 300 364 6565</span>
              </a>
              <span className="text-center text-[10px] text-slate-400 font-sans">Llamada de urgencia inmediata</span>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS & PRICING ORIENTATIVE */}
      <section className="py-20 bg-slate-50" id="pricing-plans-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-3">
              Planes de Mantenimiento
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-950 mb-4">
              Tarifas orientativas adaptadas a cada volumen de tráfico
            </h2>
            <p className="text-slate-600 font-sans">
              Ofrecemos contratos claros y transparentes sin letra pequeña. Consúltanos para recibir una valoración definitiva de tu finca.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`flex flex-col bg-white rounded-3xl border overflow-hidden transition-all duration-300 flex-1 relative ${
                  plan.isHighlighted 
                    ? "border-amber-brand-500 shadow-xl lg:-translate-y-4" 
                    : "border-slate-100 shadow-sm hover:border-slate-200"
                }`}
              >
                {plan.isHighlighted && (
                  <span className="bg-amber-brand-500 text-navy-950 text-[10px] font-bold tracking-widest uppercase py-1.5 px-4 block text-center absolute top-0 left-0 w-full">
                    El más recomendado por copropietarios
                  </span>
                )}

                <div className={`p-8 ${plan.isHighlighted ? "pt-12" : "pt-8"} border-b border-slate-100`}>
                  <span className="text-[10px] uppercase font-bold text-amber-brand-600 tracking-wider block mb-1">
                    {plan.recommendedFor}
                  </span>
                  <h3 className="text-lg font-display font-extrabold text-navy-950 mb-4">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1.5 text-navy-950">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold">{plan.priceRange}</span>
                    <span className="text-xs font-semibold text-slate-400 font-sans">/ {plan.period}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1.5">*Precio medio estimado de referencia</span>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contacto-ascensores-manizales"
                    className={`w-full text-center py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all block ${
                      plan.isHighlighted
                        ? "bg-amber-brand-500 hover:bg-amber-brand-600 text-navy-950 shadow-md"
                        : "bg-navy-50 hover:bg-navy-100 text-navy-950"
                    }`}
                  >
                    Solicitar Presupuesto del Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-150 max-w-3xl mx-auto flex items-start gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-brand-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              <strong>Nota sobre precios:</strong> Las tarifas mostradas son orientativas y se calculan en base a ascensores eléctricos estándar de hasta 4 paradas. El precio final puede variar según las características del elevador (hidráulico, velocidad, año de fabricación) y el número de equipos contratados en una misma comunidad o empresa.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
