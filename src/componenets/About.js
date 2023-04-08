import React from 'react'

const About = () => {
  return (
    <div class="relative mb-4 flex flex-row flex-wrap items-center" className="about-title">
        <span class="whitespace-nowrap text-xs text-light font-bold text-stone-300 lg:text-sm">
            &lt;<span class="font-bold text-green-600 text-light">code</span>&gt;
            <span class="font-medium text-stone-400 text-light">I build</span>
        </span>
        <div class="ml-1 w-max items-center">
            <span class="animate-typing text-light overflow-hidden whitespace-nowrap text-xs font-black tracking-wide text-stone-300 lg:text-sm">
            automation tools
            </span>
            <span class="animate-blinking text-light p-0.5 align-middle text-lg font-bold text-white">
            |
            </span>
            <span class="text-xs font-bold text-light text-stone-300 lg:text-sm ">
            &lt;/<span class="font-bold text-light text-green-600">code</span>&gt;
            </span>
        </div>
    </div>
  );
}

export default About