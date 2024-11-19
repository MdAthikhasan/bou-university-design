import Img from "../../assets/images/about_bou.jpg";

function ABout() {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <h4 className="card-title fw-bold text-center  ">
            Bangladesh open university in number
          </h4>
        </div>
        <div className=" row row-cols-md-2 d-flex justify-content-center  align-items-center  row-cols-lg-auto g-4 text-center my-2 text-white">
          <div className="">
            <div className="bg-primary  p-4 rounded-4">
              <span className="material-symbols-outlined fw-bold"> Home</span>
              <span className="d-block fs-5  fw-medium fw-bold">1990</span>
              <p className="lh-lg fs-5 fw-medium">Bou established</p>
            </div>
          </div>
          <div className="">
            <div className="bg-primary  p-4 rounded-4">
              <span className="material-symbols-outlined fw-bold"> Home</span>
              <span className="d-block fs-5  fw-medium fw-bold">1990</span>
              <p className="lh-lg fs-5 fw-medium">Bou established</p>
            </div>
          </div>
          {/* Getter is most confusing thing where i spect a lots of time */}
          <div className="">
            <div className="bg-primary  p-4 rounded-4">
              <span className="material-symbols-outlined fw-bold"> Home</span>
              <span className="d-block fs-5  fw-medium fw-bold ">1990</span>
              <p className="lh-lg fs-5 fw-medium">Bou established</p>
            </div>
          </div>
          <div className="">
            <div className="bg-primary  p-4 rounded-4">
              <span className="material-symbols-outlined fw-bold"> Home</span>
              <span className="d-block fs-5  fw-medium fw-bold">1990</span>
              <p className="lh-lg fs-5 fw-medium">Bou established</p>
            </div>
          </div>
          <div className="">
            <div className="bg-primary  p-4 rounded-4">
              <span className="material-symbols-outlined fw-bold"> Home</span>
              <span className="d-block fs-5  fw-medium fw-bold">1990</span>
              <p className="lh-lg fs-5 fw-medium">Bou established</p>
            </div>
          </div>
          {/* Getter is most confusing thing where i spect a lots of time */}
          <div className="">
            <div className="bg-primary  p-4 rounded-4">
              <span className="material-symbols-outlined fw-bold"> Home</span>
              <span className="d-block fs-5  fw-medium fw-bold ">1990</span>
              <p className="lh-lg fs-5 fw-medium">Bou established</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-1" style={{ backgroundColor: "#ECF7FC" }}>
        <div
          className="container  shadow p-3 my-5 bg-gray-100"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="text-center p-4">
            <h3 className="font-bold text-lg font-poppins">
              About Bangladesh Open University
            </h3>
          </div>
          <div className=" d-flex  align-items-center row  row-cols-lg-2 row-cols-md-1 g-2 rounded-4 ">
            <div className="">
              <img
                className="w-100 h-auto object-cover"
                src={Img}
                alt="Bangladesh Open University"
              />
            </div>
            <div className="">
              <p className="fw-medium ">
                The need for an open university in Bangladesh was felt long ago.
                The history of distance education in Bangladesh dates back to
                1956 when the Education Directorate was assigned with the
                responsibility for distribution of 200 radio receivers to
                educational institutions. This led to the creation of an
                Audio-Visual Cell, which was upgraded to the Audio-Visual
                Education Centre in 1962. No further progress in distance
                education was made till 1971.
                <br />
                <br />
                After Independence, Bangladesh faced the challenge of meeting
                the educational needs of mass people. To meet this challenge the
                necessity for a new mode of education was widely felt. As a
                sequel to that feeling, the School Broadcasting Pilot Project
                was launched in 1978. The project was transformed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ABout;
