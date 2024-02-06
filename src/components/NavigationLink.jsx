import {Link} from "react-router-dom"
import '../css/NavigationLink.css'

export default function NavigationLink(props){
    const {linkDestination} = props
    return (
    <ul>
    <Link to={linkDestination} className="NavLink"> {linkDestination === "/" ? "Home" : linkDestination} </Link>
    </ul>
    )
} 