import "../Host/Host.css"

function Host({ hostName, picture }) {
    
    return (
        <div className="hostStyle">
                <p>{hostName}</p>
                <img src={picture} alt={hostName} />
        </div>
    )
}

export default Host