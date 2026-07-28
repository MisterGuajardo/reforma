function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border-b-2 border-slate-300 bg-slate-800 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white whitespace-nowrap">
      {children}
    </th>
  );
}

function Td({ children, align = "left" }: { children: React.ReactNode; align?: "left" | "right" | "center" }) {
  const a = align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";
  return (
    <td className={`${a} border-b border-slate-100 px-3 py-2 text-xs text-slate-700`}>
      {children}
    </td>
  );
}

function TdNum({ val }: { val: number }) {
  const abs = Math.abs(val);
  const formatted = abs >= 1_000_000 ? `${(abs / 1_000_000).toFixed(1)}M` : abs >= 1_000 ? `${(abs / 1_000).toFixed(0)}K` : abs.toFixed(0);
  const cls = val === 0 ? "text-slate-400" : val > 0 ? "text-emerald-700" : "text-red-700";
  const sign = val > 0 ? "+" : val < 0 ? "−" : "";
  return <span className={`font-mono font-medium ${cls}`}>{sign}{formatted}</span>;
}

const years = ["Año 1", "Año 2", "Año 3", "Año 4", "Año 5", "Año 10", "Año 15", "Año 25"];

function THead() {
  return (
    <thead>
      <tr><Th>Medida</Th>{years.map(y => <Th key={y}>{y}</Th>)}</tr>
    </thead>
  );
}

function TBody({ data, totals }: { data: { label: string; v: number[] | null }[]; totals: number[] }) {
  return (
    <tbody>
      {data.map(r => (
        <tr key={r.label} className="hover:bg-slate-50">
          <Td>{r.label}</Td>
          {r.v ? r.v.map((val, i) => <Td key={i} align="right"><TdNum val={val} /></Td>)
            : years.map((_, i) => <Td key={i} align="right"><span className="font-mono text-slate-400">n.e.</span></Td>)}
        </tr>
      ))}
      <tr className="bg-slate-100 font-semibold">
        <Td>Total</Td>
        {totals.map((v, i) => <Td key={i} align="right"><TdNum val={v} /></Td>)}
      </tr>
    </tbody>
  );
}

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="w-full border-collapse text-xs sm:text-sm">{children}</table>
    </div>
  );
}

