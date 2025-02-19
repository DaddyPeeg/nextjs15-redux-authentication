import { CurrentAuthUserState, Roles } from "@/types";

type Permission = (typeof ROLES)[Roles][number];

const ROLES = {
  admin: ["view:cms", "view:lessons"],
  member: ["view:lessons"],
  visitor: [],
} as const;

export function hasPermission(
  user: CurrentAuthUserState,
  permission: Permission
) {
  if (!user) return false;
  const role = user.role;
  return (ROLES[role] as readonly Permission[]).includes(permission);
}

// USAGE:
// const user: User = { id: "1", roles: ["user"] }

// Can create a comment
// hasPermission(user, "create:comments")

// Can view all comments
// hasPermission(user, "view:comments")
