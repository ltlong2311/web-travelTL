import React, { Component } from 'react'

export default class Detail extends Component {
  
    render() {
       
        
        return (
            <div className="umbotron-fluid mt-2 p-5">
                <div className="container">
                    <div className="text-center">
                        <h2>{this.props.title}</h2>
                        <span style={{color: "#999", fontSize: "15px"}}>{this.props.time}</span>
                    </div>
                    <hr className="my-2" />
                    <p>{this.props.quote}</p>
                    <img className="img-fluid" src={this.props.img} width="100%" alt=""/>
                    <figure className="caption">{this.props.caption}</figure>
                    <p>{this.props.content}</p>
                </div>
           </div>
        )
    }
}
