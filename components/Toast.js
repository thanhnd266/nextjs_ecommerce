import { useEffect, useState } from "react";
import { notifyAction } from '../redux/NotifySlice';
import { useDispatch } from "react-redux";

const Toast = ({ msg, handleShow, bgColor}) => {

    const dispatch = useDispatch();

    const [show, setShow ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            // dispatch(notifyAction({}));
            setShow(false);
        }, 3000);
    }, [show, dispatch])

    return ( 
        <div 
            className={`toast show position-fixed text-light ${bgColor}`}
            hidden={show ? false : true} 
            style={{ top: '5px', right: '5px', zIndex: 9, minWidth: '280px'}}
        >
            <div className={`toast-header ${bgColor} text-light`}>
                <strong className="mr-auto text-light">{msg.title}</strong>
                <button 
                    type="button" 
                    className="ml-2 mb-1 close text-light" 
                    data-dismiss="toast"
                    style={{ outline: 'none'}}
                    onClick={handleShow}
                >
                    &times;
                </button>
            </div>
            <div className="toast-body">
                {msg.msg}
            </div>
        </div>
    );
}
 
export default Toast;