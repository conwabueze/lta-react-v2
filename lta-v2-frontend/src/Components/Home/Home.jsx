import './Home.css'
import Banner from '../shared/Banner/Banner';
import { useState, useEffect } from 'react';
import axios from 'axios';

//This component represents the entire homepage of the site
export default function Home({siteCount}) {

    return (
        <>
            <Banner
                imgSrc="/imgs/home/home-header1.jpg"
                imgAlt="Home"
                h1Text="Delta Zeta Chapter"
                h2Text="stony brook university"
                h3Text="latin by traditon not by definition"
                siteCount={siteCount}
            />
            <div className='Home'>
                {/*Home content*/}
                <div className="Home-content">
                    <h1 className="Home-content-header">
                        rooted in our <span>Purpose</span>
                    </h1>
                    <p className="Home-content-body">
                        Since our establishment in 1975, Lambda Theta Alpha Latin
                        Sorority, Incorporated has strived to empower women from all
                        cultures as well as make noteworthy contributions to our
                        communities. Today, our organization accomplishes this while
                        upholding a sisterhood based on Unity, Love, and Respect. We
                        develop strong leaders who provide and practice political, social,
                        and cultural activities. We also promote Latino unity through
                        charitable and educational programs to maintain a higher standard
                        of learning. Delta Zeta has been dedicated to carrying out our
                        mission since it’s establishment in 2006. Feel free to browse
                        through our website to learn more about our organization, chapter,
                        and sisters!
                    </p>
                </div>


            </div>
        </>


    )
}