import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchArticles, createArticle } from "../services/articleService"
import "./App.css"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }


  return (
    <div className="App">
      <header>
        <button id="logo" className="button is-ghost" onClick={() => setArticle(false)}>
          Undalevein's Blog
        </button>
        {user && <button id="createArticle" className="button" onClick={() => setWriting(true)}>New Article</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {user && !writing ? (
        <Nav articles={articles} setArticle={setArticle} />
      ) : <br />}

      {user && writing ? (
        <ArticleEntry addArticle={addArticle} setWriting={setWriting} />
      ) : (
        <Article article={article} />
      )}
    </div>
  )
}