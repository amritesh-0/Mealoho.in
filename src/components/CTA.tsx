import { Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function CTA() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <svg className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 text-white/5" viewBox="0 0 100 100" aria-hidden><circle cx="50" cy="50" r="48" fill="currentColor" /></svg>
        <div className="relative">
          <Rocket className="mx-auto text-turmeric" size={40} aria-hidden />
          <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">Mealoho is Coming Soon</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">We're building a smarter and simpler way to manage your everyday mess experience.</p>
          <button type="button" disabled className="mt-8 cursor-not-allowed rounded-full bg-turmeric px-8 py-3.5 font-bold text-ink">Coming Soon</button>
          <p className="mt-6 text-sm text-white/60">Questions? See our <Link to="/privacy" className="underline hover:text-white">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-white">Terms</Link>.</p>
        </div>
      </div>
    </section>
  )
}
