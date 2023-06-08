import "../Footer/Footer.css"
import logo from "../../Assets/LOGO-WHITE.png"

function Footer() {
    
    return (
        <div className="styleFooterCommun">
            <img src={logo} alt="Logo de la sociète kasa, le logo est kasa en écriture et le premier a représente une maison" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;