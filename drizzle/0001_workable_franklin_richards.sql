CREATE TABLE `cfc_g12_cms_files_folder_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`parent_id` bigint unsigned,
	`url` text,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `cfc_g12_cms_files_folder_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `parent_id_index` ON `cfc_g12_cms_files_folder_table` (`parent_id`);--> statement-breakpoint
CREATE INDEX `type_index` ON `cfc_g12_cms_files_folder_table` (`type`);--> statement-breakpoint
CREATE TABLE `cfc_g12_cms_slider_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`owner_id` text NOT NULL,
	`name` text NOT NULL,
	`imageUrl` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `cfc_g12_cms_slider_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `cfc_g12_file_files_table`;--> statement-breakpoint
DROP TABLE `cfc_g12_file_folders_table`;--> statement-breakpoint
DROP TABLE `cfc_g12_file_slider_table`;