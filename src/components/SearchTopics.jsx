import { useNavigate } from 'react-router-dom';
import { getAllArticles } from '../utils/api';

export default function SearchTopics({setArticlesByTopic}) {
  const navigate = useNavigate();

  function handleTopicChange(event) {
      event.preventDefault()
   
    if(event.target.value === "all"){
    
        navigate(`/topics`)
    }
    else{
    navigate(`/topics?topic=${event.target.value}`);
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
