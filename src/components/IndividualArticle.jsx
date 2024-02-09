import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
import "../css/IndividualArticle.css"
import Comments from "./Comments"
import Votes from "./Votes"
import AddComment from "./AddComment"

export default function IndividualArticle() {
  const { articleId } = useParams();
  const [IndividualArticle, setIndividualArticle] = useState({});
  const [commentsById, setCommentsById] = useState([]);

  useEffect(() => {
    getArticleById(articleId).then((article) => {
      setIndividualArticle(article);
    });
  }, []);

  return (
    <>
    <article className="individualArticle-article">
      <header>
        <h3 className="individualArticle-h3">{IndividualArticle.title}</h3>
        <p className="individualArticle-p">Topic: {IndividualArticle.topic}</p>
        <p className="individualArticle-p">Author: {IndividualArticle.author}</p>
        <p className="individualArticle-p">{IndividualArticle.body}</p>

        <p className="individualArticle-p">
          Published: {" "}
          {new Date(IndividualArticle.created_at).toLocaleDateString()}
        </p>
      </header>
      <img
        src={IndividualArticle.article_img_url}
        alt="image relating to article"
        className="individualArticle-img"
      />
      <p className="individualArticle-p">Votes: {IndividualArticle.votes}</p>
      <p className="individualArticle-p">Comments: {IndividualArticle.comment_count}</p>
    </article>
    <Votes articleId={articleId} setIndividualArticle={setIndividualArticle}/>
    <AddComment articleId={articleId} setCommentsById={setCommentsById} />
    <Comments articleId={articleId} commentsById={commentsById} setCommentsById={setCommentsById}/>
    </>
  );
}
