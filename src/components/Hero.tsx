import React from 'react'
import { TextSwitcher } from './ui/container-text-flip';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';
import BoardDeveloper from './BoardDeveloper';

const words = ["Full Stack Developer", "Coding Nerd", "Problem Solver"];

const handles = [
    {
        href: "https://github.com/HoangHuy1405",
        icon: <IconBrandGithub className="h-7 w-7" />,
        className: "group/btn shadow-input relative flex h-10 items-center justify-start rounded-full px-6 py-3 font-medium dark:hover:bg-white transition-all text-neutral-700 dark:text-neutral-200 dark:hover:text-black duration-200 hover:bg-neutral-900 hover:text-white",
    },
    {
        href: "https://www.linkedin.com/in/nguy%E1%BB%85n-mai-ho%C3%A0ng-huy-758a68194/",
        icon: <IconBrandLinkedin className="h-7 w-7" />,
        className: "group/btn shadow-input relative flex h-10 items-center justify-start rounded-full px-6 py-3 font-medium dark:hover:bg-blue-500 transition-all duration-200 text-blue-600 dark:text-blue-400 dark:hover:text-white hover:bg-blue-500 hover:text-white",
    },
]

const Hero = () => {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center py-20 px-6 sm:px-10">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 mx-auto">

                {/* Left: Text Content */}
                <div className="text-center lg:text-left flex flex-col gap-4 text-neutral-500 font-semibold text-3xl sm:text-3xl md:text-4xl dark:text-neutral-400 mb-4 md:mb-0 order-2 lg:order-1">
                    <span className="flex items-center justify-center lg:justify-start gap-2">
                        👋🏻Hi, I&apos;m
                        <span className="dark:text-orange-500 text-orange-400 font-extrabold">
                            Hoang Huy
                        </span>
                    </span>
                    <span className="flex gap-2 items-center justify-center lg:justify-start">
                        a&nbsp;
                        <TextSwitcher
                            textClassName="tracking-tight font-semibold"
                            animationDuration={700}
                            words={words}
                        />
                    </span>
                    from Vietnam.
                    <div className="flex gap-2 mb-10 lg:mb-0 p-2 mt-10 justify-center lg:justify-start">
                        {handles.map((handle, idx) => (
                            <Link
                                key={`handle-link-${idx}`}
                                href={handle.href}
                                target="_blank"
                                className={handle.className}
                            >
                                {handle.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right: Developer Board */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                    <BoardDeveloper />
                </div>
            </div>
        </section>
    )
}

export default Hero