import { MeasureCard } from "./MeasureCard";

export function EjeGasto() {
  return (
    <section id="eje-gasto" className="scroll-mt-16 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Eje 3
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          Contenci&oacute;n del gasto p&uacute;blico
        </p>
        <div className="grid gap-8 xl:grid-cols-2 mb-12">
          <p className="text-base leading-relaxed text-slate-500">
            7 medidas para reducir y ordenar el gasto p&uacute;blico, combatiendo
            la evasi&oacute;n y complementando el reordenamiento fiscal en curso.
          </p>
          <div className="flex gap-4">
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 uppercase">Ahorro estimado en r&eacute;gimen</p>
              <p className="text-2xl font-black text-slate-800 mt-1">+USD 570 M</p>
              <p className="text-xs text-slate-400">Suma medidas 3, 4, 5 y 7</p>
            </div>
            <div className="flex-1 rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold text-red-700 uppercase">Costo FCM (a&ntilde;o 25)</p>
              <p className="text-2xl font-black text-red-700 mt-1">−$243.093 M</p>
              <p className="text-xs text-red-500">Compensaci&oacute;n exenci&oacute;n contribuciones</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <MeasureCard
            number="1"
            title="Moratoria ingreso nuevas IES a la gratuidad"
            whatItDoes="Suspende por 2 años el ingreso de nuevas instituciones de educación superior al sistema de financiamiento para la gratuidad."
            governmentClaim="Menor gasto por USD 320 millones. Permite evaluar sostenibilidad del sistema antes de expandirlo."
            risks="Entre las críticas formuladas durante el debate público se encuentra que limitaría el acceso de estudiantes de menores ingresos y que podría beneficiar a IES establecidas al restringir la entrada de nuevos competidores. El proyecto no establece una fecha de reapertura."
            law="Ley 21.091"
            articles="Artículo 25°"
            type="spending"
          />
          <MeasureCard
            number="2"
            title="Aumento del umbral para extensión de gratuidad"
            whatItDoes="Eleva umbrales: 7° decil: ≥29,5%; 8°: ≥30,5%; 9°: ≥32,5%; Universal: ≥35,5% del PIB Tendencial No Minero (2 años consecutivos)."
            governmentClaim="Propuesta textual del proyecto FES. Condiciona expansión a disponibilidad fiscal."
            risks="Entre las críticas formuladas durante el debate público se encuentra que eleva los umbrales respecto a la ley actual (23,5%) y que la gratuidad universal podría retrasarse, dado que el PIB tendencial no minero ha superado el 30% en contadas ocasiones."
            law="Ley 21.091"
            articles="Artículo 24°"
            type="spending"
          />
          <div className="xl:col-span-2">
            <MeasureCard
              number="3"
              title="Eliminación franquicia tributaria SENCE"
              whatItDoes="Elimina la franquicia que permite descontar hasta 1% de la planilla anual como crédito contra IDPC por capacitaciones."
              governmentClaim="Gasto tributario de ~USD 300 M/año sin efectos demostrados. Evaluaciones negativas de DIPRES, Comisión Larrañaga y Contraloría. Uso concentrado en grandes empresas."
              risks="Cámaras empresariales: eliminar sin reemplazo desincentiva la capacitación formal en PYMES. El Estado debiera ofrecer alternativas antes de eliminar el beneficio."
              law="Ley 19.518 / Ley 20.267"
              articles="Artículos 26° y 27°"
              type="spending"
              evidence="solid"
              evidenceNote="Múltiples evaluaciones (DIPRES, Contraloría, Comisión Larrañaga) coinciden en que la franquicia no ha demostrado resultados."
            />
          </div>
          <MeasureCard
            number="4"
            title="Aumenta cupos de incentivo al retiro"
            whatItDoes="Aumenta de 2.200 a 6.000 los cupos de incentivo al retiro para funcionarios públicos desde 2026. DIPRES asigna cupos adicionales."
            governmentClaim="Ahorro de USD 120 millones anuales en régimen al reemplazar funcionarios de alta remuneración por nuevos de menor costo."
            risks="Sindicatos: retiro masivo puede generar pérdida de capital institucional y conocimiento crítico. El ahorro neto depende de la reposición."
            law="Ley 20.948"
            articles="Artículos 28° y 29°"
            type="spending"
          />
          <MeasureCard
            number="5"
            title="Sanción por uso indebido de licencias médicas"
            whatItDoes="Destitución para funcionarios y término de contrato para honorarios/contrata que: incumplan reposo, trabajen durante licencia, falsifiquen licencias o entreguen antecedentes falsos."
            governmentClaim="+USD 50 millones anuales en régimen. Protege la probidad en la función pública."
            risks="Asociaciones de funcionarios: sanción automática de destitución puede ser desproporcionada para casos leves. Elimina gradualidad de sanciones actuales."
            articles="Artículo 30°"
            type="spending"
          />
          <MeasureCard
            number="6"
            title="Facultades de coordinación al SII"
            whatItDoes="Faculta al SII para requerir y cruzar información con órganos del Estado. Incluye datos del Registro Social de Hogares y programas sociales."
            governmentClaim="Hoy el SII depende de convenios voluntarios y trámites ineficientes para acceder a información."
            risks="Defensores de privacidad: acceso irrestricto a datos del RSH sin consentimiento puede vulnerar protección de datos. Riesgo de uso para otros fines."
            law="Código Tributario"
            articles="Artículos 22° y 23°"
            type="spending"
          />
          <MeasureCard
            number="7"
            title="Aumenta pena por contrabando de tabaco"
            whatItDoes="Deber del Ministerio Público de solicitar incautación. Agravante para contrabando de tabaco (pena máxima + un grado). Plazo de 15 días para rematar vehículos."
            governmentClaim="Recaudación: +USD 100 millones anuales en régimen. Combate el contrabando que evade impuestos específicos."
            risks="Sin objeciones significativas documentadas. Consistente con política de control del tabaco y salud pública."
            law="Ordenanza de Aduanas"
            articles="Artículo 31°"
            type="spending"
          />
        </div>
      </div>
    </section>
  );
}
