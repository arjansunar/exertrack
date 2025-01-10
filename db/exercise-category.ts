import { eq } from "drizzle-orm";
import { db } from ".";
import { exerciseCategories } from "./schema";

export async function create(category: typeof exerciseCategories.$inferInsert) {
  return db.insert(exerciseCategories).values(category);
}

export async function update(id: number, name: string) {
  return db
    .update(exerciseCategories)
    .set({
      name,
    })
    .where(eq(exerciseCategories.id, id));
}

export async function remove(id: number) {
  return db.delete(exerciseCategories).where(eq(exerciseCategories.id, id));
}

export async function all() {
  return db.select().from(exerciseCategories);
}
