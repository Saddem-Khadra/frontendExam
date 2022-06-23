import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../store";
import {friendsList} from "../actions/userActions";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const FriendListTable: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootStore) => state.userLogin);
    const {userInfo, error} = userLogin;

    useEffect(() => {
        dispatch(friendsList() as any);
    }, [dispatch]);

    const viewHandler = (event: any, friendId: number, index: number) => {
        event.preventDefault();
        localStorage.removeItem("user");
        localStorage.setItem('user', JSON.stringify(userInfo.friends[index]));
        navigate(`/user/${friendId}`);
    }
    const removeHandler = (event: any, friendId: number) => {
        event.preventDefault();
        dispatch(friendsList(false, friendId) as any);
    }
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Alias</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {userInfo.friends.map((friend, index) => (
                <tr key={index}>
                    <td>{friend.alias}</td>
                    <td>
                        <Button variant="success" type={"submit"} onClick={(event) => viewHandler(event, friend.id,index)}>View
                            Profile</Button>
                        <Button variant="danger" type={"submit"} onClick={(event) => removeHandler(event, friend.id)}>Remove
                            as friend</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};
