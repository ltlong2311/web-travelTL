import React, { Component } from 'react'

export default class Related extends Component {
    render() {
        return (
            <div className="col-3 mb-2">
                <div className="card-deck">
                    <div className="card">
                        <a href="/details"><img className="card-img-top" height={150} src={this.props.img} alt="" /></a>
                        <div className="card-body">
                        <h4><a href="detail.html">{this.props.title}</a></h4>
                        <hr />
                        <p className="card-text">{this.props.quote}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
