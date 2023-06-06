import "../Rating/Rating.css"
import RatingLight from "../../Assets/RatingLight.png"
import RatingOff from "../../Assets/RatingOff.png"

function Rating() {
    return (
        <div>
            <h1>teste rating</h1>
            <img src={RatingLight} alt="" />
            <img src={RatingOff} alt="" />
        </div>
    )
}

export default Rating