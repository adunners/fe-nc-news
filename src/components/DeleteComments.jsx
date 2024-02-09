import { deleteComment } from "../utils/api"
import {useState, useContext} from "react"
import UserName from "../contexts/UserName"
import "../css/DeleteComments.css"


export default function DeleteComments({ comment, commentsById, setCommentsById}) {
const [error, setError] = useState(null)

const loggedInUser = useContext(UserName)

    function clickHandler(){
        deleteComment(comment.comment_id).then(() => {
            const updatedComments = commentsById.filter((articleComment) => {return articleComment.comment_id !== comment.comment_id})
            setCommentsById(updatedComments)
            setError(null)}).catch((error) => {setError("error in request - comment not deleted")})

    }


    return (
        <>
        {loggedInUser === comment.author ? <button type="button" className="deleteComment-button" onClick={clickHandler}>Delete Comment</button> : null}
        <p className="deleteComments-error">{error}</p>
        </>
    )

}