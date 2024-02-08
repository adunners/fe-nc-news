import { updateVotes } from "../utils/api"
import {useState} from "react"
import "../css/Votes.css"

export default function Votes({articleId, setIndividualArticle}) {
const [error, setError] = useState(null)
const [firstClick, setFirstClick] = useState(true)

function handleClick(event) {
  
    if(firstClick === true){
    let increment
    if(event.target.innerText === "Vote 👍") increment = 1
    else{increment = -1}

    const votes = {inc_votes: increment}
    updateVotes(articleId, votes)
    .then(() => {setError(null)})
    .catch((error) => {
        setIndividualArticle((currArticle) => {
            return {...currArticle, votes: currArticle.votes - increment}
        })  
        setError("likes not available")
    })
    setIndividualArticle((currArticle) => {
        return {...currArticle, votes: currArticle.votes + increment}
    })
    }

    setFirstClick(false)
}

    return <div className="votes-button">
        <button className="votes-happyButton" onClick={handleClick}>Vote 👍</button>
        <p className="votes-error">{error}</p>
        <button className="votes-sadButton" onClick={handleClick}>Vote 👎</button>
    </div>
}