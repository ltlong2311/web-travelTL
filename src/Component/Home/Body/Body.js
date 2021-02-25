/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";
import "./Body.css";
export default class Body extends Component {
  render() {
    return (
      <div className="des-content" id="intro">
          <div className="mr-header">
            <section className="features" id="features">
              <div className="container" >
                <div className="section-heading text-center">
                  <h2> Welcome to Travel TL </h2>{" "}
                  <p className="text-muted">
                    Du lịch và khám phá mọi nơi trên thế giới!{" "}
                  </p>
                  <hr />
                </div>
                <div className="row">
                <div className="col-lg-4 slide">
                
                    <slider>
                      <slide><p>1</p></slide>
                      <slide><p>2</p></slide>
                      <slide><p>3</p></slide>
                      <slide><p>4</p></slide>
                      <slide><p>5</p></slide>
                    </slider>
                
                </div>
                  {/* <div className="col-lg-4 my-auto">
                    
                    <div className="device-container">
                      
                      <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                          <div className="screen">
                            <img
                              src="https://wiki.matbao.net/wp-content/uploads/2020/01/rss-la-gi-cach-su-dung-the-nao-04.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="button">
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i className="fas fa-plane-departure" />
                            {/* <img src='img/why1.png' alt=''></img> */}
                            <h3> Chuyến đi thú vị </h3>
                            <p className="text-muted">
                              Cung cấp những trải nghiệm du lịch vui vẻ và mới lạ!
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i className="fas fa-hand-holding-usd" />
                            <h3> Mức giá hợp lý </h3>
                            <p className="text-muted">
                              Giá cả phải chăng cùng với nhiều mức lựa chọn khác nhau!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i className="far fa-newspaper" />
                            <h3> Tin tức du lịch </h3>
                            <p className="text-muted">
                              Cập nhật tin tức, hình ảnh và những chia sẻ du lịch thực
                              tế!
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="feature-item">
                            <i className="fas fa-phone"> </i>
                            <h3> Hỗ trợ chu đáo </h3>
                            <p className="text-muted">
                              Luôn sẵn sàng phục vụ khách hàng trước, trong và sau
                              chuyến đi!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </div>
     
    );
  }
}
