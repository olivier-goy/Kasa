import Banner from "../../Components/Banner/Banner"
import imageBanner from "../../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Collapse from "../../Components/Collapse/Collapse";
import CollapseText from "../../Components/Collapse/CollapseText/CollapseText";
import "../../Pages/About/About.css"

function About() {

    return (
        <div>
            <Banner image={imageBanner} alt="Paysage de montagne" />
            <div className="collapseAbout">
                <Collapse
                    title="Fiabilité"
                >
                    <CollapseText
                        description="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, 
                    et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    />
                </Collapse>
                <Collapse
                    title="Respect"
                >
                    <CollapseText
                        description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                </Collapse>
                <Collapse
                    title="Service"
                >
                    <CollapseText
                        description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                    N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                </Collapse>
                <Collapse
                    title="Sécurité"
                >
                    <CollapseText
                        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                    chaque logement correspond aux critères de sécurité établis par nos services. 
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                     Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </Collapse>
            </div>
        </div>

    )
}

export default About