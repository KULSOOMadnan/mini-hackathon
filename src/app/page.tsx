import About from "@/components/About";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     
      <HomePage/>
      < About/>
      <Skills/>
      <Projects/>
      
    </div>
  );
}