export function InformeFinanciero() {
  const gasto = [
    { label: "Aumento recursos FET", v: [-80000, -200000, -120000, 0, 0, 0, 0, 0] },
    { label: "Postergación deciles Gratuidad", v: [0, 0, 0, 0, 0, 0, 180044, 294494] },
    { label: "Moratoria Gratuidad nuevas IES", v: [0, 105499, 178864, 0, 0, 0, 0, 0] },
    { label: "Norma probidad Licencias Médicas", v: [14964, 44891, 44891, 44891, 44891, 44891, 44891, 44891] },
    { label: "Mayores cupos incentivo al retiro", v: [-119221, 109752, 109752, 109752, 109752, 109752, 109752, 109752] },
    { label: "Menor uso SUE empleador", v: [4076, 68314, 71284, 71284, 71284, 71284, 71284, 71284] },
    { label: "Compensación FCM", v: [-56894, -140852, -144697, -149193, -153910, -176552, -197601, -243093] },
    { label: "Restitución por anulación RCA", v: null },
    { label: "Facultad cruce de datos SII", v: null },
  ];

  const trib = [
    { label: "Reducción tasa 1ª Categoría", v: [0, -584409, -1200731, -1650712, -1801488, -2066516, -2312887, -2845363] },
    { label: "Integración sistema tributario", v: [0, -9286, -34977, -81963, -148816, -457812, -607923, -747880] },
    { label: "Crédito Tributario Empleo", v: [-668573, -1541502, -1466825, -1385820, -1298163, -884089, -522954, -13991] },
    { label: "Exención IVA viviendas", v: [-422709, -614356, 0, 0, 0, 0, 0, 0] },
    { label: "Eliminación impto. Ganancias Capital", v: [0, -17679, -18162, -18726, -19319, -22161, -24803, -30513] },
    { label: "Modificaciones en DFL2", v: [0, -18170, -18666, -19246, -19854, -22775, -25490, -31359] },
    { label: "Sanciones contrabando Tabaco", v: [17288, 34577, 51865, 69153, 86441, 103730, 103730, 103730] },
    { label: "Adelanto Herencia y Donaciones", v: [109729, 153620, -21946, -21946, -21946, -21946, 0, 0] },
    { label: "Declaración Bienes Exterior", v: [40522, 208999, 0, 0, 0, 0, 0, 0] },
    { label: "Repatriación inversión Chile", v: [4502, 23222, 0, 0, 0, 0, 0, 0] },
    { label: "Eliminación franquicia SENCE", v: [31908, 296233, 304322, 313776, 323697, 371318, 415586, 511263] },
    { label: "Impuestos Sustitutivos", v: [285154, 408124, -71519, -73116, -74828, -82616, 0, 0] },
    { label: "Patentes Acuícolas", v: [824, 1978, 1978, 1978, 1978, 1978, 1978, 1978] },
    { label: "Facilidad pago deudas TGR", v: null },
  ];

  const crecimiento = [
    { label: "Reducción tasa 1ª Categoría", v: [0, 49960, 151695, 290979, 437487, 1259877, 1720441, 2112672] },
    { label: "Integración sistema tributario", v: [0, 16686, 34289, 53406, 74534, 218235, 301077, 369718] },
    { label: "Reducción plazos de Permisos", v: [0, 147574, 298722, 455033, 620290, 1545847, 1905719, 2340191] },
    { label: "Adelantamiento de inversiones", v: [0, 204964, 155585, 105332, 53845, 0, 0, 0] },
    { label: "Crédito Tributario Empleo", v: [0, 43119, 87282, 132954, 181239, 451674, 556823, 683769] },
    { label: "Invariabilidad tributaria", v: [0, 0, 0, 157998, 296145, 763381, 1191074, 2275186] },
  ];

  return (
    <section id="financiero" className="scroll-mt-16 border-t border-slate-200 bg-white">
      <div className="section-padding py-20 lg:py-28">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Anexo
        </h2>
        <p className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          Informe Financiero
        </p>
        <p className="mb-12 max-w-3xl text-sm leading-relaxed text-slate-500">
          Cifras en millones de pesos de 2026. Valores positivos/negativos implican que el flujo
          contribuye positiva/negativamente al balance fiscal.
        </p>
        <p className="mb-8 text-xs text-slate-400">Fuente: Informe Financiero, pp. 64–67 del proyecto de ley.</p>

        <p className="text-lg font-bold text-slate-800 mb-4">1. Medidas con efecto en gasto</p>
        <Table><THead /><TBody data={gasto} totals={[-237075, -12396, 140093, 76734, 72017, 49375, 208370, 277328]} /></Table>

        <p className="text-lg font-bold text-slate-800 mt-12 mb-4">2. Medidas tributarias</p>
        <Table>
          <THead />
          <tbody>
            {trib.map(r => (
              <tr key={r.label} className="hover:bg-slate-50">
                <Td>{r.label}</Td>
                {r.v ? r.v.map((val, i) => <Td key={i} align="right"><TdNum val={val} /></Td>)
                  : years.map((_, i) => <Td key={i} align="right"><span className="font-mono text-slate-400">n.e.</span></Td>)}
              </tr>
            ))}
            <tr className="bg-slate-100 font-semibold">
              <Td>Subtotal medidas tributarias</Td>
              {[-601355, -1658648, -2474662, -2866622, -2972298, -3080890, -2972764, -3052135].map((v, i) => <Td key={i} align="right"><TdNum val={v} /></Td>)}
            </tr>
            <tr className="bg-slate-50 font-bold">
              <Td>Total GC sin crecimiento</Td>
              {[-838430, -1671044, -2334569, -2789888, -2900281, -3031515, -2764394, -2774807].map((v, i) => <Td key={i} align="right"><TdNum val={v} /></Td>)}
            </tr>
          </tbody>
        </Table>

        <p className="text-lg font-bold text-slate-800 mt-12 mb-4">3. Efecto en recaudaci&oacute;n por crecimiento</p>
        <Table><THead /><TBody data={crecimiento} totals={[0, 462302, 727573, 1195700, 1663540, 4239014, 5675134, 7781536]} /></Table>

        <p className="text-lg font-bold text-slate-800 mt-12 mb-4">4. Resumen</p>
        <Table>
          <thead>
            <tr><Th>L&iacute;nea</Th>{years.map(y => <Th key={y}>{y}</Th>)}</tr>
          </thead>
          <tbody>
            {[
              { label: "Medidas con Efecto en Gasto", v: [-237075, -12396, 140093, 76734, 72017, 49375, 208370, 277328], cls: "" },
              { label: "Medidas Tributarias", v: [-601355, -1658648, -2474662, -2866622, -2972298, -3080890, -2972764, -3052135], cls: "" },
              { label: "Total GC sin crecimiento", v: [-838430, -1671044, -2334569, -2789888, -2900281, -3031515, -2764394, -2774807], cls: "bg-slate-100 font-semibold" },
              { label: "Efecto recaudación por crecimiento", v: [0, 462302, 727573, 1195700, 1663540, 4239014, 5675134, 7781536], cls: "" },
              { label: "Total GC con crecimiento", v: [-838430, -1208742, -1606996, -1594188, -1236741, 1207499, 2910740, 5006729], cls: "bg-emerald-50 font-bold text-emerald-900" },
            ].map(r => (
              <tr key={r.label} className={`hover:bg-slate-50 ${r.cls}`}>
                <Td>{r.label}</Td>
                {r.v.map((val, i) => <Td key={i} align="right"><TdNum val={val} /></Td>)}
              </tr>
            ))}
          </tbody>
        </Table>

        <p className="mt-6 text-xs text-slate-400">
          (*) n.e. = no estimado. Cifras en millones de pesos de 2026.
        </p>
      </div>
    </section>
  );
}
