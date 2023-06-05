import { useState } from "react"
import "../Collapse/Collapse.css"
import vectorClose from "../../Assets/Vector_1.png"
import vectorOpen from "../../Assets/Vector_2.png"


function Collapse({ title, children }) {

    const [isOpenCollapse, setIsOpenCollapse] = useState(false)

    return (
        <div>
            <div>
                <div className="collapsible">
                    <div className="innerCollapse">
                        <div className="collapseTitle">{title}</div>
                        <div className="collapsePicture">
                            <img src={isOpenCollapse ? vectorOpen : vectorClose} onClick={() => setIsOpenCollapse(!isOpenCollapse)} alt="logo vector ouvert" />
                        </div>
                    </div>
                </div>
                {
                    isOpenCollapse &&
                    <div className="content">
                        {children}
                    </div>
                }
            </div>
        </div>
    )
}

export default Collapse