import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"

function About() {

  return (
    <div className='overflow-y-scroll scrollBar pb-8' style={{maxHeight:'70vh'}}>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 " >
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          About me
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          What i do. Who am i!! 
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between mt-8 sm:mt-0 " >
        <div className="w-full md:w-1/2 flex justify-center self-start">
          <div className="rounded-xl  overflow-hidden relative text-center p-10 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl about-card glass dark:border-gray-600">
            <span className='about-card-span-1'></span>
            <span className='about-card-span-2'></span>
            <div className="text-gray-500 group-hover:scale-105 transition-all">
              <div className="relative w-48 h-48 sm:w-72 sm:h-72 m-4">
                <Image
                  src="/DP-pro-max.jpg"
                  alt="author"
                  className="object-cover  rounded-xl cursor-pointer uppercase px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_hsl(var(--primary)),-0.5rem_-0.5rem_black] dark:hover:shadow-[0.5rem_0.5rem_hsl(var(--primary)),-0.5rem_-0.5rem_white]  transition"
                  height={276}
                  width={276}
                />
              </div>
            </div>
            <div className="group-hover:pb-10 transition-all duration-500 delay-200 mt-20">
              <h1 className="font-semibold text-gray-700 dark:text-white">Muhammad Talha</h1>
              <p className="text-gray-500 text-sm dark:text-white">Software Engineer</p>
            </div>
            <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
              <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
                <a href="" target="_blank" rel="noopener noreferrer" className="hover:scale-110 cursor-pointer transition-all duration-500 delay-200">
                  <AiFillGithub />
                </a>
                <a href="mailto:talhamanzoor23102003@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 cursor-pointer transition-all duration-500 delay-200">
                  <AiFillMail />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="hover:scale-110 cursor-pointer transition-all duration-500 delay-200">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:top-0`}>
            <p className={`text-[12px] text-white-200 `}>Introduce</p>
            <div className={`relative top-[20px]`}>
              <h1 className={`text-[35px] font-bold mb-[20px]`}>
                Hi ✌️ I&apos;m Muhammad Usman
              </h1>
              <br />
              <br />
              <p className={`text-[15px] text-white-200 p-2 px-5 bg-dark-400 border-l-[5px] border-solid border-l-green-200 italic`}>
                Willingness to take intelligient risks in the pursuit of your clearly defined goals, put you on a greater side of life. Enabling you to archive the same level of success in 1 or 2 years, which may take other people10 or 20 years to archieve, if lessed focused.
              </p>
              <br />
              <p>As a software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That&apos;s why I&apos;m excited to make a big impact at a high growth company.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About



// https://api.github.com/users/UsmanMERN/repos

// get repest to get all github data