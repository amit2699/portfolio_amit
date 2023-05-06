import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "WeChat App Design",
    description:
      "Designed and prototyped full chat app in Figma with beautiful layout and new user interface for status and settings screen.",
    image: "/wechat.jpg",
    
    link: "https://www.figma.com/file/akUg8z7SyipsOrklOnXPoQ/CHAT-APPLICATION-DESIGN?type=design&node-id=0%3A1&t=20PKkUKu0A8FXhtL-1",
  },
  {
    name: "Trip App Design",
    description: "Designed and prototyped full travel/trip booking app in Figma with beautiful layout and User interface.",
    image: "/Trip2.jpg",
    
    link: "https://www.figma.com/file/wjcFmOyhSZaR6AoOywSotX/PROJECT---HOLIDAY-BOOKING?type=design&node-id=0%3A1&t=MPQILp2PWeABez0l-1",
  },
  {
    name: "Portfolio Web Design",
    description:
      "Crafted and prototyped portfolio deign, my first web app in Figma with beautiful layout and User interface.",
    image: "/portfolio.jpg",
  
    link: "https://www.figma.com/file/ZaqhQpZ36Q7qOlrmuFgAIX/PROJECT---PORTFOLIO-WEBUI-2020?type=design&node-id=0%3A1&t=dC3tHnX2ENUggKjW-1",
  },
  {
    name: "E-commerce App Design",
    description:
      "Designed and prototyped E- commerce app from scratch using inspiration from mobbin.deign website.",
    image: "/ecom.jpg",
  
    link: "https://www.figma.com/file/SkaKZUINBf8ygGiNY98zRS/PROJECT---ECOMMERCE-APP?type=design&node-id=0%3A1&t=a3Pg8VO6rfvxPAB2-1",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
