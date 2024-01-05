import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function Drawer({ open }: { open: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          exit={{ x: "-100%" }}
          transition={{
            bounce: false,
          }}
          className="h-home w-[80vw] bg-primary-dark absolute top-full right-[20vw] z-10 shadow-xl"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
