import React from "react";

const ScrollSpy = () => {
  // const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  //     target: '#navbar-example'
  //   })
  return (
    <div className="container">
      <div className="row">
        <div id="navbar-example2" style={{ position: "relative" }}>
          <nav id="navbar-example2" className="navbar bg-light px-3">
            <a className="navbar-brand" href=" #">
              Navbar
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  First
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  Second
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="# "
                  role="button"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading3">
                      Third
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading4">
                      Fourth
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading5">
                      Fifth
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div
            style={{ height: "150px", overflowY: "scroll" }}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            className="scrollspy-example container-fluid"
            tabindex="0"
          >
            <h4 id="scrollspyHeading1">First heading</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <h4 id="scrollspyHeading2">Second heading</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <h4 id="scrollspyHeading3">Third heading</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <h4 id="scrollspyHeading4">Fourth heading</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <h4 id="scrollspyHeading5">Fifth heading</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollSpy;
