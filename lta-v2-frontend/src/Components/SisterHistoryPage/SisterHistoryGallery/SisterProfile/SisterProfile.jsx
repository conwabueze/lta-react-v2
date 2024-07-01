import './SisterProfile.css';
import ChapterData from '../../../../data/ChapterData.json';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import PearlListBullet from '../../../shared/PearlListBullet/PearlListBullet';
import { v4 as uuidv4 } from 'uuid';

export default function SisterProfile() {
    const { line, sister } = useParams();
    const sisterIndex = sister.split('-')[sister.split('-').length - 1];
    const sisterDetails = ChapterData[line]['sisters-info'][sisterIndex];
    const { name, imgSrc, facts } = sisterDetails;

    function RenderFacts(){
        return facts.map((fact,index) => {
            return <PearlListBullet key={uuidv4()} listTxt={fact}/>
        })
    }
    return (
        <div className='SisterProfile'>
            <Link to={`/sister-history/${line}`}>{`${String.fromCharCode(8592)} BACK`}</Link>
            <div className='SisterProfileDetails'>
                <img src={imgSrc} alt={name} />
                <h1>{name}</h1>
                <ul>
                    <RenderFacts/>
                </ul>
            </div>
        </div>
    );
}