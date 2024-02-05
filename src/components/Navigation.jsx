import { useState} from "react"
import NavigationLink from "./NavigationLink"
import "../css/Navigation.css"

export default function Navigation() {
    const [pageLinks, setPageLinks] = useState(["Home","Articles", "Topics"])
    return (
        <nav>
            <ul className="navigation-container">
                {pageLinks.map((pageLink) => {
                    return <NavigationLink key={pageLink} linkDestination={pageLink} />
                })}
            </ul>
        </nav>
    )
}