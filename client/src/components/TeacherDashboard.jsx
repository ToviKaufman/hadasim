import { useState ,useEffect} from "react";
import { getStudents } from "../services/StudentService";
import { getTeachers } from "../services/TeacherService";
import { getStudentsByClass } from "../services/StudentService";
import UserList from "./UserList";
import "../App.css";
import TeacherMapView from "./TeacherMapView";
import { useUser } from "../contexts/UserContext";
import TeacherDashboardViewType from "../enums/TeacherDashboardViewType";

function TeacherDashboard({setStudentsByClass }) {
  const { user } = useUser();
  const [selectedOption, setSelectedOption] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchStudentsByClass = async () => { 
      const students = await getStudentsByClass(user.className); 
      setStudentsByClass(students);
      }

    fetchStudentsByClass();
  }, []);

  const handleChange = async (value) => {
    setSelectedOption(value);

    let data = [];

    if (value === TeacherDashboardViewType.allStudents) {
      data = await getStudents();
    } else if (value === TeacherDashboardViewType.teachers) {
      data = await getTeachers();
    } else if (value === TeacherDashboardViewType.myStudents) {
       data = await getStudentsByClass(user.className);
      setStudentsByClass(data); 
    }

    setUsers(data);
  };


  return (
    <div className="dashboard-container">
      <h3 className="title">בחירת רשימה להצגה</h3>

      <div className="radio-group">
        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value={TeacherDashboardViewType.allStudents}
            checked={selectedOption === TeacherDashboardViewType.allStudents}
            onChange={(e) => handleChange(e.target.value)}
          />
          כל התלמידים
        </label>

        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value={TeacherDashboardViewType.teachers}
            checked={selectedOption === TeacherDashboardViewType.teachers}
            onChange={(e) => handleChange(e.target.value)}
          />
          כל המורים
        </label>

        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value={TeacherDashboardViewType.myStudents}
            checked={selectedOption === TeacherDashboardViewType.myStudents}
            onChange={(e) => handleChange(e.target.value)}
          />
          תלמידים בכיתה שלי
        </label>
      </div>

      {users?.length > 0 && <UserList users={users} />}


    </div>
  );
}

export default TeacherDashboard;