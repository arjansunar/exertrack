import journal from "./meta/_journal.json";
import m0000 from "./0000_curly_freak.sql";
import m0001 from "./0001_seed-exercise-categories.sql";

export default {
  journal,
  migrations: {
    m0000,
    m0001,
  },
};

