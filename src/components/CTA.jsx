import React, { useRef } from 'react'
import GradientButton from './GradientButton'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const CTA = () => {

const ctaRef = useRef(null);

useGSAP(()=>{
  gsap.from(ctaRef.current, {
    backgroundColor: "#fff",
    color: "#000",
    scrollTrigger: {
      trigger: ctaRef.current,
      start: "center bottom",
      end: "60% bottom",
      scrub:1
    }
  })
})

  return (
    <>
      <div ref={ctaRef}>
        <div className="mainContainer py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
            <h4 className="max-w-6xl text-2xl lg:text-5xl text-center leading-[1.25]">Freelance Projects, collaborations and full-time opportunities. Let's get acquainted</h4>
            <GradientButton text="Book a Call" link="https://wa.me/917676268535"/>
        </div>
      </div>
    </>
  )
}

export default CTA
