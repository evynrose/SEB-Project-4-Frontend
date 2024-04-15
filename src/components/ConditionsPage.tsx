import React from "react"
import ConditionCard from "./ConditionCard"

function ConditionsPage() {

  const [conditions, setConditions] = React.useState<any>(null)

  React.useEffect(() => {
    async function fetchConditions() {
      const resp = await fetch('/api/conditions')
      const data = await resp.json()
      setConditions(data)
    }
    fetchConditions()
  }, [])

  return <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {conditions?.map((condition: any) => {
          return <ConditionCard
            key={condition._id}
            // ! Pass all properties, don't have to declar them individually.
            {...condition}
          />
        })}
      </div>
    </div>
  </section>
}


export default ConditionsPage