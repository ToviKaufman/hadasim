import { useState } from "react";
import { addTeacher } from "../services/TeacherService";
import { addStudent } from "../services/StudentService";
import "../App.css";
import { useUser } from "../contexts/UserContext";
import UserType from "../enums/UserType";

function UserForm() {
  const { user, setUser } = useUser();
  const isNew = !user?.fullName;
  const [name, setName] = useState(user?.fullName || "");
  const [className, setClassName] = useState(user?.className || "");
  const [selectedUserType, setSelectedUserType] = useState(user?.type || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: user.id,
      fullName: name,
      className,
    };

    try {
      if (selectedUserType === UserType.teacher) {
        await addTeacher(data);
      } else {
        await addStudent(data);
      }
      setUser({ ...data, type: selectedUserType })
      alert("המשתמש נשמר בהצלחה");
    } catch (err) {
      setUser(null);
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
              name="selectedUserType"
              value={UserType.student}
              checked={selectedUserType === UserType.student}
              onChange={(e) => setSelectedUserType(e.target.value)}
              required
            />
            תלמיד
          </label>

          <label className="radio-item">
            <input
              type="radio"
              name="selectedUserType"
              value={UserType.teacher}
              checked={selectedUserType === UserType.teacher}
              onChange={(e) => setSelectedUserType(e.target.value)}
              required
            />
            מורה
          </label>
        </div>
      )}

       {isNew  && (
        <button className="button" type="submit">
          עדכון
        </button>
      )}
     </form>
  );
}

export default UserForm;