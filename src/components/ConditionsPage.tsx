import React from "react";
import ConditionCard from "./ConditionCard";
import { baseUrl } from "../config";
import clouds from "../assets/clouds.jpeg";

function ConditionsPage() {
  const [conditions, setConditions] = React.useState<any>(null);

  React.useEffect(() => {
    async function fetchConditions() {
      const resp = await fetch(`${baseUrl}/conditions`);
      const data = await resp.json();
      setConditions(data);
    }
    fetchConditions();
  }, []);

  return (
    <section className="section" style={{ backgroundImage: `url(${clouds})`, backgroundSize: 'cover' }}>
      <div className="container">
        <div className="columns is-multiline">
          {conditions?.map((condition: any) => {
            return <ConditionCard key={condition._id} {...condition} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ConditionsPage;