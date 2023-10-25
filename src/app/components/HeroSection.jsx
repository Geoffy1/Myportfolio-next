"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols sm:grid-col-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Hello ! call me {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Geff',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'software engineer',
        1000,
        'fullstack app developer',
        1000,
        'backend/frontend',
        1000
      ]}
      wrapper="span"
      speed={50}
      //style={{ fontSize: '0.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus natus quod aperiam dicta nisi expedita doloribus dolorum excepturi, eius, quae facilis ad nulla error quaerat, temporibus blanditiis harum quia?
                </p>
                <div>
                    <button className='text-white px-6 py-3 w-full rounded-full mr-4 bg-gradient-to-br from-pink-500 via-orange-400 to-red-800 hover:bg-slate-200'>Hire</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            Download Cv
                        </span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/hero-image.png"
                        alt="myimage"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default HeroSection
