import { useState } from "react"
import "../Collapse/Collapse.css"
import vectorClose from "../../Assets/Vector_1.png"
import vectorOpen from "../../Assets/Vector_2.png"
import CollapseText from "./CollapseText/CollapseText"
import CollapseList from "./CollapseList/CollapseList"

function Collapse({ title, children }) {

    const [isOpenCollapse, setIsOpenCollapse] = useState(true)

    return (
        <div>
            {isOpenCollapse ? (
                <div className="collapsible">
                    <div className="innerCollapse">
                        <div>{title}</div>
                        <div>
                            <img src={vectorOpen} onClick={() => setIsOpenCollapse(false)} alt="logo vector fermé" />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="collapsible">
                        <div className="innerCollapse">
                            <div>{title}</div>
                            <div >
                                <img src={vectorClose} onClick={() => setIsOpenCollapse(true)} alt="logo vector ouvert" />
                            </div>
                        </div>
                    </div>
                        <div className="content">
                           { children.props.description ? (
                            <CollapseText>{children.props.description}</CollapseText>
                           ) : (
                            <CollapseList>{ children.props.list }</CollapseList>
                            )}
                    </div>
                </div>

            )}

        </div>

    )
}

export default Collapse