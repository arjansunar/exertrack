import { relations } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Define tables

export const exerciseCategories = sqliteTable("exerciseCategories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const exercises = sqliteTable("exercises", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  categoryId: integer("category_id"),
  description: text("description"),
});

export const exerciseRelations = relations(exercises, ({ one }) => ({
  category: one(exerciseCategories, {
    fields: [exercises.categoryId],
    references: [exerciseCategories.id],
  }),
}));
