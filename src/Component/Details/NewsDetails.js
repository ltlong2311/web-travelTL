import React from 'react'
import Header from '../Header/Header'
import Detail from './NewsDetail/NewsDetail'
import Related from './NewsDetail/Related'
import data from '../data.json'

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
                <div className="container ">
                    {data.map((value,key) => {
                        if(value.id === slugId){
                            return(
                                <Detail key={key}
                                    value={value}
                                    img={value.img}
                                    quote={value.quote}
                                    time={value.time}
                                    caption={value.caption}
                                    title={value.title}
                                    content={value.content}
                                />
                            )
                        }else {
                            return <div key={key}></div>
                        }
                    })}
                    
                    <div className="mb-3">
                        <h3>Tin liên quan</h3>
                    </div>
                    <div className="row mt-1">
                        {
                            data.map((value,key) => {
                                if( value.id !== slugId ){
                                    return(
                                        <Related key={key}
                                            id={value.id}
                                            value={value}
                                            img={value.img}
                                            title={value.title}
                                            quote={value.quote}/>
                                        )
                                }
                                return <div key={key}></div>
                            })
                        }       
                    </div>          
                </div>
            </div>              
            
        </div>
    )
}

export default Details
