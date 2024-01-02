import React from 'react';

const add = () => {
    return (
        <div className="container mt-3">
      <div className="row">
        <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
          <div className="position-relative">
            <img
              className=" img-fluid"
              src="/src/assets/images/3.webp"
              alt=""
            />
            <div className="position-absolute bottom-0 pb-5 end-0 translate-middle-x">
              <h1 className="title my-3">
                Smart Watch For <br /> Your Hand
              </h1>
              <h2 className="price">From $29.00</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="pt-3 d-flex flex-column justify-content-between align-items-center gap-2">
            <div className=" mb-3 ">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/src/assets/images/4.webp"
                  alt=""
                />
                <div className="position-absolute top-50 start-0 translate-middle-y ps-5">
                  <h1 className="title">Headphones</h1>
                  <h2 className="price">From $29.00</h2>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/src/assets/images/5.webp"
                  alt=""
                />
                <div className="position-absolute top-50 translate-middle-y start-0 ps-5">
                  <h1 className="title">Smartphone</h1>
                  <h2 className="price">From $29.00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default add;