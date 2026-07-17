/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Clock, User, ArrowRight, BookOpen, Check, X, Info } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  readTime: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "Nueva Normativa de Seguridad en Ascensores: Todo lo que debes saber",
    excerpt: "Explicamos detalladamente los cambios regulatorios recientes en el transporte vertical y cómo afectan a las comunidades de vecinos y administradores de fincas.",
    date: "12 de Julio, 2026",
    author: "Fernando Wolf",
    category: "Normativa",
    slug: "nueva-normativa-seguridad-ascensores",
    readTime: "5 min de lectura"
  },
  {
    title: "Ventajas de los Motores Gearless en la Elevación Moderna",
    excerpt: "Analizamos la tecnología de imanes permanentes sin engranajes (Gearless), el ahorro de energía eléctrica de hasta un 45% y la notable mejora en la suavidad de viaje.",
    date: "28 de Junio, 2026",
    author: "Sofía Benítez",
    category: "Tecnología",
    slug: "ventajas-motores-gearless",
    readTime: "4 min de lectura"
  },
  {
    title: "Mantenimiento Preventivo vs. Correctivo: ¿Cuál ahorra más dinero?",
    excerpt: "Descubre por qué las revisiones mensuales exhaustivas evitan averías críticas y prolongan la vida útil del ascensor en más de 15 años.",
    date: "15 de Mayo, 2026",
    author: "Daniel Vargas",
    category: "Consejos",
    slug: "mantenimiento-preventivo-vs-correctivo",
    readTime: "6 min de lectura"
  }
];

export default function Blog() {
  const [notification, setNotification] = useState<{ message: string; type: "success" | "info" } | null>(null);
  const [emailInput, setEmailInput] = useState("");

  const showToast = (message: string, type: "success" | "info") => {
    setNotification({ message, type });
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setNotification((prev) => (prev?.message === message ? null : prev));
    }, 5000);
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !/\S+@\S+\.\S+/.test(emailInput)) {
      showToast("Por favor, introduce un correo electrónico válido.", "info");
      return;
    }
    showToast("¡Gracias por suscribirte al boletín técnico de Ascensores Wolf!", "success");
    setEmailInput("");
  };

  return (
    <div className="pt-[104px] min-h-screen bg-slate-50 relative" id="blog-page">
      {/* Toast Notification */}
      {notification && (
        <div 
          className="fixed bottom-6 right-6 z-50 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-sm animate-fade-in-up"
          id="blog-toast"
        >
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
            notification.type === "success" 
              ? "bg-green-100 text-green-600" 
              : "bg-amber-brand-100 text-amber-brand-800"
          }`}>
            {notification.type === "success" ? <Check className="w-4 h-4" /> : <Info className="w-4 h-4" />}
          </div>
          <div className="flex-grow">
            <p className="text-xs font-sans text-slate-700 leading-tight font-medium">
              {notification.message}
            </p>
          </div>
          <button 
            onClick={() => setNotification(null)}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <span className="text-xs font-bold text-amber-brand-500 uppercase tracking-widest block mb-3">
            Blog y Actualidad de Ascensores Wolf
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4">
            Espacio Técnico e Informativo
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl">
            Artículos especializados, consejos prácticos de mantenimiento, novedades tecnológicas y normativas de seguridad para tu comunidad o empresa.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <article 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              id={`blog-post-${post.slug}`}
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="bg-amber-brand-100 text-amber-brand-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-slate-400 font-sans flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-display font-bold text-navy-950 leading-snug hover:text-amber-brand-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 sm:px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-sans text-slate-500">
                  <User className="w-4 h-4 text-slate-400" />
                  <span>{post.author}</span>
                  <span className="text-slate-300">•</span>
                  <span>{post.date}</span>
                </div>

                <button 
                  className="text-navy-950 hover:text-amber-brand-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group cursor-pointer"
                  onClick={() => showToast("Este artículo completo estará disponible próximamente en nuestro boletín oficial.", "info")}
                >
                  <span>Leer más</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-navy-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg border border-navy-850">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.08),transparent)]"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-12 h-12 bg-amber-brand-500 text-navy-950 rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold">¿Quieres recibir nuestro boletín técnico mensual?</h3>
            <p className="text-sm text-slate-300 font-sans">
              Únete a más de 500 administradores de copropiedades y recibe información exclusiva sobre subvenciones vigentes y normativas técnicas.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Tu correo electrónico" 
                className="bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-amber-brand-500 flex-grow font-sans"
              />
              <button 
                type="submit"
                className="bg-amber-brand-500 hover:bg-amber-brand-600 text-navy-950 font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-xl transition-all shadow cursor-pointer"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
