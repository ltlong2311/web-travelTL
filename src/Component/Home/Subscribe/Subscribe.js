import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Report() {
  useEffect(() => {
    Aos.init({
      duration: 400,
      offset: 30,
      once: true,
      delay: 0,
    });
  }, []);
  return (
    <section className="bg-darks pd-bottom-40" id="subscribe">
      <div className="container">
        <div className="row"></div>
        <div className="col-md-12">
          <h2 className="highlight-underline-black text-uppercase black">
            Theo dõi chúng tôi!
          </h2>
        </div>
        <div className="col-md-12 text-center black">
          <blockquote
            className="about-quote"
            data-aos="fade-up"
            data-aos-easing="ease-out-quint"
          >
            <p className="text-muted-dark">
              Thế giới Travel TL luôn luôn thay đổi và phát triển. Đăng ký để
              luôn nhận tin tức mới nhất từ chúng tôi!
            </p>
          </blockquote>
          <hr />
        </div>
        <div className="col-md-12 about-exo-subscribe text-center pb-4">
          <form>
            <input
              name="email"
              className="newsletter-email"
              placeholder="Your email address"
              type="email"
              required
            />{" "}
            <a href="tour-news.html" className="btn-subscribe">
              Subscribe
            </a>
          </form>
        </div>
        <div className="col-md-12 text-center">
          <div className="social-links">
            <a
              target="_blank"
              title="Facebook"
              rel="noreferrer"
              href="https://www.facebook.com/lethanhlong.2311/"
              alt="hello"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              target="_blank"
              title="Twitter"
              rel="noreferrer"
              href="Twitter.com"
              alt="hello"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              target="_blank"
              title="Linkedin"
              rel="noreferrer"
              href="link.com"
              alt="hello"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              target="_blank"
              title="Googleplus"
              rel="noreferrer"
              href="google.com"
              alt="hello"
            >
              <i className="fab fa-google-plus-g" />
            </a>
            <a
              target="_blank"
              title="Pinterest"
              rel="noreferrer"
              href="pint.com"
              alt="hello"
            >
              <i className="fab fa-pinterest-p" />
            </a>
            <a
              target="_blank"
              title="Youtube"
              rel="noreferrer"
              href="youtube.com"
              alt="hello"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              target="_blank"
              title="Instagram"
              rel="noreferrer"
              href="instagram.com"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
