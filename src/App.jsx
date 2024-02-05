import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Articles from "./components/Articles"
import Topics from "./components/Topics"
import Home from "./components/Home"


function App() {


  return (
    <>
    <Header />
    <Navigation />
    <main>
    <Routes>
    <Route path="/home" element = {<Home />} />
    <Route path ="/articles" element={<Articles />} />
    <Route path ="/topics" element={<Topics />} />
    </Routes>
    </main>

    </>
  )
}

export default App
