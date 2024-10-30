export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <section class="blogcontent">
          <h1>Welcome to my blog!</h1>
          <p>
            Hello! I am Undalevein and I am a puzzle gamer and
            speedrunner. As you may expect, I play a lot of puzzle
            games in my spare time, from point-and-click adventure
            games to Sokoban block pushing games to logic games to
            niche titles. If you were to force me to state all of
            the puzzle games on Steam, I basically can give you about
            150 of them before I ran out.
          </p>
          <br />
          <p>
            Feel free to explore my blog by checking out my posts on
            the left. I have some of the best opinions in the world
            when it comes to funny puzzle game reviews.
          </p>
        </section>
      ) : (
        <section class="blogcontent">
          <h1>{article.title}</h1>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
