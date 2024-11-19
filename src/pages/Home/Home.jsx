import Img6 from "../../assets/images/fbanner6.jpg";
import Img7 from "../../assets/images/fbanner7.jpg";
import Img8 from "../../assets/images/fbanner8.jpg";
function Home() {
  return (
    <div>
      <div id="carousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Img6} alt="" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img7} alt="" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-auto" src={Img8} alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev btn-primary"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Home;
