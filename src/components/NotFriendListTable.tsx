import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../store";
import {useEffect} from "react";
import {notFriendsList} from "../actions/listActions";
import {useNavigate} from "react-router-dom";
import {friendsList} from "../actions/userActions";

export const NotFriendListTable: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const list = useSelector((state: RootStore) => state.list);
    const {listInfo, loading, error} = list;

    useEffect(() => {
        dispatch(notFriendsList() as any);
    }, [dispatch]);

    const viewHandler = (event: any, index: number, userId: number) => {
        event.preventDefault();
        localStorage.removeItem("user");
        localStorage.setItem('user', JSON.stringify(listInfo[index]));
        navigate(`/user/${userId}`);
    }
    const addHandler = (event: any, userId: number) => {
        event.preventDefault();
        dispatch(friendsList(true, userId) as any);
        dispatch(notFriendsList() as any);
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
            {listInfo.map((user, index) => (
                <tr>
                    <td><Button variant="success" type={"submit"}
                                onClick={(event) => viewHandler(event, index, user.id)}>{user.alias}</Button></td>
                    <td><Button variant="primary" type={"submit"} onClick={(event) => addHandler(event, user.id)}>Add as
                        Friend</Button></td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};
