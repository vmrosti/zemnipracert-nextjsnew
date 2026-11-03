import { Plus } from 'lucide-react';

/** Akordeon bez JavaScriptu (details/summary) – funguje všude a vyhledávače vidí celý text. */
export default function Faq({ items, title = 'Časté dotazy' }: { items: readonly { q: string; a: string }[]; title?: string }) {
  return (
    <div className="faq">
      <h2 className="h2">{title}</h2>
      <div className="faq__list">
        {items.map((item) => (
          <details key={item.q} name="faq">
            <summary>
              <span>{item.q}</span>
              <Plus size={20} aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
