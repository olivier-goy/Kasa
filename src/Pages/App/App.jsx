import { housingLists } from "../../datas/housingList.js";
import imageHome from "../../Assets/imageHome.jpg";
import "../App/App.css";

function App() {

    const cardHousing = housingLists.map((housingList) =>
        <a href={"/logements/" + housingList.id} key={housingList.id} className="cardHousing">
                <img src={housingList.cover} alt={housingList.title} />
                <div className="cardBoxShadow">
                    <p>{housingList.title}</p>
                </div>
        </a>
    )

    return (
        <div className="styleAppCommun">
            <div className="styleAppImage">
                <img
                    src={imageHome}
                    alt="Paysage d'une côte de bord de mer avec des rochers"
                />
                <h1 className="textInnerImage">Chez vous, partout et ailleurs</h1>
            </div>

            <div className="styleHousingInnerHomePage">
                <div className="cardsHousings">
                    {cardHousing}
                </div>
            </div>
        </div>
    );
}

export default App;
