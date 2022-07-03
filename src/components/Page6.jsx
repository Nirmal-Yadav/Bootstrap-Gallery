import React from "react";

const Page6 = () => {
  return (
    <div className="container">
      <section className="main-heading my-5 py-2 offer_style">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12 col-12 py-5 text-center">
              <h1 className="text-white">Check out my videos</h1>
              <p>
                Never give up on something that you can't go a day without
                thinking about
              </p>

              <button
                type="button"
                class="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                title=" Who am I"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>{" "}
                Check More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page6;
