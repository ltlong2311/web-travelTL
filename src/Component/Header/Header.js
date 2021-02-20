import React from 'react'
import './Header.css'

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
    

    return (
        <header className='hero-container'>
            <div className="header-main">
                <img name='slide' className="image-slide" src={props.image} width='100%' height='100%' object-fit='cover' alt=''/>
                <div className="hero-content">
                    <div id="wrapper">
                        <h1>{props.title}</h1>
                        <div className="inputSearch">
                            <form action="/Search" method="get">
                                <div className="title-slide" >
                                    <div className='icon-place'><i className="fas fa-map-marker-alt" /></div>
                                    <input type="text" placeholder=" Tìm kiếm địa điểm, tour và tin tức...  " name="key" />
                                    <div type="submit" className="btn btn-primary" id="search" >Tìm Kiếm</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
