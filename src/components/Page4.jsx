import React from "react";

const Page4 = () => {
  return (
    <section className="main-heading my-5 bg-light pt-5">
      <div className=" text-center">
        <h1 className="display-4"> Our Services</h1>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container services">
        <div className="row my-5 m">
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row">
                <div class="col-md-4">
                  <img
                    class="img-fluid rounded-start"
                    src="https://dxaurk9yhilm4.cloudfront.net/images/899/Scuba_5ae402c9837860cd6e4f65e304b3a5fa.jpg"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row">
                <div class="col-md-4">
                  <img
                    class="img-fluid rounded-start"
                    src="https://dxaurk9yhilm4.cloudfront.net/images/899/Scuba_5ae402c9837860cd6e4f65e304b3a5fa.jpg"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10 col-xxl-4 mx-auto">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row">
                <div class="col-md-4">
                  <img
                    class="img-fluid rounded-start"
                    src="https://dxaurk9yhilm4.cloudfront.net/images/899/Scuba_5ae402c9837860cd6e4f65e304b3a5fa.jpg"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-12 text-center my-5">
            {" "}
            <button
              type="button"
              class="btn btn-outline-info"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title=" Who am I"
            >
              Check More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page4;
