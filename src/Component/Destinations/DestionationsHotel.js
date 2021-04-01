import React from "react";
import TourList from "../Home/Tour/TourCard/TourList";
function DestionationsHotel() {
  return (
    <section className="des-content" id="destinations-tour">
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-12 text-center">
            <p>
              <img
                src="/img/icon-menu/icon-hotels.png"
                alt=""
                className="icon-destination-hotel"
              />
            </p>
          </div>
          <div className="col-md-12 text-center">
            <h2 className="hightlight-underline">Khách sạn nổi bật</h2>
            <blockquote className="about-quote">
              <p className="text-muted">
                Cho dù bạn đang tìm kiếm một khu nghỉ dưỡng tuyệt vời bên bờ
                biển, nơi nghỉ ngơi ở cửa hàng xa xỉ hay bất cứ nơi nào khác,
                chúng tôi đều tìm ra chỗ ở tốt nhất phù hợp với nhu cầu của
                bạn và đưa chúng vào danh sách Khách sạn tốt nhất được ưu tiên
                tại Châu Á.
              </p>
            </blockquote>
          </div>
          <div className="col-md-12 text-center">
            <div className="row mg-bot-20 mt-2">
              <TourList
                key="1"
                tourId="01"
                image="/img/destinations/hotel-1.jpg"
                tourName="Sofitel Legend Metropole Hanoi Hotel"
                nation="Hanoi"
                nationIcon="/img/flags/icon-vietnam.png"
                quality="5"
              />
              <TourList
                key="2"
                tourId="02"
                image="/img/destinations/hotel-2.jpg"
                tourName="Carlton Hotel Singapore"
                nation="Singapore"
                nationIcon="/img/flags/icon-singapore.png"
                quality="5"
              />
              <TourList
                key="3"
                tourId="03"
                image="/img/destinations/hotel-3.jpg"
                tourName="Sheraton Grand Hiroshima"
                nation="Hiroshima"
                nationIcon="/img/flags/icon-japan.png"
                quality="5"
              />
            </div>
          </div>
          <div className="col-md-12 pb-4">
            <div id="view-tours-list" className="mt-2 mb-4">
              <a href="tour.html" className="btn-view-more">
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestionationsHotel;
