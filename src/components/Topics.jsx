import { getAllArticles } from "../utils/api"
import SearchTopics from "./SearchTopics"
import {useState, useEffect} from "react"
import TopicsCard from "./TopicsCard"
import { useSearchParams } from "react-router-dom"


export default function Topics() {
   const [articlesByTopic, setArticlesByTopic] = useState([])
   const [searchParams, setSearchParams] = useSearchParams()
   const [defaultValueDropDown, setDefaultValueDropDown] = useState(searchParams.get("topic"))

    const topicCategory = searchParams.get("topic")

    console.log(topicCategory, "topicsCategory")

   useEffect(() => {
    if(topicCategory === "all" || null){
        getAllArticles().then((allArticles) => {setArticlesByTopic(allArticles)} )
       
    }
    else{
    const query = {topic: topicCategory}
    getAllArticles(query).then((articleByTopic) => setArticlesByTopic(articleByTopic))
    
    setDefaultValueDropDown(topicCategory)
  }
   }, [topicCategory])

    return (
    <>
    <h1> Articles by Topic</h1>
    <SearchTopics  setArticlesByTopic={setArticlesByTopic} defaultValueDropDown={defaultValueDropDown}/>
    <TopicsCard articlesByTopic={articlesByTopic} />
    </>
    )
}