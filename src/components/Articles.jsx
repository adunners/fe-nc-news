import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";
import "../css/Articles.css";
import SearchArticle from "./SearchArticle"

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [articleId, setArticleId] = useState("");
  const [listSingleArticle, setListSingleArticle] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getAllArticles().then((everyArticle) => {
      setAllArticles(everyArticle);
      setIsLoading(false)
    });
  }, []);


  function defaultPage() {
    setListSingleArticle(false);
    setArticleId("");
  }

const article =  allArticles.find((article) => {return article.article_id === Number(articleId)})


  return (
    <>
      <h2 className="articles-h2">Articles </h2>
     <SearchArticle articleId={articleId} setArticleId={setArticleId} setListSingleArticle={setListSingleArticle} allArticles={allArticles}/>
    {isLoading ? <p>loading...</p>: 
      <section className="articles-section">
        {listSingleArticle ? (
          <>
          <div className="articles-search-grid">
            <h3>Your Article Search</h3>
            <div className="articles-link-container">
            <Link className="articles-link" to={articleId}>
             
               <p>Article {articleId}</p> 
               <img className="articles-img-1" src={article.article_img_url} alt="image from the selected article"/>
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
            </div>
          </>
        ) : (
          allArticles.map((article) => {
            return (
              <article key={article.id}>
                <header>
                  <h3 className="articles-h3">{article.title}</h3>
                  <p className="articles-p">Topic: {article.topic}</p>
                  <p className="articles-p">Author: {article.artic}</p>
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
    }
    </>
  );
}
