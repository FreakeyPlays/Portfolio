import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import {IoLogoGithub, IoLogoLinkedin, IoLogoXing, IoLogoTwitter} from "react-icons/io"
import { enableNavBarLogic } from "../lib/navLogic"

const SocialIconLink = ( {Component, uri, hover} ) => {
    return (
        <Link href={uri}>
            <a target="_blank">
                <Component className={"w-8 xl:w-7 h-8 xl:h-7 text-white cursor-pointer " + hover}/>
            </a>
        </Link>
    )
}

const NavItem = ( {link} ) => {
    return(
        <div className="w-24" data-section={link}>
            <Link href={"#" + link}>
                <a className="text-white font-bold relative uppercase before:content-[''] before:absolute
                                before:w-full before:h-1 before:bg-primary before:top-[60%] before:translate-y-[-50%]
                                before:animate-[out_0.2s_cubic-bezier(1,0,0.58,0.97)_1_both]
                                hover:before:animate-[in_0.2s_cubic-bezier(1,0,0.58,0.97)_1_both]
                                focus:before:animate-[in_0.2s_cubic-bezier(1,0,0.58,0.97)_1_both]"> 
                    {"/" + link}
                </a>
            </Link>
        </div>
    )
}

const NavBar = () => {

    useEffect( () => {
        enableNavBarLogic()
    })

    return(
        <>
            <div className="w-24 xl:w-[90vw] h-[80vh] xl:h-24 max-h-[calc(1080px-256px)] fixed rounded-xl rainbow_gradient opacity-40 filter blur-3xl 
                            right-0 xl:right-1/2 bottom-1/2 xl:bottom-0 translate-y-[50%] xl:translate-y-[-50%] xl:translate-x-[50%] mr-8">
            </div>
            <nav className="w-32 xl:w-[90vw] h-[80vh] xl:h-24 max-h-[calc(1080px-256px)] fixed flex flex-col xl:flex-row right-0 xl:right-1/2 
                            xl:translate-x-[50%] bottom-1/2 xl:bottom-0 translate-y-[50%] xl:translate-y-0 mr-8 xl:mr-0 xl:mb-8 rounded-2xl
                            bg-gradient-to-br from-[#ffffff26] to-[#ffffff0d] border-[1px] border-[#ffffff2e] border-solid bg-clip-padding 
                            backdrop-filter backdrop-blur-xl shadow-md outline outline-2 outline-white outline-offset-8"
            >
                <div className="w-32 xl:w-24 h-32 xl:h-24 flex flex-col justify-center items-center">
                    <Link href="/">
                        <a className="w-24 xl:w-16 h-24 xl:h-16 p-1 rounded-full border-4 border-solid border-white drop-shadow-xl 
                                    hover:border-primary focus:border-primary">
                            <Image 
                                src="/images/profile_image.png"
                                alt="Profile image"
                                width="96"
                                height="96"
                                className="rounded-full"
                            />
                        </a>
                    </Link>
                </div>

                <div className="w-32 xl:w-[calc(100%-192px)] lg:w-[calc(100%-96px)]  h-[calc(100%-256px)] xl:h-full flex flex-col justify-center
                                text-xl xl:text-2xl lg:text-4xl">
                    <div id="nav_li_container" className="w-full h-1/2 flex flex-col xl:flex-row items-center justify-between xl:justify-around">
                        <NavItem 
                            link="about" 
                        />
                        <NavItem 
                            link="skills" 
                        />
                        <NavItem 
                            link="career" 
                        />
                        <NavItem 
                            link="work" 
                        />
                    </div>
                </div>

                <div className="w-32 xl:w-24 h-32 xl:h-24 lg:hidden flex justify-center items-center">
                    <div className="w-20 h-20 flex flex-row flex-wrap gap-4">
                        <SocialIconLink 
                            Component={IoLogoGithub} 
                            uri="https://github.com/FreakeyPlays" 
                            hover="hover:text-[#21262b]"
                        />
                        <SocialIconLink 
                            Component={IoLogoTwitter} 
                            uri="https://twitter.com/FreakeyPlays" 
                            hover="hover:text-[#00acee]"
                        />
                        <SocialIconLink 
                            Component={IoLogoLinkedin} 
                            uri="https://www.linkedin.com/in/christoph-merck" 
                            hover="hover:text-[#0072b1]"
                        />
                        <SocialIconLink 
                            Component={IoLogoXing} 
                            uri="https://www.xing.com/profile/Christoph_Merck2/cv"
                            hover="hover:text-[#cfdc00]" 
                        />
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar