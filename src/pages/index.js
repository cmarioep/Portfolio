import * as React from "react";

import About from "../sections/About";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";


// styles
import '../styles/index.scss'


// markup
const IndexPage = () => {

  return (
    <main>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}


export default IndexPage
