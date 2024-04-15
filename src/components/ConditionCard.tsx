import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import { ICondition } from "../interfaces/conditions"
import { IUser } from "../interfaces/user"

function ConditionCard({ name, info, id }: any) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <Link to={`/conditions/${id}`}>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{name}</div>
        </div>
        <div className="card-content">
          <h5>{"Information: " + info} <br></br>Click on me for more information! </h5>
        </div>
      </div>
    </Link>
  </div>

}

export default ConditionCard