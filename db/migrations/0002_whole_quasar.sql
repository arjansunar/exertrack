PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_exerciseCategories` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_exerciseCategories`("id", "name") SELECT "id", "name" FROM `exerciseCategories`;--> statement-breakpoint
DROP TABLE `exerciseCategories`;--> statement-breakpoint
ALTER TABLE `__new_exerciseCategories` RENAME TO `exerciseCategories`;--> statement-breakpoint
PRAGMA foreign_keys=ON;