import {RegisterForm} from "../components/RegisterForm";
import {LoginForm} from "../components/LoginForm";

export const Main: React.FC = () => {
    return (
        <>Welcome!
            <div className={"row"}>
                <RegisterForm/>
                <LoginForm/>
            </div>


        </>
    );
};
