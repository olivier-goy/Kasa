import imageBanner from "../../Assets/imageHome.jpg";
import "../Banner/Banner.css"


function Banner() {
    return (
        <div className="styleAppImage">
            <img
                src={imageBanner}
                alt="Paysage d'une côte de bord de mer avec des rochers"
            />
            <h1 className="textInnerImage">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner