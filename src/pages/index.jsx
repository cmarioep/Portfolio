import * as React from "react";

import { RandomStarsBackground, NavBar, TapBar, SocialNetworks, AsideEmail } from "../components";
import { Hero, About, Skills, Contact, Footer, Projects } from "../sections";

// styles
import '../styles/index.scss'


const IndexPage = () => {
  
  return (
    <main>
      <RandomStarsBackground />
      <NavBar />
      <TapBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SocialNetworks />
      <AsideEmail />
      <Footer />
    </main>
  )
}


export default IndexPage