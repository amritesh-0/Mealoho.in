import { CircleHelp, CircleCheck } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'
import { FEATURES } from '../data/features'

const PROBLEMS = [
  { q: "What's today's menu?", a: "See breakfast, lunch, snacks and dinner in one place." },
  { q: 'Has the menu changed?', a: 'Get notified when the menu is updated.' },
  { q: 'Where can I give feedback?', a: 'Rate meals and send feedback straight to your mess.' },
  { q: 'How is the mess performing?', a: 'Admins see ratings and feedback in one dashboard.' },
  { q: 'When are important announcements?', a: 'Announcements reach students as soon as they are published.' },
]
const STEPS = [
  { n: '01', t: 'Join Your Mess', d: 'Connect with your college or hostel mess.' },
  { n: '02', t: 'Stay Updated', d: 'Check menus, announcements and notifications.' },
  { n: '03', t: 'Share Feedback', d: 'Rate meals and help improve your mess experience.' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Why Meloho?" subtitle="Most students and mess teams still depend on notice boards and group chats. Meloho brings it all together." />
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <li key={p.q} className="rounded-3xl border border-steel bg-paper p-6">
                <p className="flex items-start gap-2 font-display text-lg font-bold"><CircleHelp className="mt-1 shrink-0 text-turmeric-deep" size={20} aria-hidden />{p.q}</p>
                <p className="mt-3 flex items-start gap-2 text-muted"><CircleCheck className="mt-0.5 shrink-0 text-leaf" size={20} aria-hidden />{p.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Everything your mess needs" subtitle="Menu, ratings, feedback, announcements, notifications and mess management in one platform." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>
      <section className="bg-leaf px-6 py-20 text-white" aria-labelledby="how">
        <div className="mx-auto max-w-6xl">
          <div id="how"><SectionHeading title="How Meloho works" light subtitle="Three simple steps." /></div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-3xl bg-white/10 p-7">
                <span className="font-display text-5xl font-extrabold text-turmeric">{s.n}</span>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-white/80">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="pt-20"><CTA /></div>
    </>
  )
}
