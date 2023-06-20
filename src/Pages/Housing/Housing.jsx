import Carousel from "../../Components/Carousel/Carousel"
import Collapse from "../../Components/Collapse/Collapse"
import CollapseText from "../../Components/Collapse/CollapseText/CollapseText"
import CollapseList from "../../Components/Collapse/CollapseList/CollapseList"
import Host from "../../Components/Host/Host"
import Rating from "../../Components/Rating/Rating"
import Tag from "../../Components/Tag/Tag"
import "../Housing/Housing.css"
import { useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"

function Housing() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [isDataLoading, setDataLoading] = useState(false)
    const [housingData, setHousingData] = useState()

    useEffect(() => {
        async function fetchHousing() {
            try {
                const response = await fetch('http://localhost:3000/Data/logements.json')
                const result = await response.json()
                const housingData = await result.find((data) => data.id === id)
                if (!housingData) {
                    return navigate('/logement-non-trouvé')
                }
                setHousingData(housingData)
                setDataLoading(true)
            } catch (err) {
                console.error(err)
            }
        }
        fetchHousing()
    })

    return isDataLoading ? (
        <div>
            <Carousel pictures={housingData.pictures} altCarousel={housingData.title} />
            <div className="titleHostRating">
                <div className="titreAndLocalisation">
                    <h1>{housingData.title}</h1>
                    <p>{housingData.location}</p>
                    {housingData.tags.map((tag, index) =>
                        <Tag key={index + tag} label={tag} />
                    )}
                </div>
                <div className="hostRating">
                    <div className="hostHousing">
                        <Host
                            hostName={housingData.host.name}
                            picture={housingData.host.picture} />
                    </div>
                    <div className="ratingHousing">
                        <Rating rating={housingData.rating} />
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
                            list={housingData.equipments}
                        />
                    </Collapse>
                </div>
            </div>
        </div>
    ) : (
        <div>Chargement</div>
    )
}

export default Housing