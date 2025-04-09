"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <SectionHeading>
          About Me
        </SectionHeading>
        <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
        I’m a Full Stack Blockchain Developer passionate about building innovative, decentralized solutions. With expertise in Web3 technologies, I create secure, user-friendly dApps that redefine digital interactions.
                </p>
      </Fade>
        

        <div className="grid xl:grid-cols-2 lg:text-start">

          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
              
              
              

              <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <h3 className="font-bold mt-6">Mission</h3>
              </Fade>
              <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                To empower individuals and businesses with transparent, blockchain-driven solutions.
                </p>
              </Fade>
              <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
                <h3 className="font-bold mt-6">Vision</h3>
              </Fade>
              <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                  To drive a decentralized future where digital trust and ownership thrive.
                  </p>
              </Fade>
                


              </div>
            </div>
          </div>
          <div className="flex justify-center">
          <Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
         
          <Image
              src="/about.png"
              width="200"
              height="200"
              alt="portrait"
              quality="100"
              priority={true}
              className="rounded-full mt-8  object-cover"
            />
          </Fade>
          
          </div>
        </div>
      </div>
    </motion.section>
  );
}
