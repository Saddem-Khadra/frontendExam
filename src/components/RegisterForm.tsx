import {Form, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../store";
import {sendRegister} from "../actions/registerActions";
import {toast} from "react-toastify";
import {REGISTER_RESET} from "../constants/registerConstants";

export const RegisterForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [alias, setAlias] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [date, setDate] = useState('');


    const dispatch = useDispatch();
    const contactForm = useSelector((state: RootStore) => state.register);
    const {register, error: registerFormError, loading} = contactForm;
    useEffect(() => {
        if (register.id !== 0) {
            toast.configure();
            toast.success(`User ${firstName} ${lastName} has been added Successfully`, {
                position: "bottom-left",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            dispatch({type: REGISTER_RESET});
            setFirstName('');
            setLastName('');
            setAlias('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setDate('');
        }
        if (registerFormError) {
            toast.configure();
            toast.error(registerFormError, {
                position: "bottom-left",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            dispatch({type: REGISTER_RESET});
        }
    }, [register, registerFormError, dispatch]);
    const registerHandler = (event: any) => {
        event.preventDefault();
        if (password === confirmPassword) {
            dispatch(sendRegister(firstName, lastName, email, password, alias, date) as any);
        } else {
            toast.configure();
            toast.error("Confirm Your Password", {
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

    };
    return (

        <div className="col-lg-6 col-md-6">
            <h2>Register</h2>
            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" required value={firstName}
                                  onChange={event => setFirstName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" required value={lastName}
                                  onChange={event => setLastName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAlias">
                    <Form.Label>Alias</Form.Label>
                    <Form.Control type="text" placeholder="Enter alias" required value={alias}
                                  onChange={event => setAlias(event.target.value)}/>
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm your Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm your Password" required value={confirmPassword}
                                  onChange={event => setConfirmPassword(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBirthOfDate">
                    <Form.Label>Confirm your Password</Form.Label>
                    <Form.Control type="date" placeholder="Birth of date" required value={date}
                                  onChange={event => setDate(event.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};
