import Image from "next/image";

type EvidenceLevel = "solid" | "mixed" | "limited";

const evidenceConfig: Record<EvidenceLevel, { label: string; color: string }> = {
  solid: { label: "Evidencia s\u00f3lida", color: "bg-emerald-100 text-emerald-800" },
  mixed: { label: "Evidencia mixta", color: "bg-amber-100 text-amber-800" },
  limited: { label: "Evidencia limitada", color: "bg-red-100 text-red-800" },
};

type MeasureCardProps = {
  number: string;
  title: string;
  whatItDoes: string;
  governmentClaim?: string;
  risks?: string;
  law?: string;
  articles?: string;
  type?: "tax" | "permit" | "spending" | "recovery";
  chartSrc?: string;
  chartAlt?: string;
  evidence?: EvidenceLevel;
  evidenceNote?: string;
};

const typeStyles = {
  tax: { border: "border-l-amber-500", badge: "bg-amber-50 text-amber-800" },
  permit: { border: "border-l-blue-600", badge: "bg-blue-50 text-blue-800" },
  spending: { border: "border-l-red-600", badge: "bg-red-50 text-red-800" },
  recovery: { border: "border-l-green-600", badge: "bg-green-50 text-green-800" },
};

export function MeasureCard({
  number,
  title,
  whatItDoes,
  governmentClaim,
  risks,
  law,
  articles,
  type = "tax",
  chartSrc,
  chartAlt,
  evidence,
  evidenceNote,
}: MeasureCardProps) {
  const style = typeStyles[type];
  return (
    <article
      className={`rounded-xl border border-slate-200 bg-white border-l-4 ${style.border} shadow-sm no-break overflow-hidden`}
    >
      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className={`mb-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${style.badge}`}>
              Medida {number}
            </span>
            <h3 className="mt-1 text-xl font-bold leading-snug text-slate-900">
              {title}
            </h3>
          </div>
        </div>

        {chartSrc && (
          <div className="mb-5 -mx-6 sm:-mx-8 overflow-hidden rounded-t-lg border-b border-slate-200">
            <Image
              src={chartSrc}
              alt={chartAlt ?? ""}
              width={1440}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="rounded-lg bg-slate-50 border border-slate-200 p-5">
          <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
            <span className="text-base" aria-hidden="true">&#9881;</span>
            Qu&eacute; hace la medida
          </h4>
          <p className="text-sm leading-relaxed text-slate-700">
            {whatItDoes}
          </p>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {governmentClaim && (
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-5">
              <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
                <span className="text-base" aria-hidden="true">&#9654;</span>
                Lo que afirma el gobierno
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">
                {governmentClaim}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-blue-200 pt-2">
                <span className="inline-block rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                  Proyecto de Ley
                </span>
                <span className="inline-block rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                  Informe Financiero
                </span>
              </div>
            </div>
          )}
          {risks ? (
            <div className="rounded-lg bg-orange-50 border border-orange-200 p-5">
              <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-800">
                <span className="text-base" aria-hidden="true">&#9888;</span>
                Riesgos y objeciones
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">
                {risks}
              </p>
              <p className="mt-3 text-xs text-slate-400 border-t border-orange-200 pt-2">
                An&aacute;lisis editorial &middot; No forma parte del texto del proyecto de ley.
              </p>
            </div>
          ) : (
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-5">
              <h4 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span className="text-base" aria-hidden="true">&mdash;</span>
                Sin objeciones identificadas
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                No se identificaron riesgos significativos en el an&aacute;lisis
                editorial de esta medida.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-slate-500">
          {law && (
            <span>
              <span className="font-semibold text-slate-700">Ley:</span> {law}
            </span>
          )}
          {articles && (
            <span>
              <span className="font-semibold text-slate-700">Art&iacute;culos:</span> {articles}
            </span>
          )}
        </div>

        {evidence && (
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-3">
            <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${evidenceConfig[evidence].color}`}>
              {evidenceConfig[evidence].label}
            </span>
            {evidenceNote && (
              <span className="text-xs text-slate-400">{evidenceNote}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
