import { getAllArticles } from "../utils/api"
import SearchTopics from "./SearchTopics"
import {useState, useEffect} from "react"
import TopicsCard from "./TopicsCard"
import { useSearchParams } from "react-router-dom"


export default function Topics() {
   const [articlesByTopic, setArticlesByTopic] = useState([])
   const [searchParams, setSearchParams] = useSearchParams()

    const topicCategory = searchParams.get("topic")

   useEffect(() => {
    if(topicCategory === "all" || null){
        getAllArticles().then((allArticles) => {setArticlesByTopic(allArticles)} )
       
    }
    else{
    const query = {topic: topicCategory}
    getAllArticles(query).then((articleByTopic) => setArticlesByTopic(articleByTopic))
    
  }
   }, [topicCategory])

console.log(articlesByTopic, "in topics")

    return (
    <>
    <h1> Articles by Topic</h1>
    <SearchTopics  setArticlesByTopic={setArticlesByTopic}/>
    <TopicsCard articlesByTopic={articlesByTopic} />
    </>
    )
}