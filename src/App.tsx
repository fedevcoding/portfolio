import { ThemeProvider } from "@/context";
import { BreakpointProvider } from "react-use-breakpoint";
import Home from "@/components/Home";
// import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import "@/globals.css";

function App() {
 return (
  <ThemeProvider>
   <BreakpointProvider>
    <Home />
    {/* <About /> */}
    <TechStack />
    <Projects />
    <Footer />
   </BreakpointProvider>
  </ThemeProvider>
 );
}

export default App;
