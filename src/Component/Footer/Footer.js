import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section className="cta">
                <div className="cta-content">
                    <div className="container">
                        <h2>WELCOME!</h2>
                        <div className="be">
                            <a href="/contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
                        </div>
                    </div>
                </div>
                <div className="overlay" />
                </section>
                <footer>
                <div className="container">
                    <p>© Your Website 2020. All Rights Reserved.</p>
                </div>
                </footer>
            </div>
        )
    }
}
