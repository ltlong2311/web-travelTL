import React from 'react'
import Header from '../Header/Header'
import Detail from './Detail/Detail'
import Related from './Detail/Related'
import data from '../data.json'

function Details(props) {

    return (
        <div className='details-page'> 
            <Header title="News" image='../img/news-header4.jpg'/> 
            <div className="news-details">
                <div className="container ">
                    {    
                        data.map((value,key)=>{
                            console.log(props);
                            // if(value.id === parseInt(props.match.params.id)){
                            return(
                            <Detail key={key}
                                img={value.img}
                                quote={value.quote}
                                time={value.time}
                                caption={value.caption}
                                title={value.title}
                                content={value.content}
                                />
                            )
                        }) 

                       
                    }
                    <div><h4>Tin liên quan</h4></div>
                    <div className="row mt-1">
                        {
                            data.map((value,key) => {
                                return(
                                <Related key={key}
                                    img={value.img}
                                    title={value.title}
                                    quote={value.quote}/>
                                )
                            })
                        }       
                    </div>          
                </div>
            </div>              
            
        </div>
    )
}

export default Details
