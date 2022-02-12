import * as React from "react";

import About from "../sections/About";
import Skills from "../sections/Skills";
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
      <About/>
      <Skills/>
      <Contact/>
      <SocialNetworks/>
      <AsideEmail/>
      <Footer/>
    </main>
  )
}


export default IndexPage
