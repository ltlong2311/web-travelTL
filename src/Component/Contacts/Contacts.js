import React, { Component } from 'react'
import Header from '../Header/Header'
import Contact from './Contact/Contact'
import './Contacts.css'
export default class Contacts extends Component {
    
    render() {
        return (
            <>
                <Header title="Contact" image='../img/bg-3.jpg'/>
                <Contact />     
            </>
        )
    }
}
