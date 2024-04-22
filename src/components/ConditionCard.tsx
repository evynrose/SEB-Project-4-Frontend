import { ICondition } from "../interfaces/conditions";
import { IUser } from "../interfaces/user";
import { Link } from "react-router-dom";

function ConditionCard({ name, info, id }: any) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/conditions/${id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{name}</div>
          </div>
          <div className="card-content" style={{ height: "400px" }}> {/* Adjust height as needed */}
            <h5>{info} <br /> <strong> Click on me for more information!</strong> </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ConditionCard;