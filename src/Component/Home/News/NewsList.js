import React from 'react'
import News from './News'
import data from '../../data.json'
import './NewsList.css'
export default function NewPage() {
    return (
        <section className="bg-lights news pb-5" id="news">
            <div className="container">
                <div className="news-inner pb-2 pd">
                     
                    <div className="row align-center mg-bt-40">
                        <div className="col-md-12 text-center">
                            <p>
                                <img src="img/new-logo.svg" alt="" className="icon-news" />
                            </p>
                            <h2 className="highlight-underline">TIN TỨC DU LỊCH</h2>
                            <blockquote className="about-quote">
                                <p>Cung cấp thông tin du lịch cập nhật và chính xác nhất, đem lại cho bạn những thông tin hữu ích cho việc lựa chọn và trải nghiệm chuyến du lịch tuyệt vời của mình!</p>
                            </blockquote>
                        </div>
                    </div>

                    <div className="row news-list">   
                        {
                            data.map((value,key) => {
                                return(
                                <News key={key}
                                newsId={value.id}
                                image={value.image}
                                postTime={value.postTime}
                                title={value.title}
                                quote={value.quote}/>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
            <div className="col">
                <div id="view-news-list" className="mg-top-40">
                    <a href="news.html" className="btn-view-more">Xem thêm</a>
                </div>
            </div>
        </section>
       
    )
}
