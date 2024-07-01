import './NationalHistoryPage.css'
import Banner from '../shared/Banner/Banner.jsx'
import PearlListBullet from '../shared/PearlListBullet/PearlListBullet.jsx';

export default function NationalHistoryPage() {
    return (
        <>
            <Banner
                imgSrc="/imgs/national-history/national-history-header.png"
                imgAlt="national history"
                h1Text="national history"
            />
            <div className="NationalHistoryPage">
                <div className="NationalHistoryPageContent">
                    <section className="OurHistorySection">
                        <h1>our history</h1>
                        <p>
                            Traditionally, the role of the Latina woman was that of
                            maintaining the family institution and falling into the realm of
                            the machismo stigma. However, as the Latino migration to the
                            United States increased, so did the emergence of independent
                            Latina women who were eager to be at the forefront of an era of
                            a new educational, political and social consciousness. College
                            and university enrollment mirrored this influx. With this
                            growth, the need for support groups and outreach programs were
                            at an all time high, primarily for the low percentage of Latina
                            women in higher education.
                            <br></br>
                            <br></br>
                            In 1975, Kean University introduced bilingual and
                            Latino/Caribbean studies. Although this enabled the educational
                            advancement of the Latina woman, still missing was the support
                            needed to bridge the equality gap. It was during this time that
                            17 women convened to discuss the formation of a sorority for
                            Latina women. Its focus would be to actively integrate itself
                            into the social, political and community service arena that
                            other students had been involved with. Together, they could
                            collaborate and assist with any student-run programs, thus
                            making their voices as loud as the majority voice and their
                            concerns equally as important.
                        </p>
                    </section>

                    <section className="FoundingMothersSection">
                        <h1>founding mothers</h1>
                        <p>
                            The year 1975 saw the birth of what started as a vision – an
                            idea of an organization, a sisterhood that would cater to the
                            needs of Latinas and, more importantly, the universal woman.
                            Thanks to the tremendous strides made by our 17 founding
                            mothers, this dream was realized, and took form as the entity:
                            Lambda Theta Alpha Latin Sorority, Incorporated, the first
                            Latina sorority in the nation.
                        </p>
                        <img
                            src="imgs/national-history/founding-mothers.png"
                            alt="founding mother photo"
                        />
                    </section>

                    <section className="QuickFactsSection">
                        <h1>quick facts</h1>
                        <ul>
                            <PearlListBullet listTxt="Founded at Kean University in Union, New Jersey" />
                            <PearlListBullet listTxt="Established as an academic sorority" />
                            <PearlListBullet listTxt="Sorority colors are burgundy and grey" />
                            <PearlListBullet listTxt="Established as an academic sorority" />
                            <PearlListBullet listTxt="Sorority goals are scholarly excellence, empowerment of the
                         universal woman, political &amp; cultural awareness and
                        community activism" />
                            <PearlListBullet listTxt="Principles are unity, love and respect" />
                            <PearlListBullet listTxt="Over 160 established undergraduate and alumnae chapters all over the U.S. and Puerto Rico" />
                            <PearlListBullet listTxt="National philanthropy is St. Jude Children’s Research Hospital" />
                            <PearlListBullet listTxt="Members have a hand sign and traditional call " />
                            <PearlListBullet listTxt="LTA does not step, but we do salute and stroll" />
                        </ul>
                    </section>
                </div>
            </div>
        </>


    );
}