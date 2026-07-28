export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="mb-2 text-sm font-semibold text-white">Proyecto de Ley</p>
            <p className="text-xs leading-relaxed">
              &ldquo;Proyecto de Ley para la Reconstrucci&oacute;n Nacional y
              Desarrollo Econ&oacute;mico y Social&rdquo;. Ingresado por el
              Ministerio de Hacienda el 22 de abril de 2026.
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-white">Metodolog&iacute;a</p>
            <p className="text-xs leading-relaxed">
              Este sitio presenta el texto oficial del proyecto, las proyecciones
              del gobierno y las objeciones de sus cr&iacute;ticos. Las cifras
              de impacto en PIB son estimaciones del Ministerio de Hacienda.
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-white">Sin afiliaci&oacute;n</p>
            <p className="text-xs leading-relaxed">
              Sin afiliaci&oacute;n gubernamental ni partidista. No representa
              opini&oacute;n pol&iacute;tica. Su prop&oacute;sito es presentar
              la informaci&oacute;n disponible para que cada lector forme su
              propio juicio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
