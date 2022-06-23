import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/userActions";
import {useNavigate} from "react-router-dom";
import {RootStore} from "../store";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FriendListTable} from "../components/FriendListTable";
import {NotFriendListTable} from "../components/NotFriendListTable";

export const Friends: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state: RootStore) => state.userLogin);
    const {userInfo, error} = userLogin;

    const logoutHandler = (event:any) => {
        event.preventDefault();
        dispatch(logout() as any);
    }
    if (userInfo.id === 0) {
        navigate("/main");
    }
    if (error) {
        toast.configure();
        toast.error(error, {
            position: "bottom-left",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }

    return (
        <div>
            <Button variant="warning" type={"submit"} onClick={logoutHandler}>
                Logout
            </Button>
            <div>
                <h2>Hello, {userInfo.first_name} {userInfo.last_name}</h2>
                <p>Here is the list of your friends:</p>
                <FriendListTable/>
                <p>Other User not on your friend's list:</p>
                <NotFriendListTable/>
            </div>
        </div>
    );
};
