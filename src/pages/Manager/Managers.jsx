import Img1 from "../../assets/images/vc_humayun.jpg";
import Img2 from "../../assets/images/provc_nasimbanu.jpg";
import Img3 from "../../assets/images/provc_nasreen.jpg";
import Img4 from "../../assets/images/provc_nasimbanu.jpg";

function Managers() {
  return (
    <div className="bg-light" style={{ backgroundColor: "#ECF7FC" }}>
      <div className="container mx-auto  my-5">
        <div className="">
          <div className="d-flex flex-column flex-lg-row gap-2 w-md  align-items-md-center ">
            <a className=" btn btn-primary flex-fill  " href="">
              উপাচার্যের অভিনন্দন
            </a>
            <a className="btn btn-primary flex-fill " href="">
              উপাচার্যের শুভেচ্ছাপত্র
            </a>
            <a className="  btn btn-primary flex-fill " href="">
              বাউবি সিটিজেন চার্টার
            </a>
            <a className="  btn btn-primary flex-fill " href="">
              {" "}
              পরীক্ষার ফলাফল{" "}
            </a>
            <a className="  btn btn-primary flex-fill " href="">
              অভিযোগ ও সেবাসমূহ
            </a>
            <a className=" btn btn-primary flex-fill " href="">
              বাউবির প্রোগ্রাম সমূহ
            </a>
          </div>
        </div>
      </div>
      <div
        className="container  mx-auto "
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className=" row gap-2 gap-lg-5">
          <div
            className="card col-12 col-lg-3  p-4 text-center shadow  bg-body-tertiary"
            style={{ minHeight: "330px" }}
          >
            <img className=" mx-auto " src={Img1} alt="" />
            <div className="card-body">
              <p className="">Prof Syed Humayun Akhter PhD</p>
              <h6 className=" fw-bold">Vice-Chancellor</h6>
            </div>
          </div>
          <div className="card col-12 col-lg  shadow    bg-body-tertiary">
            <div className="card-body">
              <h4 className="card-title">Message from the Vice-Chancellor</h4>
              <p className="card-text lh-base fst-normal">
                Bangladesh Open University (BOU) is a place of hope, a place
                that inspires imagination, a place that nurtures creativity, and
                a hub of innovative ideas. We are delighted to welcome you to
                Bangladesh Open University where your energy and excitement
                enrich our vibrant educational life. Whether you are beginning
                or continuing your educational journey with us, we look forward
                to learning, exploring, and growing together. We appreciate your
                decision to invest in your academic journey with BOU Bangladesh
                Open University is the only open and distance learning
                institution in the country. The university was established in
                1992 with a view to supporting governments’ educational polices,
                both short and long-run, by offering flexible and affordable
                educational opportunities to disadvantaged people who are unable
                to attend traditional academic
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mx-auto my-5">
        <div className="row gap-2 gap-lg-5">
          <div className="card  col-12 col-lg p-4 text-center shadow bg-body-tertiary ">
            <img className="card-img-top w-75 h-75 m-auto" src={Img2} alt="" />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title">Professor Dr. Nasim Banu</h6>
              <p className="card-text fw-bold">pro Vice-Chancellor</p>
            </div>
          </div>
          <div className="card col-12 col-lg p-4 text-center shadow bg-body-tertiary ">
            <img className="card-img-top w-75 m-auto" src={Img3} alt="" />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title">Professor Dr. Nasim Banu</h6>
              <p className="card-text fw-bold">pro Vice-Chancellor</p>
            </div>
          </div>
          <div className="card col-12 col-lg p-4 text-center shadow bg-body-tertiary ">
            <img className="card-img-top w-75 m-auto" src={Img4} alt="" />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title">Professor Dr. Nasim Banu</h6>
              <p className="card-text fw-bold">pro Vice-Chancellor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Managers;
