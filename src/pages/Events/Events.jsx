 function Events() {
  return (
    <div className="bg-light py-5">
      <div className="container border border-primary shadow p-4 my-5 bg-body-tertiary">
        <div className="text-center my-3">
          <h4 className="fw-bold fs-5">News & Events / Press Release</h4>
        </div>
        <div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className="text-white fw-bold fs-5 bg-primary text-center">
                  News & Event Title
                </th>
                <th className="text-white fw-bold fs-5 bg-primary text-center">
                  Picture
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-light">
                  <h4 className="text-info">
                    The initial of Bongobondo at BOU (Mar 16 2020)
                  </h4>
                  <a href="" className="text-decoration-none lh-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse ad tempore cumque provident optio doloribus voluptatem
                    necessitatibus corporis? Minus deserunt deleniti debitis,
                    laboriosam quia eaque odit magnam modi ut quo?
                  </a>
                  <a
                    className="text-primary text-decoration-none fw-bold"
                    href=""
                  >
                    Read more...
                  </a>
                </td>
                <td>
                  <img
                    className="img-fluid"
                    style="max-height: 130px; max-width: 250px"
                    src="images/1794017944226379.jpg"
                    alt=""
                  />
                </td>
              </tr>
              {/* <!-- Repeat for other rows --> */}
            </tbody>
          </table>
          <button className="btn btn-primary d-block m-auto my-3">
            More news
          </button>
        </div>
      </div>
    </div>
  );
}
export default Events