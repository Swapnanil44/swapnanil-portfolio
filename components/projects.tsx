import { PROJECTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Project from "./project";

export default async function Projects() {
  return (
    <section className="pb-24">
      <div id="projects" className="flex flex-col gap-8">
        <h2 className="title">Projects</h2>
        <div className="grid gap-8">
          <Project project={PROJECTS[0]} />
          <Project project={PROJECTS[1]} />
          <Project project={PROJECTS[2]} />
        </div>
      </div>
    </section>
  );
}
