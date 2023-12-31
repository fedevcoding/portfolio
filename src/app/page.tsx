import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { BreakpointProvider } from "@/context/BreakPoints";

export default function Page() {
  return (
    <BreakpointProvider>
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </BreakpointProvider>
  );
}
