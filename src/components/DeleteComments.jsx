import { deleteComment } from "../utils/api"
import {useState} from "react"


export default function DeleteComments({loggedInUser, comment, commentsById, setCommentsById}) {
const [error, setError] = useState(null)


    function clickHandler(){
        console.log(commentsById, "commentById")
        console.log(comment.comment_id, "detelted comment.comment_id")
        deleteComment(comment.comment_id).then(() => {setError(null)}).catch((error) => {setError("error in request - comment not delete")})

        // optimistic rendering to remove deleted comment from commentsById array. Then re-render the comments display on page, by invoking setCommentsById with the commentById array (hence comments display no longer containing deleted comment)

        const updatedComments = commentsById.filter((articleComment) => {return articleComment.comment_id !== comment.comment_id})
        setCommentsById(updatedComments)
    }


    return (
        <>
        {loggedInUser === comment.author ? <button type="button" className="deleteComment-button" onClick={clickHandler}>Delete Comment</button> : null}
        </>
    )

}