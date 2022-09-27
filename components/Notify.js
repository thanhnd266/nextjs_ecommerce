import { useSelector, useDispatch } from 'react-redux';
import { notifyAction } from '../redux/NotifySlice';
import Loading from './Loading';
import Toast from './Toast';


const Notify = () => {
    const notify = useSelector(state => state.notify);

    const dispatch = useDispatch();

    return (
        <>
            {notify.loading && <Loading />}
            {notify.notify && notify.notify.error && 
                <Toast 
                    msg={{ msg: notify.notify.error, title: "Error" }}
                    handleShow={() => dispatch(notifyAction({ error: ''}))}
                    bgColor="bg-danger"
                />
            }
            {notify.notify && notify.notify.success && 
                <Toast 
                    msg={{ msg: notify.notify.success, title: "Success" }}
                    handleShow={() => dispatch(notifyAction({ success: ''}))}
                    bgColor="bg-success"
                />
            }
        </>
    )
}

export default Notify;