import React from 'react'
import anas from '../../../Assets/logo/handsome-young-guy-with-glasses-posing.jpg'
import phone from '../../../Assets/logo/telephone.png'
import mail from '../../../Assets/logo/mail.png'
import location from '../../../Assets/logo/location.png'


const Template3 = ({ data }) => {
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
        <div className='max-w-4xl my-2 container flex justify-around mx-auto bg-red-500 shadow-lg baloo-bhaijaan-2'>
            <div className='bg-slate-800 w-[35vw] p-3 gap-7  flex flex-col justify-center items-center '>
                <div>
                    <img src={anas} alt="" width='200px' style={{borderRadius:"50%"}}  />
                </div>
                <div className='about-me text-wrap w-full flex flex-col gap-3'>
                    <div>
                        <h1 className='font-normal text-xl mb-2 text-white text-wrap'>About Me </h1>
                        <hr />
                    </div>
                    <div className='flex justify-start items-center'>
                        <img src={phone} alt="" width='20px' />
                        <h1 className='text-white ml-2'>{personalinfo?.phone}</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <img src={mail} alt="" width='20px' />
                        <h1 className='text-white ml-2 text-wrap'>{personalinfo?.email}</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <img src={location} alt="" width='20px' />
                        <h1 className='text-white ml-2'>{personalinfo?.cityState}</h1>
                    </div>
                </div>
                <div className='education  w-full flex flex-col gap-3'>
                    <div>
                        <h1 className='font-normal text-xl mb-2 text-white'>Education</h1>
                        <hr />
                    </div>
                    {education.map((degree, index) => (
                        <>
                            <div className='flex flex-col' key={index}>
                                <h1 className='text-white ml-2'>{degree.institution}</h1>
                                <p className='text-white ml-2'>{degree.degree}</p>
                                <p className='text-white ml-2'>{degree.location}</p>
                                <p className='text-white ml-2'>{formatDate(degree.duration[0])} - {formatDate(degree.duration[1])}</p>
                            </div>

                        </>
                    ))}
                </div>
                <div className='skills  w-full flex flex-col gap-3'>
                    <div>
                        <h1 className='font-normal text-xl mb-2 text-white'>Skills</h1>
                        <hr />
                    </div>
                    {skills.map((skill, index) => (
                        <>
                            <div className='flex flex-col' key={index}>
                                <h1 className='text-white ml-2'><strong>Skills:</strong>  {skill.skill}</h1>
                                <p className='text-white ml-2'><strong>Proficiency Level:</strong> {skill.proficiency}</p>
                                <p className='text-white ml-2'>Year Of Experience: {skill.experience}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className='bg-white w-[65vw]'>
                <div className='name bg-[#f0f0f0] p-14  text-[#353535]'>
                    <h1 className='text-4xl noto-sans'>{personalinfo.firstName} <span className='text-7xl'>{personalinfo.lastName}</span></h1>
                    <p className='text-2xl tracking-widest'>{personalinfo.profession}</p>
                </div>
                <div className='Summary  p-10 text-wrap'>
                    <div>
                        <h1 className=' text-3xl mb-2 text-[#353535] font-medium'>Summary</h1>
                        <div className='bg-[#353535] w-full h-[1px]'></div>
                    </div>
                </div>
                <div className='objective px-10'>
                    <p>{summary}</p>
                </div>
                <div className='Experience p-10 text-wrap'>
                    <div>
                        <h1 className=' text-3xl mb-2 text-[#353535] font-medium'>Experience</h1>
                        <div className='bg-[#353535] w-full h-[1px]'></div>
                    </div>
                    <div className="space-y-2 my-2">
                        {workHistory.map((job, index) => (
                            <div key={index} className="p-4 ">
                                <h3 className="text-xl font-semibold text-[#353535]">{job.jobTitle}</h3>
                                <p className="text-lg text-[#353535]"><strong>Employer:</strong> {job.employer}</p>
                                <p className="text-lg text-[#353535]"><strong>Location:</strong> {job.remote ? 'Remote job' : job.location}</p>
                                <p className="text-lg text-[#353535]"><strong>Employment Period:</strong> {formatDate(job.employmentPeriod[0])} - {formatDate(job.employmentPeriod[1])}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Template3
