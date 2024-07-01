import './Banner.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';
import ChapterData from '../../../data/ChapterData.json';

export default function BannerGenerator({ currentLocation }) {

    //get an array of all the current banner. This will be used to recognize what route we are in and will assist in rendering the correct banner based on our path
    const getParams = currentLocation.split('/');

    //For some reason there is always a unnessary empty string in the first index of the array. This is here in order to remove it.
    getParams.shift();

    /*
    The homepage banner is dynamic pull in that it pulls the total amount of vistors through a API that leverages a DB.
    Since this is the case will be showing the currentVistor count in Home Banner
    */
    async function HomeBanner() {
        const vistorCount = await axios.get('http://localhost:3000/api/v1/vistorcount');
        console.log(vistorCount);
    }

    //This function will read our current location/path and render the correct banner based on it
    function GenerateBanner() {

        //if we have only 1 param in our array. We are either dealing with the Home, National History, or Chapter History pages
        if (getParams.length === 1) {

            //based on what is in the first index generate the correct banner
            if (getParams[0] === '') {
                HomeBanner();
                return (
                    <Banner
                        imgSrc="/imgs/home/home-header1.jpg"
                        imgAlt="Home"
                        h1Text="Delta Zeta Chapter"
                        h2Text="stony brook university"
                        h3Text="latin by traditon not by definition"
                    />
                )
            }

            else if (getParams[0] === 'national-history') {
                return (
                    <Banner
                        imgSrc="/imgs/national-history/national-history-header.png"
                        imgAlt="national history"
                        h1Text="national history"
                    />
                )
            }

            else if (getParams[0] === 'chapter-history') {
                return (
                    <Banner
                        imgSrc="/imgs/chapter-history/chapter-history-hero.jpeg"
                        imgAlt="chapter history"
                        h1Text="chapter history"
                    />
                )
            }

        }

        //if we have 2 or more params in our array, we are in the sister history page and is associated sister profiles. So render those.
        else if (getParams.length >= 2) {
            const bannerInfo = ChapterData[getParams[1]]['banner-info'];
            return (
                <Banner
                    imgSrc={bannerInfo.imgSrc}
                    imgAlt={bannerInfo.imgAlt}
                    h1Text={bannerInfo.bannerH2}
                    h2Text={bannerInfo.bannerH3}
                />
            );
        }
    }

    return (
        <GenerateBanner />
    )
}

