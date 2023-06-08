import "../Host/Host.css"

function Host({ host, picture }) {
    
    return (
        <div className="hostStyle">
                <p>{host.name}</p>
                <img src={picture.picture} alt="profil" />
        </div>
    )
}

export default Host