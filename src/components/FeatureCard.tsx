import type { Feature } from '../data/features'
export default function FeatureCard({ icon: Icon, title, text, audience }: Feature) {
  return (
    <article className="group flex flex-col rounded-3xl border border-steel bg-white p-6 transition-colors hover:border-leaf">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-soft text-leaf transition-colors group-hover:bg-leaf group-hover:text-white"><Icon size={24} aria-hidden /></span>
        <span className="rounded-full bg-steel px-3 py-1 text-xs font-medium text-muted">{audience}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted">{text}</p>
    </article>
  )
}
