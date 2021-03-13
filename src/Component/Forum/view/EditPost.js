import React, {useState} from 'react'
import {connect} from 'react-redux'

function EditPost(props) {
    
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
      // newPost = JSON.stringify(newPost);
      // props.getData(newPost);
      props.addDataStore(newPost);
      console.log("Thêm " + JSON.stringify(newPost)+" thành công!");
    }
    
    return (
        <div className="form-edit mb-3">
            <h3>Sửa bài đăng</h3>
            <div className="form-group">
                <form>
                  <label className="form-text">Tiêu đề</label>
                  <input type="text" className="form-control" name="postTitle" aria-describedby="helpId" placeholder="" />
                  <label htmlFor="exampleSelect" className>Loại tin</label>
                  <select
                    
                    name="postCategory"
                    id="categorySelect"
                    tabIndex={3}
                    className="form-control"
                  >
                    <option value={0}>----</option>
                    <option>Hỏi Đáp Du Lịch</option>
                    <option>Hướng Dẫn Du Lịch</option>
                    <option>Nhận Xét Chuyến Đi</option>
                    <option>Giới Thiệu Điểm Đến</option>
                    <option>Phản Ánh Vấn Đề</option>
                  </select>
                  <label className="form-text">Nội dung</label>
                  <textarea name="postContent" className="form-control" id="exampleFormControlTextarea1" rows="2" />
                  <button className="btn btn-success mt-2" type="reset" onClick={addDataPost}>Lưu</button>
                  <button className="btn btn-warning mt-2 ml-1" onClick={() =>props.changeEditPost()}>Đóng</button>
                </form>
            </div>
        </div>
    )
}



const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testConnect,
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


export default connect(mapStateToProps, mapDispatchToProps)(EditPost);