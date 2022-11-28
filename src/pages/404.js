import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import '../styles/layout/_NotFoundPage.scss';


const NotFoundPage = () => {

  return (
    <div className="NotFoundPage">
      <h1 className="NotFoundPage__title">Opps! It seems that you are lost in space</h1>

      <div className="NotFoundPage__picture">
        <StaticImage src="../images/avatar.png" alt="My Picture" />
      </div>
    </div>
  )

}

export default NotFoundPage;

