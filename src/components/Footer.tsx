import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Logo } from './Navbar'
import { NAV_LINKS, SITE } from '../data/site'
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <Logo light />
          <p className="mt-4 font-display text-2xl font-bold">{SITE.tagline}</p>
          <p className="mt-2 max-w-sm text-white/60">College & hostel mess management platform.</p>
          <p className="mt-5 flex items-center gap-2 text-white/80"><Mail size={16} aria-hidden /> {SITE.email}</p>
        </div>
        <nav aria-label="Footer" className="md:justify-self-end">
          <ul className="grid gap-3">
            {NAV_LINKS.map((l) => <li key={l.label}><Link to={l.to} className="text-white/80 hover:text-turmeric">{l.label}</Link></li>)}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/60">© {SITE.year} Mealoho. All rights reserved.</div>
    </footer>
  )
}
