import { useEffect, useState } from "react";
import Login from "../components/Login";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";


function LoginPage() {
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        if (user !== undefined) {
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