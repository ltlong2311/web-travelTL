import React, { Component } from 'react'
import Header from '../Component/Header/Header'
import Contact from '../Component/Contacts/Contacts'
import '../Component/Contacts/Contacts.css'
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
