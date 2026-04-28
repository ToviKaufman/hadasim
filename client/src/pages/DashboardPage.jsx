import { useState } from "react";
import Login from "../components/Login";
import UserForm from "../components/UserForm";
import { useUser } from "../contexts/UserContext";
import TeacherDashboard from "../components/TeacherDashboard";


function DashboardPage() {

    const { user } = useUser();

    return (
        <div  className="dashboard-layout">
            <UserForm/>

            {user?.type === "teacher" && (
                <TeacherDashboard className={user.className} />
            )}

        </div>
    );
}

export default DashboardPage;