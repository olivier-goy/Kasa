import Banner from "../../Components/Banner/Banner"
import imageBanner from "../../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Collapse from "../../Components/Collapse/Collapse";
import CollapseText from "../../Components/Collapse/CollapseText/CollapseText";
import CollapseList from "../../Components/Collapse/CollapseList/CollapseList";

function About() {

    const tables = [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI"
    ]

    return (
        <div>
            <Banner image={imageBanner} alt="Paysage de montagne" />
            <Collapse
                title="description"
            >
                <CollapseText
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam culpa, dicta dignissimos sit temporibus exercitationem cum ducimus nam aut earum beatae quo dolores nostrum similique, inventore maiores error a?"
                />
            </Collapse>
            <Collapse
                title="list"
            >
                    <CollapseList
                    list={tables}
                />
             
            </Collapse>
        </div>
        
    )
}

export default About