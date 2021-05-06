import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import tourData from "../../tourData.json";
import TourList from "./TourCard/TourList";

export default function TourNew() {
  useEffect(() => {
    Aos.init({
      duration: 400,
      offset : 30,
      once: true,
      delay: 0, 
    });
  }, []);
  return (
    <section className="bg-darks pb-5" id="tour-recommend">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              <img
                src="img/icon-menu/icon-tour-2.png"
                alt=""
                className="icon-img icon-bg-dark"
              />
            </p>
          </div>
          <div className="col-md-12 text-center">
            <h2 className="highlight-underline">TOURS ĐỀ CỬ</h2>
            <blockquote className="about-quote">
              <p
                className="text-muted-dark"
                data-aos="fade-left"
                data-aos-easing="ease-in-quint"
              >
                Các tour mới nhất được đề cử, phù hợp với mùa du lịch. Đưa ra sự
                lựa chọn và tham khảo hợp lý cho khách hàng trong khoảng thời
                gian hiện tại.
              </p>
            </blockquote>
          </div>
          <div className="col-md-12 text-center">
            <div className="row mg-bot-20 tour-new">
              {tourData.map((value, key) => {
                return (
                  <TourList
                    key={key}
                    tourId={value.id}
                    image={value.image}
                    tourName={value.tourName}
                    nation={value.nation}
                    nationIcon={value.icon}
                    longTime={value.longTime}
                  />
                );
              })}
              <div className="col-md-12">
                {/* <div id="view-tours-list" className="btn btn-outline-success"> */}
                <div id="view-tours-list" className="mg-top-40">
                  <a href="tour.html" className="btn-view-more">
                    Xem thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
