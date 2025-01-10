import { eq } from "drizzle-orm";
import { db } from ".";
import { exercises } from "./schema";

export async function create(category: typeof exercises.$inferInsert) {
  return await db.insert(exercises).values(category);
}

export async function update(id: number, name: string) {
  return await db
    .update(exercises)
    .set({
      name,
    })
    .where(eq(exercises.id, id));
}

export async function remove(id: number) {
  return await db.delete(exercises).where(eq(exercises.id, id));
}

export async function all() {
  return await db.select().from(exercises);
}
