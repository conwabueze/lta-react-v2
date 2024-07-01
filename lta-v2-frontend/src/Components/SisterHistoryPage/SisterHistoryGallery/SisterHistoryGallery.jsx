import './SisterHistoryGallery.css';
import { Link, Outlet, useParams} from "react-router-dom";
import ChapterData from '../../../data/ChapterData.json';
import { v4 as uuidv4 } from 'uuid';

export default function SisterHistoryGallery({sisterProfileCurrIndex}) {
   
    const sistersInfo =  useParams().line !== undefined ? ChapterData[useParams().line]['sisters-info']:ChapterData['founding-mothers']['sisters-info'];
    
    function RenderSisterCard() {
        
        return sistersInfo.map((sister, index) => {
            //take sister name and replace all spaces in name with dash and set name to all lowercase
            const sisterNameParam = sister.name.replace(/ /g, '-').toLowerCase();
            return (
                <Link key={uuidv4()} to={`/sister-history/${useParams().line}/${sisterNameParam}-${index}`} className="SisterHistoryGalleryCard">
                    <img src={sister.imgSrc} />
                    <h1>{sister.name}</h1>
                </Link>
            )
        }
        )
    }

    return (
        <div className="SisterHistoryGallery">
            <RenderSisterCard />
            
        </div>
    );
}