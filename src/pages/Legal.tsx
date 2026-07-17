/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Legal() {
  return (
    <div className="pt-[104px] min-h-screen bg-slate-50 font-sans text-slate-700" id="legal-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-amber-brand-600 uppercase tracking-widest block mb-2">Información Regulatoria</span>
            <h1 className="text-3xl font-display font-extrabold text-navy-950 tracking-tight">Aviso Legal</h1>
            <p className="text-xs text-slate-400 mt-2">Última actualización: 16 de Julio, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">1. Datos Identificativos</h2>
              <p>
                En cumplimiento del deber de información correspondiente, se facilitan a continuación los datos del titular de este sitio web:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Razón Social:</strong> Ascensores Wolf S.A.S.</li>
                <li><strong>NIT:</strong> 900.564.321-0</li>
                <li><strong>Domicilio Principal:</strong> Carrera 23 # 54-12, Manizales, Caldas, Colombia</li>
                <li><strong>Teléfono de Contacto:</strong> +57 300 364 6565</li>
                <li><strong>Correo Electrónico:</strong> contacto@ascensoreswolf.com</li>
                <li><strong>Actividad Comercial:</strong> Mantenimiento, reparación, modernización e instalación de transporte vertical (ascensores, montacargas, escaleras eléctricas).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">2. Propiedad Intelectual e Industrial</h2>
              <p>
                Todos los contenidos de este sitio web, incluyendo textos, diseños gráficos, códigos fuente, logotipos, imágenes y marcas registradas son propiedad de <strong>Ascensores Wolf S.A.S.</strong> o de sus legítimos licenciantes. Queda estrictamente prohibida su reproducción, distribución o uso comercial sin autorización expresa por escrito.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">3. Limitación de Responsabilidad</h2>
              <p>
                Este sitio web proporciona información orientativa sobre nuestros servicios técnicos de elevación y tarifas medias estimadas. Ascensores Wolf no asume ninguna responsabilidad derivada de imprecisiones técnicas ajenas o malentendidos de contratación. La prestación formal de servicios queda siempre sujeta a un diagnóstico técnico presencial y la firma de un contrato vinculante personalizado.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-display font-bold text-navy-950">4. Legislación Aplicable y Jurisdicción</h2>
              <p>
                Las condiciones de uso de este sitio web se rigen por las leyes de la República de Colombia. Para la resolución de cualquier controversia judicial o arbitral, las partes acuerdan someterse exclusivamente a la jurisdicción de los tribunales competentes de la ciudad de Manizales, Caldas.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
