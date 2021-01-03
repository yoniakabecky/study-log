import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : client;

export const getAlgorithmsPost = async (preview: boolean, slug: string) => {
  const entries = await getClient(preview).getEntries<any>({
    content_type: "algorithms",
    include: 1,
    "fields.slug": slug,
  });

  const extractEntry = entries?.items;

  return {
    title: extractEntry[0].fields.title,
    slug: extractEntry[0].fields.slug,
    body: extractEntry[0].fields.contentMd,
    image: extractEntry[0].fields.code,
    tags: extractEntry[0].fields.tags,
    createdAt: extractEntry[0].sys.createdAt,
    lastModifiedAt: extractEntry[0].sys.updatedAt,
  };
};
