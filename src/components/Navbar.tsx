import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/conditions" className="navbar-item">
                Conditions
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar