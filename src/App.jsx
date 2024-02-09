import {Routes, Route} from "react-router-dom"
import {useState} from "react"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Articles from "./components/Articles"
import Topics from "./components/Topics"
import Home from "./components/Home"
import IndividualArticle from "./components/IndividualArticle"
import UserName from "./contexts/UserName"


function App() {
const [loggedInUser, setLoggedInUser] = useState("grumpy19")

  return (
    <>
    <UserName.Provider value={loggedInUser}>
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
    </UserName.Provider>
    </>
  )
}

export default App
