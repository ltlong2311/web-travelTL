import React, {} from 'react'
// import { Alert, AlertContainer } from 'react-bs-notifier';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import { ToastContainer, toast } from 'react-toastify';
// import { Notifi, EnqueNotifi } from "notifi";
// import "react-notifi/dist/index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux'
// const notifi = new EnqueNotifi({
//   maxToast: 3,
//   position: "bottomCenter",
//   preventDuplicate: true,
//   autoHideDuration: 3000,
//    wrapper: ({ message, ...rest }) => {
//     return <EnqueNotifi {...rest}>{message}</EnqueNotifi>;
//   }
// });




function AlertInfo(props) {
    
    // const [position,setPosition] = useState('top-right');
    // const [alerts,setAlerts] = useState([]);
    // const [alertTimeout,setAlertTimeout] = useState(0);

    // const notify = () => toast("Wow so ez!");

    // const handleShowNotification = () => {
    //     notifi.enqueue('Here is your notification');
    // };

    // const notifyEditSuccess = () => toast.success(" ✔ Sửa bài đăng thành công!");
    // const notifyDeleteSuccess = () => toast.success("Xóa bài đăng thành công!");    
    if(props.showNotify===false) return null;

    return (
        // <AlertContainer>
        //     <Alert timeout={2} type="success" headline="Đã sửa!">
        //         Sửa thành công
        //     </Alert>
        //     <Alert type="danger" headline="Error!"></Alert>
        // </AlertContainer>
        // <div styled={{backgroundColor:"#fff", position:"relative"}}>
        //     <Notifi />
        //     <button onClick={handleShowNotification}>Show</button>
        // </div>
        <>
           <ToastContainer position="bottom-center" autoClose={3000} />
        </>
    )

}
const mapStateToProps = (state, ownProps) => {
    return {
        showNotify: state.showNotify
    }
}
export default connect(mapStateToProps)(AlertInfo);
