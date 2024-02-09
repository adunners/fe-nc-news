import { getAllArticles } from "../utils/api"
import SearchTopics from "./SearchTopics"
import {useState, useEffect} from "react"
import TopicsCard from "./TopicsCard"


export default function Topics() {
   const [articlesByTopic, setArticlesByTopic] = useState([])

   useEffect(() => {
    getAllArticles().then((allArticles) => {
        setArticlesByTopic(allArticles)
    })
   }, [])

console.log(articlesByTopic, "in topics")

    return (
    <>
    <h1> Articles by Topic</h1>
    <SearchTopics  setArticlesByTopic={setArticlesByTopic}/>
    <TopicsCard articlesByTopic={articlesByTopic} />
    </>
    )
}