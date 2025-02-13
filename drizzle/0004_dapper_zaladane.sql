DROP INDEX `parent_index` ON `cfc_g12_auth_account`;--> statement-breakpoint
CREATE INDEX `user_id_index` ON `cfc_g12_auth_account` (`user_id`);--> statement-breakpoint
DROP INDEX `parent_index` ON `cfc_g12_auth_session`;--> statement-breakpoint
CREATE INDEX `user_id_index` ON `cfc_g12_auth_session` (`user_id`);