import './PearlListBullet.css'
import pearl from "../../../assets/pearl-bulletpoint.png"

export default function PearlListBullet({listTxt}) {
    return (
        <li className='PearlListBullet' style={{backgroundImage: `url(${pearl})`}}>
            <p>{listTxt}</p>
        </li>
    );
}