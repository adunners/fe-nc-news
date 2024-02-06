import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";
import "../css/Articles.css";
import SearchArticle from "./SearchArticle"

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [articleId, setArticleId] = useState("");
  const [listSingleArticle, setListSingleArticle] = useState(false);

  useEffect(() => {
    getAllArticles().then((everyArticle) => {
      setAllArticles(everyArticle);
    });
  }, []);


  function defaultPage() {
    setListSingleArticle(false);
    setArticleId("");
  }

  return (
    <>
      <h2 className="articles-h2">Articles </h2>
     <SearchArticle articleId={articleId} setArticleId={setArticleId} setListSingleArticle={setListSingleArticle} allArticles={allArticles}/>
      <section className="articles-section">
        {listSingleArticle ? (
          <>
            <h3>Your Article Search</h3>
            <Link className="articles-link" to={articleId}>
              Article {articleId}
            </Link>
            <button
              className="articles-button"
              type="submit"
              id="submit"
              onClick={defaultPage}
            >
              Back
            </button>
          </>
        ) : (
          allArticles.map((article) => {
            return (
              <article key={article.id}>
                <header>
                  <h3 className="articles-h3">{article.title}</h3>
                  <p className="articles-p">Topic: {article.topic}</p>
                  <p className="articles-p">Author: {article.author}</p>
                  <p className="articles-p">
                    Published:
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                </header>
                <img
                  src={article.article_img_url}
                  alt="image relating to article"
                  className="articles-img"
                />
                <section>
                  <p className="articles-p">Votes: {article.votes}</p>
                  <p className="articles-p">
                    Comments: {article.comment_count}
                  </p>
                </section>
              </article>
            );
          })
        )}
      </section>
    </>
  );
}
