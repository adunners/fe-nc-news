import { useNavigate } from 'react-router-dom';


export default function SearchTopics({setArticlesByTopic, defaultValueDropDown}) {
  console.log(defaultValueDropDown, "dropdown value")
  const navigate = useNavigate();

  function handleTopicChange(event) {
      event.preventDefault()
    navigate(`/topics?topic=${event.target.value}`);
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
          defaultValue={defaultValueDropDown}
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
