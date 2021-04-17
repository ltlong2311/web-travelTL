import React from 'react'
import './Header.css'
import ReactStars from "react-rating-stars-component";

export default function Header(props) {
    // const [count, setCount] = useState(0);
    // var images = [];
    // var time = 3000;

    // images[0] = '/img/bg-4.jpg';
    // images[1] = '/img/bg1.jpg';
    // images[2] = '/img/bg-2.jpg';
    // images[3] = '/img/bg-3.jpg';
    // images[4] = '/img/bg-4.jpg';

    // const changeImg = () => {
    //     document.slide.src = images[count];

    //     if(count < images.length-1){
    //       setCount(count + 1);
    //       console.log(count);
    //     }else{
    //        setCount(0);
    //        console.log('day la');
    //     }
    //     setTimeout(()=>changeImg,time);

    // }
    // window.onload = changeImg;
    
    const ratingHeader = {
        size: 40,
        count: 5,
        color: "#fff",
        activeColor: "#fff",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newRating) => {
          console.log(`New rating is ${newRating}`);
        }
    };
    
    return (
        <header className='hero-container'>
            <div className="header-main">
                <img name='slide' className="image-slide" src={props.image} width='100%' height='100%' object-fit='cover' alt=''/>
                <div className="hero-content">
                    <div id="wrapper">
                        <h1>{props.title}</h1>
                        <div className="tour-time">{props.longTime} Ngày/ {props.longTime -1} Đêm</div>
                        <div className="rating-header">
                            <ReactStars {...ratingHeader} />
                            <span className="rating-point">4.5{props.ratingPoint} /{props.numReview} đánh giá <i className="fas fa-star"></i></span>
                        </div>
                        <div className="inputSearch">
                            <form action="/Search" method="get">
                                <div className="title-slide" >
                                    <div className='icon-place'><i className="fas fa-map-marker-alt" /></div>
                                    <input type="text" placeholder=" Tìm kiếm địa điểm, tour...  " name="key" />
                                    <div type="submit" className="btn btn-primary" id="search" >
                                        <i className="icon-search fas fa-search"></i>
                                        <div className="text-search">Tìm Kiếm</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
