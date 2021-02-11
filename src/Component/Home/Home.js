/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from 'react'
import Header from '../Header/Header';
import Body from './Body/Body';
import './Home.css'
import Tour from './Tour/Tour';
import NewPage from './News/NewsList';
class Home extends Component {
    
    render() {
        
        
        return (
            <>   
                <Header title="DU LỊCH TL"/>
                <marquee width="100%" behavior="scroll" bgcolor="#dadfe1" className='marketing' >  
                    Chào mừng đến với Website du lịch TL, hãy lựa chọn và tận hưởng những chuyến du lịch tuyệt vời thôi nào! 
                </marquee> 
                <div className="des-content">
                    <div className="container mr-header">
                        <Body />
                    </div>
                </div>
                <Tour />
                <NewPage />
                
            </>
        )
    }
}
export default Home