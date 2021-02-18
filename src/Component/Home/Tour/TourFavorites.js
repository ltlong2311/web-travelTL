import React from 'react'
import TourCard from './TourCard/TourCard'
import dataTour from './TourCard/dataTour.json'

export default function TourFavorites(props) {
    return (
        <section className="bg-lights pt-4 news">
            <div className="container">
                <div className="favorites-inner pb-2">
                     
                    <div className="row align-center mg-bt-40">
                        <div className="col-md-12 text-center">
                            <p>
                                <img src="img/icon-tour1.png" alt="" className="icon-bg-light" />
                            </p>
                            <h2 className="hightlight-underline">TOUR YÊU THÍCH</h2>
                            <blockquote className="about-quote">
                                <p>Những tour du lịch được yêu thích và phổ biến nhất, cập nhật kết quả chọn lọc từ những tour du lịch được nhiều người lựa chọn và có kết quả đánh giá cao!</p>
                            </blockquote>
                            <hr />
                        </div>
                    </div>
                    <div className="slide-show">
                        <div className="slide-tour row">
                            <input type='radio' name="slide-tour" id="show1" defaultChecked />
                            <input type='radio' name="slide-tour" id="show2" />
                            <input type='radio' name="slide-tour" id="show3" />
                            <input type='radio' name="slide-tour" id="show4" />

                            {
                                dataTour.map((value,key) => {
                                    return(
                                    <TourCard key={key}
                                    img={value.img}
                                    place={value.place}
                                    tourName={value.tourName}
                                    longTime={value.time}
                                    cost={value.cost}
                                    quote={value.quote}
                                    reviews={value.reviews}/>
                                    )
                                })
                            }
                        </div>     
                    </div>
                    {/* <div style={{textAlign: 'center'}}>
                        <span className="dot" onclick />
                        <span className="dot" onclick />
                        <span className="dot" onclick />
                        <span className="dot" onclick />
                    </div> */}
                    <div className="navigation-dot">
                        <label htmlFor="show1" className="manual-btn" />
                        {/* <label htmlFor="show2" className="manual-btn" />
                        <label htmlFor="show3" className="manual-btn" /> */}
                        <label htmlFor="show4" className="manual-btn" />
                    </div>

                </div>
            </div>
        </section>
    )
}
