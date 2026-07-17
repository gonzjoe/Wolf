/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Cookies() {
  return (
    <div className="pt-[104px] min-h-screen bg-slate-50 font-sans text-slate-700" id="cookies-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">Preferencias del Navegador</span>
            <h1 className="text-3xl font-display font-extrabold text-navy-950 tracking-tight">Política de Cookies</h1>
            <p className="text-xs text-slate-400 mt-2">Última actualización: 16 de Julio, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web descargan en su dispositivo para almacenar información de preferencias, recordar sesiones, analizar métricas de visitas y personalizar el contenido mostrado.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">2. Tipos de cookies que utilizamos</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Cookies Técnicas y Necesarias:</strong> Esenciales para permitir una navegación fluida, recordar su estado o configuración dentro de nuestro catálogo interactivo de servicios.
                </li>
                <li>
                  <strong>Cookies de Rendimiento y Análisis:</strong> Nos ayudan a conocer el volumen de visitas, páginas más consultadas (como las categorías de ascensores) para seguir optimizando nuestro portal web.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">3. Control y Desactivación de Cookies</h2>
              <p>
                Usted puede configurar su navegador web para bloquear, eliminar o rechazar todas las cookies instaladas. Tenga en cuenta que desactivar ciertas cookies técnicas puede limitar la interactividad de algunas secciones o formularios del sitio.
              </p>
              <p className="text-slate-500 italic">
                Para ajustar estas preferencias, consulte la sección de "Ayuda" o "Privacidad" del panel de configuración de su navegador habitual (Google Chrome, Mozilla Firefox, Safari, Edge, etc.).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
