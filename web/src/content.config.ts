import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { existsSync, readdirSync } from 'node:fs';

// Évite l'avertissement du loader glob tant qu'aucune actualité n'existe.
const hasMarkdown = (dir: string) => existsSync(dir) && readdirSync(dir).some((f) => f.endsWith('.md'));

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
    show: reference('shows'),
    date: z.coerce.date(), // jour de la représentation (YAML : 2026-05-26)
    time: z.string().regex(/^\d{2}:\d{2}$/, 'format HH:MM').optional(),
    venue: z.object({ name: z.string(), address: z.string().optional(), city: z.string().optional() }).optional(),
    ticketUrl: z.url().refine((u) => u.startsWith(TICKET_HOST), `ticketUrl doit commencer par ${TICKET_HOST}`),
    price: z.string().optional(),
    status: z.enum(['open', 'soldout', 'cancelled']).default('open'),
  }),
});

const news = defineCollection({
  loader: hasMarkdown('./src/content/news')
    ? glob({ pattern: '**/*.md', base: './src/content/news' })
    : { name: 'news-empty', load: async () => {} },
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      source: z.enum(['facebook', 'instagram']),
      url: z.url(),
      image: image().optional(),
      excerpt: z.string().optional(),
    }),
});

export const collections = { shows, events, news };
