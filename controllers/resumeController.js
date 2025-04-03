const Resume = require('./models/Resume');

exports.createResume = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const resumePath = `/uploads/${req.file.filename}`;

    const resume = new Resume({
      name,
      email,
      phone,
      resumePath
    });

    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = exports;