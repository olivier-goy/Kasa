import "../Banner/Banner.css"

function Banner({ title, image, alt }) {
    return (
        <div className="styleAppImage">
            <img
                src={image}
                alt={alt}
            />
            <h1>{title}</h1>
        </div>
    )
}

export default Banner