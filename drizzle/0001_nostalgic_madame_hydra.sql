DROP INDEX `token_unique` ON `cfc_g12_auth_session`;--> statement-breakpoint
CREATE INDEX `token_index` ON `cfc_g12_auth_session` (`id`,`token`);