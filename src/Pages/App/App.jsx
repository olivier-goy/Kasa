import Banner from "../../Components/Banner/Banner"
import Card from "../../Components/Card/Card"
import "../App/App.css"
import imageBanner from "../../Assets/imageHome.jpg";
import Tag from "../../Components/Tag/Tag";

function App() {
    const index = [1, 2, 3, 4, 5, 6,]

    return (
        <div>
            <Banner title="adfaf" image={ imageBanner } alt="qdfsqsfdv"/>

            <div className="styleHousingInnerHomePage">
                {
                    index.map(i => <Tag label={i}></Tag>)
                }
            </div>
        </div>
    )
}

export default App
