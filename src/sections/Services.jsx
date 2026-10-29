import React from 'react'

const services = () => {
  return (
    <>
     <div className="bg-white text-black">
        <div className="mainContainer pb-8 lg:pb-12">
            <h3>Services in Detail</h3>
        </div>
     </div> 

     <div className="relative">
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4 ">
            <div className="mainContainer grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
                {}
                <div className="flex gap-6 lg:gap-8">
                    <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
                    <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1.2]">Web Design <br/> & UI/UX</h2>
                </div>
                {}
                <div className="flex items-center">
                    <p className="text-lg lg:text-xl leading-relaxed">
                        Crafting modern, user-focused websites with clean layouts, thoughtful typography, and smooth interactions.
                        Every design is tailored to deliver both aesthetic appeal and seamless usability.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
            <div className="mainContainer grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
                {}
                <div className="flex gap-6 lg:gap-8">
                    <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
                    <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1.2]">Web Development <br/> & APIs</h2>
                </div>
                {}
                <div className="flex items-center">
                    <p className="text-lg lg:text-xl leading-relaxed">
                        A web developer passionate about building modern, responsive, and visually appealing websites.
                        I focus on creating clean designs with smooth functionality and a great user experience.
                        Using modern technologies to turn ideas into professional websites.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
            <div className="mainContainer grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
                {}
                <div className="flex gap-6 lg:gap-8">
                    <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
                    <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1.2]">Creative <br/>  Branding</h2>
                </div>
                {}
                <div className="flex items-center">
                    <p className="text-lg lg:text-xl leading-relaxed">
                        Building strong identities through design, through design, storytelling, and visuals that connect with your audience.
                        From logos to full brand systems, I help create a consistent and memorable presence.
                    </p>
                </div>
            </div>
        </div>

     </div>
    </>
  )
}

export default services
 