import React, { Component } from 'react'

export default class Detail extends Component {
    
    render() {
        
        // console.log(this.props.match.params.id);
        // console.log(this.props.value);
        
        return (
            <div className="umbotron-fluid mt-2 pt-5">
                <div className="text-center">
                    <h2>{this.props.title}</h2>
                    <span style={{color: "#999", fontSize: "15px"}}>{this.props.time}</span>
                </div>
                <hr className="my-2" />
                <p>{this.props.quote}</p>
                <img className="img-fluid px-5" src={this.props.img} width="100%" alt=""/>
                <figure className="caption px-5">{this.props.caption}</figure>
                <p>{this.props.content}</p>
           </div>
        )
    }
}
