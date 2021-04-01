import React from 'react'
import './Image.css'
import { connect } from 'react-redux'
function Image(props) {
    return (
        <div id="image-show">
            <div onClick={() => props.changeImage()} className="overlay" />
            <img src={props.imageDes} alt=""/>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    imageDes: state.imageDes
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      changeImage: () => {
        dispatch({
          type: "CHANGE_SHOW_IMAGE_DES"
        })
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Image)
