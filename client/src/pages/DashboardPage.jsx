import { useState } from "react";
import Login from "../components/Login";
import UserForm from "../components/UserForm";
import { useUser } from "../components/UserContext";
import TeacherDashboard from "../components/TeacherDashboard";


function DashboardPage() {

    const { user } = useUser();

    return (
        <div  className="dashboard-layout">
            <UserForm/>

            {user?.type === "teacher" && (
                <TeacherDashboard  />
            )}

        </div>
    );
}

export default DashboardPage;