import React from 'react'

function Related(props) {
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
        <div className="col-md-3 mb-2">
            <div className="card-deck">
                <div className="card">
                    <a href={"/news/" + toSlug(props.title) + "." + props.id + ".html"}>
                        <img className="card-img-top" height={150} src={props.img} alt="" />
                    </a>
                    <div className="card-body">
                    <h4>
                        <a href={"/news/" + toSlug(props.title) + "." + props.id + ".html"}>{props.title}</a>
                    </h4>
                    <hr />
                    <p className="card-text">{props.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Related
