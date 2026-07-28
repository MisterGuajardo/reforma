import Image from "next/image";
import { MeasureCard } from "./MeasureCard";

const measures = [
  { number: "1", title: "Reduce plazo de invalidación de permisos sectoriales", whatItDoes: "Limita el plazo de invalidación de autorizaciones sectoriales de 2 años a 6 meses.", governmentClaim: "Reduce incertidumbre jurídica para proyectos de energía, minería, obras públicas y construcción.", risks: "Entre las críticas formuladas durante el debate público se encuentra que reduciría el plazo para impugnar actos administrativos y que podría debilitar el control ciudadano sobre permisos otorgados.", law: "Ley 19.880", articles: "Artículo 5°", source: "Proyecto de Ley, p. 35" },
  { number: "2", title: "Destraba relocalizaciones acuícolas", whatItDoes: "Elimina la obligación de someterse al SEIA para relocalizaciones. Micro relocalizaciones sin inspección de terreno ni evaluación.", governmentClaim: "Solo 1 de 1.060 solicitudes en 15 años. Muchas son micro relocalizaciones por imprecisiones cartográficas.", risks: "Organizaciones ambientales advierten que eliminar evaluación puede permitir traslado a áreas ecológicamente sensibles. Micro relocalización sin inspección puede expandir operaciones de facto.", law: "Ley 20.434, Pesca y Acuicultura", articles: "Artículo 6°", source: "Proyecto de Ley, p. 36" },
  { number: "3", title: "Sustituye caducidad por no uso con aumento de patente", whatItDoes: "Elimina la caducidad por paralización de actividades (mantiene solo por no inicio). Patentes: 6 UTM/ha desde 3er año, 16 UTM/ha desde 54 meses.", governmentClaim: "Beneficia a municipios y GORES con mayor recaudación. Elimina sanción desproporcionada.", risks: "Organizaciones ambientales advierten que elimina principal herramienta para recuperar concesiones ociosas. Concesión inactiva puede mantenerse indefinidamente pagando patentes.", law: "Ley General de Pesca y Acuicultura", articles: "Artículo 7°, numerales 2, 4 y 5", source: "Proyecto de Ley, p. 37" },
  { number: "4", title: "Coordinación monitoreo ambiental acuícola", whatItDoes: "Deja al reglamento la especificación del sistema. Mandata coordinación entre órganos del Estado.", governmentClaim: "Hoy no hay claridad sobre qué organismo debe monitorear. Evita duplicación de esfuerzos.", risks: "Medida administrativa. Sin objeciones significativas documentadas.", law: "Ley General de Pesca y Acuicultura", articles: "Artículo 7°, numeral 3", source: "Proyecto de Ley, p. 38" },
  { number: "5", title: "Agilización informes banco natural e INFAs", whatItDoes: "Crea cuenta extrapresupuestaria para ingresos destinados a informes. Licitación expedita para encargarlos.", governmentClaim: "Elimina cuellos de botella: hoy los recursos van al presupuesto general sin alinearse con la carga de trabajo.", risks: "Entre las críticas formuladas durante el debate público se encuentra que las cuentas extrapresupuestarias pueden reducir la transparencia y el control fiscal del gasto público.", law: "Ley General de Pesca y Acuicultura", articles: "Artículo 7°, número 1", source: "Proyecto de Ley, p. 39" },
  { number: "6", title: "Actualiza criterio de ingreso al SEIA para generación eléctrica", whatItDoes: "Elimina el umbral legal de 3 MW. El reglamento definirá magnitudes según tecnología.", governmentClaim: "El guarismo data de 1994. En los 90 el 76% eran diésel e hidro; hoy el 84% son solares con impactos distintos.", risks: "Organizaciones ambientales advierten que eliminar piso legal y delegarlo al reglamento permite al Ejecutivo modificar umbrales sin pasar por el Congreso.", law: "Ley 19.300", articles: "Artículo 13°, numeral 1, letra a)", source: "Proyecto de Ley, p. 40" },
  { number: "7", title: "Exime del SEIA a mejoras tecnológicas", whatItDoes: "Modificaciones con RCA favorable solo requieren nueva evaluación si implican cambios sustantivos.", governmentClaim: "Hoy modificaciones sin impacto significativo deben re-ingresar como proyectos nuevos.", risks: "Organizaciones ambientales advierten que 'cambio sustantivo' es subjetivo. Pueden realizarse ampliaciones sin evaluación.", law: "Ley 19.300", articles: "Artículo 13°, numeral 1, letra b)", source: "Proyecto de Ley, p. 41" },
  { number: "8", title: "Decisiones del SEA por resolución fundada", whatItDoes: "Exige resolución fundada para exigir EIA o rechazar DIA.", governmentClaim: "Elimina discrecionalidades administrativas. Entrega certeza jurídica.", risks: "Medida procedimental. Sin objeciones documentadas.", law: "Ley 19.300", articles: "Artículo 13°, numerales 2 y 3", source: "Proyecto de Ley, p. 42" },
  { number: "9", title: "RCA no reclamable por Ley 19.880", whatItDoes: "Solo recursos del responsable y de quienes participaron en la evaluación. No afecta recurso de protección constitucional.", governmentClaim: "Elimina recurso de invalidación que terceros pueden interponer hasta 2 años después de la RCA.", risks: "Entre las críticas formuladas durante el debate público se encuentra que podría restringir el acceso a la justicia ambiental. Comunidades sin representación durante la evaluación quedarían excluidas del proceso.", law: "Ley 19.300 / Ley 20.600", articles: "Artículo 13°, numerales 4, 5 y 6", source: "Proyecto de Ley, p. 43" },
  { number: "10", title: "Reducción de iteraciones en el SEIA", whatItDoes: "Régimen especial voluntario: 1 adenda para DIA, 2 para EIA. Evaluación a los 6 meses. Presidente vía DFL puede hacerlo obligatorio.", governmentClaim: "En 2025 las adendas tomaron 309 días promedio.", risks: "Organizaciones ambientales advierten que menos iteraciones reducirían la oportunidad de corregir deficiencias y que delegar la facultad al Presidente vía DFL podría eludir el debate legislativo.", law: "Ley 19.300", articles: "Artículo 13°, numeral 7; Artículo décimo sexto transitorio", chartSrc: "/charts/44_iteraciones_seia.png", chartAlt: "Iteraciones SEIA", evidence: "mixed", evidenceNote: "La experiencia internacional muestra resultados mixtos: plazos más cortos aceleran inversiones pero pueden reducir calidad de evaluación.", source: "Proyecto de Ley, p. 44" },
  { number: "11", title: "Plazos legales para resolver reclamaciones", whatItDoes: "Incorpora en ley los plazos: EIA máximo 60 días, DIA 30 días.", governmentClaim: "Hoy no se cumplen: promedian 9 meses (DIA) y 20 meses (EIA). Rango legal aumenta exigibilidad.", risks: "Entre las críticas formuladas durante el debate público se encuentra que sin reforzar capacidad del SEA, pueden generarse aprobaciones por silencio administrativo.", law: "Ley 19.300", articles: "Artículo 13°, numerales 8 y 9", source: "Proyecto de Ley, p. 45" },
  { number: "12", title: "SEA filtra pronunciamientos de OAECAs", whatItDoes: "SEA ejerce rectoría técnica. Solo considera pronunciamientos pertinentes. Puede dictar instrucciones obligatorias.", governmentClaim: "Hoy recibe hasta 200 pronunciamientos semanales sin poder filtrar observaciones infundadas.", risks: "Organizaciones ambientales advierten que el SEA podría excluir observaciones de servicios especializados calificándolas como 'no pertinentes'.", law: "Ley 19.300", articles: "Artículo 13°, numeral 10", source: "Proyecto de Ley, p. 46" },
  { number: "13", title: "Restitución de gastos por anulación de RCA", whatItDoes: "Si RCA favorable es anulada judicialmente, el titular tiene derecho a restitución de gastos directos.", governmentClaim: "Solo 2% de inversión ha sido revocada, pero el riesgo desincentiva proyectos.", risks: "Entre las críticas formuladas durante el debate público se encuentra que podría generar un efecto chilling sobre los tribunales ambientales, al modificar el principio de que el inversor asume el riesgo regulatorio.", law: "Ley 19.300", articles: "Artículos 14° a 18°", source: "Proyecto de Ley, p. 47" },
  { number: "14", title: "Límites a medidas precautorias", whatItDoes: "Medidas cautelares: máximo 30 días prorrogables, duración total máxima 6 meses. Se puede apelar.", governmentClaim: "Hoy pueden paralizar indefinidamente un proyecto con RCA favorable.", risks: "Organizaciones ambientales advierten que 6 meses puede ser insuficiente para evaluar daños ambientales complejos.", law: "Ley 20.600", articles: "Artículo 19°, numerales 2 y 3", source: "Proyecto de Ley, p. 48" },
  { number: "15", title: "Criterios objetivos para sitios prioritarios SBAP", whatItDoes: "MMA debe dictar primero el reglamento. Solo entonces puede dictarse el decreto de sitios. Plazo máximo aumenta de 2 a 4 años.", governmentClaim: "Sin reglamento no hay criterios objetivos.", risks: "Organizaciones ambientales advierten que duplica el plazo de 2 a 4 años, retrasando protección de sitios de alto valor ecológico.", law: "Ley 21.600, SBAP", articles: "Artículo 20°", source: "Proyecto de Ley, p. 49" },
  { number: "16", title: "Proporcionalidad en Monumentos Nacionales", whatItDoes: "CMN debe pronunciarse en 20 días desde un hallazgo. Debe dictar normativa para intervenciones 'menores'.", governmentClaim: "El CMN ha retrasado obras críticas. La protección sin considerar valor del hallazgo es desproporcionada.", risks: "Entre las críticas formuladas durante el debate público se encuentra que acelerar plazos puede llevar a decisiones sin diligencia debida y que la figura de 'intervención menor' puede eludir la protección de sitios valiosos.", law: "Ley 17.288", articles: "Artículo 21°", source: "Proyecto de Ley, p. 50" },
  { number: "17", title: "Compras públicas en concesiones", whatItDoes: "No aplicar restricciones a relacionados con MOP a +10 mil personas sin vinculación. Permite comunicación entre participantes.", governmentClaim: "Restricciones excesivas desincentivan participación. Diálogos técnicos mejoran bases de licitación.", risks: "Entre las críticas formuladas durante el debate público se encuentra que flexibilizar restricciones aumenta el riesgo de conflicto de intereses y que los diálogos técnicos pueden facilitar la colusión.", law: "Ley 19.886", articles: "Artículo 4°", source: "Proyecto de Ley, p. 51" },
  { number: "18", title: "Facilita transporte de monedas", whatItDoes: "Faculta eximir de exigencias generales de seguridad para moneda metálica. Exigencias proporcionales al valor.", governmentClaim: "Costo de traslado puede superar el valor de las monedas. Afecta a adultos mayores y zonas rurales.", risks: "Medida administrativa de bajo impacto. Sin objeciones documentadas.", law: "Ley 21.659", articles: "Artículo 32°", source: "Proyecto de Ley, p. 52" },
  { number: "19", title: "Excepción Propiedad Intelectual para minería de datos", whatItDoes: "Excepción de licitud para uso de obras publicadas en análisis estadístico a gran escala, sin remuneración ni permiso.", governmentClaim: "Hoy usar obra protegida para entrenar IA es infracción. La ambigüedad legal dificulta el desarrollo de IA en Chile.", risks: "Organizaciones de creadores señalan que permitiría el uso no autorizado de obras para modelos de IA que compiten con los creadores, con posible infracción a tratados internacionales como ADPIC y TPP-11.", law: "Ley 17.336", articles: "Artículo 8°", source: "Proyecto de Ley, p. 53" },
] as const;

