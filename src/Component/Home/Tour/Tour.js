import React from 'react'
import './Tour.css'

export default function Tour() {
    return (
        <section className="bg-darks" id="destination">
        <div className="container">
          <div className="row align-center mg-bt-40">
            <div className="col-md-12 text-center">
              <p>
                <img src="img/icon-our-asia.svg" alt="" className="icon-svg" />
              </p>
              <h2 className="hightlight-underline">ĐIỂM ĐẾN CHÂU Á</h2>
              <blockquote className="about-quote">
                <p>Là quê hương của một số nền văn hóa đầy màu sắc nhất thế giới và những điểm đến kỳ lạ, Châu Á là một bữa tiệc thực sự cho các giác quan. Đi sâu vào lựa chọn quốc gia của chúng tôi để khám phá một loạt các hành trình thú vị và đầy cảm hứng.</p>
              </blockquote>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/myanmar2.jpg" alt="" /></a>
                <div className="desc">
                  <h3>MYANMAR</h3>
                  <p><img src="img/flags/icon-myanmar.png" alt="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/vietnam.jpg" alt="" /></a>
                <div className="desc">
                  <h3>VIETNAM</h3>
                  <p><img src="img/flags/icon-vietnam.png" alt="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/laos.jpg" alt="" className="img-black"/></a>
                <div className="desc">
                  <h3>LAOS</h3>
                  <p><img src="img/flags/icon-laos.png" alt="" /></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/thailand.jpg" alt="" /></a>
                <div className="desc">
                  <h3>THAILAND</h3>
                  <p><img src="img/flags/icon-thailand.png" alt="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/indonesia.jpg" alt="" className="img-black"/></a>
                <div className="desc">
                  <h3>INDONESIA</h3>
                  <p><img src="img/flags/icon-indonesia.png" alt="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/cambodia.jpg" alt="" className="img-black"/></a>
                <div className="desc">
                  <h3>CAMBODIA</h3>
                  <p><img src="img/flags/icon-cambodia.png" alt="" /></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/japan3.jpg" alt="" /></a>
                <div className="desc">
                  <h3>JAPAN</h3>
                  <p><img src="img/flags/icon-japan.png" alt="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/china2.jpg" alt="" /></a>
                <div className="desc">
                  <h3>CHINA</h3>
                  <p><img src="img/flags/icon-china.png" alt="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/malaysia.jpg" alt="" className="img-black" /></a>
                <div className="desc">
                  <h3>MALAYSIA &amp; BORNEO</h3>
                  <p><img src="img/flags/icon-malaysia.png" alt="" /></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/singapore2.jpg" alt="" className="img-black" /></a>
                <div className="desc">
                  <h3>SINGAPORE</h3>
                  <p><img src="img/flags/icon-singapore.png" alt="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mg-bot-20">
              <div className="thumbnail">
                <a href="tour.html"><img src="img/multi-country.jpg" alt="" className="img-black"/></a>
                <div className="desc">
                  <h3>MULTI COUNTRY</h3>
                  <p><img src="img/flags/icon-multi-country.png" alt=""  /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
