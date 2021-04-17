import React from 'react'

export default function TourSubscribe() {
  return (
    <section className="bg-darks" id="tour-subscribe">
      <div className="container pb-4">
        <div className="row"></div>
        <div className="col-md-12 text-center">
          <p>
              <img src="/img/icon-menu/icon-subscribe.png" alt="" className="icon-destination-tour" />
          </p>
        </div>
        <div className="col-md-12">
          <h2 className="highlight-underline-black text-uppercase black">
            Theo dõi chúng tôi!
          </h2>
        </div>
        <div className="col-md-12 text-center black">
          <blockquote>
            <p className="text-muted-dark">
              Theo dõi thông tin du lịch từ Travel TL trên các trang mạng xã hội của chúng tôi!
            </p>
          </blockquote>
        </div>
        <div className="col-md-12 text-center pb-4">
          <div className="social-links pt-3">
            <a target="_blank" title="Facebook" rel="noreferrer" href="https://www.facebook.com/lethanhlong.2311/" alt="hello">
              <i className="fab fa-facebook-f" />
            </a>
            <a target="_blank" title="Twitter" rel="noreferrer" href="Twitter.com" alt="hello">
              <i className="fab fa-twitter" />
            </a>
            <a target="_blank" title="Linkedin" rel="noreferrer" href="link.com" alt="hello">
              <i className="fab fa-linkedin-in" />
            </a>
            <a target="_blank" title="Googleplus" rel="noreferrer" href="google.com" alt="hello">
              <i className="fab fa-google-plus-g" />
            </a>
            <a target="_blank" title="Pinterest" rel="noreferrer" href="pint.com" alt="hello">
              <i className="fab fa-pinterest-p" />
            </a>
            <a target="_blank" title="Youtube" rel="noreferrer" href="youtube.com" alt="hello">
              <i className="fab fa-youtube" />
            </a>
            <a target="_blank" title="Instagram" rel="noreferrer" href="instagram.com">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
