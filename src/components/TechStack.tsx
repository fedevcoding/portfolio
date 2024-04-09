import { code, html, tools } from "@/assets";
import Card from "./Card";
import { techStack } from "@/data/techStack";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import { rowVariants } from "./ui/Row";
import Line from "./ui/Line";
import Section from "./ui/Section";
import { useBreakPoint } from "react-use-breakpoint";
import { motion } from "framer-motion";
import { cn } from "@/lib";

function TechStack() {
 const { max } = useBreakPoint();

 return (
  <>
   <Section className="pb-20" id="tech-stack" theme="secondary">
    <div className="py-24">
     <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
     >
      <P theme={"secondary"} align={"center"}>
       Some of my
      </P>
     </motion.div>
     <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
     >
      <Heading letterGap={"xl"} align={"center"}>
       TECH STACK
      </Heading>
     </motion.div>
    </div>

    <motion.div
     initial={{ opacity: 0, translateY: 20 }}
     whileInView={{ opacity: 1, translateY: 0 }}
     transition={{ duration: 0.5 }}
     viewport={{ once: true }}
     className={cn(
      rowVariants({
       justify: "center",
       align: "center",
       gap: max.isXl ? "xl" : "3xl",
       wrap: max.isMd ? "wrap" : "none",
      }),
      "px-20"
     )}
    >
     <Card name="Front End" mainIcon={html} icons={techStack.frontEnd} />
     <Card name="Back End" mainIcon={code} icons={techStack.backEnd} />
     <Card name="Other" mainIcon={tools} icons={techStack.other} />
    </motion.div>
    <P boldness={"semi-bold"} align={"center"} className="mt-12">
     And other...
    </P>
   </Section>
   <Line />
  </>
 );
}

export default TechStack;