export function EjePermisos() {
  return (
    <section id="eje-permisos" className="scroll-mt-16 border-t border-slate-200 bg-white">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Eje 2
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          Simplificaci&oacute;n de permisos
        </p>
        <div className="grid gap-8 xl:grid-cols-2 mb-12">
          <p className="text-base leading-relaxed text-slate-500">
            19 medidas que modifican los sistemas de evaluaci&oacute;n ambiental,
            concesiones, monumentos, compras p&uacute;blicas y propiedad intelectual.
            Es el eje con m&aacute;s medidas y el mayor impacto proyectado.
          </p>
          <div className="flex gap-4">
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 uppercase">Proyecci&oacute;n del gobierno</p>
              <p className="text-2xl font-black text-slate-800 mt-1">+2,9% PIB</p>
              <p className="text-xs text-slate-400">Acumulado 10 a&ntilde;os</p>
            </div>
            <div className="flex-1 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs font-semibold text-amber-700 uppercase">Debate principal</p>
              <p className="text-sm text-amber-800 mt-1">&iquest;Agilizaci&oacute;n o desregulaci&oacute;n ambiental?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width chart */}
      <div className="bg-slate-50">
        <div className="section-padding pb-8">
          <Image
            src="/charts/54_impacto_permisos.png"
            alt="Impacto estimado de simplificación de permisos en el PIB"
            width={1440}
            height={811}
            className="w-full rounded-xl border border-slate-200 shadow-lg"
          />
        </div>
      </div>

      <div className="section-padding py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {measures.map((m) => (
            <MeasureCard key={m.number} {...m} type="permit" />
          ))}
        </div>
      </div>
    </section>
  );
}
