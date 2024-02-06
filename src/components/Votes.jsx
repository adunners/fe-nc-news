import { updateVotes } from "../utils/api"
import {useState} from "react"

export default function Votes({articleId, setIndividualArticle}) {
const [error, setError] = useState(null)

function happyClick() {
    const votes = {inc_votes: 1}
    updateVotes(articleId, votes)
    .then(() => {setError(null)})
    .catch((error) => {
        setIndividualArticle((currArticle) => {
            return {...currArticle, votes: currArticle.votes -1}
        })  
        setError("likes not available")
    })
    setIndividualArticle((currArticle) => {
        return {...currArticle, votes: currArticle.votes + 1}
    })
}

    return <div>
        <button className="votes-happyButton" onClick ={happyClick}>Vote 👍</button>
        <p>{error}</p>
    </div>
}