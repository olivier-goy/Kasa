import { useState } from "react"
import "../Carousel/Carousel.css"
import vectorNext from "../../Assets/vectorNext.png"
import vectorPrev from "../../Assets/vectorPrev.png"

function Carousel({ pictures }) {

    const [index, setIndex] = useState(0)

    function nextIndex() {
        if (index === pictures.length - 1) {
            return setIndex(0)
        }
        setIndex(index + 1)
    }

    function prevIndex() {
        if (index === 0) {
            return setIndex(pictures.length - 1)
        }
        setIndex(index - 1)
    }

    return (
        <div className="carouselStyle">
            <img src={pictures[index]} className="pictureCarousel" alt="" />
            {
                pictures.length > 1 &&
                <div className="navCarousel">
                    <div className="prevCarouselStyle">
                        <img src={vectorPrev} onClick={prevIndex} alt="" />
                    </div>
                    <span>{index + 1}/{pictures.length}</span>
                    <div className="nextCarouselStyle">
                        <img src={vectorNext} onClick={nextIndex} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}

export default Carousel
