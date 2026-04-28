import { useState ,useEffect} from "react";
import { getStudents } from "../services/StudentService";
import { getTeachers } from "../services/TeacherService";
import { getStudentsByClass } from "../services/StudentService";
import UserList from "./UserList";
import "../App.css";
import TeacherMapView from "./TeacherMapView";
import { getLocations } from "../services/LocationService";

// האם לא צריך להשתמש כאן בקונטקסט במקום בסטייט?
function TeacherDashboard({ className }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [users, setUsers] = useState([]);
  const [studentsByClass, setStudentsByClass] = useState();

  useEffect(() => {
    const fetchStudentsByClass = async () => { 
      const students = await getStudentsByClass(className); 
      setStudentsByClass(students);
      }


    fetchStudentsByClass();
  }, []);

  const handleChange = async (value) => {
    setSelectedOption(value);

    let data = [];

    if (value === "allStudents") {
      data = await getStudents();
    } else if (value === "allTeachers") {
      data = await getTeachers();
    } else if (value === "classStudents") {
      data = studentsByClass;
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
            value="allStudents"
            checked={selectedOption === "allStudents"}
            onChange={(e) => handleChange(e.target.value)}
          />
          כל התלמידים
        </label>

        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value="allTeachers"
            checked={selectedOption === "allTeachers"}
            onChange={(e) => handleChange(e.target.value)}
          />
          כל המורים
        </label>

        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value="classStudents"
            checked={selectedOption === "classStudents"}
            onChange={(e) => handleChange(e.target.value)}
          />
          תלמידים בכיתה שלי
        </label>
      </div>
      {/* האם לא צריך להשתמש כאן הuserContext ואז לא לשלוח את ה users כפרופס? */}

      {users?.length > 0 && <UserList users={users} />}

     

      <TeacherMapView students={studentsByClass}/>

    </div>
  );
}

export default TeacherDashboard;