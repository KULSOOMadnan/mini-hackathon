import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="">
      <HomePage />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
