import React, { useState, useEffect } from 'react'
import Post from './Post'
import { dataFirebase } from '../../../firebaseConnect' 
// import { element } from 'prop-types';
import { connect } from 'react-redux'


function PostList(props) {
  
  // const [quickPost, setQuickPost] = useState(false);
  const [dataPost, setDataPost] = useState();
  

  // useEffect( () => {
  //   dataFirebase.on('value', (posts) => {
  //     var arrayData= [];
  //     posts.forEach(element => {
  //       const key = element.key;
  //       const title = element.val().title;
  //       const category = element.val().category;
  //       const content = element.val().content;
  //       const poster = element.val().poster;
  //       const posterImg = element.val().posterImg;
  //       arrayData.push({
  //         key: key,
  //         title: title,
  //         category: category,
  //         content: content,
  //         poster: poster,
  //         posterImg: posterImg 
  //       });
  //     });
  //     setDataPost(arrayData);
  //   });
  // }, []);

    useEffect( () => {
    dataFirebase.on('value', (posts) => {
      var arrayData= [];
      console.log(posts);
      posts.forEach(element => {
        if(element.val().title.indexOf(props.searchPost) !== -1){
          arrayData.push(element.val());
        }
      });
      setDataPost(arrayData);
    });
  }, [props.searchPost]);


  

  
  const getData = () => {
    if(dataPost){
      return dataPost.map((value, key) => {
        return (
          <Post
          key={key}
          title={value.title}
          category={value.category}
          content={value.content}
          poster={value.poster}
          posterImg={value.posterImg}
          />
        )
      })
    }
  }

  
  return (
      <div className="forum-page" id="forum">
        <div className="container main-content">
          <div className="row">
            <div className="col left-sidebar">
              <div className="card">
                <table className="table stories-list">
                  <thead>
                    <tr>
                      <th scope="col">Tiêu Đề</th>
                      <th scope="col">Người Đăng</th>
                      <th scope="col">Bình Luận</th>
                      <th scope="col">Xem</th>
                      <th scope="col"><i className="far fa-clock" data-toggle="tooltip" title="" data-original-title="Cập nhật gần đây" /></th>
                    </tr>
                  </thead>
                  {getData()}
                </table>
                <div className="px-3">
                  <nav aria-label="nut chuyen trang">
                    <ul className="pagination d-flex justify-content-between">
                      <li className="page-item" style={{width: '130px'}}>     
                        {/* <a className="btn btn-info" href="?page=" aria-label="Trang Trước">
                          <span>Trang Trước</span><span aria-hidden="true">
                            <i className="iconfont icon-right" />
                          </span>
                        </a> */}
                      </li>
                      <li className="page-item">
                        Trang <select id="id_select_page" data-select2-id="id_select_page" tabIndex={-1} className="select-page select2-hidden-accessible" aria-hidden="true">
                          <option value={1} selected data-select2-id={2}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option>...</option>
                        </select>
                        <span className="ml-1">/1</span>
                      </li>
                      <li className="page-item" style={{width: '130px'}}>     
                        <a className="btn btn-info" href="?page=2" aria-label="Trang Sau">
                          <span>Trang Sau</span><span aria-hidden="true">
                            <i className="iconfont icon-right" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
           
            <div className="forum-content col-md-4 center-col">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="icon-forum pb-3">
                    {/* <i class="fas fa-users" style={{fontSize: '48px', float: 'left', color: '#919191'}}></i> */}
                    <i className="fas fa-users" style={{fontSize: '48px', color: '#313131'}}></i>
                  </div>
                  <p className="small">Chào mừng bạn đến với Diễn Đàn Du Lịch TL - Nơi dành cho tất cả mọi người thảo luận về mọi vấn đề xung quanh địa điểm du lịch thú vị, những chuyến đi,
                    và mọi thứ xung quanh sở thích cũng như trải nghiệm du lịch của chính bạn.</p>
                  <div className="small forum-rules">
                    <a href=" #"><strong>Quy Tắc Ứng Xử Tại Diễn Đàn</strong></a>
                    <br />
                    <a href=" #"><strong>Nội Quy Website</strong></a>
                  </div>
                </div>
              </div>

              
              {/* {isShowQuickPost()} */}

              <div id="accordianId" className="category-list mb-3" role="tablist" aria-multiselectable="true">
                <div className="card">
                  <div className="card-header" role="tab" id="section1HeaderId">
                    <div className="category-topic">
                      <span className="color mr-1" style={{backgroundColor: "#3a539b"}}></span>
                      <span className="topic mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                          Hỏi Đáp Du Lịch
                        </a>
                      </span>
                    </div>
                    <div className="topic-desc text-gray">Đưa ra câu hỏi và giải đáp những ý kiến thắc mắc xung quanh vấn đề du lịch.</div>
                  </div>
                  <div id="section1ContentId" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                      231199 bài viết
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="section2HeaderId">
                    <div className="category-topic">
                      <span className="color mr-1" style={{backgroundColor: "#019875"}}></span>
                      <span className="topic mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                        Hướng Dẫn Du Lịch
                        </a>
                      </span>
                    </div>
                    <div className="topic-desc text-gray"> Chỉ dẫn những điều hữu ích và cần thiết nên lưu ý trong hành trình du lịch.</div>
                  </div>
                  <div id="section2ContentId" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                    <div className="card-body">
                      13284 bài viết
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="section3HeaderId">
                    <div className="category-topic">
                      <span className="color mr-1" style={{backgroundColor: "#f7ca18"}}></span>
                      <span className="topic mb-0">
                      <a data-toggle="collapse" data-parent="#accordianId" href="#section3ContentId" aria-expanded="true" aria-controls="section3ContentId">
                        Nhận Xét Chuyến Đi
                      </a>
                      </span>
                    </div>
                    <div className="topic-desc text-gray">Bàn luận về chất lượng, các vấn đề, hoặc đưa ra cảm nhận riêng của bản thân trong chuyến đi.</div>
                  </div>
                  <div id="section3ContentId" className="collapse in" role="tabpanel" aria-labelledby="section3HeaderId">
                    <div className="card-body">
                      251 bài viết
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="section4HeaderId">
                    <div className="category-topic">
                      <span className="color mr-1" style={{backgroundColor: "#22a7f0"}}></span>
                      <span className="topic mb-0">
                      <a data-toggle="collapse" data-parent="#accordianId" href="#section4ContentId" aria-expanded="true" aria-controls="section4ContentId">
                        Giới Thiệu Điểm Đến
                      </a>
                      </span>
                    </div>
                    <div className="topic-desc text-gray"> Review những địa điểm du lịch thú vị.</div>
                  </div>
                  <div id="section4ContentId" className="collapse in" role="tabpanel" aria-labelledby="section4HeaderId">
                    <div className="card-body">
                      84232 bài viết
                    </div>
                  </div>
                </div>

                
                <div className="card">
                  <div className="card-header" role="tab" id="section5HeaderId">
                    <div className="category-topic">
                      <span className="color mr-1" style={{backgroundColor: "#f64747"}}></span>
                      <span className="topic mb-0">
                      <a data-toggle="collapse" data-parent="#accordianId" href="#section5ContentId" aria-expanded="true" aria-controls="section5ContentId">
                        Phản Ánh Vấn Đề
                      </a>
                      </span>
                    </div>
                    <div className="topic-desc text-gray">Thông báo những vấn đề mà bản thân gặp phải để được tư vấn hỗ trợ từ Travel TL và mọi người.</div>
                  </div>
                  <div id="section5ContentId" className="collapse in" role="tabpanel" aria-labelledby="section5HeaderId">
                    <div className="card-body">
                      84232 bài viết
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="topics" id="interest-topics">
                <div className="cat-bar">
                  <h3>
                    Có thể bạn quan tâm
                  </h3>
                </div>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <h2><img width="20px" height="20px" src="https://cdn.pixabay.com/photo/2017/05/15/23/33/family-icon-2316421_1280.png" alt="Dot" title="Dot" />
                      <a alt="" title="" href=" #" target="_blank"> Chuyến đi gia đình</a>
                    </h2>
                  </li>
                  <li className="list-group-item">
                    <h2><i className="fas fa-suitcase-rolling"></i>
                      <a alt="" title="" href=" #" target="_blank"> Du lịch dài ngày</a>
                    </h2>
                  </li>
                  <li className="list-group-item ">
                    <h2><i className="fas fa-hotel"></i>
                      <a alt="" title="" href=" #" target="_blank"> Khách sạn giá rẻ</a>
                    </h2>
                  </li>
                  <li className="list-group-item ">
                    <h2><i className="fas fa-images"></i>
                      <a alt="" title="" href=" #" target="_blank"> Điểm chụp ảnh thú vị</a>
                    </h2>
                  </li>
                  <li className="list-group-item ">
                    <h2><i className="fas fa-swimmer"></i>
                      <a alt="" title="" href=" #" target="_blank"> Thiên đường bơi lội</a>
                    </h2>
                  </li>
                  <li className="list-group-item ">
                    <h2><i className="fas fa-umbrella-beach"></i>
                      <a alt="" title="" href=" #" target="_blank"> Kinh nghiệm du lịch</a>
                    </h2>
                  </li>
                </ul>
              </div>

              <div className="mb-3" style={{filter:"brightness(90%)"}}>
                <img width="100%" src="./img/bg-7.jpg" alt="" />
              </div>

              <div className="mt-2" id="active-members">
                <div className="cat-bar">
                  <h3>
                    Thành viên tích cực
                  </h3>
                </div>
                <ul className="list-group mb-3 list-active-members">
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Sanhohonyenphuyen.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">TravelTL </a>
                      </span>  
                      <span className="active-user__rank"> Bậc thầy</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>331</span> bài đăng</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="./img/multi-country.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">letlong </a>
                      </span>  
                      <span className="active-user__rank"> Chuyên gia</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>210</span> bài đăng</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">Nguoibianso1</a>
                      </span>  
                      <span className="active-user__rank"> Phượt thủ</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>123</span> bài đăng</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="./img/tl1.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">dgnhangheo</a>
                      </span>  
                      <span className="active-user__rank"> Khách Quen</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>57</span> bài đăng</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="./img/we-05.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">Wxrdie</a>
                      </span>  
                      <span className="active-user__rank"> Lữ Khách</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>34</span> bài đăng</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-2" id="most-commenter">
                <div className="cat-bar">
                  <h3>
                    Bình luận nhiều
                  </h3>
                </div>
                <ul className="list-group mb-3 list-most-commenter">
                  <div className="triangle"/>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Sanhohonyenphuyen.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">TravelTL </a>
                      </span>  
                      <span className="active-user__rank"> Vua bình luận</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>521</span> bình luận</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="./img/multi-country.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">letlong </a>
                      </span>  
                      <span className="active-user__rank"> Thánh chém</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>420</span> bình luận</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">Nguoibianso1</a>
                      </span>  
                      <span className="active-user__rank"> Thần Phán</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>261</span> bình luận</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="./img/tl1.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">dgnhangheo</a>
                      </span>  
                      <span className="active-user__rank"> Nhà phê bình</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>163</span> bình luận</span>
                      </span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="active-member">
                      <a href=" #" className="active-user--profile-link">
                        <img src="./img/we-05.jpg" alt="TravelTL" width={35} height={35} className="active-user__photo" />
                      </a>
                      <span className="active-user__name mr-2">
                        <a href=" #" className="active-user--profile-link">Wxrdie</a>
                      </span>  
                      <span className="active-user__rank"> Tập sự</span>
                      <span className="display-block">
                        <span className="active-user__points">+ <span>95</span> bình luận</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
      
  )
}

const mapStateToProps = (state) => {
  return {
    searchPost: state.searchPost
  }
}

export default connect(mapStateToProps)(PostList)
