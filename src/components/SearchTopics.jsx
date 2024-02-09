import { useNavigate } from 'react-router-dom';
import { getAllArticles } from '../utils/api';

export default function SearchTopics({setArticlesByTopic}) {
  const navigate = useNavigate();

  function handleTopicChange(event) {
      event.preventDefault()
   
    if(event.target.value === "all"){
        getAllArticles().then((allArticles) => {setArticlesByTopic(allArticles)} )
        navigate(`/topics`)
    }
    else{
    const selectedTopic = event.target.value;
    const query = {topic: selectedTopic}
    getAllArticles(query).then((articleByTopic) => setArticlesByTopic(articleByTopic))
    navigate(`/topics?topic=${selectedTopic}`);
  }

  }

  return (
    <>
      <form>
        <label htmlFor="topicSearch" className="searchTopics-label">
          Search Topics
        </label>
        <select
          name="topicSearch"
          id="topicSearch"
          defaultValue="all"
          onChange={handleTopicChange}
        >
        <option value="all">All</option>
         <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
      </form>
    </>
  );
}
