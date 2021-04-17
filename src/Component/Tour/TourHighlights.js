import React from 'react'
import { Slide } from 'react-slideshow-image';

function TourHighlights() {
    const slideImages = [
        '/img/tour/phu-quoc-2.jpg',
        '/img/tour/phu-quoc-3.jpg',
        '/img/tour/phu-quoc-5.jpg',
        '/img/tour/phu-quoc-6.jpg',
        '/img/tour/phu-quoc-7.jpg',
        '/img/tour/phu-quoc-8.jpg',
        '/img/tour/phu-quoc-10.jpg',
        '/img/tour/hotel-1.jpg',
        '/img/tour/hotel-2.jpg',
        '/img/tour/hotel-3.jpg'
    ];
    return (
        <section className="des-content bg-darks" id="tour-highlight">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            <img src="/img/icon-menu/icon-highlights.png" width="40px" height="40px" alt="" className="icon-bg-dark" />
                        </p>
                    </div>
                    <div className="col-md-12 text-center">
                        <h2 className="highlight-underline">ĐIỂM NHẤN HÀNH TRÌNH</h2>
                    </div>                   
                    <div className="col-md-12 row align-center m-0 pb-4">
                        <div className="col-md-6 pb-3">
                            <Slide easing="ease">
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-md-6 highlight-tour-content ">
                            <div className="mb-20">
                                <i>
                                  <img alt="" title="img-hl" src="/img/icon-menu/icon-highlight-element.png" />
                                </i>
                                <h4>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    Trải nghiệm bãi tắm tuyệt đẹp thoáng mát
                                    </font>
                                </font>
                                </h4>
                                <p>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    Nơi đây có bờ cát trắng mịn như kem kéo dài hơn 7km. 
                                    </font>
                                </font>
                                </p>
                            </div>
                            <div className="mb-20">
                                <i>
                                  <img alt="" title="img-hl" src="/img/icon-menu/icon-highlight-element.png" />
                                </i>
                                <h4>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    Ghé thăm các quần đảo
                                    </font>
                                </font>
                                </h4>
                                <p>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    Đông và Nam đảo lại thu hút du khách với những vùng đất đan xen với rừng.
                                    </font>
                                </font>
                                </p>
                            </div>
                            <div className="mb-20">
                                <i>
                                  <img alt="" title="img-hl" src="/img/icon-menu/icon-highlight-element.png" />
                                </i>
                                <h4>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    Tận hưởng những dịch vụ tốt nhất tại resort
                                    </font>
                                </font>
                                </h4>
                                <p>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    Được phục vụ chu đáo tại khu nghỉ mát, phòng ở tiện nghi đều có view hướng ra biển.
                                    </font>
                                </font>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default TourHighlights
