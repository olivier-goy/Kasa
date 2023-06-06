import Carousel from "../../Components/Carousel/Carousel"
import Rating from "../../Components/Rating/Rating"
import "../Housing/Housing.css"

function Housing() {


    // const { id } = useParams()

    return (

        <div>
            <Carousel pictures={["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"]} />
            <div className="ratingHost">
                <Rating rating="4" />
            </div>
        </div>

    )
}

export default Housing