import React from 'react'
import Header from '../Header/Header'
import Detail from './NewsDetail/NewsDetail'
import Related from './NewsDetail/Related'
import data from '../data.json'
import './Details.css'

function Details(props) {
    console.log(props);
    // console.log(props.match.params.id);
    // const slugId = Number(props.match.params.id);
    const slugId = parseInt(props.match.params.id);
    // console.log(slugId);
    
    return (
        <div className='details-page'> 
            <Header title="News" image='../img/news-header4.jpg'/> 
            <div className="news-details">
                <div className="container">
                    {data.map((value,key) => {
                        if(value.id === slugId){
                            return(
                                <Detail key={key}
                                    value={value}
                                    image={value.image}
                                    quote={value.quote}
                                    time={value.time}
                                    caption={value.caption}
                                    title={value.title}
                                    content={value.content}
                                />
                            )
                        }
                        return null
                    })}
                    
                    <div className="mb-3">
                        <h3>Tin liên quan</h3>
                    </div>
                    <div className="row mt-1 pb-3">
                        {
                            data.map((value,key) => {   
                                if( value.id !== slugId & value.id !== 23824 ){
                                    return(
                                        <Related key={key}
                                            id={value.id}
                                            value={value}
                                            image={value.image}
                                            title={value.title}
                                            quote={value.quote}/>
                                        )
                                }
                                return null
                            })
                        }       
                    </div>          
                </div>
            </div>              
            
        </div>
    )
}

export default Details
