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

  const { fields, sys } = entries?.items[0];

  return {
    title: fields.title,
    slug: fields.slug,
    body: fields.contentMd,
    image: fields.code,
    tags: fields.tags,
    createdAt: sys.createdAt,
    lastModifiedAt: sys.updatedAt,
  };
};
