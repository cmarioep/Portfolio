import * as React from "react";


// import RandomStarsBackground from "../components/RandomStarsBackground";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import SocialNetworks from "../components/SocialNetworks";
import AsideEmail from "../components/AsideEmail";

// styles
import '../styles/index.scss'


// markup
const IndexPage = () => {

  return (
    <main>
      {/* <RandomStarsBackground/> */}
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <SocialNetworks/>
      <AsideEmail/>
      <Footer/>
    </main>
  )
}


export default IndexPage
