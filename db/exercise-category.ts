import { eq } from "drizzle-orm";
import { db } from ".";
import { exerciseCategories } from "./schema";

export async function create(category: typeof exerciseCategories.$inferInsert) {
  return await db.insert(exerciseCategories).values(category);
}

export async function update(id: number, name: string) {
  return await db
    .update(exerciseCategories)
    .set({
      name,
    })
    .where(eq(exerciseCategories.id, id));
}

export async function remove(id: number) {
  return await db
    .delete(exerciseCategories)
    .where(eq(exerciseCategories.id, id));
}

export async function all() {
  return await db.select().from(exerciseCategories);
}
