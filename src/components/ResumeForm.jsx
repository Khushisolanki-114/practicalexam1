import { useState } from 'react';

const ResumeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('resume', formData.resume);

    try {
      await fetch('http://localhost:5000/api/resumes', {
        method: 'POST',
        body: data
      });
      onSubmit();
      setFormData({ name: '', email: '', phone: '', resume: null });
    } catch (error) {
      console.error('Error submitting resume:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="resume-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="file"
        name="resume"
        onChange={handleFileChange}
        accept=".pdf"
        required
      />
      <button type="submit">Submit Resume</button>
    </form>
  );
};

export default ResumeForm;