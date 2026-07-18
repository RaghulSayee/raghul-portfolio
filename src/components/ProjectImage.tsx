"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

type ProjectImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  position?: "left" | "center" | "right";
};

export default function ProjectImage({
  src,
  alt,
  sizes,
  priority = false,
  position = "center",
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  const positionClass = {
    left: "object-left",
    center: "object-center",
    right: "object-right",
  };

  if (hasError) {
    return (
      <div className="theme-surface-strong flex h-full w-full items-center justify-center">
        <div className="text-center">
          <ImageIcon
            size={34}
            className="mx-auto text-violet-600 dark:text-violet-400"
          />

          <p className="theme-muted mt-3 text-sm">
            Project preview coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => setHasError(true)}
      className={`object-cover ${positionClass[position]} transition duration-500 group-hover:scale-105`}
    />
  );
}