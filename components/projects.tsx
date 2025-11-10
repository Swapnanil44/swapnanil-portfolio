import { PROJECTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  return (
    <section className="pb-24">
      <div id="projects" className="flex flex-col gap-8">
        <h2 className="title">Projects</h2>
        <div className="grid gap-8">
          {PROJECTS.length > 0 && (
            <div className="w-full overflow-hidden  border border-muted-foreground/20 rounded-lg p-2 hover:border-muted-foreground/40 transition-colors duration-300">
              <Link
                href={PROJECTS[0].href}
                target="_blank"
                className="group"
                prefetch={false}
              >
                <Image
                  src={PROJECTS[0].coverImage}
                  width={1200}
                  height={600}
                  alt={PROJECTS[0].title}
                  className="w-full object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-4 flex flex-col gap-2">
                <div className="space-y-2">
                  <Link
                    href={PROJECTS[0].href}
                    target="_blank"
                    className="text-lg font-semibold hover:underline"
                  >
                    {PROJECTS[0].title}
                  </Link>
                  <p className="text-muted-foreground text-sm">
                    {PROJECTS[0].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[0].techStack.map((tag) => (
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
          )}
          {PROJECTS.length > 0 && (
            <div className="w-full overflow-hidden  border border-muted-foreground/20 rounded-lg p-2 hover:border-muted-foreground/40 transition-colors duration-300">
              <Link
                href={PROJECTS[1].href}
                target="_blank"
                className="group"
                prefetch={false}
              >
                <Image
                  src={PROJECTS[1].coverImage}
                  width={1200}
                  height={600}
                  alt={PROJECTS[1].title}
                  className="w-full object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-4 flex flex-col gap-2">
                <div className="space-y-2">
                  <Link
                    href={PROJECTS[1].href}
                    target="_blank"
                    className="text-lg font-semibold hover:underline"
                  >
                    {PROJECTS[1].title}
                  </Link>
                  <p className="text-muted-foreground text-sm">
                    {PROJECTS[1].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[1].techStack.map((tag) => (
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
          )}
        </div>
      </div>
    </section>
  );
}
