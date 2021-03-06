import React from "react";

export default function Report() {
  return (
    <section className="bg-darks pd-bottom-40" id="subscribe">
      <div className="container">
        <div className="row"></div>
        <div className="col-md-12">
          <h2 className="hightlight-underline-black text-uppercase black">
            Theo dõi chúng tôi!
          </h2>
        </div>
        <div className="col-md-12 text-center black">
          <blockquote className="about-quote">
            <p>
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
            <a target="_blank" title="Facebook" href="facebook.com" alt="hello">
              <i className="fab fa-facebook-f" />
            </a>
            <a target="_blank" title="Twitter" href="Twitter.com" alt="hello">
              <i className="fab fa-twitter" />
            </a>
            <a target="_blank" title="Linkedin" href="link.com" alt="hello">
              <i className="fab fa-linkedin-in" />
            </a>
            <a target="_blank" title="Googleplus" href="google.com" alt="hello">
              <i className="fab fa-google-plus-g" />
            </a>
            <a target="_blank" title="Pinterest" href="pint.com" alt="hello">
              <i className="fab fa-pinterest-p" />
            </a>
            <a target="_blank" title="Youtube" href="youtube.com" alt="hello">
              <i className="fab fa-youtube" />
            </a>
            <a target="_blank" title="Instagram" href="instagram.com">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
