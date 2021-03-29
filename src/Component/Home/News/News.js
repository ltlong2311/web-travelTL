import React from 'react'

function News(props) {
    const toSlug = (str) =>
    {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
        
    }
    // console.log(props.newsId);
    return (
        <div className="col-md-6 d-flex mb-3" >
                <div className="news-item d-flex flex-row pl-2">
                    <a href={"/news/" + toSlug(props.title) + "." + props.newsId + ".html"} className="cover book-shadow" aria-label=" ">
                        <img src={props.image}  alt="" width={115} height={110} className="lazy zoom-me error" />
                    </a>
                    <div className="infos">
                        <h4><a href={"/news/" + toSlug(props.title) + "." + props.newsId + ".html"} >{props.title}</a></h4>
                        <div className="info">
                            <span className="stat text-primary">{props.postTime}</span> 
                            <span className="stat text-danger ml-1">{props.views} 23,119<small> lượt xem</small></span>
                        </div>
                        <blockquote className="desc p-2">{props.quote}</blockquote>
                    </div>
                </div>
            </div>    
    )
}

export default News