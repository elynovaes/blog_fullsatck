import AboutAuthor from "../components/AboutAuthor"
import AboutVideos from "../components/AboutVideos"
import Benefits from "../components/Benefits"
import ContactSection from "../components/ContactSection"
import Faq from "../components/Faq"
import HeroGuide from "../components/HeroGuide"
import Plans from "../components/Plans"
import Testimonials from "../components/Testimonials"
import WhatsThetahealing from "../components/WhatsThetahealing"
import WhyLearnThetahealing from "../components/WhyLeanThetahealing"

const Guide = ({ data3 }) => {
  return (
    <>
      <HeroGuide data3={data3} />
      <WhatsThetahealing data3={data3} />
      <Benefits data3={data3}/>
      <WhyLearnThetahealing data3={data3}/>
      <AboutVideos data3={data3}/>
      <AboutAuthor data3={data3}/>
      <Testimonials data3={data3}/>
      <Plans data3={data3}/>
      <Faq data3={data3}/>
      <ContactSection data3={data3}/>
    </>
  )
}

export default Guide