interface chaptersList {
  id: number;
  name: string;
  name_transliterated: string;
  name_meaning: string;
  chapter_number: number;
}

export type { chaptersList };

interface chapter {
  id: number;
  name: string;
  name_transliterated: string;
  name_meaning: string;
  chapter_number: number;
  name_translated: string;
  chapter_summary: string;
  chapter_summary_hindi: string;
  slug: string;
}

export type { chapter };

interface SlokasList {
  id: number;
  text: string;
  slug: string;
  verse_number: number;
  chapter_number: number;
}

export type { SlokasList };

export interface translations {
  id: number;
  description: string;
  author_name: string;
}

export interface commentries {
  id: number;
  description: string;
  author_name: string;
}

interface SlokaDetailsType {
  id: number;
  verse_number: number;
  chapter_number: number;
  text: string;
  slug: string;
  transliteration: string;
  word_meanings: string;
  translations: translations[];
  commentaries: commentries[];
}

export type { SlokaDetailsType };
