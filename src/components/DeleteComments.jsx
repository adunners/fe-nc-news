import { deleteComment } from "../utils/api"
import {useState, useContext} from "react"
import UserName from "../contexts/UserName"


export default function DeleteComments({ comment, commentsById, setCommentsById}) {
const [error, setError] = useState(null)

const loggedInUser = useContext(UserName)

    function clickHandler(){
        deleteComment(comment.comment_id).then(() => {setError(null)}).catch((error) => {setError("error in request - comment not deleted")})

        const updatedComments = commentsById.filter((articleComment) => {return articleComment.comment_id !== comment.comment_id})
        setCommentsById(updatedComments)
    }


    return (
        <>
        {loggedInUser === comment.author ? <button type="button" className="deleteComment-button" onClick={clickHandler}>Delete Comment</button> : null}
        {error}
        </>
    )

}