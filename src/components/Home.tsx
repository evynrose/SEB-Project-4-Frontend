import React from "react"


function Home() {
  React.useEffect(() => {
    console.log("The Home Page has mounted")
  }, [])

  return (
    <section className="hero is-link is-fullheight-with-navbar is-link">
      <div id="home-hero" className="hero-body has-text-centered">
        <div className="container">
          <h1 id="home-title" className="title has-text-weight-bold">Helping Hands</h1>
        </div>
      </div>
    </section>
  )
}

export default Home