import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  name: string;
  src: string;
};

export function ProfilePic({ name, src }: Props) {
  return (
    <Avatar className="size-14 shrink-0">
      <AvatarImage src={src} alt={name} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
