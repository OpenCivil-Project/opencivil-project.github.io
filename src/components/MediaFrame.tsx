import { useEffect, useState } from "react";
import { Image, Play } from "lucide-react";

interface MediaFrameProps {
  title: string;
  kind: "image" | "video";
  src?: string;
  poster?: string;
  alt?: string;
  className?: string;
}

export function MediaFrame({ title, kind, src, poster, alt, className = "" }: MediaFrameProps) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  const available = Boolean(src) && !failed;
  const Icon = kind === "video" ? Play : Image;
  return (
    <div className={`media-frame relative aspect-video overflow-hidden rounded-xl border border-border bg-muted/40 ${className}`}>
      {available ? (
        kind === "video" ? (
          <video src={src} poster={poster} controls playsInline preload="none" aria-label={title}
            onError={() => setFailed(true)} className="h-full w-full object-contain" />
        ) : (
          <img src={src} alt={alt || title} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-contain" />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background"><Icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" /></span>
          <p className="text-sm font-medium">{title}</p>
          <p className="font-mono text-xs text-muted-foreground">{failed ? "Media unavailable" : `${kind === "video" ? "Video" : "Image"} placeholder · 16:9`}</p>
        </div>
      )}
    </div>
  );
}
