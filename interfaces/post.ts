import { Asset } from "contentful";

export interface IAlgorithmPostFields {
  readonly title: string;
  readonly slug: string;
  readonly body: MarkdownString;
  readonly image: Asset;
  readonly tags: string;
  readonly createdAt: Date;
  readonly lastModifiedAt: Date;
}

export type MarkdownString = string;