import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Workshops from "@/components/Workshops";

const HomePage = () => {
  return (
    <div className="container mx-auto p-10 flex flex-col gap-10">
      <Hero />
      <About />
      <Workshops />
      <Events />
      <Blogs />
      <Contact />
    </div>
  );
};

export default HomePage;
