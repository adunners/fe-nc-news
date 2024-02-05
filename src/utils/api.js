import axios from "axios"

const ncNews = axios.create({baseURL: 'https://alex-nc-news.onrender.com/api'})

export function getAllArticles(){
    return ncNews.get("/articles").then((response) => {
        return response.data.articles
    })
}