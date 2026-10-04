import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/site'

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="MELOHO home">
      <svg width="32" height="32" viewBox="0 0 64 64" aria-hidden><rect width="64" height="64" rx="16" fill={light ? '#fff' : '#0E1B2C'} /><circle cx="32" cy="32" r="18" fill="#E6ECF2" /><circle cx="32" cy="32" r="11" fill="#F2B01E" /></svg>
      <span className={`font-display text-xl font-extrabold tracking-wide ${light ? 'text-white' : 'text-ink'}`}>MELOHO</span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useEffect(() => setOpen(false), [pathname, hash])
  const cls = (active: boolean) => `rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? 'bg-ink text-white' : 'text-ink hover:bg-steel'}`
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-full border border-steel bg-white/90 px-4 py-2.5 backdrop-blur sm:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map((l) => l.to.includes('#')
              ? <Link key={l.label} to={l.to} className={cls(pathname === '/' && hash === '#features')}>{l.label}</Link>
              : <NavLink key={l.label} to={l.to} end className={({ isActive }) => cls(isActive && !(l.to === '/' && hash === '#features'))}>{l.label}</NavLink>)}
          </nav>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full hover:bg-steel lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" className="mt-3 flex flex-col gap-1 border-t border-steel pt-3 lg:hidden" aria-label="Mobile">
            {NAV_LINKS.map((l) => <Link key={l.label} to={l.to} className="rounded-2xl px-4 py-3 font-medium hover:bg-steel">{l.label}</Link>)}
          </nav>
        )}
      </div>
    </header>
  )
}
