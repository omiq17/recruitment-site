export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to My Bootstrap Test Page!</h1>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">This is a simple card example.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Another card example.</p>
              <a href="#" className="btn btn-secondary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Yet another card!</p>
              <a href="#" className="btn btn-success">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
