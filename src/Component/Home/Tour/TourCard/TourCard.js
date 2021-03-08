import React from 'react'

function TourCard(props) {
    return (
        <div className="tour-card col-md-4 mb-2">
            <div className="popular">
                <div className="popular_inner">
                <figure>
                    <img src={props.img} alt="" className="img-responsive" />
                    <div className="over">
                        <div className="v1"><span>Tour {props.place}</span></div>
                        <div className="v2">{props.cost} VND</div>
                    </div>
                </figure>
                <div className="caption">
                    <div className="txt1">
                        <span>{props.tourName}</span>
                        <p>{props.longTime} Ngày/ {props.longTime -1 } Đêm</p>
                    </div>
                    <div className="txt2">{props.quote}</div>
                    <div className="txt3">
                        <div className="left_side">
                            <div className="stars1">
                            <img src="img/star1.png" alt="" />
                            <img src="img/star1.png" alt="" />
                            <img src="img/star1.png" alt="" />
                            <img src="img/star1.png" alt="" />
                            <img src="img/star2.png" alt="" />
                            </div>
                            <div className="nums"> {props.reviews} Đánh giá</div>
                        </div>
                        <div className="right_side"><a href="tour-detail.html" className="btn-default btn1">Chi tiết</a></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TourCard
