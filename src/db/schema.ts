// db/schema.ts
import { pgTable, serial, text, timestamp, jsonb, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const pageCategories = pgTable('page_categories', {
  id: serial('id').primaryKey(),
  title: text('title'),
  slug: text('slug').notNull().unique(),
  order: integer('order').notNull().default(0), // Add order column
});

export const newspaperCategories = pgTable('newspaper_categories', {
  id: serial('id').primaryKey(),
  title: text('title'),
  slug: text('slug').notNull().unique(),
  order: integer('order').notNull().default(0), // Add order column
});

export const newspapers = pgTable('newspapers', {
  id: serial('id').primaryKey(),
  titleId: serial('title_id').references(() => newspaperCategories.id).notNull(),
  date: text('date').notNull(),
});

export const newsPages = pgTable('news_pages', {
  id: serial('id').primaryKey(),
  titleId: serial('title_id').references(() => pageCategories.id),
  date: text('date').notNull(),
  image: text('image').notNull(),
  lastModified: timestamp('last_modified').notNull().defaultNow(),
});

export const mapData = pgTable('map_data', {
  id: serial('id').primaryKey(),
  newsPageId: serial('news_page_id').references(() => newsPages.id).notNull(),
  coordinates: text('coordinates').notNull(),
  title: text('title'),
  link: text('link'),
});

// Relations
export const pageCategoriesRelations = relations(pageCategories, ({ many }) => ({
  newsPages: many(newsPages),
}));

export const newspaperCategoriesRelations = relations(newspaperCategories, ({ many }) => ({
  newspapers: many(newspapers),
}));

export const newspapersRelations = relations(newspapers, ({ one, many }) => ({
  title: one(newspaperCategories, {
    fields: [newspapers.titleId],
    references: [newspaperCategories.id],
  }),
  pages: many(newsPagesToNewspapers),
}));

export const newsPagesRelations = relations(newsPages, ({ one, many }) => ({
  title: one(pageCategories, {
    fields: [newsPages.titleId],
    references: [pageCategories.id],
  }),
  mapData: many(mapData),
  newspapers: many(newsPagesToNewspapers),
}));

export const mapDataRelations = relations(mapData, ({ one }) => ({
  newsPage: one(newsPages, {
    fields: [mapData.newsPageId],
    references: [newsPages.id],
  }),
}));

// Junction table for many-to-many relationship between NewsPage and Newspaper
export const newsPagesToNewspapers = pgTable('news_pages_to_newspapers', {
  newsPageId: serial('news_page_id').references(() => newsPages.id).notNull(),
  newspaperId: serial('newspaper_id').references(() => newspapers.id).notNull(),
});

export const newsPagesToNewspapersRelations = relations(newsPagesToNewspapers, ({ one }) => ({
  newsPage: one(newsPages, {
    fields: [newsPagesToNewspapers.newsPageId],
    references: [newsPages.id],
  }),
  newspaper: one(newspapers, {
    fields: [newsPagesToNewspapers.newspaperId],
    references: [newspapers.id],
  }),
}));
