import React from "react";

const Page8 = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Click on Check Now for video </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a
              href="https://www.youtube.com/watch?v=9CvwbW9UhJc"
              target="Nirmal"
            >
              <button type="button" className="btn btn-primary">
                Check Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page8;
