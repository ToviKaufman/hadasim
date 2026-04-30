import UserForm from "../components/UserForm";
import { useUser } from "../contexts/UserContext";
import TeacherDashboard from "../components/TeacherDashboard";
import { Navigate } from "react-router-dom";
import UserType from "../enums/UserType";
import { useState } from "react";
import TeacherMapView from "../components/TeacherMapView";


function DashboardPage() {
    const { user } = useUser();
     const [studentsByClass, setStudentsByClass] = useState([]);
    if (!user) return <Navigate to="/login" />;
    return (
        <div  className="dashboard-layout">
            <UserForm/>
            {user?.type === UserType.teacher && (
                <TeacherDashboard setStudentsByClass={setStudentsByClass} />
            )}
                {user?.type === UserType.teacher && (
                <TeacherMapView students={studentsByClass} />
            )}
        </div>
    );
}

export default DashboardPage;