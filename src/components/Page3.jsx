import React from "react";

const Page3 = () => {
  //   var tooltipTriggerList = [].slice.call(
  //     document.querySelectorAll('[data-toggle="tooltip"]')
  //   );
  //   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     return new bootstrap.Tooltip(tooltipTriggerEl);
  //   });

  return (
    <section className="main-heading my-5">
      <div className=" text-center">
        <h1 className="display-4"> About Us</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container">
        <div className="row my-5 ">
          <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
            <figure>
              <img
                srcset="https://dxaurk9yhilm4.cloudfront.net/images/354/dunedeck-carousel_2cbd80a0345be3b5a0b7649a1a2d057f_af373cfcdd92e97345b2eb21e974bae2.jpg"
                alt=" "
                className="about_img img-fluid"
              />
            </figure>
          </div>

          <div
            className="col-lg-6 col-md-6 col-12 col-xxl-6 
          d-flex justify-content-center align-items-start flex-column"
          >
            <h1>My Journey</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
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
export default Page3;
