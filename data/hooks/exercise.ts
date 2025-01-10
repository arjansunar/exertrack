import * as exerciseDao from "@/db/exercise";
import { useQuery } from "@tanstack/react-query";

export function useExercises() {
  return useQuery({
    queryKey: ["all-exercise"],
    queryFn: exerciseDao.all,
  });
}
