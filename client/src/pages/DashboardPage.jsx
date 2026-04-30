import UserForm from "../components/UserForm";
import { useUser } from "../contexts/UserContext";
import TeacherDashboard from "../components/TeacherDashboard";
import { Navigate } from "react-router-dom";
import UserType from "../enums/UserType";


function DashboardPage() {
    const { user } = useUser();
    if (!user) return <Navigate to="/login" />;
    return (
        <div  className="dashboard-layout">
            <UserForm/>
            {user?.type === UserType.teacher && (
                <TeacherDashboard  />
            )}
        </div>
    );
}

export default DashboardPage;