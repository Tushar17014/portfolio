"use client";
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12 '>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500'>
                            Hello, I'm 
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Tushar Sharma',
                                    1000,
                                    'Software Engineer',
                                    1000,
                                    'Web Developer',
                                    1000

                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                            {""}
                        </span>
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        A Software Engineer with a passion for creating interactive and responsive web applications
                    </p>
                    <div>
                        <a className='px-6 py-4 w-full  sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-blue-500 hover:bg-slate-200 text-white' href='https://www.linkedin.com/in/tushar-sharma-b61171253/' target='_blank'>Visit LinkedIn</a>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                    <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative'>
                        <Image
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            src='/images/guy-coding.png'
                            alt='coding image'
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
