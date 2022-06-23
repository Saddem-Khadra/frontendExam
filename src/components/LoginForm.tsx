import {Form, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../store";
import {login} from "../actions/userActions";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {useNavigate} from "react-router-dom";

export const LoginForm: React.FC = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootStore) => state.userLogin);
    const {error: loginError, userInfo} = userLogin;

    const loginHandler = (event: any) => {
        event.preventDefault();
        dispatch(login(email,password) as any);
    };
    useEffect(() => {
        if (userInfo.id !== 0) {
            navigate("/friends");
        }
        if (loginError) {
            toast.configure();
            toast.error(loginError, {
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
    }, [navigate, userInfo.id, loginError]);
    return (
        <div className="col-lg-6 col-md-6">
            <h2>Login</h2>
            <Form onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value={email}
                                  onChange={event => setEmail(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required value={password}
                                  onChange={event => setPassword(event.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
