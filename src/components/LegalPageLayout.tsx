import type { ReactNode } from 'react'
import { TriangleAlert } from 'lucide-react'

export interface LegalSection { id: string; title: string; paras?: string[]; items?: string[]; after?: string[] }
interface Props { title: string; intro: string; notice?: string; sections: LegalSection[]; children?: ReactNode }

export default function LegalPageLayout({ title, intro, notice, sections, children }: Props) {
  return (
    <div className="px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-muted">Effective date: [Effective Date] · Last updated: [Last Updated Date]</p>
        <p className="mt-5 max-w-3xl text-lg">{intro}</p>
        {notice && (
          <div role="note" className="mt-6 flex max-w-3xl gap-3 rounded-2xl border border-turmeric bg-turmeric/15 p-4 text-sm">
            <TriangleAlert className="mt-0.5 shrink-0 text-turmeric-deep" size={20} aria-hidden /><p>{notice}</p>
          </div>
        )}
        {children}
        <div className="mt-12 grid gap-10 lg:grid-cols-[250px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1 text-sm">
              {sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`} className="block rounded-lg px-3 py-1.5 text-muted hover:bg-steel hover:text-ink">{i + 1}. {s.title}</a></li>)}
            </ul>
          </nav>
          <div className="max-w-3xl space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id}>
                <h2 className="text-2xl font-bold">{i + 1}. {s.title}</h2>
                {s.paras?.map((p) => <p key={p} className="mt-3 leading-relaxed text-ink/85">{p}</p>)}
                {s.items && <ul className="mt-3 list-disc space-y-1.5 pl-6 text-ink/85 marker:text-leaf">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>}
                {s.after?.map((p) => <p key={p} className="mt-3 leading-relaxed text-ink/85">{p}</p>)}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
