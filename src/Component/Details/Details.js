import React, { Component } from 'react'
import Header from '../Header/Header'
import Detail from './Detail/Detail'
import Related from './Detail/Related'
import data from '../data.json'

export default class Details extends Component {
    
    render() {
        return (
            <div>
              <div>  
                   <Header title="News"/>               
                </div>
                
                <div className="container">
                    {
                        data.map((value,key) => {
                            // console.log(typeof(this.props.match.params.id));
                            // if(value.id == parseInt(this.props.match.params.id) ){
                              
                                return(
                                <Detail key={key}
                                    img={value.img}
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
        )
    }
}
