import { Routes, Route, useLocation } from 'react-router-dom'; //this specifics the exact routes that we have available
import Home from './Components/Home/Home.jsx';
import NavBar from './Components/shared/NavBar/NavBar';
import NationalHistoryPage from './Components/NationalHistoryPage/NationalHistoryPage';
import SisterHistoryPage from './Components/SisterHistoryPage/SisterHistoryPage';
import SisterHistoryGallery from './Components/SisterHistoryPage/SisterHistoryGallery/SisterHistoryGallery';
import SisterProfile from './Components/SisterHistoryPage/SisterHistoryGallery/SisterProfile/SisterProfile';
import BannerGenerator from './Components/shared/Banner/BannerGenerator';
import ChapterHistoryPage from './Components/ChapterHistoryPage/ChapterHistoryPage';
import Footer from './Components/shared/Footer/Footer';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  
  
  const [siteCount,setSiteCount] = useState(null);
  
  
  useEffect(() => {
    async function getVistorCount(){
      const vistorCount = await axios.get('http://localhost:3000/api/v1/vistorcount');
      setSiteCount(vistorCount.data.data.vistorCount)
    }

    getVistorCount();
    
  }, []);

  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home siteCount={siteCount}/>} />
        <Route path="/national-history" element={<NationalHistoryPage />} />
        <Route path="/chapter-history" element={<ChapterHistoryPage />} />
        <Route path="/sister-history" element={<SisterHistoryPage />}>
          <Route path="/sister-history/:line" element={<SisterHistoryGallery />} />
          <Route path="/sister-history/:line/:sister" element={<SisterProfile />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
