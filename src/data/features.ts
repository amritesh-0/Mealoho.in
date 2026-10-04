import { UtensilsCrossed, CalendarDays, Star, MessageSquareText, Megaphone, Bell, Wallet, ChartColumn, ChefHat, Soup } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Feature { icon: LucideIcon; title: string; text: string; audience: 'Students' | 'Admins' | 'Everyone' }
export const FEATURES: Feature[] = [
  { icon: UtensilsCrossed, title: 'Daily Mess Menu', text: 'Students can quickly see breakfast, lunch, snacks and dinner.', audience: 'Students' },
  { icon: CalendarDays, title: 'Weekly Menu', text: 'View the complete weekly mess schedule.', audience: 'Students' },
  { icon: Star, title: 'Meal Ratings', text: 'Students can rate meals and share their experience.', audience: 'Students' },
  { icon: MessageSquareText, title: 'Feedback & Complaints', text: 'Submit food-quality complaints, suggestions and feedback.', audience: 'Students' },
  { icon: Megaphone, title: 'Mess Announcements', text: 'Mess administrators can publish important announcements.', audience: 'Everyone' },
  { icon: Bell, title: 'Notifications', text: 'Receive important menu changes, announcements and mess updates.', audience: 'Students' },
  { icon: Wallet, title: 'Mess Fee Tracking', text: 'Students can view their mess fee and payment status.', audience: 'Students' },
  { icon: ChartColumn, title: 'Mess Analytics', text: 'Mess administrators can view ratings, feedback and useful statistics.', audience: 'Admins' },
  { icon: ChefHat, title: 'Admin Dashboard', text: 'Mess managers can manage menus, announcements, feedback and other mess information.', audience: 'Admins' },
  { icon: Soup, title: "Today's Meals", text: "A simple dashboard showing today's breakfast, lunch, snacks and dinner.", audience: 'Students' },
]
