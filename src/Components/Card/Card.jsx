import { Link } from 'react-router-dom'
import "../Card/Card.css"

function Card({ linkCard, pictureCard, altCard, titleCard }) {

    return (
        <Link to={linkCard} className="cardHousing" reloadDocument>
            <img src={pictureCard} alt={altCard} />
            <div className="cardBoxShadow">
                <p>{titleCard}</p>
            </div>
        </Link>
    )
}

export default Card