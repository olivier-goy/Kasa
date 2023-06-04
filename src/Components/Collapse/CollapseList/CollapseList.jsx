function CollapseList({ children }) {

    return (
        <div>
            <ul>
                {children.map(child => (
                    <li key={child}>{ child }</li>
                ))

                }
            </ul>
        </div>
    )

}

export default CollapseList