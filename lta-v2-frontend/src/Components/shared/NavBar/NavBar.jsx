import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

//desktop navigation bar
function NavBarDesktop() {
    return (
        <nav className='NavBar'>
            <div className="NavBarContainer">
                <Link to="/"><img src="/imgs/logo.png" alt="logo" className="NavBarLogo" /></Link>
                <ul>
                    <li> <Link to="/national-history">national history</Link></li>
                    <li> <Link to="/chapter-history">chapter history</Link></li>
                    <li> <Link to="/sister-history/founding-mothers">sister history</Link></li>
                </ul>
            </div>
        </nav>
    );
}

function NavBarMobile() {
    //state: responsible for revealing and unrevealing th hangburger menu items upon click
    const [mobileNavToggle, setMobileNavToggle] = useState(false);

    const closeMobileNav = () => setMobileNavToggle(false);

    //jsx for mobilelink feature overlay menu and closing
    function MobileNavLinks() {
        return (
            <div className='MobileNavLinksContainer'>
                <button onClick={closeMobileNav} className='NavBarCloseBtn'>{String.fromCharCode(9747)} close</button>
                <ul>
                    <li> <Link to="/national-history" onClick={closeMobileNav}>national history</Link></li>
                    <li> <Link to="/chapter-history" onClick={closeMobileNav}>chapter history</Link></li>
                    <li> <Link to="/sister-history/founding-mothers" onClick={closeMobileNav}>sister history</Link></li>
                </ul>
            </div>

        )
    }

    return (
        <nav className='NavBar'>
            <div className="NavBarContainer">
                <Link to="/"><img src="/imgs/logo.png" alt="logo" className="NavBarLogo" /></Link>
                {/*Hamburger buttion with onclick menu to reveal menu links when clicked on*/}
                <button onClick={() => setMobileNavToggle(true)} className='NavBarHamburgerBtn' >{String.fromCharCode(9776)}</button>

                {/*When hamburger button is clicked reveal menu items*/}
                {mobileNavToggle && <MobileNavLinks />}
            </div>
        </nav>
    );
}

export default function NavBar() {
    //setting state to understand if is we are in a mobile screensize
    //this will be determined by a boolean and the state will be changed by listening for resizes in the event
    const [mobile, setMobile] = useState(window.innerWidth >= 1200 ? false : true);

    //function that constantly check for changes in screensize aka possible manuplation of the broswer
    const checkScreenSize = () => {
        window.addEventListener('resize', () => {
            window.innerWidth >= 1200 ? setMobile(false) : setMobile(true);
        });
        
    }

    //effect that allows for that constant change
    useEffect(checkScreenSize);

    //return Mobile or Desktop nav depending on render
    return (
        <>{mobile ? <NavBarMobile /> : <NavBarDesktop />}</>
    );
}