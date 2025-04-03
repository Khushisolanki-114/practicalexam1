const ResumeTable = ({ resumes }) => {
    return (
      <table className="resume-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Resume</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume) => (
            <tr key={resume._id}>
              <td>{resume.name}</td>
              <td>{resume.email}</td>
              <td>{resume.phone}</td>
              <td>
                <a href={`http://localhost:5000${resume.resumePath}`} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </td>
              <td>{new Date(resume.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ResumeTable;