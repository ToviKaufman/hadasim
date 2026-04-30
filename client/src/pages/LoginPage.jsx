import { useEffect } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";


function LoginPage() {
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            navigate("/dashboard")
        }
    }, [user]);

    return (
        <div>
            <Login />
        </div>
    );
}

export default LoginPage;