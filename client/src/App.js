import { useState } from "react";
import PublicArea from "./components/PublicArea";
import TeacherArea from "./components/TeacherDashboard";
import Login from "./components/Login";

function App() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [selectedPage, setSelectedPage] = useState("students");

  return (


    <div>
      <Login></Login>
    </div>
//     <div>
//       <h1>מערכת ניהול תלמידות ומורות</h1>

//        {/* אם לא מורה → ציבורי */}
//       {!isTeacher && (
//         <PublicArea setIsTeacher={setIsTeacher} />
//       )}

//       {/* אם מורה → אזור מורה בלבד */}
//       {isTeacher && (
//         <TeacherArea
//   selectedPage={selectedPage}
//   setSelectedPage={setSelectedPage}
//   setIsTeacher={setIsTeacher}
// />
        
//       )}
//     </div>
  );
}

export default App;