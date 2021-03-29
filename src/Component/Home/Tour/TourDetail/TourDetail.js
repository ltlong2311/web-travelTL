import React from "react";

function TourDetail(props) {
  return (
    <section className="des-content" id="tour-details">
      <div className="container">
        <div className="favorites-inner pb-2">
          <div className="row align-center mg-bt-40">
            <div className="col-md-12 text-center">
              <p>
                <img
                  src="/img/icon-tour2.png"
                  alt=""
                  className="icon-bg-light"
                />
              </p>
              <h2 className="hightlight-underline">TOUR</h2>
              <hr />
              <div className="rate">
                <div className="left_side">
                  <div className="stars1">
                    <img src="img/star1.png" alt="" />
                    <img src="img/star1.png" alt="" />
                    <img src="img/star1.png" alt="" />
                    <img src="img/star1.png" alt="" />
                    <img src="img/star2.png" alt="" />
                  </div>
                  <div className="nums">{props.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourDetail;
