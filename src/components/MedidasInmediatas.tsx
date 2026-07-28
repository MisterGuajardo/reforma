import { MeasureCard } from "./MeasureCard";

export function MedidasInmediatas() {
  return (
    <section id="medidas-inmediatas" className="scroll-mt-16 border-t border-slate-200 bg-white">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Secci&oacute;n I
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          Medidas de aplicaci&oacute;n inmediata
        </p>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-slate-500">
          Disposiciones transitorias de efecto inmediato: ampliaci&oacute;n del FET,
          recaudaci&oacute;n temporal y medidas de reactivaci&oacute;n de la construcci&oacute;n.
        </p>

        {/* FET destacado */}
        <div className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
          <div className="grid items-center gap-8 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <span className="mb-2 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                Contenido del proyecto
              </span>
              <p className="text-xl font-bold text-slate-900 mt-2 mb-3 lg:text-2xl">
                Ampliaci&oacute;n del Fondo de Emergencia Transitorio (FET)
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                La Ley 21.681 cre&oacute; el FET por incendios con un tope de
                $800 mil millones para Valpara&iacute;so. A la fecha se han
                destinado $46 mil millones. El proyecto ampl&iacute;a el destino
                a Ñuble y Biob&iacute;o y aumenta el financiamiento en
                <strong> $400 mil millones adicionales</strong>.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Art&iacute;culos 1&deg; y 2&deg; &middot; Ley 21.681
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-black text-slate-800">+$400.000 M</p>
                <p className="mt-1 text-sm text-slate-500">Financiamiento adicional propuesto</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <MeasureCard
            number="1"
            title="Rebaja transitoria al Impuesto a las Donaciones"
            whatItDoes="Rebaja de 50% por 12 meses del impuesto variable (1% a 25%) a donaciones. Exime del trámite de insinuación judicial."
            governmentClaim="Adelanta recaudación con mayor certidumbre y evita planificación tributaria elusiva. Recaudación esperada: USD 290 millones."
            risks="Entre las críticas formuladas durante el debate público se encuentra que incentivo a elusión temporal — donaciones que se adelantan para aprovechar la rebaja, sin nuevo ingreso fiscal neto. La recaudación estimada es sobre capital que ya existe."
            law="Ley 16.271"
            articles="Artículo primero transitorio"
            type="recovery"
            source="Proyecto de Ley, p. 17"
          />
          <MeasureCard
            number="2"
            title="Facultad transitoria a TGR para rebajar intereses y multas"
            whatItDoes="Faculta por 180 días a TGR para celebrar convenios de pago con personas naturales o PYMES. Condonación total o parcial de intereses/multas con pie mínimo de 10%."
            governmentClaim="Incentiva regularización de deudas y reduce costos de cobranza para el Estado."
            risks="Implica condonación parcial de deuda tributaria, reduciendo ingresos fiscales de corto plazo. Entre las críticas formuladas durante el debate público se encuentra que esto sería un beneficio para deudores morosos."
            law="Código Tributario, art. 192"
            articles="Artículo segundo transitorio"
            type="recovery"
            source="Proyecto de Ley, p. 18"
          />
          <MeasureCard
            number="3"
            title="Declaración extraordinaria de bienes del exterior"
            whatItDoes="Sistema temporal (12 meses) voluntario de declaración de bienes/rentas en el extranjero, afecto a impuesto único sustitutivo del 10% (7% si se invierte en Chile)."
            governmentClaim="Recaudación esperada: +USD 300 millones. Permite repatriación de capitales."
            risks="Expertos: estos procesos tienen resultados mixtos internacionalmente. Tasa del 10% puede ser insuficiente para atraer capitales significativos. Riesgo de lavado de activos."
            articles="Artículo tercero transitorio"
            type="recovery"
            source="Proyecto de Ley, p. 19"
          />
          <MeasureCard
            number="4"
            title="Regularización de derechos municipales"
            whatItDoes="Procedimiento extraordinario: condonación total de intereses y multas mediante pago inmediato de deudas devengadas entre 2023 y 2025. Faculta renunciar a cobro de deuda prescribible."
            governmentClaim="Permite a municipios recuperar deuda principal que se perdería por prescripción. Descongestiona tribunales."
            risks="Renuncia a intereses y multas legalmente adeudados. Entre las críticas formuladas durante el debate público se encuentra que premia al moroso y que el beneficio se concentraría en grandes deudores comerciales."
            law="Ley de Rentas Municipales"
            articles="Artículo décimo transitorio"
            type="recovery"
            source="Proyecto de Ley, p. 20"
          />
          <div className="lg:col-span-2 xl:col-span-2">
            <MeasureCard
              number="5"
              title="Impuestos Sustitutivos (FUR, STUT, FUT)"
              whatItDoes="Impuestos sustitutivos con tasa de 10% para saldos acumulados en FUR, STUT y 'retiros en exceso' del FUT, permitiendo tributación inmediata y limpieza de registros."
              governmentClaim="Recaudación: USD 770 millones en 2 años. Reduce carga administrativa de empresas y SII."
              risks="Entre las críticas formuladas durante el debate público se encuentra que crearía un incentivo a la elusión — utilidades retenidas tributarían solo 10% en vez de tasas marginales de hasta 44,45% — y que el beneficio se concentraría en grandes contribuyentes."
              law="Ley 21.210 / Ley 20.780"
              articles="Artículos décimo primero y décimo segundo transitorios"
              type="recovery"
              source="Proyecto de Ley, p. 21"
            />
          </div>
        </div>

        <p className="text-2xl font-bold text-slate-900 mt-16 mb-8 lg:text-3xl xl:text-4xl">
          Reactivaci&oacute;n de la construcci&oacute;n
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <MeasureCard
            number="1"
            title="Exención transitoria de IVA a la vivienda"
            whatItDoes="Exención voluntaria y temporal de IVA (19%) a la venta de viviendas nuevas con recepción definitiva, por 12 meses desde la publicación de la ley."
            governmentClaim="Reduce stock sin vender. Rebaja estimada de precio de 6-7% para compradores. Reactiva el sector construcción."
            risks="Costo fiscal: −$422.709 M (año 1) y −$614.356 M (año 2). Entre las críticas formuladas durante el debate público se encuentra que existe el riesgo de que el beneficio sea capturado por los vendedores en vez de traspasarse a compradores."
            law="Ley sobre Impuesto a las Ventas y Servicios"
            articles="Artículo cuarto transitorio"
            type="recovery"
            chartSrc="/charts/23_page_23.png"
            chartAlt="Página del proyecto: exención IVA vivienda"
            source="Proyecto de Ley, p. 23"
          />
          <MeasureCard
            number="2"
            title="Nuevo régimen para viviendas DFL2"
            whatItDoes="Impuesto único de 5% sobre arriendo bruto desde la 3ª vivienda (≤90 m²). Personas naturales mantienen beneficios vigentes para las dos primeras."
            governmentClaim="Incentiva construcción de viviendas para arriendo. Formaliza el arriendo de terceras viviendas."
            risks="Entre las críticas formuladas durante el debate público se encuentra que crearía un impuesto donde antes no existía — hoy las viviendas económicas están exentas — y que el límite de 90 m² podría excluir proyectos de tipo familiar."
            law="DFL2 de 1959 del MOP"
            articles="Artículo 3°"
            type="recovery"
            chartSrc="/charts/24_page_24.png"
            chartAlt="Página del proyecto: régimen DFL2"
            source="Proyecto de Ley, p. 24"
          />
        </div>
      </div>
    </section>
  );
}
