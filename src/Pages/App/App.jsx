import Banner from "../../Components/Banner/Banner"
import "../App/App.css"
import imageBanner from "../../Assets/imageHome.jpg";
import Card from "../../Components/Card/Card"
import { useEffect, useState } from "react";


function App() {

    const [housingsData, setHousingsData] = useState([])

    useEffect(() => {
        async function fetchCard() {
            try {
                const response = await fetch('Data/logements.json')
                const housingsData = await response.json()
                setHousingsData(housingsData)
            } catch (err) {
                console.error(err)
            }
        }
        fetchCard()
    }, [])


    return (
        <div>
            <Banner title="Chez vous, partout et ailleurs" image={imageBanner} alt="Image d'une cote au bord de mer" />
            <div className="cardsHousings">
                {housingsData.map(housing => (
                    <Card
                        key={housing.id}
                        linkCard={'/logements/'+ housing.id}
                        pictureCard={housing.cover}
                        altCard={housing.title}
                        titleCard={housing.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
