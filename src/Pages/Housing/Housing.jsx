import { useParams } from "react-router-dom";
import { housingLists } from "../../datas/housingList.js";

function Housing() {


    const { id } = useParams()

    return (
        <div>
            <div>
                {housingLists.map((housingList, index) => {

                    return housingList.id === id ? (

                        housingList.pictures.map(housingPicture => {
                            return <img key={index} src={housingPicture} alt={housingList.title} />
                        })

            ) : null
                })}
        </div>
        </div >
    )
}

export default Housing