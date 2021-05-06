import React, { useState } from 'react'
import Header from '../Header/Header';
import IntroContent from './IntroContent/IntroContent';
import './Home.css'
import Destinations from './Tour/Destinations';
import NewsList from './News/NewsList';
import TourFavorites from './Tour/TourFavorites';
import TourNew from './Tour/TourNew';
import Subscribe from './Subscribe/Subscribe';


function Home() {
    const [count, setCount] = useState(0);
    const images = ['img/bg.jpg','img/vietnam.jpg','img/bg-1.jpg', 'img/thailand.jpg','img/bg-2.jpg','img/japan.jpg', 'img/vietnam2.jpg','img/bg-3.jpg','img/bg-4.jpg','img/bg-5.jpg','img/bg-6.jpg','img/bg-7.jpg','img/bg-8.jpg'];
    
  
    const changeImg = () => {
        if( count < images.length -1 ){
            setCount(count + 1);
            // console.log(count);
        }else {
            setCount(0);
        }
    }
    // useEffect(changeImg);
    // setInterval(()=>changeImg(), 5000);
    setTimeout(changeImg, 9000);
    const image = images[count];

    return (
        <div id="home">   
            <Header title="DU LỊCH TL" image={image} />
            {/* <marquee width="100%" behavior="scroll" bgcolor="#dadfe1" className='marketing' alt="hello">  
                Chào mừng đến với Website du lịch TL, hãy lựa chọn và tận hưởng những chuyến du lịch tuyệt vời thôi nào! 
            </marquee>  */}
            <IntroContent/>
            <Destinations/>
            <TourFavorites />
            <TourNew />
            <NewsList />
            <Subscribe />
        </div>
    )
}

export default Home;

/* eslint-disable jsx-a11y/no-distracting-elements */

