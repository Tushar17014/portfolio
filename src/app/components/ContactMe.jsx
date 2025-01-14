"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

function ContactMe() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };
    return (
        <section id='contact'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div>
                    <Image
                        src='/images/contact-me.png'
                        width={250}
                        height={250}
                        alt='contact me'
                    />
                </div>
                <div>
                    <h5 className="text-xl font-bold text-white my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        {" "}
                        I&apos;m currently looking for new opportunities, my inbox is always
                        open. Whether you have a question or just want to say hi, I&apos;ll
                        try my best to get back to you!
                    </p>
                    <div className='cursor-pointer'>
                        <p className='hover:text-slate-300' onClick={() => handleCopyText('tusharworks17@gmail.com')}>Email: tusharworks17@gmail.com</p>
                        {isCopied && <div style={{ color: 'green' }}>Text copied to clipboard!</div>}
                        <br />
                    </div>
                    <div className="socials flex flex-row gap-2">
                        <Link href="https://github.com/Tushar17014" target='_blank'>
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/tushar-sharma-b61171253/" target='_blank'>
                            <Image src={LinkedinIcon} alt="Linkedin Icon" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactMe
