

export default function SearchArticle ({articleId, setArticleId, setListSingleArticle, allArticles}) {
    function handleOnChange(event) {
        setArticleId(event.target.value)
      }
    
      function onClickHandler(event) {
        event.preventDefault();
        setListSingleArticle(true);
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
  </form>
   )
}