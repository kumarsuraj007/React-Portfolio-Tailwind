'use client'; // This is a client component 👈🏽

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import besocial from '../public/besocial.png'
import movievilla from '../public/movievilla.png'
import ecomart from '../public/ecomart.png'
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">PORTFOLIO</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer dark:text-white" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://tomato-adina-47.tiiny.site/"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Suraj Kumar
            </h2>
            <h3 className="text-2xl py-2 dark:text-gray-200 md:text-3xl">Web Developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400 max-w-xl mx-auto md:text-xl">
              "Hey! 👋 I'm all about crafting websites that look awesome and
              work like a charm! Let's create an amazing online space together!"
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/kumarsuraj007">
                <AiFillGithub className="cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/suraj-kumar-26a611248/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.instagram.com/bholi___07">
                <AiFillInstagram/>
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-12 md:h-96 sm:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="mt-12">
        <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">About Me</h3>
            <p className=" text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Passionate <span className="text-teal-500"> MERN </span> stack developer 👨‍💻 with <span className="text-teal-500"> six months of industrial internship experience </span>. Committed to constant growth 🚀 and eager to explore new technologies. Let's collaborate and create something awesome together! 💡✨.
              
            </p>
            </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">What Library I Use</h4>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">Material Ui</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Sass</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">What Stack I Use</h4>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Express.js</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Another Platform</h3>
              <p className="py-2">
                Make you a better developer, if you use any of these.
              </p>
              <h4 className="py-4 text-teal-600">What I Also Use</h4>
              <p className="text-gray-800 py-1">Git, Github</p>
              <p className="text-gray-800 py-1">Firebase</p>
              <p className="text-gray-800 py-1">Cloudinary</p>
              <p className="text-gray-800 py-1">Vercel</p>
            </div>
            </div>
        </section>

        <section className=" mt-12">
        <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">Projects</h3>
            <p className=" text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Over time, I've built lots of projects using <span className="text-teal-500"> MERN tech</span>. They've been like stepping stones for me, helping me <span className="text-teal-500"> grow</span> my skills bit by bit. Each project taught me something new, shaping me into a better developer. They're not just projects, <span className="text-teal-500"> they're proof of how much I've learned and how far I've come </span> in mastering MERN.
            </p>
            </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={besocial} width={600} height={600} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                BESOCIAL - Social Media Website
              </h3>
              <p className="py-2 text-teal-500">
              I've made a social media app that does a bunch of things: lets people log in, post stuff, like or dislike things, follow or unfollow others, and even chat. And the cool part? I'm still working on making the chat feature even better. Creating a place where users can connect, share, and talk.
              </p>
              <a className="py-4 underline" href="https://github.com/kumarsuraj007/Besocial-social-media-application">This is just a git repo.</a>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={movievilla} width={600} height={600} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
                MOVIEVILLA - Movie Search Website
              </h3>
              <p className="py-2">
                
I made a website using vanilla JavaScript and a movie API where you can search for any movie and get its release year. It's simple but shows my skills in using APIs to create functional, user-friendly web applications.
              </p>
              <a className="py-4 underline text-teal-500" href="https://github.com/kumarsuraj007/Movie_App">This is just a git repo.</a>
        
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={ecomart} width={600} height={600} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">ECOMART - Ecommerce Website</h3>
              <p className="py-2 text-teal-500">
              I built an e-commerce website where users can add items to their cart, calculate prices, and sign in. Using Firebase, I ensured secure data storage and authentication. It's a project showcasing my skills in crafting user-friendly e-commerce platforms with robust security measures.
              </p>

              <a className="py-4 underline" href="https://stellar-syrniki-fe5daa.netlify.app/">This is a live website.</a>
              
            </div>
            </div>
        </section>
        <p className="text-center py-2 dark:text-white">MADE BY SURAJ KUMAR 👻.</p>
      </main>
    </div>
  );
}
