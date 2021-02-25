import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section className="cta">
                <div className="cta-content">
                    <div className="container">
                        <h2>See you again!</h2>
                        <div className="be">
                            <a href="/home" className="btn btn-outline btn-xl js-scroll-trigger">Trở lại!</a>
                        </div>
                    </div>
                </div>
                <div className="overlay" />
                </section>
                <footer>
                <div className="container">
                    <p>© Website Travel TL 2021. Made by LTL.</p>
                </div>
                </footer>
            </div>
        )
    }
}
