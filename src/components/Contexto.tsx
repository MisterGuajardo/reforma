import Image from "next/image";

export function Contexto() {
  return (
    <section id="contexto" className="scroll-mt-16 bg-white">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Hechos
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          La econom&iacute;a chilena en cifras
        </p>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-slate-500">
          Datos del Banco Central, INE y DIPRES, aceptados transversalmente.
          Lo que se debate son sus causas y las soluciones.
        </p>
      </div>

      {/* PIB */}
      <div className="bg-slate-50">
        <div className="section-padding py-16 lg:py-20">
          <p className="text-xl font-bold text-slate-900 mb-8 lg:text-2xl xl:text-3xl">
            Crecimiento del PIB per c&aacute;pita
          </p>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                  <p className="text-3xl font-black text-slate-800">+7,4%</p>
                  <p className="text-sm text-slate-500">Promedio anual 1994&ndash;2014</p>
                </div>
                <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                  <p className="text-3xl font-black text-slate-800">+1,7%</p>
                  <p className="text-sm text-slate-500">Promedio anual 2014&ndash;2025</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">Fuente: Banco Central</p>
            </div>
            <Image
              src="/charts/04_pib_per_capita.png"
              alt="Evolución del PIB per cápita"
              width={1440}
              height={811}
              className="w-full rounded-xl border border-slate-200 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Desempleo */}
      <div className="bg-white">
        <div className="section-padding py-16 lg:py-20">
          <p className="text-xl font-bold text-slate-900 mb-8 lg:text-2xl xl:text-3xl">
            Desempleo persistentemente alto
          </p>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Image
              src="/charts/05_desempleo.png"
              alt="Tasa de desempleo"
              width={1440}
              height={811}
              className="w-full rounded-xl border border-slate-200 shadow-lg"
            />
            <div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
                  M&aacute;s de <strong>38 meses consecutivos</strong> con tasa de desempleo sobre 8%
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
                  <strong>1 de cada 5</strong> j&oacute;venes menores de 25 a&ntilde;os que busca empleo no lo encuentra
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
                  +850 mil personas sin empleo (pre-reforma previsional)
                </li>
              </ul>
              <p className="mt-6 text-xs text-slate-400">Fuente: INE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Balance fiscal */}
      <div className="bg-slate-50">
        <div className="section-padding py-16 lg:py-20">
          <p className="text-xl font-bold text-slate-900 mb-8 lg:text-2xl xl:text-3xl">
            D&eacute;ficit fiscal y aumento de deuda
          </p>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm leading-relaxed text-slate-600">
                El balance estructural registra d&eacute;ficits desde 2014, con
                valores entre −2% y −3,6% del PIB. La deuda bruta pas&oacute; de
                ~USD 20 mil millones (2006) a &gt;USD 160 mil millones (2025).
              </p>
              <p className="mt-4 text-xs text-slate-400">Fuente: DIPRES</p>
            </div>
            <Image
              src="/charts/07_balance_fiscal_deuda.png"
              alt="Balance estructural y deuda pública"
              width={1440}
              height={811}
              className="w-full rounded-xl border border-slate-200 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Social + Debate */}
      <div className="section-padding py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <span className="mb-3 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">Dato</span>
            <p className="text-xl font-bold text-slate-900 mb-4">Campamentos y seguridad</p>
            <Image
              src="/charts/06_campamentos_seguridad.png"
              alt="Campamentos y seguridad"
              width={1440}
              height={811}
              className="mb-4 w-full rounded-lg border border-slate-200"
            />
            <p className="text-sm leading-relaxed text-slate-600">
              Familias en campamentos se cuadriplicaron en 10 a&ntilde;os. En seguridad,
              Chile pas&oacute; del lugar 45 al 72 en el &Iacute;ndice de Paz Global.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <span className="mb-3 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">Debate</span>
            <p className="text-xl font-bold text-slate-900 mb-4">&iquest;Por qu&eacute; ocurri&oacute;?</p>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-800">Diagn&oacute;stico del gobierno</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;Chile extravi&oacute; la senda del progreso cuando se instal&oacute;
                  la ilusi&oacute;n de que el Estado pod&iacute;a generar riqueza por s&iacute;
                  mismo, expandiendo gasto y regulaci&oacute;n, mientras se desalentaba la
                  inversi&oacute;n privada con m&aacute;s impuestos y trabas regulatorias.&rdquo;
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-red-800">Cr&iacute;tica de la oposici&oacute;n</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  El menor crecimiento responde a m&uacute;ltiples factores: fin del
                  superciclo de materias primas, estancamiento de productividad,
                  desigualdad estructural y reformas insuficientes en educaci&oacute;n
                  e innovaci&oacute;n.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impuesto + Ranking */}
      <div className="bg-slate-50">
        <div className="section-padding py-16 lg:py-20">
          <div className="mb-10">
            <span className="mb-3 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">Dato + Debate</span>
            <p className="text-2xl font-bold text-slate-900 lg:text-3xl xl:text-4xl">
              Impuesto corporativo: evoluci&oacute;n y controversia
            </p>
          </div>
          <div className="grid gap-8 xl:grid-cols-2">
            <div>
              <Image
                src="/charts/09_impuesto_empresas.png"
                alt="Evolución impuesto a empresas"
                width={1440}
                height={811}
                className="w-full rounded-xl border border-slate-200 shadow-lg"
              />
              <div className="mt-4 flex gap-4">
                <div className="flex-1 rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-700 uppercase">Dato</p>
                  <p className="mt-2 text-sm text-slate-600">IDPC subi&oacute; de 20% a 27% en 2014. Chile es el &uacute;nico pa&iacute;s OCDE que subi&oacute; su impuesto corporativo entre 2000 y 2025.</p>
                </div>
                <div className="flex-1 rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-700 uppercase">Matiz</p>
                  <p className="mt-2 text-sm text-slate-600">La tasa efectiva es menor. La recaudaci&oacute;n se mantuvo estable en ~4% del PIB entre 2015 y 2025.</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/charts/10_ranking_competitividad.png"
                alt="Ranking OCDE tributario"
                width={1440}
                height={811}
                className="w-full rounded-xl border border-slate-200 shadow-lg"
              />
              <div className="mt-4 flex gap-4">
                <div className="flex-1 rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-700 uppercase">Dato</p>
                  <p className="mt-2 text-sm text-slate-600">Chile descendi&oacute; 27 posiciones en el &iacute;ndice de competitividad tributaria de Tax Foundation entre 2014 y 2025.</p>
                </div>
                <div className="flex-1 rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-700 uppercase">Cr&iacute;tica</p>
                  <p className="mt-2 text-sm text-slate-600">El ranking mide tasa legal, no efectiva. La competitividad tributaria depende del sistema completo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plazos SEIA */}
      <div className="bg-white">
        <div className="section-padding py-16 lg:py-20">
          <p className="text-xl font-bold text-slate-900 mb-8 lg:text-2xl xl:text-3xl">
            Plazos de evaluaci&oacute;n ambiental
          </p>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-3xl font-black text-slate-800">1.265 d&iacute;as</p>
                  <p className="text-sm text-slate-500">Promedio EIA en 2025</p>
                  <p className="text-xs text-slate-400">+703 d&iacute;as desde 2014</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-3xl font-black text-slate-800">398 d&iacute;as</p>
                  <p className="text-sm text-slate-500">Promedio DIA en 2025</p>
                  <p className="text-xs text-slate-400">+140 d&iacute;as desde 2014</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">Fuente: SEA</p>
            </div>
            <Image
              src="/charts/11_plazos_evaluacion.png"
              alt="Plazos de evaluación ambiental"
              width={1440}
              height={811}
              className="w-full rounded-xl border border-slate-200 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
