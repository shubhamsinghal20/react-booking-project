
import { Link } from "react-router-dom"
function MovieCard() {

  
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <h1 style={{ display: "flex", color: "white" }}>MyBookingMate</h1>
        <h2 className="my-5" style={{ color: "white" }}>
          MOVIES
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img
                  src="https://i0.wp.com/www.artofvfx.com/wp-content/uploads/2022/07/black_panther_wakanda_forever_xxlg.jpg?ssl=1"
                  className="card-img-top"
                  alt="."
                />
                <div className="card-body">
                  <h5 className="card-title">WAKANDA FOREVER</h5>
                  <p className="card-text"></p>
                  <Link  to="/theatre" className="btn btn-primary" >
                    Book Ticket
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div
                className="card" 
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNTAzZjRkZGQtZTk5ZS00NWYyLWJkZTctMjU2YThmMjc4ZTFjXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg"
                  className="card-img-top"
                  alt="."
                />
                <div className="card-body">
                  <h5 className="card-title">BHEDIYA</h5>
                  <p className="card-text"></p>
                  <Link to="/theatre" className="btn btn-primary">
                    Book Ticket
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img
                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uunchai-et00335262-1665386678.jpg"
                  className="card-img-top"
                  alt="."
                />
                <div className="card-body">
                  <h5 className="card-title">UUNCHAI</h5>
                  <p className="card-text"></p>
                  <Link to="/theatre" className="btn btn-primary">
                    Book Ticket
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYmI3NjE4ODUtNTM2NC00NmY0LTliMGItY2U5OGFiN2NlZTE2XkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg"
                  className="card-img-top"
                  alt="."
                />
                <div className="card-body">
                  <h5 className="card-title">KANTARA</h5>
                  <p className="card-text"></p>
                  <Link to="/theatre" className="btn btn-primary">
                    Book Ticket
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img
                  src="https://images.news18.com/ibnlive/uploads/2022/11/aksdj.jpg"
                  className="card-img-top"
                  alt="."
                />
                <div className="card-body">
                  <h5 className="card-title">DRISHYAM 2</h5>
                  <p className="card-text"></p>
                  <Link to="/theatre" className="btn btn-primary">
                    Book Ticket
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <img
                  src="https://cdn.123telugu.com/content/wp-content/uploads/2022/11/Avatar-4.jpg"
                  className="card-img-top"
                  alt="."
                />
                <div className="card-body">
                  <h5 className="card-title">AVATAR 2</h5>
                  <p className="card-text"></p>
                  <Link to="/theatre" className="btn btn-primary">
                    Book Ticket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
