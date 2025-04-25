import React from 'react';
const Template1 = ({ data }) => {
  const { personalinfo, skills, summary, workHistory, education } = data;
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    if (isNaN(date)) return 'Invalid Date';
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">

      <section className="mb-8">
        <h2 className="text-3xl font-bold border-b-2 pb-2 mb-4 text-gray-800">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg"><strong>First Name:</strong> {personalinfo.firstName}</p>
            <p className="text-lg"><strong>Last Name:</strong> {personalinfo.lastName}</p>
            <p className="text-lg"><strong>Profession:</strong> {personalinfo.profession}</p>
            <p className="text-lg"><strong>City:</strong> {personalinfo.cityState}</p>
          </div>
          <div>
            <p className="text-lg"><strong>Postal Code:</strong> {personalinfo.postalCode}</p>
            <p className="text-lg"><strong>Country:</strong> {personalinfo.country}</p>
            <p className="text-lg"><strong>Phone:</strong> {personalinfo.phone}</p>
            <p className="text-lg"><strong>Email:</strong> {personalinfo.email}</p>
          </div>
        </div>
      </section>

      
      <section className="mb-8">
        <h2 className="text-3xl font-bold border-b-2 pb-2 mb-4 text-gray-800">Work History</h2>
        <div className="space-y-6">
          {workHistory.map((job, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{job.jobTitle}</h3>
              <p className="text-lg"><strong>Employer:</strong> {job.employer}</p>
              <p className="text-lg"><strong>Location:</strong> {job.remote ? 'Remote job' : job.location}</p>
              <p className="text-lg"><strong>Employment Period:</strong> {formatDate(job.employmentPeriod[0])} - {formatDate(job.employmentPeriod[1])}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="mb-8">
        <h2 className="text-3xl font-bold border-b-2 pb-2 mb-4 text-gray-800">Educational Information</h2>
        <div className="space-y-6">
          {education.map((degree, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{degree.degree}</h3>
              <p className="text-lg"><strong>Institute:</strong> {degree.institution}</p>
              <p className="text-lg"><strong>Location:</strong> {degree.location}</p>
              <p className="text-lg"><strong>Duration:</strong> {formatDate(degree.duration[0])} - {formatDate(degree.duration[1])}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="mb-8">
        <h2 className="text-3xl font-bold border-b-2 pb-2 mb-4 text-gray-800">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-lg"><strong>Skill:</strong> {skill.skill}</p>
              <p className="text-lg"><strong>Proficiency Level:</strong> {skill.proficiency}</p>
              <p className="text-lg"><strong>Years of Experience:</strong> {skill.experience}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold border-b-2 pb-2 mb-4 text-gray-800">Summary</h2>
        <p className="text-lg break-words">{summary}</p>
      </section>
     
    </div>
  );
};

export default Template1;
