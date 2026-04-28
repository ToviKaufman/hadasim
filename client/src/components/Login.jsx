import { useState } from "react";
import { getTeachersById } from "../services/TeacherService";
import { getStudentsById } from "../services/StudentService";
import UserForm from "./UserForm";
import "../App.css";
import { useUser } from "../contexts/UserContext";

function Login({ }) {
  const [id, setId] = useState("141414141");
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const [teacher, student] = await Promise.all([
        getTeachersById(id),
        getStudentsById(id),
      ]);

      if (teacher) {
        setUser({ ...teacher, type: "teacher" });
      } else if (student) {
        setUser({ ...student, type: "student" });
      } else {
        setUser({ id });
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h3 className="title">מערכת רישום לטיול </h3>


      <form onSubmit={handleLogin} className="form-container">
        <input
          className="input"
          type="text"
          inputMode="numeric"
          pattern="\d{9}"
          maxLength={9}
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button className="button" type="submit" >כניסה</button>
      </form>

      {loading && <p className="loading-text">טוען...</p>}

    </div>
  );
}
export default Login;