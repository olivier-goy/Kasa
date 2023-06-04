import "../CollapseList/CollapseList.css"

function CollapseList({ children }) {

    console.log(children)

    return (
        <div>
            <ul className="listStyle">
                {children.map((child, index) => (
                    <li key={ index }>{ child }</li>                   
                ))

                }
            </ul>
        </div>
    )
}

export default CollapseList