import {useState} from "react"
import { postComment } from "../utils/api"
import "../css/AddComment.css"

export default function AddComment({articleId, setCommentsById, loggedInUser}) {
const [username, setUsername] = useState("")
const [body, setBody] = useState("")
const [error, setError] = useState(null)

function textInput(event){
    if(event.target.id === "username"){
        setUsername(event.target.value)}

    if(event.target.id === "body"){
    setBody(event.target.value)}
}


function onClickHandler(event){
    event.preventDefault()
    const commentToPost = {username, body}
    postComment(articleId, commentToPost).then(() => {setError(null)}).catch((error) => {setError("comment not posted - incorrect username")})

    const commentToInitiallyShowUser = {author:username, body: body, votes:0, created_at: new Date().toLocaleDateString(), comment_id: Date.now() }

    if(loggedInUser === username){
    setCommentsById((currComments) => {return [commentToInitiallyShowUser,...currComments]})}
    
}

return (
    <>
    <form className="addComment-form">
        <label className="addComment-label" htmlFor="username">Username: </label>
        <input className="addComment-input" id="username" type="text" value={username} onChange={textInput} required></input><br></br>
        <label className="addComment-label" htmlFor="body">Comment: </label>
        <input  className="addComment-input"  id="body" type="text" value={body} onChange={textInput} required></input><br></br>
        <button className="addComment-submit" type="submit" id="submit" onClick={onClickHandler}>Submit Comment</button>
        <p className="addComment-error">{error}</p>
    </form>
    </>
)

}