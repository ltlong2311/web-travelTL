import React, { useState, useEffect } from 'react'
import Post from './Post'
import { dataFirebase } from '../../../firebaseConnect' 
import firebase from 'firebase';
import EditPost from './EditPost';
// import { element } from 'prop-types';



function PostList(props) {
  
  const [editPost, setEditPost] = useState(false);
  const [dataPost, setDataPost] = useState();
  

  useEffect( () => {
    dataFirebase.on('value', (posts) => {
      var arrayData= [];
      posts.forEach(element => {
        const key = element.key;
        const title = element.val().title;
        const category = element.val().category;
        const content = element.val().content;
        const poster = element.val().poster;
        const posterImg = element.val().posterImg;
        arrayData.push({
          key: key,
          title: title,
          category: category,
          content: content,
          poster: poster,
          posterImg: posterImg 
        });
      });
      setDataPost(arrayData);
    });
  }, []);

  
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

  const changeEditPost = () => {
    setEditPost(!editPost);
  }
  
  // useEffect( () => {
  //   console.log(editPost);
  // }, [editPost]);


  // const isShowEditPost = () => {
  //   if(editPost === true){
  //     return <EditPost />
  //   }
  // }
  
  // const pushData= () => {
  //   var connectData = firebase.database().ref('post');
  //   connectData.push({
  //     title: "Những điều cần lưu ý khi đi Nhật",
  //     category: "Hỏi đáp du lịch",
  //     postDate: "24:21 26/02/2021 GMT+7",
  //     poster: "nguoibian1"
  //   })
  //   console.log("ban vưa them moi du lieu");
  // }

  // const deleteData= (id) => {
  //   var connectData = firebase.database().ref('post');
  //   connectData.child(id).remove();
  //   console.log("ban vua xoa thanh cong");
  // }
  
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
              </div>
              
              <div className="mt-2">
                  {/* <button onClick={pushData} type="button" className="btn btn-primary">Thêm</button>
                <button onClick={()=>deleteData("-MVEki7eUuDEVRCFQDmT")} type="button" className="btn btn-primary">Xóa</button> */}
                  <div onClick={changeEditPost} className="btn btn-info">+ <small> Thêm nhanh</small></div>
              </div>
            </div>
      
            <div className="col-md-4 center-col">
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

              {editPost? <EditPost changeEditPost={changeEditPost} />: null}
              {/* {isShowEditPost()} */}

              <div id="accordianId" className="mb-2" role="tablist" aria-multiselectable="true">
                <div className="card">
                  <div className="card-header" role="tab" id="section1HeaderId">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordianId" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                        Hỏi Đáp Du Lịch
                      </a>
                    </h5>
                  </div>
                  <div id="section1ContentId" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                      231199 bài viết
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="section2HeaderId">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordianId" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                        Tìm Kiếm Tour
                      </a>
                    </h5>
                  </div>
                  <div id="section2ContentId" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                    <div className="card-body">
                      13284 bài viết
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="section2HeaderId">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordianId" href="#section3ContentId" aria-expanded="true" aria-controls="section3ContentId">
                        Đánh Giá Chuyến Đi
                      </a>
                    </h5>
                  </div>
                  <div id="section3ContentId" className="collapse in" role="tabpanel" aria-labelledby="section3HeaderId">
                    <div className="card-body">
                      251 bài viết
                    </div>
                  </div>
                </div>

                
              </div>

              <ul className="list-group mb-3 category-sidebar">
                <li className="list-group-item ">
                  <h3><a href="/dien-dan/ban-luan-truyen/" className="category-badge">
                      <span className="color mr-1" style={{backgroundColor: '#0a8ddf'}} />
                      <span className="name"><span>Du lịch Châu Âu</span> <small>x 63,459</small></span>
                    </a></h3>
                  <div className="badge-desc text-gray">issum</div>
                </li>
                <li className="list-group-item ">
                  <h3><a href="/dien-dan/dich-truyen/" className="category-badge">
                      <span className="color mr-1" style={{backgroundColor: '#4a68b7'}} />
                      <span className="name"><span>Chuyến đi gia đình</span> <small>x 9,897</small></span>
                    </a></h3>
                  <div className="badge-desc text-gray">lorem</div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
      
  )
}

export default PostList
