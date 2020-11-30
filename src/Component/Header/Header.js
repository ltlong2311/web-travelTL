import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (          
            <header className="masthead news">
                <div className="h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto text-center">
                                <h1 className="mb-1">{this.props.title}</h1>
                                <a href="#download" className="btn btn-outline btn-center btn-xl js-scroll-trigger">View Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
