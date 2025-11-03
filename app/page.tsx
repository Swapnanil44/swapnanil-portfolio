import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return <section className="pb-24 pt-40">
    <div className='container max-w-4xl'>
      <Intro/>
      <Projects/>
    </div>
  </section>;
}
