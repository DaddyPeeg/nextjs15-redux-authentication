ALTER TABLE `cfc_g12_auth_session` DROP INDEX `cfc_g12_auth_session_token_unique`;--> statement-breakpoint
DROP INDEX `token_index` ON `cfc_g12_auth_session`;--> statement-breakpoint
ALTER TABLE `cfc_g12_auth_session` DROP COLUMN `token`;