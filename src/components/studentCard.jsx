import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>

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

      <Link
        className="details-button"
        to={`/students/${student.id}`}
      >
        View Full Details
      </Link>
    </div>
  );
}

export default StudentCard;