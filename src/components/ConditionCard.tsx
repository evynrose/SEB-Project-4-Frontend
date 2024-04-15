function ConditionCard({ name, in_stock, rating }: any) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{name}</div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src="https://images.unsplash.com/photo-1504382103100-db7e92322d39?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h5>{"Rating: " + rating}</h5>
        <h5>{in_stock ? "It's in Stock!" : "Not in stock."}</h5>
      </div>
    </div>
  </div>
}

export default ConditionCard