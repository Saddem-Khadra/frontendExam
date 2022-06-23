import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../store";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {logout} from "../actions/userActions";
import {toast} from "react-toastify";
import {UserInterface} from "../interfaces/UserInterface";
import {emptyUser} from "../constants/userConstants";

export const User: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id}= useParams();
    console.log(id)
    const userLogin = useSelector((state: RootStore) => state.userLogin);
    const {userInfo, error} = userLogin;

    const logoutHandler = (event:any) => {
        event.preventDefault();
        dispatch(logout() as any);
    }
    const homeHandler = (event:any) => {
        event.preventDefault();
        navigate('/friends');
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
    const userFromStorage: UserInterface = localStorage.getItem('user') ?
        JSON.parse(localStorage.getItem('user') as string) : emptyUser();
    return (
        <div>
            <Button variant="secondary" type={"submit"} onClick={homeHandler}>
                Home
            </Button>
            <Button variant="warning" type={"submit"} onClick={logoutHandler}>
                Logout
            </Button>
            <h2>{userFromStorage.alias}'s Profile</h2>
            <p>Name : {userFromStorage.first_name} {userFromStorage.last_name}</p>
            <p>Email {userFromStorage.email}</p>
            <p>Date of birth {userFromStorage.dateOfBirth}</p>

        </div>
    );
};
