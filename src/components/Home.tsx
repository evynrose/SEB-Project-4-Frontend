import React, { useState } from "react";
import hands from "../assets/hands.jpeg";

function Home() {
  const [modalActive, setModalActive] = useState(false);

  React.useEffect(() => {
    console.log("The Home Page has mounted");
  }, []);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <section className="hero is-link is-fullheight-with-navbar">
      <div
        id="home-hero"
        className="hero-body has-text-centered"
        style={{ backgroundImage: `url(${hands})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <h1 id="home-title" className="title has-text-weight-bold has-text-dark">
            Helping Hands
          </h1>
          <button className="button is-primary  is-large" onClick={toggleModal}>Click here to learn our mission</button>
          <div className={`modal ${modalActive ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
              <div className="box">
                <h2 className="subtitle has-text-dark">
                  Welcome to Helping Hands, where individuals with physical or mental conditions
                  come together to share their experiences and offer support. Join our
                  compassionate community to connect, learn, and uplift one another on our
                  journey towards healing and resilience.
                </h2>
              </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;