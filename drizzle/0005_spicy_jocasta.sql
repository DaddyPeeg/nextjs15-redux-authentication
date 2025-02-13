ALTER TABLE `cfc_g12_auth_session` ADD CONSTRAINT `cfc_g12_auth_session_token_unique` UNIQUE(`token`);--> statement-breakpoint
ALTER TABLE `cfc_g12_auth_session` ADD `token` varchar(255) NOT NULL;