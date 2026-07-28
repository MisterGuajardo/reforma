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
              El PDF original contiene &uacute;nicamente la perspectiva del
              Ministerio de Hacienda. Las secciones de &laquo;Riesgos y
              objeciones&raquo; y &laquo;Balance general&raquo; son an&aacute;lisis
              editorial sintetizado, no citas textuales del documento oficial.
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-white">Sin afiliaci&oacute;n</p>
            <p className="text-xs leading-relaxed">
              Sin afiliaci&oacute;n gubernamental ni partidista. Este sitio no
              representa una opini&oacute;n pol&iacute;tica; es un ejercicio de
              an&aacute;lisis editorial independiente para facilitar la
              comprensi&oacute;n del proyecto de ley.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
