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
              <Link to="/createconditions" className="navbar-item">
                Support Others
              </Link>
              <Link to="/signup" className="navbar-item">
                Become a part of our community!
              </Link>
              <Link to="/login" className="navbar-item">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar