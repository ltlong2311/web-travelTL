import React from 'react'

function TourList(props) {
    const toSlug = (str) =>
    {
        str = str.toLowerCase();     
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        str = str.replace(/([^0-9a-z-\s])/g, '');
        str = str.replace(/(\s+)/g, '-');
        str = str.replace(/^-+/g, '');
        str = str.replace(/-+$/g, '');
        return str;
    }
    return (
        <div className="col-md-4 mg-bot-20 tour-card-list">
            <div className="thumbnail">
                <a href={"/tours/" + toSlug(props.tourName) + "." + props.tourId + ".html"} className="tour-image" >
                    <img src={props.image} alt="" />
                </a>
            <div className="desc_top">
                <h3>{props.tourName}</h3>
                <span>{props.nation}</span>
                <p>
                    <img src={props.nationIcon} alt="" />
                </p>
            </div>
            <div className="desc_2 intro">
                <h3 className="tour-time">{props.longTime} Ngày/{props.longTime-1} Đêm </h3>
                <h3 className="hotel-level"> 5 stars </h3>
            </div>
            </div>
        </div>
    )
}

export default TourList