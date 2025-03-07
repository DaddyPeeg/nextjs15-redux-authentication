"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  src: string;
  closeNavOnSelect?: () => void;
};

export function ProfilePic({ name, src, closeNavOnSelect }: Props) {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="shrink-0">
          <AvatarImage src={src} alt={name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/account-settings"} prefetch>
          <DropdownMenuItem onClick={closeNavOnSelect}>
            Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={handleLogout}
          className="bg-destructive text-destructive-foreground hover:bg-destructive/60"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
