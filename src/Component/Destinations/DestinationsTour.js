import React from 'react'
import TourList from '../Home/Tour/TourCard/TourList'
import './Destionations.css'
function DestinationsTour() {
    return (
        <section className="des-content bg-darks" id="destinations-tour">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                           <img src="/img/icon-menu/icon-tour.png" alt="" className="icon-destination-tour" />
                        </p>
                    </div>
                    <div className="col-md-12 text-center">
                        <h2 className="hightlight-underline">DU LỊCH CHÂU Á</h2>
                        <blockquote className="about-quote">
                            <p className="text-muted-dark">Những trải nghiệm cổ điển đặc trưng, những buổi đi dạo phố náo nhiệt, những kỳ nghỉ dưỡng thăm quan di sản và những chuyến phiêu lưu ngoài trời đẹp như tranh vẽ là một trong số nhiều chuyến đi bổ ích có ở Châu Á.!</p>
                        </blockquote>
                    </div>
                    <div className="col-md-12 text-center">
                        <div className="row mg-bot-20 mt-2">
                            <TourList 
                                key="1"
                                tourId="01"
                                image="/img/tn-03.jpg"
                                tourName="Sulawesi"
                                nation="Indonesia"
                                nationIcon="/img/flags/icon-indonesia.png"
                                longTime="3"
                            />
                             <TourList 
                                key="2"
                                tourId="02"
                                image="/img/destination3.jpg"
                                tourName="Garden Park"
                                nation="Myanmar"
                                nationIcon="/img/flags/icon-myanmar.png"
                                longTime="4"
                            />
                             <TourList 
                                key="3"
                                tourId="03"
                                image="/img/destination5.jpg"
                                tourName="SEOUL"
                                nation="Korea"
                                nationIcon="/img/flags/icon-multi-country.png"
                                longTime="5"
                            />
                        </div>
                    </div>
                    <div className="col-md-12 pb-4">
                        <div id="view-tours-list" className="mt-2 mb-4">
                            <a href="tour.html" className="btn-view-more">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DestinationsTour
