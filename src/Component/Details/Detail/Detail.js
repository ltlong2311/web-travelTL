import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div className="umbotron-fluid mt-2 p-5">
                <div className="container">
                    <img className="img-fluid" src={this.props.img} width="100%" alt=""/>
                    <figure className="caption">{this.props.caption}</figure>
                <hr className="my-2" />
                <div className="text-center">
                    <h3>{this.props.title}</h3>
                </div>
                <p>{this.props.content}</p>
                </div>
          </div>
        )
    }
}
