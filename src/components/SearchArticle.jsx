import {useState} from "react"

export default function SearchArticle ({articleId, setArticleId, setListSingleArticle, allArticles}) {
  const [error, setError] = useState(null)
    function handleOnChange(event) {
        setArticleId(event.target.value)
      }
    
      function onClickHandler(event) {
        event.preventDefault();
        if(articleId.length !== 0 && articleId > 0 && articleId <= allArticles.length )
        {setError(null)
          setListSingleArticle(true)}
        else{
          setArticleId("")
          setError("Please enter a valid article number")}
      }
    
   return (
    <form>
    <label className="articles-label" htmlFor="searchArticle">
      Search for an Article:
    </label>
    <input
    className="articles-input"
      id="searchArticle"
      type="number"
      value={articleId}
      placeholder={`Search Articles 1-${allArticles.length}`}
      min="1"
      max={allArticles.length}
      onChange={handleOnChange}
    ></input>
    <button
      className="articles-button"
      type="submit"
      id="submit"
      onClick={onClickHandler}
    >
      Submit
    </button>
    <p className="articles-error">{error ? error : null}</p>
  </form>
   )
}