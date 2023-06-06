import Carousel from "../../Components/Carousel/Carousel"
import Rating from "../../Components/Rating/Rating"

// import { housingLists } from "../../datas/housingList.js";
function Housing() {


    // const { id } = useParams()

    return (

        <div>
            <Carousel pictures={["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"]}/>
            <h1>Housing</h1>
            <Rating/>
        </div>
        // <div>
        //     <div>
        //         {housingLists.map((housingList, index) => {
        //             return (
        //                 <div key={index}>
        //                     {housingList.id === id ? (
        //                         (
        //                             <div>
        //                                 {housingList.pictures.map((housingPicture, index) => {
        //                                     return (
        //                                         <div key={index}>
        //                                             <img src={housingPicture} alt={housingList.title} />
        //                                         </div>
        //                                     )
        //                                 })}
        //                                 <div><h1>{ housingList.title }</h1></div>
        //                             </div>
        //                         )

        //                     ) : null}
        //                 </div>
        //             )
        //         })}
        //     </div>

        // </div >
    )
}

export default Housing