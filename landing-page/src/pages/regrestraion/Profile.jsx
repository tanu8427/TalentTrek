import React, { useState } from 'react';

const BasicInfoForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) setResumeFile(file.name);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
        setSkillInput("");
      }
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Basic Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" className="w-full mt-1 p-2 border rounded" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="w-full mt-1 p-2 border rounded" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" className="w-full mt-1 p-2 border rounded" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input type="date" className="w-full mt-1 p-2 border rounded" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" placeholder="City, Country" className="w-full mt-1 p-2 border rounded" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        {profilePic && <img src={profilePic} alt="Profile Preview" className="mt-2 h-24 w-24 object-cover rounded-full border" />}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF or DOC)</label>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
        {resumeFile && <p className="text-sm mt-1 text-gray-600">Uploaded: {resumeFile}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleSkillKeyDown}
          placeholder="Type skill and press Enter"
          className="w-full mt-1 p-2 border rounded"
        />
        <div className="flex flex-wrap mt-2 gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {skill}
              <button type="button" onClick={() => removeSkill(skill)} className="ml-1 text-red-500 font-bold">
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default BasicInfoForm;
