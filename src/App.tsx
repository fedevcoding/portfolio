import { ThemeProvider } from "@/context";
import { BreakpointProvider } from "react-use-breakpoint";
import Home from "@/components/Home";
// import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import "@/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home2 from "./components/Home2";
import Section from "./components/ui/Section";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        {/* <About /> */}
        <TechStack />
        <Projects />
        <Footer />
      </>
    ),
  },
  {
    path: "/siti",
    element: (
      <>
        <Section
          // className={`${max.isSm ? "" : "h-screen"}`}
          id="home"
          theme="primary"
        >
          <div className="w-[90%] mx-auto bg-primary-dark h-full">
            <Home2 />
          </div>
        </Section>
      </>
    ),
  },
]);

function App() {
  return (
    <ThemeProvider>
      <BreakpointProvider>
        <RouterProvider router={router} />
      </BreakpointProvider>
    </ThemeProvider>
  );
}

export default App;
