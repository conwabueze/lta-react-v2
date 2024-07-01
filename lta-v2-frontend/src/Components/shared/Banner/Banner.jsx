import './Banner.css'
function Banner({ imgSrc, imgAlt, h1Text, h2Text, h3Text, siteCount }) {
    return (
        <div className="Banner">
            <div className="Banner-img-container">
                <img
                    className="Banner-img"
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>

            <div className="Banner-header-container">
                <h1>{h1Text}</h1>
                <h2>{h2Text}</h2>
                <h3>{h3Text}</h3>
                {siteCount!=null?<h4>this site has been viewed <span>{siteCount}</span> times</h4>:""}
            </div>
        </div>
    )
}

export default Banner;