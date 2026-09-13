import { Link, useParams } from "react-router-dom";
import students from "../data/students";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === parseInt(id)
  );

  if (!student) {
    return (
      <div className="page">
        <h1>Student not found</h1>

        <Link className="back-button" to="/students">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <h1>{student.name}</h1>

        <p>
          <strong>Student Number:</strong>{" "}
          {student.studentNumber}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

        <p>
          <strong>Year:</strong> {student.year}
        </p>

        <p>
          <strong>Section:</strong> {student.section}
        </p>

        <Link className="back-button" to="/students">
          ← Back to Students
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;