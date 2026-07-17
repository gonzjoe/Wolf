/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  Map,
  Globe
} from "lucide-react";
import { FAQS } from "../data";

export default function Contact() {
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("mantenimiento");
  const [message, setMessage] = useState("");
  
  // Validation / Feedback States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Accordion state
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  // Form submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Por favor, introduce tu nombre.";
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Introduce un correo electrónico válido.";
    }
    if (!phone.trim() || phone.length < 9) {
      newErrors.phone = "Introduce un teléfono válido (mínimo 9 dígitos).";
    }
    if (!message.trim()) {
      newErrors.message = "Escribe un breve mensaje indicando tu consulta.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and start mock submitting
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1200);
  };

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  const coverageAreas = [
    { title: "Zona Manizales", cities: "Manizales, Chinchiná, Villamaría, Neira" },
    { title: "Zona Pereira", cities: "Pereira, Dosquebradas, Santa Rosa de Cabal" },
    { title: "Zona Armenia", cities: "Armenia, Calarcá, Montenegro, Quimbaya" },
    { title: "Zona Eje Cafetero", cities: "Atención técnica móvil de emergencias 24/7" }
  ];

  return (
    <div className="pt-[104px] overflow-hidden" id="contact-page">
      
      {/* HEADER HERO */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.06),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-brand-500 uppercase tracking-widest block mb-3">
              Canales de Comunicación Directa
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6">
              Estamos a tu entera disposición
            </h1>
            <p className="text-lg text-slate-300 font-sans leading-relaxed">
              Resuelve tus dudas sobre mantenimiento obligatorio, solicita una auditoría gratis de tu ascensor o pide una cotización a medida para tu portal.
            </p>
          </div>
        </div>
      </section>

      {/* FORM AND CONTACT CARDS SPLIT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Contact Cards and Coverage */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">Atención Directa</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-950 mb-6">
                  Datos de Contacto Central
                </h2>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-brand-500/10 text-amber-brand-600 flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-950 mb-1">Teléfono</h3>
                    <a href="tel:3003646565" className="text-xs font-sans text-slate-600 hover:text-amber-brand-600 font-bold block">
                      300 364 6565
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Atención Inmediata</span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-950 flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-950 mb-1">Correo Electrónico</h3>
                    <a href="mailto:info@ascensoreswolf.com" className="text-xs font-sans text-slate-600 hover:text-amber-brand-600 block truncate">
                      info@ascensoreswolf.com
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Respuestas en 24h</span>
                  </div>
                </div>

                {/* Office Location Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-950 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-950 mb-1">Oficinas Centrales</h3>
                    <span className="text-xs font-sans text-slate-600 block leading-tight">
                      Manizales, Caldas, Colombia
                    </span>
                  </div>
                </div>

                {/* Opening Hours Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-950 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-950 mb-1">Horario Comercial</h3>
                    <span className="text-xs font-sans text-slate-600 block leading-tight">
                      Lun - Sáb: 7:00 a 18:00
                    </span>
                    <span className="text-[10px] text-amber-brand-600 font-semibold block mt-1">Urgencias: 24/7/365</span>
                  </div>
                </div>

              </div>

              {/* Service Coverage Box */}
              <div className="bg-navy-950 text-white p-8 rounded-3xl relative overflow-hidden shadow-md">
                <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                  <Globe className="w-32 h-32 text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-amber-brand-500 font-bold text-xs uppercase tracking-wider">
                    <Map className="w-4.5 h-4.5" />
                    <span>Zona de Cobertura y Rutas</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-4">
                    Nuestra red de asistencia técnica en el Eje Cafetero
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-slate-300">
                    {coverageAreas.map((area, idx) => (
                      <div key={idx} className="border-l border-amber-brand-500/30 pl-3">
                        <strong className="text-white block mb-0.5">{area.title}</strong>
                        <span className="text-slate-400 leading-none">{area.cities}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right side: Interactive Form with Validation */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-sm" id="contact-form-container">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6" id="success-message">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-navy-950">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Hemos recibido tus datos correctamente. Un técnico comercial de Ascensores Wolf de tu zona se pondrá en contacto contigo por teléfono o correo electrónico en un plazo máximo de 24 horas laborables.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-colors inline-block"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="form-contact">
                  <div>
                    <h3 className="text-xl font-display font-bold text-navy-950 mb-1">
                      Escríbenos tu Consulta
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      Campos requeridos para poder procesar la cotización oficial de mantenimiento.
                    </p>
                  </div>

                  {/* Input Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej: Juan Pérez Gómez"
                        className={`bg-white border text-sm rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/50 transition-all ${
                          errors.name ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej: juan@empresa.com"
                        className={`bg-white border text-sm rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/50 transition-all ${
                          errors.email ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        Teléfono Móvil / Fijo *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej: 300 364 6565"
                        className={`bg-white border text-sm rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/50 transition-all ${
                          errors.phone ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        Motivo del Mensaje
                      </label>
                      <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="bg-white border border-slate-200 text-sm rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/50 transition-all"
                      >
                        <option value="mantenimiento">Contratar Mantenimiento</option>
                        <option value="instalacion">Instalación Obra Nueva</option>
                        <option value="modernizacion">Modernizar Ascensor Existente</option>
                        <option value="averia">Reparación o Defectos de Inspección Obligatoria</option>
                        <option value="otra">Otras Consultas</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                      Detalle de la Solicitud *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Indícanos cuántas paradas tiene tu ascensor, la dirección de la finca o cualquier especificación técnica útil..."
                      className={`bg-white border text-sm rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/50 transition-all ${
                        errors.message ? "border-red-400" : "border-slate-200"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-950 hover:bg-navy-900 text-white font-sans text-xs font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Procesando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-brand-500" />
                        <span>Enviar Solicitud de Información</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center font-sans">
                    Al enviar el formulario, acepta nuestra política de tratamiento de datos personales para fines comerciales y técnicos.
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100" id="faqs-accordion-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
              Dudas Comunes
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-950 mb-4">
              Preguntas Frecuentes (FAQ)
            </h2>
            <p className="text-slate-600 font-sans text-sm">
              Encuentra respuestas rápidas sobre normativas obligatorias, tiempos de respuesta y cambio de mantenedor de ascensor.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-navy-950 font-display font-bold text-sm sm:text-base group"
                    id={`btn-${faq.id}`}
                  >
                    <span className="group-hover:text-amber-brand-600 transition-colors">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-brand-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-amber-brand-500 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed border-t border-slate-50 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
