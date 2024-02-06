import axios from "axios"

const ncNews = axios.create({baseURL: 'https://alex-nc-news.onrender.com/api'})

export function getAllArticles(){
    return ncNews.get("/articles").then((response) => {
        return response.data.articles
    })
}

export function getArticleById(articleId){
    return ncNews.get(`/articles/${articleId}`).then((response) => {
        return response.data.article
    })
}

export function getArticleIdComments(articleId){
    return ncNews.get(`/articles/${articleId}/comments`).then((response) => {
        return response.data.comments
    })
}

export function updateVotes(articleId, votes) {
    return ncNews.patch(`/articles/${articleId}`, votes)
}