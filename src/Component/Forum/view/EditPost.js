import React, {useState} from 'react'
import {connect} from 'react-redux'

function EditPost(props) {
    const test= () => {
      props.addDataStore();
    }
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const isChangeTitle= (e) => {
      setPostTitle(e.target.value);
    }
    const isChangeContent= (e) => {
      setPostTitle(e.target.value);
    }
    const addData = () => {
      
    }
    return (
        <div className="form-edit mb-3">
            <h3>Đăng bài</h3>

            <div className="form-group">
                {/* <label htmlFor /> */}
                <small id="helpId" className="form-text text-muted">Tiêu Đề</small>
                <input type="text" onChange={isChangeTitle} className="form-control" name id aria-describedby="helpId" placeholder />

                <small id="helpId" className="form-text text-muted">Nội dung</small>
                <input type="text" onChange={isChangeContent} className="form-control" name id aria-describedby="helpId" placeholder />
                
                <button className="btn btn-success mt-2" onClick={test}>Lưu</button>
                <button className="btn btn-warning mt-2 ml-1" onClick={props.changeEditPost}>Đóng</button>
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
    addDataStore: () => {
      dispatch({type:"ADD_DATA"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
// export default EditPost;