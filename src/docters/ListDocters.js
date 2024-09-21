import React from 'react';

import "./docters.css"
import Footer from "../main-interface/Footer"


const listDocters = [
    {
        id: 1,
        name: "Dr. Robert Phares",
        image: require("../images/doc-robert.webp"),
        details: "Dr. Robert Phares, MD is a family medicine physician in Eastport, ME. He graduated from Washington University in 2003. He is affiliated with medical facilities Garrett Regional Medical Center and CAMC General Hospital.",
    },
    {
        id: 2,
        name: "Dr. Laurie Churchill",
        image: require("../images/doc-laurie.webp"),
        details: "Dr. Laurie Churchill, MD is a family medicine physician in Eastport, ME and has over 40 years of experience in the medical field. She graduated from Tufts University in 1983. She is affiliated with Calais Community Hospital.",
    },
    {
        id: 3,
        name: "Dr. Susan Luthin",
        image: require("../images/doc-susan.webp"),
        details: "Dr. Susan Luthin, MD is a family medicine physician in Eastport, ME and has over 36 years of experience in the medical field. She graduated from UNIVERSITY OF VERMONT AND STATE AGRICULTURAL COLLEGE in 1987.",
    },
    {
        id: 4,
        name: "Dr. Robert Abrams II",
        image: require("../images/doc-abarmas.webp"),
        details: "Dr. Robert Abrams II, MD is a family medicine physician in Lubec, ME and has over 40 years of experience in the medical field. He graduated from State University of New York Upstate Medical University Norton College of Medicine.",
    },
    {
        id: 5,
        name: "Dr. Shamano Minhas",
        image: require("../images/doc-shamano.webp"),
        details: "Dr. Shamano Minhas, MD is a family medicine physician in Skowhegan, ME. He is affiliated with Calais Community Hospital.",
    },
    {
        id: 6,
        name: "Dr. Brian Adrian",
        image: require("../images/doc-brian.webp"),
        details: "Dr. Brian Adrian, MD is a family medicine physician in Fort Fairfield, ME. He is affiliated with Cary Medical Center. He is not accepting new patients.",
    },
];


const docters = listDocters.map((doc)=>{

    return(
        <div className="docter" key={doc.id}>
         <h2>{doc.name}</h2>
         <hr/>
         <img src={doc.image}/>
         <h4>{doc.details}</h4>
        </div>
    )
})



export default function ListeDocters(){
return(
    <>
    <div className="list-docters">

        <div className="content-doc">
            <h1>أطباء الصحة النفسية</h1>
        <div className="container-docter">
            
            {docters }

        </div>

        </div>
    </div>
    <Footer/>
    </>

)
}
