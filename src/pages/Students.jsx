import students from "../data/students";
import StudentCard from "../components/studentCard";

function Students() {
  return (
    <div className="page">
      <h1 className="page-title">Students</h1>

      <p className="page-subtitle">
        View all registered students
      </p>

      <div className="students-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;