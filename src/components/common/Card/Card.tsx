import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { CardProps } from "@/lib/types";

type Props = {};

export const Card = ({ rotate, scale, translate }: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full  p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl  gap-4 overflow-hidden p-4 transition-all ">
        <Image
          src="/images/temp-banner.png"
          fill
          alt="bannerImage"
          className="object-cover border-8 rounded-2xl"
        />
      </div>
    </motion.div>
  );
};

export default Card;
