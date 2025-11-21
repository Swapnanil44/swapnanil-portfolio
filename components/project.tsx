import Image from "next/image";
import Link from "next/link";
import React from "react";
export type Project = {
  coverImage: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  href: string;
};
function Project({ project }: { project: Project }) {
  const { coverImage, title, description, techStack, href } = project;
  return (
    <div className="w-full overflow-hidden  border border-muted-foreground/20 rounded-lg p-2 hover:border-muted-foreground/40 transition-colors duration-300">
      <Link href={href} target="_blank" className="group" prefetch={false}>
        <Image
          src={coverImage}
          width={1200}
          height={600}
          alt={title}
          className="w-full object-cover rounded-t-lg border-b border-muted-foreground/20 group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col gap-2">
        <div className="space-y-2">
          <Link
            href={href}
            target="_blank"
            className="text-lg font-semibold hover:underline"
          >
            {title}
          </Link>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tag) => (
            <div
              key={tag}
              className="px-3 py-1 text-xs font-medium text-muted-foreground border border-muted-foreground/20 rounded-md hover:border-muted-foreground/40 hover:text-foreground transition-colors duration-200"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
