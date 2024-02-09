import {Link, useParams} from "react-router-dom"
import "../css/TopicsCard.css"
import { getAllArticles } from "../utils/api"
import { useEffect, useState } from "react"

export default function TopicsCard({articlesByTopic}){
  

    return(<>

     <section className="topicsCard-container">
    {articlesByTopic.map((article) => {
              return (
                <div  className="topicsCard-card" key={article.article_id}>
                <Link className="topicsCard-link" to={`/articles/${article.article_id}`}>
                    <img
                      src={article.article_img_url}
                      alt="image relating to article"
                      className="topicsCard-image"
                      />
                      <h3 className="topicsCard-title">{article.title}</h3>
                      </Link>
                      <p className="topicsCard-p">Topic: {article.topic}</p>
                      <p className="topicsCard-p">Author: {article.author}</p>
                      <p className="topicsCard-p">
                        Published:
                        {new Date(article.created_at).toLocaleDateString()}
                      </p>
                      <p className="topicsCard-p">Votes: {article.votes}</p>
                      <p className="topicsCard-p">
                        Comments: {article.comment_count}
                      </p>
                    </div> 
               );
              })}
              </section>
    </>
    )
}