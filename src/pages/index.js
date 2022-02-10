import * as React from "react";

import About from "../components/sections/About";
import Skills from "../components/sections/Skills";


// styles
import '../styles/index.scss'


// markup
const IndexPage = () => {

  return (
    <main>
      <About/>
      <Skills/>
    </main>
  )
}


export default IndexPage
