import React, {useState, useEffect} from 'react'
import Post from './Post'
import { dataFirebase } from '../../../firebaseConnect' 
import QuickPost from './QuickPost';
import EditForm from './EditForm';
import { connect } from 'react-redux'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyPost(props) {
    const [quickPost, setQuickPost] = useState(false);
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
            id: key,
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
          // console.log(dataPost);
          // console.log(value.id); // push id=key
          return (
          <Post
          key={key}
          id={key}
          postInfo={value}
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
    const showEditForm = () => {
      if(props.isEdit){
        return <EditForm changeEditPost={changeEditPost} />
      }
    }

    const changeQuickPost = () => {
      setQuickPost(!quickPost);
    }
    
    const notifyEditSuccess = () => toast.info(" ✔ Đã bấm vào tiêu đề!");
    const notifyFall = () => toast.error("test errol!");

  return (
      <div className="forum-page" id="my-post">
        <div className="container main-content">
          <div className="row">
            <div className="col left-sidebar">
              <div className="card">
                <table className="table stories-list">
                  <thead>
                    <tr>
                      <th onClick={notifyEditSuccess} scope="col">Tiêu Đề</th>
                      <th onClick={notifyFall} scope="col">Người Đăng</th>
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

              <div onClick={changeQuickPost} className="btn btn-info"> <small> Đăng bài nhanh</small></div>
              <div className="form-post mt-4">
                {quickPost? <QuickPost changeQuickPost={changeQuickPost} />: null}
              </div>
              <div className="form-edit mt-4">
                {showEditForm()}
              </div> 
            </div>
        </div>
      </div>
    </div>
      
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditPost: () => {
      dispatch({
        type: "CHANGE_EDIT_POST"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPost)

