import Carousel from "../../Components/Carousel/Carousel"

// import { housingLists } from "../../datas/housingList.js";
function Housing() {


    // const { id } = useParams()

    return (

        <div>
            <Carousel/>
            <h1>Housing</h1>
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