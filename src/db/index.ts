import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });



interface BaseEntity {
  id: number;
}

interface PageCategory extends BaseEntity {
  title?: string;
  slug: string;
  order: number;
}

interface NewspaperCategory extends BaseEntity {
  title?: string;
  slug: string;
  order: number;
}

interface Newspaper extends BaseEntity {
  title: NewspaperCategory;
  date: string;
  pages?: NewsPage[];
}

interface NewsPage extends BaseEntity {
  title?: PageCategory;
  date: string;
  image: string;
  lastModified: string;
  mapData?: MapData[];
  newspapers?: Newspaper[];
}

interface MapData extends BaseEntity {
  coordinates: string;
  title?: string;
  imgUrl?: string;
}