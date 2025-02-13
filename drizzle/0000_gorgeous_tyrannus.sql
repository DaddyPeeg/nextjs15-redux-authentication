CREATE TABLE `cfc_g12_auth_account` (
	`id` varchar(36) NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` timestamp,
	`refresh_token_expires_at` timestamp,
	`scope` text,
	`password` text,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `cfc_g12_auth_account_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `parent_index` ON `cfc_g12_auth_account` (`user_id`);--> statement-breakpoint
CREATE TABLE `cfc_g12_auth_session` (
	`id` varchar(36) NOT NULL,
	`expires_at` timestamp NOT NULL,
	`token` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` varchar(36) NOT NULL,
	CONSTRAINT `cfc_g12_auth_session_id` PRIMARY KEY(`id`),
	CONSTRAINT `cfc_g12_auth_session_token_unique` UNIQUE(`token`)
);
--> statement-breakpoint
CREATE INDEX `parent_index` ON `cfc_g12_auth_session` (`user_id`);--> statement-breakpoint
CREATE INDEX `token_unique` ON `cfc_g12_auth_session` (`id`,`token`);--> statement-breakpoint
CREATE TABLE `cfc_g12_auth_user` (
	`id` varchar(36) NOT NULL,
	`name` text NOT NULL,
	`email` varchar(255) NOT NULL,
	`email_verified` boolean NOT NULL,
	`image` text,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `cfc_g12_auth_user_id` PRIMARY KEY(`id`),
	CONSTRAINT `cfc_g12_auth_user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `cfc_g12_auth_verification` (
	`id` varchar(36) NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` timestamp NOT NULL,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `cfc_g12_auth_verification_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `cfc_g12_file_files_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`owner_id` text NOT NULL,
	`name` text NOT NULL,
	`size` int NOT NULL,
	`url` text NOT NULL,
	`parent` bigint unsigned NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `cfc_g12_file_files_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `parent_index` ON `cfc_g12_file_files_table` (`parent`);--> statement-breakpoint
CREATE INDEX `owner_id_index` ON `cfc_g12_file_files_table` (`owner_id`);--> statement-breakpoint
CREATE TABLE `cfc_g12_file_folders_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`owner_id` text NOT NULL,
	`name` text NOT NULL,
	`parent` bigint unsigned,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `cfc_g12_file_folders_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `parent_index` ON `cfc_g12_file_folders_table` (`parent`);--> statement-breakpoint
CREATE INDEX `owner_id_index` ON `cfc_g12_file_folders_table` (`owner_id`);--> statement-breakpoint
CREATE TABLE `cfc_g12_file_slider_table` (
	`id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`owner_id` text NOT NULL,
	`name` text NOT NULL,
	`imageUrl` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `cfc_g12_file_slider_table_id` PRIMARY KEY(`id`)
);
