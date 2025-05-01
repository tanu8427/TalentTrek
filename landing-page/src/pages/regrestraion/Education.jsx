// EducationForm.jsx
import React from 'react';

const EducationForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">🎓 Education</h2>

      <form className="space-y-4">
        {/* University/College Name */}
        <div>
          <label className="block text-sm font-medium mb-1">University/College Name</label>
          <input type="text" placeholder="Indian Institute of Technology" className="w-full p-2 border rounded-md" />
        </div>

        {/* Degree */}
        <div>
          <label className="block text-sm font-medium mb-1">Degree</label>
          <input type="text" placeholder="B.Tech / M.Sc / MBA etc." className="w-full p-2 border rounded-md" />
        </div>

        {/* Field of Study */}
        <div>
          <label className="block text-sm font-medium mb-1">Field of Study</label>
          <input type="text" placeholder="Computer Science, Mechanical Engineering, etc." className="w-full p-2 border rounded-md" />
        </div>

        {/* Start and End Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input type="month" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input type="month" className="w-full p-2 border rounded-md" />
          </div>
        </div>

        {/* Grades (optional) */}
        <div>
          <label className="block text-sm font-medium mb-1">Grades <span className="text-gray-400 text-sm">(Optional)</span></label>
          <input type="text" placeholder="e.g., 8.7 CGPA or 85%" className="w-full p-2 border rounded-md" />
        </div>

        {/* Certifications / Courses */}
        <div>
          <label className="block text-sm font-medium mb-1">Certifications / Courses</label>
          <textarea
            placeholder="List relevant certifications or courses completed"
            className="w-full p-2 border rounded-md"
            rows={3}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
