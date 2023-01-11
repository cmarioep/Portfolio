import * as React from "react";

import { RandomStarsBackground, NavBar, TapBar, SocialNetworks, AsideEmail } from "../components";
import { Hero, About, Skills, Contact, Footer, Projects } from "../sections";

// styles
import '../styles/index.scss'


export const Head = () => {

  return (
    <>""
      {/* Primary Meta Tags */}
      <title>Carlos Mario - Web developer</title>
        <meta name="title" content="Carlos Mario - Web developer" />
        <meta name="description" content="I'm a Web developer focused on creating high-end solutions | Javascript Full-stack Developer." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cmarioep.com/" />
        <meta property="og:title" content="Carlos Mario - Web developer" />
        <meta property="og:site_name" content="Carlos Mario Web developer Portfolio"></meta>
        <meta property="og:description" content="I'm a Web developer focused on creating high-end solutions | Javascript Full-stack Developer." />
        <meta property="og:image" content="https://user-images.githubusercontent.com/53541185/211841769-f7912b69-c3b3-4c6d-835a-86872e33c8c0.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.cmarioep.com/" />
        <meta property="twitter:title" content="Carlos Mario" />
        <meta property="twitter:description" content="I'm a Web developer focused on creating high-end solutions | Javascript Full-stack Developer." />
        <meta property="twitter:image" content="https://user-images.githubusercontent.com/53541185/211841769-f7912b69-c3b3-4c6d-835a-86872e33c8c0.png" />
      
    </>
  )

}


const IndexPage = () => {

  return (
    <>
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
    </>

  )
}


export default IndexPage
