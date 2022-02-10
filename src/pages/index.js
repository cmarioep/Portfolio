import * as React from "react";

import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";


// styles
import '../styles/index.scss'


// markup
const IndexPage = () => {

  return (
    <main>
      <About/>
      <Skills/>
      <Contact/>
    </main>
  )
}


export default IndexPage
