export function ResumenCritico() {
  return (
    <section id="resumen-critico" className="scroll-mt-16 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          S&iacute;ntesis
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          &iquest;Qu&eacute; dice, qu&eacute; promete y qu&eacute; se le critica?
        </p>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-slate-500">
          Este proyecto de ley es una propuesta del Ejecutivo. A continuaci&oacute;n,
          un resumen editorial de lo que propone cada eje, lo que el gobierno
          proyecta y los riesgos identificados en este an&aacute;lisis.
        </p>

        {/* Eje 1 */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="grid gap-8 xl:grid-cols-4">
            <div>
              <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Eje 1</span>
              <p className="text-xl font-bold text-slate-900 mt-2">Competitividad tributaria</p>
            </div>
            <div className="xl:col-span-3 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-800">Qu&eacute; propone</p>
                <p className="mt-1 text-sm text-slate-700">Rebajar IDPC de 27% a 23%, reintegrar sistema, crear cr&eacute;dito al empleo y estatuto de invariabilidad.</p>
              </div>
              <div className="rounded-lg border-l-4 border-emerald-400 bg-emerald-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Promesa del gobierno</p>
                <p className="mt-1 text-sm text-slate-700">+2,4% PIB a 10 a&ntilde;os. Recuperar competitividad. Atraer inversi&oacute;n.</p>
              </div>
              <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-red-800">Riesgos (an&aacute;lisis editorial)</p>
                <p className="mt-1 text-sm text-slate-700">−$1,65 billones al a&ntilde;o 4. La rebaja no garantiza inversi&oacute;n. Beneficia m&aacute;s a altos ingresos.</p>
              </div>
            </div>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-600 hover:text-slate-900">Ver cifras clave</summary>
            <div className="mt-4 text-sm text-slate-600 space-y-1">
              <p>Costo acumulado a&ntilde;os 1&ndash;5 sin crecimiento: <strong className="text-red-700">−$11,3 billones</strong></p>
              <p>Crecimiento necesario para equilibrar en a&ntilde;o 10: <strong>$4,2 billones</strong> en recaudaci&oacute;n inducida</p>
              <p>Beneficiarios cr&eacute;dito empleo: 270 mil contribuyentes (86% PYMES) + 4 millones de trabajadores</p>
              <p>Punto de inflexi&oacute;n fiscal: entre a&ntilde;os 6 y 10 seg&uacute;n proyecciones del gobierno</p>
            </div>
          </details>
        </div>

        {/* Eje 2 */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="grid gap-8 xl:grid-cols-4">
            <div>
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">Eje 2</span>
              <p className="text-xl font-bold text-slate-900 mt-2">Simplificaci&oacute;n de permisos</p>
            </div>
            <div className="xl:col-span-3 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-800">Qu&eacute; propone</p>
                <p className="mt-1 text-sm text-slate-700">19 medidas: reducir plazos SEIA, limitar recursos contra RCA, filtrar OAECAs, acotar medidas cautelares.</p>
              </div>
              <div className="rounded-lg border-l-4 border-emerald-400 bg-emerald-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Promesa del gobierno</p>
                <p className="mt-1 text-sm text-slate-700">+2,9% PIB a 10 a&ntilde;os. Destrabar inversiones. Reducir incertidumbre regulatoria.</p>
              </div>
              <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-red-800">Riesgos (an&aacute;lisis editorial)</p>
                <p className="mt-1 text-sm text-slate-700">Desregulaci&oacute;n ambiental. Restricci&oacute;n a justicia comunitaria. Riesgo de aprobaciones sin evaluaci&oacute;n suficiente.</p>
              </div>
            </div>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-600 hover:text-slate-900">Medidas clave en controversia</summary>
            <div className="mt-4 text-sm text-slate-600 space-y-1">
              <p>Medida 9 (RCA sin recurso Ley 19.880): <strong>restringe acceso a justicia</strong> ambiental</p>
              <p>Medida 15 (SBAP): <strong>duplica plazo</strong> para protecci&oacute;n de sitios prioritarios</p>
              <p>Medida 10 (iteraciones SEIA): menos adendas = <strong>menos control</strong> de calidad informaci&oacute;n</p>
              <p>Medida 13 (restituci&oacute;n gastos): <strong>efecto chilling</strong> sobre tribunales ambientales</p>
            </div>
          </details>
        </div>

        {/* Eje 3 */}
        <div className="mb-10 rounded-xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="grid gap-8 xl:grid-cols-4">
            <div>
              <span className="mb-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">Eje 3</span>
              <p className="text-xl font-bold text-slate-900 mt-2">Contenci&oacute;n de gasto</p>
            </div>
            <div className="xl:col-span-3 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-800">Qu&eacute; propone</p>
                <p className="mt-1 text-sm text-slate-700">Pausar gratuidad IES, subir umbrales, eliminar SENCE, endurecer licencias, facultar al SII.</p>
              </div>
              <div className="rounded-lg border-l-4 border-emerald-400 bg-emerald-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Promesa del gobierno</p>
                <p className="mt-1 text-sm text-slate-700">USD 570 M anuales en r&eacute;gimen + USD 420 M en medidas transitorias de recaudaci&oacute;n.</p>
              </div>
              <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-red-800">Riesgos (an&aacute;lisis editorial)</p>
                <p className="mt-1 text-sm text-slate-700">Posterga gratuidad. Elimina franquicia sin reemplazo. Privacidad datos vs fiscalizaci&oacute;n.</p>
              </div>
            </div>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-600 hover:text-slate-900">Detalle ahorros vs costos sociales</summary>
            <div className="mt-4 text-sm text-slate-600 space-y-1">
              <p>Gratuidad: ahorra <strong>USD 320 M</strong>, congela acceso de nuevos estudiantes a financiamiento estatal</p>
              <p>SENCE: ahorra <strong>USD 300 M/a&ntilde;o</strong>, elimina &uacute;nico incentivo tributario a capacitaci&oacute;n formal</p>
              <p>Retiro: ahorra <strong>USD 120 M/a&ntilde;o</strong>, riesgo de p&eacute;rdida de capital institucional</p>
              <p>Tabaco: <strong>USD 100 M/a&ntilde;o</strong> (medida menos controvertida)</p>
            </div>
          </details>
        </div>

        {/* Balance general */}
        <div className="rounded-xl border-2 border-slate-300 bg-white p-8 lg:p-10 shadow-md">
          <p className="text-xl font-bold text-slate-900 mb-6 lg:text-2xl">Balance editorial del proyecto</p>
          <p className="text-sm text-slate-500 mb-6">
            Los siguientes puntos son una s&iacute;ntesis editorial de este sitio, no
            provienen del texto del proyecto de ley ni representan necesariamente el
            consenso de actores pol&iacute;ticos o acad&eacute;micos.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-bold text-emerald-800 uppercase tracking-wider">Elementos destacables del proyecto</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />Chile perdi&oacute; competitividad tributaria significativamente desde 2014</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />Plazos de evaluaci&oacute;n ambiental se duplicaron y son un cuello de botella real</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />El gasto tributario del SENCE no tiene resultados demostrados</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />La inversi&oacute;n requiere mayor certeza jur&iacute;dica</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />Problemas diagnosticados transversalmente como relevantes</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-bold text-red-800 uppercase tracking-wider">Puntos de atenci&oacute;n identificados</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Proyecciones del propio gobierno sin estudios independientes</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Costo fiscal de corto plazo: −$11,3 billones acumulados a&ntilde;o 5</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Medidas ambientales y de participaci&oacute;n debilitan controles</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Beneficios tributarios se concentran en percentiles de mayor ingreso</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Congela acceso a gratuidad de educaci&oacute;n superior sin fecha de reinicio</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Advertencia metodol&oacute;gica</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Todas las proyecciones de impacto en PIB son estimaciones del Ministerio de Hacienda contenidas en el PDF original.
              No existen estudios independientes que las avalen o refuten en su totalidad.
              Las secciones de &ldquo;riesgos y objeciones&rdquo; de este sitio son
              an&aacute;lisis editorial, no provienen del texto del proyecto de ley.
              La elasticidad entre rebaja tributaria y crecimiento es uno de los debates m&aacute;s
              disputados de la econom&iacute;a. Las cifras del gobierno deben leerse como
              <strong> proyecciones oficiales</strong>, no como certezas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
