import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MessengerChatBot from "@/components/MessengerChatBot";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
      <MessengerChatBot />
    </main>
  );
};

export default HomePage;
