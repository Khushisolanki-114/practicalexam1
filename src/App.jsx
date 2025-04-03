import { useState, useEffect } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumeTable from './components/ResumeTable';
import './index.css';

function App() {
  const [resumes, setResumes] = useState([]);

  const fetchResumes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/resumes');
      const data = await response.json();
      setResumes(data);
    } catch (error) {
      console.error('Error fetching resumes:', error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div className="app">
      <h1>Resume Submission Portal</h1>
      <ResumeForm onSubmit={fetchResumes} />
      <ResumeTable resumes={resumes} />
    </div>
  );
}

export default App;