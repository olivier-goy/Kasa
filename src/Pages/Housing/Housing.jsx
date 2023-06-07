import Carousel from "../../Components/Carousel/Carousel"
import Collapse from "../../Components/Collapse/Collapse"
import CollapseText from "../../Components/Collapse/CollapseText/CollapseText"
import CollapseList from "../../Components/Collapse/CollapseList/CollapseList"
import Host from "../../Components/Host/Host"
import Rating from "../../Components/Rating/Rating"
import Tag from "../../Components/Tag/Tag"
import "../Housing/Housing.css"
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"

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
    // const pictures = [
    //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
    //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
    //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
    //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
    //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
    // ]


    const { id } = useParams()
    const [housingData, setHousingData] = useState([])



    useEffect(() => {
        async function fetchHousing() {
            try {
                const response = await fetch('http://localhost:3000/Data/logements.json')
                const result = await response.json()
                // const housingData = await result.filter((data) => data.id === id)

                setHousingData(result[0])

            } catch (err) {
                console.error(err)
            }
        }
        fetchHousing()
    }, [id])

    const pictures = housingData.pictures


    return (
        <div>
            {console.log(housingData.pictures)}

            <Carousel pictures={pictures} />

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
                            picture={{ "name": "Sqsd cqeffeadf", "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" }} />
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
                            description={housingData.description}
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