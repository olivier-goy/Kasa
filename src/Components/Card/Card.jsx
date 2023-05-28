import { housingLists } from "../../datas/housingList"
import "../Card/Card.css"

function Card() {

    const cardHousing = housingLists.map((housingList) =>
    <a href={"/logements/" + housingList.id} key={housingList.id} className="cardHousing">
        <img src={housingList.cover} alt={housingList.title} />
        <div className="cardBoxShadow">
            <p>{housingList.title}</p>
        </div>
    </a>
)

    return (
        <div className="styleHousingInnerHomePage">
            <div className="cardsHousings">
                {cardHousing}
            </div>
        </div>
    )
}

export default Card