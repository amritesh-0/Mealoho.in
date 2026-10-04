interface Props { title: string; subtitle?: string; align?: 'left' | 'center'; light?: boolean }
export default function SectionHeading({ title, subtitle, align = 'center', light }: Props) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl`}>
      <h2 className={`text-3xl font-extrabold sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-lg ${light ? 'text-white/75' : 'text-muted'}`}>{subtitle}</p>}
    </div>
  )
}
