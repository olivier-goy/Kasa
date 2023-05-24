import "../Footer/Footer.css"
import logo from "../../Assets/LOGO-WHITE.png"

function Footer() {
    return (
        <div className="styleFooterCommun">
            <img src={logo} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;