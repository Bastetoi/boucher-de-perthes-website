import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Voir docs/specs/02-contenu.md

const shows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shows' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      author: z.string().optional(),
      director: z.string().optional(),
      cast: z.array(z.string()).default([]),
      season: z.number().int(),
      cover: image().optional(),
      gallery: z.array(z.object({ file: image(), alt: z.string(), credit: z.string().optional() })).default([]),
    }),
});

const TICKET_HOST = 'https://les-boucher-de-perthes.assoconnect.com/';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    show: z.string(), // id d'un spectacle
    date: z.coerce.date(),
    venue: z.object({ name: z.string(), address: z.string().optional(), city: z.string() }),
    ticketUrl: z.string().url().startsWith(TICKET_HOST, `ticketUrl doit commencer par ${TICKET_HOST}`),
    price: z.string().optional(),
    status: z.enum(['open', 'soldout', 'cancelled']).default('open'),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      source: z.enum(['facebook', 'instagram']),
      url: z.string().url(),
      image: image().optional(),
      excerpt: z.string().optional(),
    }),
});

export const collections = { shows, events, news };
