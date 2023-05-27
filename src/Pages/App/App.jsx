import { housingLists } from "../../datas/housingList";
import "../App/App.css";
import Banner from "../../Components/Banner/Banner";

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

            <Banner/>

            <div className="styleHousingInnerHomePage">
                <div className="cardsHousings">
                    {cardHousing}
                </div>
            </div>
        </div>
    );
}

export default App;
