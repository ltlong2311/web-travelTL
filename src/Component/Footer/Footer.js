import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
        Aos.init({
          duration: 400,
          offset: 30,
          once: true,
          delay: 0,
        });
      }, []);
    return (
        <div>
            <section className="cta">
            <div className="cta-content">
                <div className="container">
                    <h2 data-aos="flip-left">See you again!</h2>
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

export default Footer
