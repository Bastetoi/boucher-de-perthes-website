import { getCollection, type CollectionEntry } from 'astro:content';

export const SITE = {
  name: 'Les Boucher de Perthes',
  tagline: 'Troupe de théâtre',
  email: 'lesboucherdeperthes@gmail.com',
  instagram: 'https://www.instagram.com/lesboucherdeperthes/',
  facebook: 'https://www.facebook.com/share/19eVfzg3bK/',
  ticketing: 'https://les-boucher-de-perthes.assoconnect.com/',
} as const;

export type EventEntry = CollectionEntry<'events'>;

/** Jour calendaire (YYYY-MM-DD) d'une date YAML, indépendant du fuseau. */
export const isoDay = (d: Date) => d.toISOString().slice(0, 10);

const todayParis = () => new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Paris' }).format(new Date());

export const formatDay = (d: Date) =>
  new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);

export async function getEvents() {
  const today = todayParis();
  const all = (await getCollection('events')).sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
  const upcoming = all.filter((e) => isoDay(e.data.date) >= today && e.data.status !== 'cancelled');
  const past = all.filter((e) => isoDay(e.data.date) < today).reverse();
  return { upcoming, past };
}

export async function getNews() {
  return (await getCollection('news')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
