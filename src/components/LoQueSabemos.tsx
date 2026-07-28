export function LoQueSabemos() {
  return (
    <section id="lo-que-sabemos" className="scroll-mt-16 border-t border-slate-200 bg-white">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Transparencia
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          Lo que sabemos y lo que no sabemos
        </p>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-slate-500">
          Este proyecto de ley contiene cifras y proyecciones del Ministerio de
          Hacienda. Algunas son verificables; otras dependen de supuestos
          econ&oacute;micos que solo el tiempo podr&aacute; confirmar.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-800">
              Lo que sabemos
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 text-emerald-600">&#10003;</span>
                <span>El costo fiscal de cada medida est&aacute; calculado por la Direcci&oacute;n de Presupuestos en el Informe Financiero del proyecto.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-emerald-600">&#10003;</span>
                <span>La rebaja del IDPC de 27% a 23% tiene un costo fiscal estimado de $1,65 billones al a&ntilde;o 4.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-emerald-600">&#10003;</span>
                <span>Los plazos de evaluaci&oacute;n ambiental se duplicaron entre 2014 y 2025 (EIA: +703 d&iacute;as; DIA: +140 d&iacute;as).</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-emerald-600">&#10003;</span>
                <span>Chile descendi&oacute; 27 posiciones en el &iacute;ndice de competitividad tributaria de Tax Foundation entre 2014 y 2025.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-emerald-600">&#10003;</span>
                <span>El gasto tributario del SENCE tiene evaluaciones negativas de DIPRES, Contralor&iacute;a y la Comisi&oacute;n Larra&ntilde;aga.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-amber-800">
              Lo que no sabemos
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 text-amber-600">?</span>
                <span>Cu&aacute;nto crecer&aacute; el PIB como resultado de las medidas. La proyecci&oacute;n de +2,4% es del gobierno y no tiene estudios independientes que la respalden.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-amber-600">?</span>
                <span>Si la rebaja tributaria se traducir&aacute; en mayor inversi&oacute;n o se concentrar&aacute; en utilidades y dividendos.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-amber-600">?</span>
                <span>Cu&aacute;nto empleo se crear&aacute; con el cr&eacute;dito tributario a la contrataci&oacute;n.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-amber-600">?</span>
                <span>Si la simplificaci&oacute;n de permisos aumentar&aacute; la inversi&oacute;n sin afectar la calidad de la evaluaci&oacute;n ambiental.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-amber-600">?</span>
                <span>Cu&aacute;ndo y en qu&eacute; magnitud se recuperar&aacute; el costo fiscal inicial a trav&eacute;s del crecimiento inducido.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}