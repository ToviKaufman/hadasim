import { useState } from "react";
import { addTeacher } from "../services/TeacherService";
import { addStudent } from "../services/StudentService";
import TeacherDashboard from "./TeacherDashboard";
import "../App.css";
import { useUser } from "../contexts/UserContext";




function UserForm() {
  const { user, setUser } = useUser();
  const isNew = !user?.fullName;
  const [name, setName] = useState(user?.fullName || "");
  const [className, setClassName] = useState(user?.className || "");
  const [userType, setUserType] = useState(user?.type || "");
  const [createdUser, setCreatedUser] = useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = {
      id: user.id,
      fullName: name,
      className: className,
    };

    try {
      if (userType === "teacher") {
        await addTeacher(data);
      } else {
        await addStudent(data);
      }
      setCreatedUser({ ...data, type: userType });
      setUser({ ...data, type: userType })
    } catch (err) {
      setCreatedUser(null);
      alert("השמירה נכשלה");
    }
  };



  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="title">{isNew ? "רישום" : "פרטי משתמש"}</h3>

      <input className="input" value={user?.id} disabled />

      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isNew}
        required
        minLength={2}
        placeholder="שם מלא"
      />

      <input
        className="input"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        disabled={!isNew}
        required
        placeholder="כיתה"
      />
      {isNew && (
        <div className="radio-group">
          <label className="radio-item">
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === "student"}
              onChange={(e) => setUserType(e.target.value)}
              required
            />
            תלמיד
          </label>

          <label className="radio-item">
            <input
              type="radio"
              name="userType"
              value="teacher"
              checked={userType === "teacher"}
              onChange={(e) => setUserType(e.target.value)}
              required
            />
            מורה
          </label>
        </div>
      )}

       {isNew && !createdUser && (
        <button className="button" type="submit">
          עדכון
        </button>
      )}
      {createdUser && (
        <p className="success-text" > המשתמש נשמר בהצלחה </p>
      )}
     </form>
  );
}

export default UserForm;