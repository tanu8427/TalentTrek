// ProfessionalDetailsForm.jsx
import React from 'react';

const ProfessionalDetailsForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">💼 Professional Details</h2>

      <form className="space-y-4">
        {/* Current Job Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Current Job Title</label>
          <input type="text" placeholder="Software Engineer" className="w-full p-2 border rounded-md" />
        </div>

        {/* Current Company */}
        <div>
          <label className="block text-sm font-medium mb-1">Current Company/Organization</label>
          <input type="text" placeholder="Tech Corp Pvt. Ltd." className="w-full p-2 border rounded-md" />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium mb-1">Industry</label>
          <input type="text" placeholder="Information Technology" className="w-full p-2 border rounded-md" />
        </div>

        {/* Work Experience */}
        <div>
          <label className="block text-sm font-medium mb-1">Total Work Experience (in years)</label>
          <input type="number" placeholder="2" className="w-full p-2 border rounded-md" />
        </div>

        {/* Previous Job Titles */}
        <div>
          <label className="block text-sm font-medium mb-1">Previous Job Titles</label>
          <textarea placeholder="e.g., Junior Developer, Intern" className="w-full p-2 border rounded-md" rows={2}></textarea>
        </div>

        {/* Previous Companies */}
        <div>
          <label className="block text-sm font-medium mb-1">Previous Company Names</label>
          <textarea placeholder="e.g., XYZ Solutions, ABC Tech" className="w-full p-2 border rounded-md" rows={2}></textarea>
        </div>

        {/* Duration */}
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

        {/* Responsibilities / Achievements */}
        <div>
          <label className="block text-sm font-medium mb-1">Responsibilities / Achievements</label>
          <textarea
            placeholder="Describe your responsibilities, contributions, achievements..."
            className="w-full p-2 border rounded-md"
            rows={4}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalDetailsForm;
