import React, { Component } from 'react'
import Header from '../Header/Header'
import Contact from './Contact/Contact'

export default class Contacts extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <Header title="Contact" />
                </div>
                <div className="container">
                    <Contact />     
                </div>
            </div>
        )
    }
}
