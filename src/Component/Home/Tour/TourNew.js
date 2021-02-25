import React from 'react'
import tourData from '../../tourData.json'
import TourList from './TourCard/TourList'
export default function TourNew() {
    return (
        <section className="bg-darks" id="tour-recommend">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <img src="img/icon-travel2.png" alt="" className="icon-img" />
              </p>
            </div>
            <div className="col-md-12 text-center mg-bt-40">
              <h2 className="hightlight-underline">TOURS ĐỀ CỬ</h2>
              <blockquote className="about-quote">
                <p>Các tour mới nhất được đề cử, phù hợp với mùa du lịch. Đưa ra sự lựa chọn và tham khảo hợp lý cho khách hàng trong khoảng thời gian hiện tại.</p>
              </blockquote>
              <hr />
            </div>
            <div className="col-md-12 text-center">
              <div className="row mg-bot-20 tour-new">
                {
                  tourData.map((value,key) => {
                    return(
                      <TourList key={key}
                      image={value.image}
                      tourName={value.title}
                      nation={value.nation}
                      nationIcon={value.icon}
                      longTime={value.longTime}
                      />
                    )
                  })
                }
                <div className="col-md-12">
                  
                  {/* <div id="view-tours-list" className="btn btn-outline-success"> */}
                  <div id="view-tours-list" className="mg-top-40">
                    <a href="tour.html" className="btn-view-more">Xem thêm</a>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    )
}
