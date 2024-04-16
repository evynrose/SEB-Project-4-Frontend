import React from "react"
import hands from "../assets/hands.png"


function Home() {
  React.useEffect(() => {
    console.log("The Home Page has mounted")
  }, [])

  return (
    <section className="hero is-link is-fullheight-with-navbar is-link">
      <div id="home-hero" className="hero-body has-text-centered has-background-white">
        <div className="container">
          <h1 id="home-title" className="title has-text-weight-bold has-text-dark">Helping Hands</h1>
          <img src={hands}/>
          <h2 className="has-text-dark">Welcome to Helping Hands, where individuals with physical or mental conditions come together to share their experiences and offer support. Join our compassionate community to connect, learn, and uplift one another on our journey towards healing and resilience.</h2>
        </div>
      </div>
    </section>
  )
}

export default Home