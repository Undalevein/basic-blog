import { useState } from "react"

export default function ArticleEntry({ addArticle, setWriting }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied")
    } else {
      addArticle({ title, body })
    }
  }

  function warning() {
    return !title.trim() && !body.trim() ||
      confirm("Your blog post is not saved. Do you wish to proceed?")
  }

  return (
    <div>
      <form onSubmit={submit}>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Body
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {error && <p className="error">&#9888; {error}</p>}
        <div>
          <button className="button" type="submit">Create</button>
          <button
            className="button"
            type="button"
            onClick={() => (warning()) ? setWriting(false) : ""}
          >Cancel</button>
        </div>
      </form>
    </div>
  )
}

