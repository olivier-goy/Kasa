import { useParams } from "react-router-dom"

function Housing() {

    const { id } = useParams()

    return <h1>housing { id }</h1>
}

export default Housing