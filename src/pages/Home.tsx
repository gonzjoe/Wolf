/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Phone,
  Home as HomeIcon,
  Building2,
  Boxes,
  HeartPulse,
  Settings,
  ShieldAlert,
  Layers,
  ChevronRight,
  MessageSquareQuote,
  Shield,
  Clock,
  Sparkles,
  FileCheck,
  Check,
  Zap,
  Briefcase
} from "lucide-react";
import { STATS, TESTIMONIALS, IMAGES } from "../data";

export default function Home() {
  return (
    <div className="pt-[104px] overflow-hidden" id="home-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-navy-950 text-white min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.heroBg} 
            alt="Mantenimiento de Ascensores en Manizales" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-amber-brand-500/10 text-amber-brand-500 border border-amber-brand-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Seguridad Certificada e Ingeniería de Precisión</span>
            </motion.div>

            {/* H1 - Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight mb-6"
            >
              Mantenimiento de Ascensores en Manizales
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed font-sans mb-8"
            >
              En <strong>Ascensores Wolf</strong> nos dedicamos a la reparación, modernización y mantenimiento preventivo mensual de transporte vertical en Manizales y todo el Eje Cafetero. Garantizamos máxima seguridad, cumplimiento normativo y atención de emergencias 24/7.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                to="/contacto-ascensores-manizales"
                className="bg-amber-brand-500 hover:bg-amber-brand-600 text-navy-950 text-center font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 font-sans text-sm tracking-wide"
              >
                <span>Solicitar Diagnóstico Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/modernizacion-de-ascensores"
                className="border border-slate-500 hover:border-white text-white hover:bg-white/5 text-center font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 font-sans text-sm tracking-wide"
              >
                <span>Nuestros Servicios</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Accent Line representing an elevator track */}
        <div className="absolute right-12 top-10 bottom-10 w-0.5 bg-gradient-to-b from-transparent via-amber-brand-500/30 to-transparent hidden xl:block">
          <div className="w-2 h-16 bg-amber-brand-500 rounded-full animate-pulse absolute top-1/4"></div>
        </div>
      </section>

      {/* ================= CORE VALUE STRENGTHS ================= */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100" id="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
              Pilares de Confianza
            </p>
            <p className="text-3xl font-display font-bold text-navy-950">
              Compromiso de Seguridad y Desempeño
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Diagnósticos gratuitos */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-brand-50 text-amber-brand-600 flex items-center justify-center mb-6">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-navy-950 mb-4 group-hover:text-amber-brand-600 transition-colors">
                  Diagnósticos gratuitos
                </h2>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Realizamos inspecciones iniciales completas sin costo alguno. Evaluamos el estado mecánico, eléctrico y las condiciones de seguridad de tus equipos para brindarte claridad absoluta.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6">
                <span className="text-xs font-bold text-amber-brand-600">Soporte Técnico Sin Compromiso</span>
              </div>
            </div>

            {/* Card 2: Calidad en los proyectos */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-brand-50 text-amber-brand-600 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-navy-950 mb-4 group-hover:text-amber-brand-600 transition-colors">
                  Calidad en los proyectos
                </h2>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Utilizamos exclusivamente repuestos originales de marcas líderes. Cada reparación, modernización o ajuste cumple con los estándares técnicos y de calidad más altos de la industria.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6">
                <span className="text-xs font-bold text-amber-brand-600">Repuestos Certificados Originales</span>
              </div>
            </div>

            {/* Card 3: Experiencia profesional */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-brand-50 text-amber-brand-600 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-navy-950 mb-4 group-hover:text-amber-brand-600 transition-colors">
                  Experiencia profesional
                </h2>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Con más de 20 años de liderazgo en el mercado de elevadores, nuestro equipo de ingenieros y técnicos cuenta con la experticia necesaria para diagnosticar y solucionar cualquier tipo de falla.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6">
                <span className="text-xs font-bold text-amber-brand-600">Más de 20 Años Asegurando Tu Viaje</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-white py-16 border-b border-slate-100 relative z-20 shadow-sm" id="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat Card 1: Años de Experiencia */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-amber-brand-500 leading-none mb-3">
                +20
              </span>
              <h2 className="text-lg font-display font-bold text-navy-950 mb-1">
                Años de Experiencia
              </h2>
              <span className="text-xs text-slate-500 font-sans">
                Líderes consolidados en transporte vertical en el Eje Cafetero.
              </span>
            </div>

            {/* Stat Card 2: Ascensores Reparados */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-amber-brand-500 leading-none mb-3">
                1,200+
              </span>
              <h2 className="text-lg font-display font-bold text-navy-950 mb-1">
                Ascensores Reparados
              </h2>
              <span className="text-xs text-slate-500 font-sans">
                Intervenciones exitosas de mantenimiento, repuestos y ajuste integral.
              </span>
            </div>

            {/* Stat Card 3: Clientes Satisfecho */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-amber-brand-500 leading-none mb-3">
                99.8%
              </span>
              <h2 className="text-lg font-display font-bold text-navy-950 mb-1">
                Clientes Satisfecho
              </h2>
              <span className="text-xs text-slate-500 font-sans">
                Copropiedades, centros de salud y comercios avalan nuestra excelencia.
              </span>
            </div>

            {/* Stat Card 4: Técnicos Profesionales */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-amber-brand-500 leading-none mb-3">
                30+
              </span>
              <h2 className="text-lg font-display font-bold text-navy-950 mb-1">
                Técnicos Profesionales
              </h2>
              <span className="text-xs text-slate-500 font-sans">
                Especialistas mecánicos y electrónicos listos para urgencias 24/7.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ASCENSORES WOLF BRAND OVERVIEW ================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="wolf-brand-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-amber-brand-500 uppercase tracking-widest block mb-3">
              ¿Quiénes Somos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6">
              Ascensores Wolf
            </h2>
            <p className="text-slate-300 font-sans leading-relaxed">
              En Ascensores Wolf nos especializamos en la excelencia técnica para todo tipo de elevación vertical. Ofrecemos cobertura total en Manizales y el Eje Cafetero con las mejores soluciones de ingeniería, cubriendo las siguientes especialidades:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Ascensores con cuarto de maquina. */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <HomeIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Ascensores con cuarto de maquina.
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Soporte de sistemas de tracción tradicionales, mantenimiento de motores eléctricos o hidráulicos y salas de control dedicadas.
              </p>
            </div>

            {/* 2. Ascensores sin cuarto de maquina */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Ascensores sin cuarto de maquina
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Mantenimiento de tecnologías modernas MRL con motores síncronos de imanes permanentes integrados en el propio hueco.
              </p>
            </div>

            {/* 3. Ascensores panorámico */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Ascensores panorámico
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Cuidado estético e ingeniería específica para elevadores de cristal, garantizando un viaje visualmente impecable y seguro.
              </p>
            </div>

            {/* 4. Ascensores de carga */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Ascensores de carga
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Montacargas industriales robustos de alta capacidad de carga, diseñados para trabajo pesado continuo en fábricas y bodegas.
              </p>
            </div>

            {/* 5. Ascensores vehiculares */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Ascensores vehiculares
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Elevadores montacoches diseñados técnicamente para el traslado seguro de vehículos pesados en sótanos y edificios residenciales.
              </p>
            </div>

            {/* 6. Ascensores camilleros */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Ascensores camilleros
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Elevadores hospitalarios de cabinas alargadas con nivelación precisa milimétrica para la protección y suavidad de pacientes.
              </p>
            </div>

            {/* 7. Bandas transportadoras */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Bandas transportadoras
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Mantenimiento y repuestos de andenes móviles y rampas mecánicas de supermercados, aeropuertos y almacenes.
              </p>
            </div>

            {/* 8. Escaleras eléctricas */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Escaleras eléctricas
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Atención mecánica continua, lubricación, engrase y ajuste de escaleras eléctricas comerciales de tráfico pesado.
              </p>
            </div>

            {/* 9. Servicio de modernización */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-brand-500/50 transition-all group">
              <div className="w-10 h-10 bg-amber-brand-500/10 text-amber-brand-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-amber-brand-500 transition-colors">
                Servicio de modernización
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Renovación total de tableros de control de última tecnología síncrona, cambio de cabinas, cables y sistemas de ahorro de energía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN SERVICES GRID ================= */}
      <section className="py-20 bg-white" id="services-main-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
              Nuestras Soluciones Técnicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 mb-4">
              Servicios
            </h2>
            <p className="text-slate-600 font-sans">
              Brindamos servicios integrales adaptados a las necesidades técnicas más rigurosas de copropiedades y empresas en Caldas, Quindío y Risaralda:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 10. Ascensores con cuarto de maquina */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Ascensores con cuarto de maquina
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Inspección profunda de motores eléctricos convencionales, cableado de tracción de poleas, tableros electromecánicos de control y sistemas hidráulicos.
              </p>
            </div>

            {/* 11. Ascensores sin cuarto de maquina */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Ascensores sin cuarto de maquina
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Mantenimiento síncrono moderno para equipos de última tecnología Gearless MRL, ahorrando espacio edilicio y optimizando el consumo eléctrico.
              </p>
            </div>

            {/* 12. Ascensores panoramicos */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Ascensores panoramicos
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Mantenimiento de cabinas de cristal de diseño exclusivo, engrase silencioso y sistemas de seguridad visibles para centros comerciales u hoteles.
              </p>
            </div>

            {/* 13. Ascensores de carga */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Ascensores de carga
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Mantenimiento riguroso de plataformas industriales de carga pesada, montacargas, sistemas de cables reforzados y frenos mecánicos de seguridad extrema.
              </p>
            </div>

            {/* 14. Ascensores vehiculares */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Ascensores vehiculares
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Mantenimiento de elevadores montacoches con sistemas electrohidráulicos reforzados de doble pistón para traslado vertical de vehículos.
              </p>
            </div>

            {/* 15. Ascensores Hospitalarios */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Ascensores Hospitalarios
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Soporte de ascensores camilleros con tecnología de nivelación perfecta, cortinas infrarrojas protectoras y prioridades de llamadas clínicas urgentes.
              </p>
            </div>

            {/* 16. Bandas Transportadoras */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Bandas Transportadoras
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Inspección, cambio de rodillos, alineación de pasamanos y cadenas de tracción para rampas y andenes móviles de tráfico masivo.
              </p>
            </div>

            {/* 17. Escaleras eléctricas */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Escaleras eléctricas
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Mantenimiento electromecánico de peldaños, lubricación de cadenas de tracción, y sistemas electrónicos de parada de emergencia.
              </p>
            </div>

            {/* 18. Servicio de modernizacion */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-display font-bold text-navy-950 mb-3 hover:text-amber-brand-600 transition-colors">
                Servicio de modernizacion
              </h3>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                Actualización electrónica integral, cambio de maniobras antiguas de relés por controles electrónicos microprocesados de última generación.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MULTIMARCA ELEVATOR BRANDS SECTION ================= */}
      <section className="py-20 bg-slate-50" id="elevator-brands-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
              Soporte Especializado y Multimarca
            </span>
            {/* H2 - Elevator Brands Title */}
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-950 mb-6 leading-tight">
              Mantenimiento, Reparación,  Modernización y Ventas de Repuestos Originales para  Ascensores
            </h2>
            <p className="text-slate-600 font-sans text-sm">
              Tenemos la formación técnica, herramientas de diagnóstico de software y amplio inventario de repuestos para atender equipos de todas las tecnologías y marcas del mercado global:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* 19. Mitsubishi */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Mitsubishi</h3>
            </div>
            {/* 20. Otis */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Otis</h3>
            </div>
            {/* 21. Andino */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Andino</h3>
            </div>
            {/* 22. Schindler */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Schindler</h3>
            </div>
            {/* 23. LG */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">LG</h3>
            </div>
            {/* 24. Sigma */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Sigma</h3>
            </div>
            {/* 25. Kone */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Kone</h3>
            </div>
            {/* 26. Schindler */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Schindler</h3>
            </div>
            {/* 27. ThyssenKrupp */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">ThyssenKrupp</h3>
            </div>
            {/* 28. Hyundai */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Hyundai</h3>
            </div>
            {/* 29. Fujitec */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Fujitec</h3>
            </div>
            {/* 30. Orona */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Orona</h3>
            </div>
            {/* 31. HD */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">HD</h3>
            </div>
            {/* 32. Fuji */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-sm font-display font-bold text-slate-900">Fuji</h3>
            </div>
            {/* 33. Hitachi */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:border-amber-brand-500 transition-all col-span-2 sm:col-span-1">
              <h3 className="text-sm font-display font-bold text-slate-900">Hitachi</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLOMBIAN TECHNICAL STANDARDS (NTC) ================= */}
      <section className="py-20 bg-white border-t border-slate-100" id="ntc-standards-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">
              Cumplimiento Técnico Oficial
            </span>
            {/* H2 - NTC Standards Title */}
            <h2 className="text-3xl font-display font-bold text-navy-950 mb-4">
              NORMA TECNICA COLOMBIANA (NTC)
            </h2>
            <p className="text-slate-600 font-sans text-sm">
              Cumplimos estrictamente las reglamentaciones de seguridad vigentes en Colombia (incluyendo los Códigos de Seguridad para el Transporte Vertical). Cada mantenimiento e inspección se rige bajo los siguientes parámetros técnicos oficiales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 34. Norma técnica NTC 2503 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm">
              <h3 className="text-base font-display font-bold text-navy-950 mb-2">
                Norma técnica NTC 2503
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Define las especificaciones técnicas fundamentales para el diseño, instalación y construcción de elevadores de tracción eléctrica.
              </p>
            </div>

            {/* 35. Norma técnica NTC 2522 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm">
              <h3 className="text-base font-display font-bold text-navy-950 mb-2">
                Norma técnica NTC 2522
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Establece los requisitos detallados de seguridad para la instalación de sistemas de elevadores hidráulicos y de pistones verticales.
              </p>
            </div>

            {/* 36. Norma técnica NTC 4145 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm">
              <h3 className="text-base font-display font-bold text-navy-950 mb-2">
                Norma técnica NTC 4145
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Asegura la accesibilidad universal en el transporte vertical, garantizando el libre acceso a personas con movilidad reducida.
              </p>
            </div>

            {/* 37. Norma técnica NTC 4349 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 shadow-sm">
              <h3 className="text-base font-display font-bold text-navy-950 mb-2">
                Norma técnica NTC 4349
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Regula las directrices obligatorias de seguridad en la construcción e instalación de escaleras mecánicas y andenes móviles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ESCALATORS & MOVING RAMPS BRANDS SECTION ================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="escalators-brands-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.08),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-brand-500 uppercase tracking-widest block mb-2">
              Especialistas en Movilidad Comercial
            </span>
            {/* H2 - Escalators Brands Title */}
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-6 leading-tight">
              Mantenimiento, Reparación,  Modernización y Ventas de Repuestos Originales para Escaleras Eléctricas y Rampas Móviles
            </h2>
            <p className="text-slate-300 font-sans text-sm">
              Aseguramos la fiabilidad de pasillos mecánicos y escaleras eléctricas de alta densidad. Brindamos soporte técnico avanzado con repuestos oficiales para las marcas más reconocidas:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {/* 38. Mitsubishi */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Mitsubishi</h3>
            </div>
            {/* 39. Otis */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Otis</h3>
            </div>
            {/* 40. Andino */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Andino</h3>
            </div>
            {/* 41. Schindler */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Schindler</h3>
            </div>
            {/* 42. LG */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">LG</h3>
            </div>
            {/* 43. Sigma */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Sigma</h3>
            </div>
            {/* 44. Kone */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Kone</h3>
            </div>
            {/* 45. Schindler */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Schindler</h3>
            </div>
            {/* 46. ThyssenKrupp */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">ThyssenKrupp</h3>
            </div>
            {/* 47. Hyundai */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 text-center hover:border-amber-brand-500 transition-all">
              <h3 className="text-xs font-display font-bold text-white">Hyundai</h3>
            </div>
          </div>

          {/* ================= RELEVANT CLIENTS SUBSECTION ================= */}
          <div className="border-t border-slate-800 pt-16" id="clients-subsection">
            <div className="max-w-2xl mx-auto text-center mb-10">
              {/* 48. Algunos de Nuestros Clientes */}
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Algunos de Nuestros Clientes
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Grandes conjuntos residenciales, copropiedades, centros médicos y comerciales del Eje Cafetero confían de forma permanente en nuestra seguridad vertical:
              </p>
            </div>

            {/* Simulated Logo Slider of Commercial Clients in Coffee Axis */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-center">
              <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">C.C. El Cable</span>
                <span className="text-[10px] text-amber-brand-500 font-sans font-semibold">Manizales</span>
              </div>
              <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Torre Medica</span>
                <span className="text-[10px] text-amber-brand-500 font-sans font-semibold">Manizales</span>
              </div>
              <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Copropiedad Colinas</span>
                <span className="text-[10px] text-amber-brand-500 font-sans font-semibold">Eje Cafetero</span>
              </div>
              <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Clínica Caldas</span>
                <span className="text-[10px] text-amber-brand-500 font-sans font-semibold">Salud Vertical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT TESTIMONIALS ================= */}
      <section className="py-20 bg-white" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-3">
              Opiniones de Clientes Realistas
            </p>
            <p className="text-3xl font-display font-bold text-navy-950 mb-4">
              La Opinión de quienes confían en Ascensores Wolf diariamente
            </p>
            <p className="text-slate-600 font-sans text-sm">
              La satisfacción de nuestros clientes residenciales y comerciales es la mejor carta de presentación que disponemos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <MessageSquareQuote className="w-10 h-10 text-amber-brand-500/20" />
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-amber-brand-500">★</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 font-sans italic leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="border-t border-slate-200/60 pt-4 flex flex-col">
                  <span className="font-sans font-bold text-sm text-navy-950">
                    {testimonial.author}
                  </span>
                  <span className="text-xs text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIABILITY INSURANCE Trust Section ================= */}
      <section className="py-16 bg-amber-brand-500/10 border-t border-b border-amber-brand-500/20" id="trust-insurance-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-brand-500 text-navy-950 rounded-full mb-6 shadow-md">
            <Shield className="w-8 h-8" />
          </div>
          {/* H2 - SURAMERICANA Trust Policy Title */}
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 mb-4">
            Contamos con Póliza RC SURAMERICANA
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-sans max-w-3xl mx-auto leading-relaxed">
            Nuestra actividad técnica cuenta con el respaldo completo de una póliza de responsabilidad civil extracontractual de <strong>Sura</strong>. Garantizamos seguridad financiera absoluta y cobertura total ante cualquier evento o daño mecánico para la total tranquilidad de los administradores y copropietarios del edificio.
          </p>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white" id="final-cta-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl text-center border border-navy-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-2xl font-display font-bold text-white mb-4">
                ¿Buscas mejorar el mantenimiento de tu ascensor?
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-sans mb-8 leading-relaxed">
                Pide un presupuesto personalizado para tu comunidad, oficina o local sin ningún tipo de compromiso. Responderemos a tu solicitud técnica en menos de 24 horas laborables.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4">
                <Link
                  to="/contacto-ascensores-manizales"
                  className="bg-amber-brand-500 hover:bg-amber-brand-600 text-navy-950 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-colors"
                >
                  Pedir Presupuesto Sin Compromiso
                </Link>
                <a
                  href="tel:3003646565"
                  className="bg-navy-900 border border-navy-800 hover:border-slate-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-brand-500" />
                  <span>Llamar Gratis</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
