function Notice_bord() {
  return (
    <div className="py-4" style={{ backgroundColor: "#ECF7FC" }}>
      <div
        className="container shadow-lg rounded-3 p-2"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="text-center py-2">
          <h4 className="fw-bold">Notice bord</h4>
        </div>
        <div className=" d-flex flex-wrap justify-content-evenly my-3 gap-2 ">
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Admission
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Registration/className
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Examination
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Result
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Administrative
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Recruitment
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Tender
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            NOC/offic order
          </button>
          <button className="btn btn-outline-primary btn-bg-Tertiary">
            Transfar order
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="rounded bg-primary text-white">SL</th>
              <th className="rounded bg-primary text-white">Subjuct</th>
              <th className="rounded bg-primary text-white">Reference No</th>
              <th className="rounded bg-primary">Date</th>
              <th className="rounded bg-primary visibile-sm-invisible">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Transfar order two (02) officer</th>
              <th>BOU/Admin-10(05)/01/94/part-4/763</th>
              <th>2024-02-08</th>
              <th>
                <button className="btn btn-primary d-sm-none">Dwonload</button>
              </th>
            </tr>
            <tr>
              <th>2</th>
              <th>Transfar order two (02) officer</th>
              <th>BOU/Admin-10(05)/01/94/part-4/763</th>
              <th>2024-02-08</th>
              <th>
                <button className="btn btn-primary d-sm-none">Dwonload</button>
              </th>
            </tr>
            <tr>
              <th>3</th>
              <th>Transfar order two (02) officer</th>
              <th>BOU/Admin-10(05)/01/94/part-4/763</th>
              <th>2024-02-08</th>
              <th className="d-sm-none">
                <button className="btn btn-primary">Dwonload</button>
              </th>
            </tr>
            <tr>
              <th>4</th>
              <th>Transfar order two (02) officer</th>
              <th>BOU/Admin-10(05)/01/94/part-4/763</th>
              <th>2024-02-08</th>
              <th>
                <button className="btn btn-primary d-sm-none">Dwonload</button>
              </th>
            </tr>
            <tr>
              <th>5</th>
              <th>Transfar order two (02) officer</th>
              <th>BOU/Admin-10(05)/01/94/part-4/763</th>
              <th>2024-02-08</th>
              <th>
                <button className="btn btn-primary d-sm-none">Dwonload</button>
              </th>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary m-auto mb-3  d-block">
          Read more
        </button>
      </div>
    </div>
  );
}
export default Notice_bord;
