import "../Rating/Rating.css"
import RatingLight from "../../Assets/RatingLight.png"
import RatingOff from "../../Assets/RatingOff.png"

function Rating({ rating }) {

    const index = [1, 2, 3, 4, 5]

    return (
        <div>
            {!rating ? (
                <div>Auncune notation n'a encore était donner</div>
            ) : (
                <div className="ratingStyle">
                    {index.map((i, index) =>
                        rating >= i ? (
                            <img key={rating + index} src={RatingLight} alt="" />
                        ) : (
                            <img key={rating + index} src={RatingOff} alt="" />
                        )
                    )}
                </div>
            )
            }
        </div>
    )
}

export default Rating