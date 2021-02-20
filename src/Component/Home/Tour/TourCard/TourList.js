import React from 'react'

function TourList(props) {
    return (
        <div className="col-md-4 mg-bot-20">
            <div className="thumbnail">
            <a href="tour-detail.html"><img src={props.image} alt="" /></a>
            <div className="desc_top">
                <h3>{props.tourName}</h3>
                <span>{props.nation}</span>
                <p><img src={props.nationIcon} alt="" /></p>
            </div>
            <div className="desc_2">
                <h3>{props.longTime} Ngày/{props.longTime-1} Đêm </h3>
            </div>
            </div>
        </div>
    )
}

export default TourList