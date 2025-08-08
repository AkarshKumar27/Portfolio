import { ExternalLink } from "lucide-react";

interface CertificationItemProps {
  title: string;
  platform: string;
  link?: string;
}

const CertificationItem = ({ title, platform, link }: CertificationItemProps) => {
  return (
    <li className="flex items-center justify-between gap-4 py-3 px-4 rounded-md border border-border bg-background/60 backdrop-blur-xl">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{platform}</p>
      </div>
      {link && (
        <a
          className="text-sm story-link"
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`View certificate: ${title}`}
        >
          View <ExternalLink className="inline ml-1 size-4 align-[-2px]" />
        </a>
      )}
    </li>
  );
};

export default CertificationItem;
