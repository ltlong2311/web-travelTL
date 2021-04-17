import React from 'react'
import TourCard from './TourCard/TourCard'
import dataTour from '../../dataTourFavorite.json'

export default function TourFavorites(props) {
    return (
        <section className="bg-lights pb-5" id="tour-favorite">
            <div className="container">
                <div className="favorites-inner pb-2">
                     
                    <div className="row align-center mg-bt-40">
                        <div className="col-md-12 text-center">
                            <p>
                                <img src="/img/icon-menu/icon-tour-1.png" alt="" className="icon-bg-light" />
                            </p>
                            <h2 className="highlight-underline">TOUR YÊU THÍCH</h2>
                            <blockquote className="about-quote">
                                <p className="text-muted-dark">Những tour du lịch được yêu thích và phổ biến nhất, cập nhật kết quả chọn lọc từ những tour du lịch được nhiều người lựa chọn và có kết quả đánh giá cao!</p>
                            </blockquote>
                    
                        </div>
                    </div>
                    <div className="slide-show">
                        <div className="slide-tour row">
                            {/* <input type='radio' name="slide-tour" id="show1" defaultChecked /> */}
                            <input type='radio' name="slide-tour" id="show1" />
                            <input type='radio' name="slide-tour" id="show2" />
                            <input type='radio' name="slide-tour" id="show3" />
                            <input type='radio' name="slide-tour" id="show4" />

                            {
                                dataTour.map((value,key) => {
                                    return(
                                    <TourCard key={key}
                                    tourId={value.id}
                                    valueTourFavorite={value}
                                    image={value.image}
                                    place={value.place}
                                    tourName={value.tourName}
                                    days={value.days}
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
                        <label htmlFor="show2" className="manual-btn" />
                        <label htmlFor="show3" className="manual-btn" />
                        <label htmlFor="show4" className="manual-btn" />
                    </div>

                </div>
            </div>
        </section>
    )
}
