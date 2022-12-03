import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export function ProjectScreenshot({ image }) {


    if (image === 'Project-1') {
        return <StaticImage className="bigCard__screenshot__image" src="../images/Project-1.jpg" alt="Project Screenshot" />
    }

    if (image === 'Project-2') {
        return <StaticImage className="bigCard__screenshot__image" src="../images/Project-2.jpg" alt="Project Screenshot" />
    }

    if (image === 'Project-3') {
        return <StaticImage className="bigCard__screenshot__image" src="../images/Project-3.jpg" alt="Project Screenshot" />
    }

}