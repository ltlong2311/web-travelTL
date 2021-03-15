import React, {useState} from 'react'
import {connect} from 'react-redux'

function QuickPost(props) {
    
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const isChangeTitle= (e) => {
      setPostTitle(e.target.value);
    }
    const isChangeContent= (e) => {
      setPostContent(e.target.value);
    }
    const addDataPost = (title,category,content) => {
      var newPost = {};
      newPost.title = postTitle;
      newPost.category = '--';
      newPost.content = postContent;
      newPost.posterImg = 'https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg';
      newPost.poster = 'Ẩn danh';
      // newPost = JSON.stringify(newPost);
      // props.getData(newPost);
      props.addDataStore(newPost);
      console.log("Thêm " + JSON.stringify(newPost)+" thành công!");
    }
    
    return (
        <div className="form-edit mb-3">
            <h3>Đăng Nhanh</h3>
            <div className="form-group">
                <form>
                  <small id="helpId" className="form-text text-muted">Tiêu Đề</small>
                  <input type="text" onChange={(e)=>isChangeTitle(e)} className="form-control" name="postTitle" aria-describedby="helpId" placeholder="" />
                  <small id="helpId" className="form-text text-muted">Nội dung</small>
                  <textarea name="postContent" onChange={(e)=>isChangeContent(e)} className="form-control" id="exampleFormControlTextarea1" rows="2" />
                  <button className="btn btn-success mt-2" type="reset" onClick={addDataPost}>Lưu</button>
                  <button className="btn btn-warning mt-2 ml-1" onClick={props.changeQuickPost}>Đóng</button>
                </form>
            </div>
        </div>
    )
}



const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testConnect
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (newPost) => {
      dispatch({type:"ADD_DATA", newPost})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuickPost);
// export default QuickPost;