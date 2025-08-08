import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  src?: string; // e.g. "/profile.jpg" placed in public folder or an external URL
  name: string; // used for accessible alt + fallback initials
  className?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const ProfilePhoto = ({ src, name, className }: ProfilePhotoProps) => {
  return (
    <div
      className={cn(
        "inline-flex rounded-full p-[3px] bg-gradient-to-tr from-primary to-[hsl(var(--primary-glow)_/_0.6)]",
        className
      )}
      aria-label={`Profile photo frame for ${name}`}
    >
      <div className="rounded-full border border-border bg-background/60 backdrop-blur-xl shadow-sm">
        <Avatar className="h-40 w-40 md:h-48 md:w-48">
          {/* TIP: Replace src with your actual photo path or URL. If you put `profile.jpg` in the public folder, use src="/profile.jpg" */}
          <AvatarImage
            src={src}
            alt={`Photo of ${name}`}
            loading="eager"
            decoding="async"
            className="object-cover"
          />
          <AvatarFallback className="text-lg font-medium">
            {initials(name)}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default ProfilePhoto;
