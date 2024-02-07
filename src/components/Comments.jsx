import { useEffect, useState } from "react";
import { getArticleIdComments } from "../utils/api";
import "../css/Comments.css";

export default function Comments({ articleId, commentsById, setCommentsById }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleIdComments(articleId).then((comments) => {
      setCommentsById(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <h3 className="comments-h3">Comments</h3>
          <div className="comments-comment">
            {commentsById.length === 0 ? (
              <p>no comments for this article</p>
            ) : (
              commentsById.map((comment) => {
                return (
                  <article
                    className="comments-article"
                    key={comment.comment_id}
                  >
                    <p className="comments-content">Comment: {comment.body}</p>
                    <p className="comments-content">Votes: {comment.votes}</p>
                    <p className="comments-author">Auhtor: {comment.author}</p>
                    <p className="comments-time">
                      Published:{" "}
                      {new Date(comment.created_at).toLocaleDateString()}
                    </p>
                  </article>
                );
              })
            )}
          </div>
        </>
      )}
    </>
  );
}
