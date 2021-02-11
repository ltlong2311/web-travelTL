// import React from 'react'

// export default function Header(props) {
//     return (
//         <header className="masthead news">
//             <div className="h-100">
//                 <div className="row h-100">
//                     <div className="col-lg-12 my-auto">
//                         <div className="header-content mx-auto text-center">
//                             <h1 className="mb-1">{props.title}</h1>
//                             <a href="#download" className="btn btn-outline btn-center btn-xl js-scroll-trigger">View Now!</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

import React,{useState} from 'react'
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
    
    const [count, setCount] = useState(0);
    const images = ['img/bg.jpg','img/vietnam.jpg', 'img/thailand.jpg','img/japan.jpg','img/china3.jpg', 'img/vietnam2.jpg','img/bg-1.jpg','img/bg-2.jpg','img/bg-3.jpg','img/bg-4.jpg','img/bg-5.jpg','img/bg-6.jpg'];
    

    const changeImg = () => {
        if( count < images.length -1 ){
            setCount(count + 1);
            console.log(count);
        }else {
            setCount(0);
            console.log(count);
        }
    }
    // useEffect(changeImg);
    // setInterval(()=>changeImg(), 5000);
    setTimeout(changeImg, 9000);
    const image = images[count];
     


    return (
        <header className='hero-container'>
            <div className="image-main">
                <img name='slide' className="image-slide" src={image} width='100%' height='100%' object-fit='cover' alt=''/>
                <div className="hero-content">
                    <div id="wrapper">
                        <h1>{props.title}</h1>
                        <div className="inputSearch">
                            <form action="/Search" method="get">
                                <div className="title-slide" >
                                    <div className='icon-place'><i className="fas fa-map-marker-alt" /></div>
                                    <input type="text" placeholder=" Tìm kiếm địa điểm, tour và tin tức...  " name="key" />
                                    <div type="submit" className="btn btn-primary" id="search" onClick={(data)=>this.props.getText(this.state.tempValue)}>Tìm Kiếm</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
