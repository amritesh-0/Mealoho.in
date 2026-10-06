import { Link } from 'react-router-dom'
import { Clock, ArrowDown } from 'lucide-react'

function Thali() {
  const bowls = [
    { cx: 118, cy: 118, label: 'Breakfast', fill: '#F2B01E' },
    { cx: 242, cy: 118, label: 'Lunch', fill: '#1F7A4D' },
    { cx: 118, cy: 242, label: 'Snacks', fill: '#D7263D' },
    { cx: 242, cy: 242, label: 'Dinner', fill: '#0E1B2C' },
  ]
  return (
    <svg viewBox="0 0 360 360" role="img" aria-label="Illustration of a steel thali with four bowls: breakfast, lunch, snacks and dinner" className="plate-in h-auto w-full max-w-md">
      <circle cx="180" cy="186" r="170" fill="#0E1B2C" opacity=".08" />
      <circle cx="180" cy="180" r="170" fill="#E6ECF2" stroke="#C5D0DB" strokeWidth="4" />
      <circle cx="180" cy="180" r="148" fill="none" stroke="#C5D0DB" strokeWidth="2" />
      {bowls.map((b) => (
        <g key={b.label}>
          <circle cx={b.cx} cy={b.cy} r="58" fill="#fff" stroke="#C5D0DB" strokeWidth="3" />
          <circle cx={b.cx} cy={b.cy} r="44" fill={b.fill} />
          <text x={b.cx} y={b.cy + 5} textAnchor="middle" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="14" fill={b.fill === '#F2B01E' ? '#0E1B2C' : '#fff'}>{b.label}</text>
        </g>
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-12 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-turmeric px-5 py-2 text-base font-bold text-ink sm:text-lg"><Clock size={18} aria-hidden /> COMING SOON</span>
          <h1 className="mt-6 text-6xl font-extrabold sm:text-7xl lg:text-8xl">MEALOHO</h1>
          <p className="mt-3 font-display text-2xl font-bold text-leaf sm:text-3xl">Your Mess, Simplified.</p>
          <p className="mt-5 max-w-lg text-lg text-muted">One simple platform to manage your mess, check daily meals, share feedback, rate food and stay connected with your mess community.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" disabled className="cursor-not-allowed rounded-full bg-ink px-7 py-3.5 font-bold text-white opacity-90">Coming Soon</button>
            <Link to="/#features" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3 font-bold transition-colors hover:bg-ink hover:text-white">Explore Features <ArrowDown size={18} aria-hidden /></Link>
          </div>
        </div>
        <div className="grid place-items-center"><Thali /></div>
      </div>
    </section>
  )
}
