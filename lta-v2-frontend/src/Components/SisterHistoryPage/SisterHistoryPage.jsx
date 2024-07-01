import { Outlet, useParams, Link } from "react-router-dom";
import './SisterHistoryPage.css';
import Banner from '../shared/Banner/Banner';
//this json file will provide all the correct information for chapter members
import ChapterData from '../../data/ChapterData.json';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SisterHistoryGallery from './SisterHistoryGallery/SisterHistoryGallery';
import SisterProfile from "./SisterHistoryGallery/SisterProfile/SisterProfile";

export default function SisterHistoryPage() {
    //state: represents currentline
    const [currentLine, setCurrentLine] = useState(useParams().line);

    /*
    //console.log(currentLine);
    if(currentLine !== useParams().line){
        //setCurrentLine(useParams().line);
        setCurrentLine(useParams().line);
    }*/




    //pull current line data from json file. Inludes things like banner img, member img, name, etc
    const currentLineData = ChapterData[currentLine];

    //pull only current line banner img path
    const bannerInfo = currentLineData['banner-info'];

    //pull only current line data (member img, name, etc)
    const currentLineSisterInfo = currentLineData['sisters-info'];

    //gather only keys of ChapterData json file to feed into the NavBar components to generate nav links
    const chapterDataKeyValues = Object.keys(ChapterData);

    //this function is reposonsible for generating the Gallery NavBar

    const onClickChangeState = (e) => {
        setCurrentLine(e.target.id);
    }



    function LinkGenerator() {
        return (
            <div className="SisterHistoryNavBar">
                <ul>
                    {chapterDataKeyValues.map((navLink, index) => {
                        return <li key={uuidv4()}><Link onClick={onClickChangeState} id={navLink} to={`/sister-history/${navLink}`}>{navLink.replace('-', ' ')}</Link></li>
                    })}
                </ul>
            </div>
        )
    }





    return (
        <div className='SisterHistoryPage'>
            <Banner
                imgSrc={bannerInfo.imgSrc}
                imgAlt={bannerInfo.imgAlt}
                h1Text={bannerInfo.bannerH2}
                h2Text={bannerInfo.bannerH3}
            />
            <LinkGenerator />
            <Outlet />
        </div >
    );

}