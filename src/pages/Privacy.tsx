/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Privacy() {
  return (
    <div className="pt-[104px] min-h-screen bg-slate-50 font-sans text-slate-700" id="privacy-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">Tratamiento de Datos</span>
            <h1 className="text-3xl font-display font-extrabold text-navy-950 tracking-tight">Política de Privacidad</h1>
            <p className="text-xs text-slate-400 mt-2">Última actualización: 16 de Julio, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">1. Protección de Datos Personales (Habeas Data)</h2>
              <p>
                <strong>Ascensores Wolf S.A.S.</strong>, de conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013 en Colombia, informa que los datos personales recolectados a través de nuestros formularios web (nombre, correo electrónico, teléfono, ciudad y copropiedad) se utilizarán de manera estrictamente confidencial para fines técnicos, comerciales de cotización, facturación y seguimiento de mantenimiento.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">2. Finalidad del Tratamiento de Datos</h2>
              <p>
                Los datos suministrados voluntariamente por los usuarios tendrán las siguientes finalidades exclusivas:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Gestionar solicitudes de cotización de mantenimiento preventivo e instalación de ascensores.</li>
                <li>Atender urgencias técnicas mediante contacto telefónico directo.</li>
                <li>Enviar alertas informativas sobre vencimiento de inspecciones obligatorias (OCA).</li>
                <li>Mejorar la experiencia de usuario y optimizar la navegación del sitio web.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">3. Derechos de los Titulares (ARCO)</h2>
              <p>
                Cualquier usuario tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales de nuestras bases de datos de forma gratuita. Para ejercer estos derechos, puede remitir una comunicación oficial con el asunto "Habeas Data" al correo electrónico <strong>contacto@ascensoreswolf.com</strong>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">4. Seguridad de la Información</h2>
              <p>
                Contamos con estrictos protocolos de seguridad tecnológica y cifrado de datos mediante certificados SSL de extremo a extremo, garantizando que su información personal no sea cedida, vendida ni distribuida a terceros bajo ningún concepto o pretexto comercial.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
