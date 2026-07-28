import { MeasureCard } from "./MeasureCard";

export function EjeTributario() {
  return (
    <section id="eje-tributario" className="scroll-mt-16 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Eje 1
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          Competitividad tributaria
        </p>
        <div className="grid gap-8 xl:grid-cols-2 mb-12">
          <p className="text-base leading-relaxed text-slate-500">
            6 medidas para reducir la carga tributaria corporativa, reintegrar
            el sistema y entregar certezas a inversionistas. Es el eje central
            del proyecto y el que genera mayor debate pol&iacute;tico.
          </p>
          <div className="flex gap-4">
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 uppercase">Proyecci&oacute;n del gobierno</p>
              <p className="text-2xl font-black text-slate-800 mt-1">+2,4% PIB</p>
              <p className="text-xs text-slate-400">Acumulado 10 a&ntilde;os</p>
            </div>
            <div className="flex-1 rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold text-red-700 uppercase">Costo fiscal estimado (a&ntilde;o 3)</p>
              <p className="text-2xl font-black text-red-700 mt-1">−$2,47 billones</p>
              <p className="text-xs text-red-500">Sin efecto crecimiento</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <MeasureCard
              number="1"
              title="Crédito tributario para protección del empleo formal"
              whatItDoes="Crédito para contribuyentes que paguen remuneraciones afectas a Impuesto de 2ª Categoría. Monto: 15% para sueldos hasta 7,8 UTM, decreciente hasta 12 UTM. Se imputa contra PPM e IVA."
              governmentClaim="Beneficia a +270 mil contribuyentes (86% PYMES) y +4 millones de trabajadores. Reduce tasa efectiva mediana de PYMES de 12,5% a 7,8%. Impacto: +0,84% PIB a 10 años."
              risks="Costo anual superior a $1,5 billones. Críticos: subsidiar el empleo vía impuestos distorsiona el mercado laboral. El beneficio aplica sobre todos los trabajadores formales, no solo nuevas contrataciones — efecto derrame sobre empleo existente, no creación neta."
              articles="Artículo 9°"
              type="tax"
            />
          </div>
          <MeasureCard
            number="2"
            title="Rebaja del Impuesto de Primera Categoría (IDPC)"
            whatItDoes="Reduce tasa del IDPC de 27% a 23% gradualmente: 2026: 27%, 2027: 25,5%, 2028: 24%, 2029: 23%."
            governmentClaim="Recupera competitividad tributaria. Impacto: +2,4% PIB a 10 años. La tasa de EE.UU. es 21%."
            risks="Costo: −$584.409 M (año 2), −$1.200.731 M (año 3), −$1.650.712 M (año 4). Críticos: la rebaja beneficia desproporcionadamente a grandes empresas. No hay garantía de que el ahorro se traduzca en inversión."
            articles="Artículo 10°, núms. 1 y 3; arts. 6° y 7° transitorios"
            type="tax"
          />
          <MeasureCard
            number="3"
            title="Reintegración del Sistema Tributario"
            whatItDoes="Elimina la obligación de restitución del crédito IDPC, volviendo a un sistema 100% integrado. IDPC imputable totalmente contra IGC o Impuesto Adicional."
            governmentClaim="Elimina inequidad: chilenos 44,45% vs extranjeros 35%. Elimina desincentivo al crecimiento de PYMES. Impacto: +0,41% PIB."
            risks="Costo: −$9.286 M a −$81.963 M anual. Críticos: beneficia a los tramos de mayor ingreso. Vuelve a un sistema modificado en 2014 para aumentar progresividad. Tasa máxima baja de 44,45% a 40%."
            law="Ley sobre Impuesto a la Renta"
            articles="Artículo 11°; artículo quinto transitorio"
            type="tax"
          />
          <MeasureCard
            number="4"
            title="Estatuto de invariabilidad tributaria"
            whatItDoes="Nuevo estatuto para inversiones sobre USD 50 millones. Extranjeros: tasa máxima 35% (excluye royalty). Locales: asegura estatuto vigente al contratar."
            governmentClaim="Atrae IED. Reemplaza DL600 que atrajo +USD 100 mil millones hasta 2015. Impacto: +1,5% PIB a 10 años."
            risks="Críticos: congela la capacidad del Estado de modificar impuestos para grandes inversionistas. Inequidad entre grandes y pequeños. El DL600 fue derogado por malas experiencias con mineras."
            articles="Artículo 33°"
            type="tax"
          />
          <MeasureCard
            number="5"
            title="Eliminación del impuesto único de 10% a ganancias de capital"
            whatItDoes="Elimina el impuesto único de 10% al mayor valor en enajenación de valores con presencia bursátil. Vuelve a ser Ingreso No Constitutivo de Renta."
            governmentClaim="Elimina desincentivo a la inversión en bolsa. Reduce carga tributaria del mercado de capitales."
            risks="Costo: −$17.679 M (año 2) a −$30.513 M (año 25). Críticos: las ganancias de capital de altos ingresos quedarían totalmente exentas. En la mayoría de países OCDE sí tributan. Beneficia casi exclusivamente al 1% más rico."
            law="Ley sobre Impuesto a la Renta"
            articles="Artículo 10°, números 2 y 4"
            type="tax"
          />
          <div className="lg:col-span-2">
            <MeasureCard
              number="6"
              title="Exención de contribuciones para mayores de 65 años"
              whatItDoes="Exime del Impuesto Territorial a propietarios mayores de 65 años respecto de su vivienda principal. La Ley de Presupuestos compensará al Fondo Común Municipal."
              governmentClaim="Beneficia a 300 mil adultos mayores con alivio financiero en etapa de menores ingresos."
              risks="Costo: −$56.894 M (año 1) a −$243.093 M (año 25) por compensación FCM. Críticos: beneficio no focalizado por ingreso. Municipios pierden ingresos que compensa el gobierno central, centralizando finanzas municipales."
              law="Ley 17.235, Impuesto Territorial"
              articles="Artículo 12°, artículo octavo transitorio"
              type="tax"
              chartSrc="/charts/33_contribuciones.png"
              chartAlt="Página del proyecto: exención contribuciones adultos mayores"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
