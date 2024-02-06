import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import "../css/Articles.css"

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((everyArticle) => {
      setAllArticles(everyArticle);
    });
  }, []);

  return (
    <>
      <h2 className="articles-h2">Articles </h2>
      <section className="articles-section">
        {allArticles.map((article) => {
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
                  <p className="articles-p">Comments: {article.comment_count}</p>
                </section>
              </article>
          );
        })}
      </section>
      </>
  );
}
