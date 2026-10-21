import { getEntry } from 'astro:content';
import { SITE, isoDay, type EventEntry } from './site';

/** Données structurées schema.org/TheaterEvent (affichage dans Google Événements). */
export async function theaterEventLd(events: EventEntry[]) {
  return Promise.all(
    events.map(async (e) => {
      const show = await getEntry(e.data.show);
      const day = isoDay(e.data.date);
      return {
        '@context': 'https://schema.org',
        '@type': 'TheaterEvent',
        name: show.data.title,
        description: show.data.summary,
        startDate: e.data.time ? `${day}T${e.data.time}` : day,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        ...(e.data.venue && {
          location: { '@type': 'Place', name: e.data.venue.name, address: [e.data.venue.address, e.data.venue.city].filter(Boolean).join(', ') || e.data.venue.name },
        }),
        organizer: { '@type': 'PerformingGroup', name: SITE.name },
        offers: { '@type': 'Offer', url: e.data.ticketUrl, availability: e.data.status === 'soldout' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' },
      };
    }),
  );
}
