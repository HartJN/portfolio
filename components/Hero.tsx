'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            // src="/HeartSVG.svg"
            src="/heart-colour-noBG.webp"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
            draggable={false}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m James!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{' '}
            <span className="font-semibold dark:text-primaryAccent">
              Software Engineer{' '}
            </span>
            based in New Zealand, driven by a passion for problem-solving and a
            love of learning to create meaningful solutions.
          </p>
          <div className="flex flex-row space-x-2 justify-center md:justify-start">
            <Link
              to="projects"
              className="text-black font-semibold px-6 py-3 bg-primaryAccent rounded shadow cursor-pointer hover:bg-secondaryAccent "
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <a
              href="https://github.com/HartJN"
              className="text-black font-semibold px-6 py-3  bg-primaryAccent rounded shadow hover:bg-secondaryAccent "
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
