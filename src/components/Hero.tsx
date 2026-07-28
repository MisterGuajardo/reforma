export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="section-padding py-24 lg:py-32">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200 backdrop-blur-sm">
            Ministerio de Hacienda &middot; 22 de abril de 2026
          </span>
          <span className="inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-sm">
            Propuesta del Ejecutivo
          </span>
        </div>
        <div className="grid gap-12 xl:grid-cols-5 xl:gap-16">
          <div className="xl:col-span-3">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Proyecto de Ley para la
              <br />
              <span className="text-blue-300">
                Reconstrucci&oacute;n Nacional
              </span>
              <br />
              y Desarrollo Econ&oacute;mico y Social
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              An&aacute;lisis estructurado del proyecto de ley ingresado por
              el Ministerio de Hacienda: el texto oficial del proyecto, las
              proyecciones del gobierno y un an&aacute;lisis editorial de
              posibles riesgos, para que cada lector pueda formarse su propio
              juicio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                37 medidas &middot; 3 ejes
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                68 p&aacute;ginas &middot; proyecciones a 25 a&ntilde;os
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                19 medidas de simplificaci&oacute;n de permisos
              </span>
              <a
                href="/reforma/reforma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/40 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm transition-colors hover:bg-blue-500/25"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar PDF
              </a>
            </div>
          </div>
          <div className="hidden xl:col-span-2 xl:flex xl:flex-col xl:gap-4">
            <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-300">
                Costo fiscal estimado a&ntilde;os 1&ndash;6 (sin crecimiento)
              </p>
              <p className="mt-1 text-3xl font-black text-red-400">−$1,2 billones</p>
              <p className="mt-0.5 text-xs text-slate-400">Proyecci&oacute;n del gobierno &middot; antes de efecto crecimiento</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                Proyecci&oacute;n a 25 a&ntilde;os (con crecimiento)
              </p>
              <p className="mt-1 text-3xl font-black text-white">+$5 billones</p>
              <p className="mt-0.5 text-xs text-slate-400">Super&aacute;vit estimado si el crecimiento esperado se materializa</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="section-padding flex flex-wrap items-center justify-center gap-x-10 gap-y-2 py-3 text-sm">
          <a href="#contexto" className="text-slate-400 transition-colors hover:text-white">Contexto</a>
          <a href="#medidas-inmediatas" className="text-slate-400 transition-colors hover:text-white">Inmediatas</a>
          <a href="#eje-tributario" className="text-slate-400 transition-colors hover:text-white">Tributario</a>
          <a href="#eje-permisos" className="text-slate-400 transition-colors hover:text-white">Permisos</a>
          <a href="#eje-gasto" className="text-slate-400 transition-colors hover:text-white">Gasto</a>
          <a href="#resumen-critico" className="text-slate-400 transition-colors hover:text-white">Balance</a>
          <a href="#lo-que-sabemos" className="text-slate-400 transition-colors hover:text-white">L&iacute;mites</a>
          <a href="#financiero" className="text-slate-400 transition-colors hover:text-white">Financiero</a>
        </div>
      </nav>
    </header>
  );
}
