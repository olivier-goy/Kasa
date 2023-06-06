import Carousel from "../../Components/Carousel/Carousel"
import Collapse from "../../Components/Collapse/Collapse"
import CollapseText from "../../Components/Collapse/CollapseText/CollapseText"
import CollapseList from "../../Components/Collapse/CollapseList/CollapseList"
import Host from "../../Components/Host/Host"
import Rating from "../../Components/Rating/Rating"
import Tag from "../../Components/Tag/Tag"
import "../Housing/Housing.css"

function Housing() {

    const tags = [
        "Transports",
        "Cheap",
        "18ème"
    ]
    const equipements = [
        "Parking",
        "Sèche Cheveux",
        "Machine à laver",
        "Wi-fi",
        "Cuisine équipée",
        "Télévision"
    ]
    const description = "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture."


    // const { id } = useParams()

    return (

        <div>
            <Carousel pictures={["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"]} />
            <div className="titleHostRating">
                <div className="titreAndLocalisation">
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <p>Paris, Île-de-France</p>
                    {tags.map((tag, index) => 
                    
                    <Tag key={index + tag} label={tag} />
                    )}
                </div>
                <div className="hostRating">
                    <div className="hostHousing">
                        <Host
                            host={{ "name": "Sqsd cqeffeadf" }}
                            picture={{ "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" }} />
                    </div>
                    <div className="ratingHousing">
                        <Rating rating="4" />
                    </div>
                </div>
            </div>
            <div className="collapseHousing">
                <div className="collapseHousingText">
                    <Collapse title="Description">
                        <CollapseText
                            description={description}
                        />
                    </Collapse>
                </div>
                <div className="collapseHousingList">
                    <Collapse title="Equipements">
                        <CollapseList
                            list={equipements}
                        />
                    </Collapse>
                </div>
            </div>

        </div>

    )
}

export default Housing