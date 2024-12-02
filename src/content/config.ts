import { z, defineCollection, reference } from "astro:content";

const linksSchema = z
  .object({
    downloadLink: z.string().optional(),
    spotify: z.string().optional(),
    appleMusic: z.string().optional(),
    soundcloud: z.string().optional(),
    youtube: z.string().optional(),
    youtubeMusic: z.string().optional(),
    bandcamp: z.string().optional(),
    deezer: z.string().optional(),
    tidal: z.string().optional(),
    amazonMusic: z.string().optional(),
    newgrounds: z.string().optional(),
  })
  .strict();

const tracksCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        artists: z.array(z.string()).min(1, "At least one author is required"),
        releaseDate: z.date(),
        license: z.enum(["Silyn Public License", "All Rights Reserved"]),
        coverImage: image(),
        duration: z.number().positive("Negative duration huh? Nice try."),
        links: linksSchema,
        release: reference("releases").optional(),
      })
      .strict(),
});

const releasesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        artists: z.array(z.string()),
        releaseDate: z.date(),
        coverImage: image(),
        tracks: z.array(reference("tracks")),
        links: linksSchema,
      })
      .strict(),
});

const curatedCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        artist: z.string(),
        profilePicture: image(),
        links: z
          .object({
            website: z.string().optional(),
            twitter: z.string().optional(),
            bluesky: z.string().optional(),
            bandcamp: z.string().optional(),
            spotify: z.string().optional(),
            youtube: z.string().optional(),
            patreon: z.string().optional(),
            soundcloud: z.string().optional(),
            instagram: z.string().optional(),
          })
          .strict(),
      })
      .strict(),
});

export const collections = {
  tracks: tracksCollection,
  releases: releasesCollection,
  curated: curatedCollection,
};
