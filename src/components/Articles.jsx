import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";
import "../css/Articles.css";
import SearchArticle from "./SearchArticle";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [articleId, setArticleId] = useState("");
  const [listSingleArticle, setListSingleArticle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((everyArticle) => {
      setAllArticles(everyArticle);
      setIsLoading(false);
    });
  }, []);

  function defaultPage() {
    setListSingleArticle(false);
    setArticleId("");
  }

  const article = allArticles.find((article) => {
    return article.article_id === Number(articleId);
  });

  return (
    <>
      <h2 className="articles-h2">Articles </h2>
      <SearchArticle
        articleId={articleId}
        setArticleId={setArticleId}
        setListSingleArticle={setListSingleArticle}
        allArticles={allArticles}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <section className="articles-container">
          {listSingleArticle ? (
            <>
              <div className="articles-individualCard">
                <h3 className="articles-title">Your Article Search</h3>
                  <Link className="articles-link" to={articleId}>
                    <p>Article {articleId}</p>
                    <img
                      className="articles-image"
                      src={article.article_img_url}
                      alt="image from the selected article"
                    />
                  </Link>
                    </div>
                <button
                  className="articles-button"
                  type="submit"
                  id="submit"
                  onClick={defaultPage}
                  >
                  Back
                </button>
            </>
          ) : 
          (
            allArticles.map((article) => {
              return (
                <div  className="articles-card" key={article.article_id}>
                <Link className="articles-link" to={`/articles/${article.article_id}`}>
                    <img
                      src={article.article_img_url}
                      alt="image relating to article"
                      className="articles-image"
                      />
                      <h3 className="articles-title">{article.title}</h3>
                      </Link>
                      <p className="articles-p">Topic: {article.topic}</p>
                      <p className="articles-p">Author: {article.author}</p>
                      <p className="articles-p">
                        Published:
                        {new Date(article.created_at).toLocaleDateString()}
                      </p>
                      <p className="articles-p">Votes: {article.votes}</p>
                      <p className="articles-p">
                        Comments: {article.comment_count}
                      </p>
                    </div> 
               );
              })
              )}
      
      </section>
      )}
    </>
  );
}
