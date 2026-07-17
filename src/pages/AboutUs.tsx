/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  History, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  Sparkles,
  ClipboardCheck,
  Cpu
} from "lucide-react";
import { TEAM, MILESTONES } from "../data";

export default function AboutUs() {
  const values = [
    {
      title: "Seguridad Absoluta",
      description: "Es nuestra obsesión diaria. Todo protocolo técnico está diseñado para garantizar riesgo cero en el funcionamiento de los equipos.",
      icon: ShieldCheck
    },
    {
      title: "Respuesta Inmediata",
      description: "Sabemos que el tiempo es crítico. Nos movilizamos al instante con flota técnica propia y guardia permanente.",
      icon: Zap
    },
    {
      title: "Cercanía y Confianza",
      description: "Hablamos claro, sin tecnicismos complejos. Ofrecemos presupuestos cerrados y respuestas honestas a los vecinos.",
      icon: HeartHandshake
    },
    {
      title: "Innovación Tecnológica",
      description: "Integramos monitorización remota IoT en tiempo real para anticipar averías antes de que afecten al usuario.",
      icon: Cpu
    }
  ];

  const standards = [
    {
      code: "Norma NTC 5926-1",
      name: "Seguridad e Inspección de Transporte Vertical en Colombia",
      desc: "Certificación obligatoria que regula la revisión y ensayos técnicos periódicos de seguridad en ascensores."
    },
    {
      code: "Normas NTC 2769 / NTC 5926-1",
      name: "Reglas de seguridad para la instalación de elevadores",
      desc: "Garantiza un mayor confort de viaje, nivelación óptima de cabina y protección integral para los pasajeros."
    },
    {
      code: "Registro Certificado",
      name: "Inscripción en Industria y Comercio",
      desc: "Inscritos oficialmente con plenas facultades técnicas legales para operar en Manizales y el Eje Cafetero."
    }
  ];

  return (
    <div className="pt-[104px] overflow-hidden" id="about-us-page">
      
      {/* HEADER SECTION */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-brand-500 uppercase tracking-widest block mb-3">
              Conoce Ascensores Wolf
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6">
              Una historia de ingeniería, compromiso y seguridad vertical
            </h1>
            <p className="text-lg text-slate-300 font-sans leading-relaxed">
              Desde 1999, combinamos ingeniería de vanguardia con un servicio cercano y ágil para asegurar la movilidad de miles de personas cada día.
            </p>
          </div>
        </div>
      </section>

      {/* COMPACT HISTORY, MISSION & VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            {/* Story column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-amber-brand-600 font-bold text-xs uppercase tracking-wider">
                <History className="w-4.5 h-4.5" />
                <span>Nuestra Historia</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-950">
                Más de 20 años elevando la calidad de vida en comunidades
              </h2>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                Ascensores Wolf nació de la mano de ingenieros mecánicos decididos a ofrecer un servicio técnico superior de mantenimiento para el transporte vertical de la región, brindando tarifas justas, excelente soporte de repuestos y un servicio transparente.
              </p>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                Hoy en día, conservamos el mismo espíritu de cercanía con el cliente, respaldado por un equipo de profesionales altamente calificados y equipados con herramientas de diagnóstico avanzadas.
              </p>
            </div>

            {/* Mission & Vision Column */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-brand-500/10 text-amber-brand-600 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-navy-950 text-base">
                  Nuestra Misión
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Garantizar el viaje vertical más seguro, confortable y eficiente en comunidades y comercios, eliminando las paradas imprevistas mediante mantenimiento predictivo riguroso.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-navy-900/10 text-navy-950 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-navy-950 text-base">
                  Nuestra Visión
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Ser la empresa independiente de referencia en mantenimiento de ascensores del Eje Cafetero, reconocida por la excelencia de respuesta inmediata y la honestidad de precios.
                </p>
              </div>
            </div>

          </div>

          {/* CORPORATE VALUES */}
          <div className="border-t border-slate-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
                Nuestros Valores
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-950">
                Los pilares éticos detrás de cada intervención técnica
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-950 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-navy-950 text-sm mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
              Nuestra Evolución
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-950">
              Línea de tiempo con hitos importantes
            </h2>
          </div>

          {/* Vertical/Horizontal timeline for milestone events */}
          <div className="relative border-l border-slate-200 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12 py-4">
            {MILESTONES.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Milestone Node Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 bg-white border-4 border-amber-brand-500 rounded-full group-hover:bg-amber-brand-500 transition-colors flex items-center justify-center"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                  {/* Milestone Year Label */}
                  <div className="md:col-span-2 md:-ml-40 text-left md:text-right">
                    <span className="text-2xl font-display font-extrabold text-navy-950 tracking-tight block">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-bold text-amber-brand-600 uppercase tracking-wider block">
                      Aniversario
                    </span>
                  </div>

                  {/* Milestone Description Panel */}
                  <div className="md:col-span-10 bg-white p-6 rounded-2xl border border-slate-150 shadow-sm">
                    <h3 className="font-display font-bold text-base text-navy-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
              Equipo Ascensores Wolf
            </span>
            <h2 className="text-3xl font-display font-bold text-navy-950">
              Profesionales altamente cualificados para tu seguridad
            </h2>
            <p className="text-slate-500 font-sans text-sm mt-3">
              Contamos con un equipo técnico multidisciplinar de ingenieros, inspectores de obra civil y operadores de llamadas de emergencias comprometidos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="aspect-square relative overflow-hidden bg-slate-100">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold text-amber-brand-600 block uppercase mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-base font-display font-bold text-navy-950 mb-3">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & STANDARDS SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-3">
                Garantía y Cumplimiento Legal
              </span>
              <h2 className="text-3xl font-display font-bold text-navy-950 mb-6">
                Cumplimos estrictamente las normativas de seguridad más exigentes
              </h2>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                La seguridad de nuestros clientes es de carácter no negociable. Todos nuestros trabajos cumplen estrictamente con los Reglamentos de transporte vertical nacionales y las Normas Técnicas Colombianas de Seguridad vigentes.
              </p>
              
              <div className="inline-flex items-center gap-3 bg-white border border-slate-150 px-5 py-4 rounded-2xl shadow-sm">
                <Award className="w-8 h-8 text-amber-brand-500 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-xs text-navy-950">Empresa Oficial Autorizada</h4>
                  <p className="text-[10px] text-slate-500 font-sans">Homologación estatal de industria bajo protocolo RAE.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {standards.map((std, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-950 flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-brand-600 uppercase tracking-widest block mb-1">
                      {std.code}
                    </span>
                    <h3 className="font-display font-bold text-sm text-navy-950 mb-1">
                      {std.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {std.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
