import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Articles from "./components/Articles"
import Topics from "./components/Topics"
import Home from "./components/Home"
import IndividualArticle from "./components/IndividualArticle"


function App() {
const loggedInUser = "happyamy2016"

  return (
    <>
    <Header />
    <Navigation />
    <main>
    <Routes>
    <Route path="/" element = {<Home />} />
    <Route path ="/articles" element={<Articles />} />
    <Route path ="/articles/:articleId" element={<IndividualArticle  loggedInUser={loggedInUser}/>} />
    <Route path ="/topics" element={<Topics />} />
    </Routes>
    </main>

    </>
  )
}

export default App
