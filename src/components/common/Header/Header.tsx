import React from "react";
import { motion  } from "framer-motion";
import { HeaderProps } from "@/lib/types.props";

const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export default Header;
