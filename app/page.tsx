import { Contact } from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return <section className="pb-24 pt-40">
    <div className='container max-w-4xl'>
      <Intro/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  </section>;
}
