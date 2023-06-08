import "../CollapseList/CollapseList.css"

function CollapseList({ list }) {

    return (
        <div>
            <ul className="listStyle">
                {list.map((list, index) => (
                    <li key={index + list}>{list}</li>
                ))

                }
            </ul>
        </div>
    )
}

export default CollapseList