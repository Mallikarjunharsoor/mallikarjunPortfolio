import React from 'react'
import projects from '../components/ProjectsData'

const Projects = () => {
  return (
    <>
      <div className3="bg-white text-black">
        <div className="mainContainer py-28">
            <h2 className="text-6xl lg:text-[8vw] font-bold leading-[1] tracking-tight text-center">Projects</h2>
            <div className='grid md:grid-cols-2 gap-8 mt-8 lg:mt-16'>
                {projects.map(({id, name, img, link})=>(
                    <a key={id} href={link} className="overflow-hiddenflex flex-col">
                        <div className='overflow-hidden group rounded-2xl h-full'>
                        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                        </div>
                        <span className='uppercase leading-[1.4] lg:text-2xl font-heading mt-4'>{name}</span>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
