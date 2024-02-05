import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import '../css/Article.css'

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((everyArticle) => {
      setAllArticles(everyArticle);
    });
  }, []);

  return (
    <>
      <h2>Articles</h2>
      <section>
        {allArticles.map((article) => {
          return (
            <>
              <article key={article.id}>
                <header>
                  <h3>{article.title}</h3>
                  <p>Topic: {article.topic}</p>
                  <p>Author: {article.author}</p>
                  <p>
                    Published:
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                </header>
                <img src={article.article_img_url} alt="image relating to article"/>
                <section>
                  <p>Votes: {article.votes}</p>
                  <p>Comments: {article.comment_count}</p>
                </section>
              </article>
            </>
          );
        })}
      </section>
    </>
  );
}
