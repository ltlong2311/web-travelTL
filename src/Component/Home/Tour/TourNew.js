import React from 'react'

export default function TourNew() {
    return (
        <section className="bg-darks">
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
                <div className="col-md-4 mg-bot-20">
                  <div className="thumbnail">
                    <a href="tour-detail.html"><img src="img/vietnam2.jpg" alt="" /></a>
                    <div className="desc_top">
                      <h3>Hoi An - Quang Nam</h3>
                      <span>Việt Nam</span>
                      <p><img src="img/flags/icon-vietnam.png" alt="" /></p>
                    </div>
                    <div className="desc_2">
                      <h3> 6 Days / 5 Nights</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mg-bot-20">
                  <div className="thumbnail">
                    <a href="tour-detail.html"><img src="img/we-032.jpg" alt="" /></a>
                    <div className="desc_top">
                      <h3>Wat Phnom & Phnom Penh</h3>
                      <span>Cambodia</span>
                      <p><img src="img/flags/icon-cambodia.png" alt="" /></p>
                    </div>
                    <div className="desc_2">
                      <h3> 14 Days / 13 Nights</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mg-bot-20">
                  <div className="thumbnail">
                    <a href="tour-detail.html"><img src="img/we-02.jpg" alt="" /></a>
                    <div className="desc_top">
                      <h3>Beijing Capital</h3>
                      <span>China</span>
                      <p><img src="img/flags/icon-china.png" alt="" /></p>
                    </div>
                    <div className="desc_2">
                      <h3> 4 Days / 3 Nights</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mg-bot-20">
                  <div className="thumbnail">
                    <a href="tour-detail.html"><img src="img/japan2.jpg" alt="" /></a>
                    <div className="desc_top">
                      <h3> Fuji Honshu</h3>
                      <span>Japan</span>
                      <p><img src="img/flags/icon-japan.png" alt="" /></p>
                    </div>
                    <div className="desc_2">
                      <h3> 6 Days / 5 Nights</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mg-bot-20">
                  <div className="thumbnail">
                    <a href="tour-detail.html"><img src="img/we-01.jpg" alt="" /></a>
                    <div className="desc_top">
                      <h3>Wat Phra Kaew - Bangkok</h3>
                      <span>Thailand</span>
                      <p><img src="img/flags/icon-thailand.png" alt="" /></p>
                    </div>
                    <div className="desc_2">
                      <h3> 8 Days / 7 Nights</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail">
                    <a href="tour-detail.html"><img src="img/we-05.jpg" alt="" /></a>
                    <div className="desc_top">
                      <h3>Bali Island</h3>
                      <span>Indonesia</span>
                      <p><img src="img/flags/icon-indonesia.png" alt="" /></p>
                    </div>
                    <div className="desc_2">
                      <h3> 9 Days / 8 Nights</h3>
                    </div>
                  </div>
                </div>
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
