/**
 * Simple comparison table. Renders a real <table> from md upwards and
 * stacked cards on small screens, so nothing scrolls sideways at 360px.
 */
export function ComparisonTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  /** Header labels for the compared options (not including the row label column). */
  columns: string[];
  rows: { label: string; cells: string[] }[];
}) {
  return (
    <div>
      <div className="hidden overflow-hidden rounded-xl border border-line bg-surface md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-line bg-surface-2">
              <th scope="col" className="eyebrow w-1/5 px-6 py-4 font-normal">
                <span className="sr-only">Aspect</span>
              </th>
              {columns.map((c) => (
                <th key={c} scope="col" className="px-6 py-4 font-semibold text-ink">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.label} className="align-top">
                <th scope="row" className="px-6 py-5 font-semibold text-ink">
                  {row.label}
                </th>
                {row.cells.map((cell, i) => (
                  <td key={columns[i]} className="px-6 py-5 text-ink-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {rows.map((row) => (
          <div key={row.label} className="rounded-xl border border-line bg-surface p-5">
            <h3 className="text-lg">{row.label}</h3>
            <dl className="mt-3 space-y-3">
              {row.cells.map((cell, i) => (
                <div key={columns[i]}>
                  <dt className="eyebrow">{columns[i]}</dt>
                  <dd className="mt-1 text-ink-2">{cell}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
