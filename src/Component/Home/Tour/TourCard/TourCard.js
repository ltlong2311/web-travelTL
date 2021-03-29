import React from 'react'

function TourCard(props) {
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
    const getTourFavorite = () =>{
        console.log(props.valueTourFavorite);
    }
    return (
        <div onClick={getTourFavorite} className="tour-card col-md-4 mb-2">
            <div className="popular">
                <div className="popular_inner">
                <figure>
                    <img src={props.image} alt="" className="img-responsive" />
                    <div className="over">
                        <div className="v1"><span>Tour {props.place}</span></div>
                        <div className="v2">{props.cost} VND</div>
                    </div>
                </figure>
                <div className="caption">
                    <div className="txt1">
                        <span>{props.tourName}</span>
                        <p>{props.days} Ngày/ {props.days -1 } Đêm</p>
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
                        <div className="right_side"><a href={"/tours/" + toSlug(props.tourName) + "." + props.tourId + ".html"} onClick={getTourFavorite} className="btn-default btn1">Chi tiết</a></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TourCard
