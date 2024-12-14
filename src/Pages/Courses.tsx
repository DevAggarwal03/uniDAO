import { useState } from 'react';
import Navbar from '../Components/Navbar';

const Courses = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<any | undefined>();
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCourseId, setHoveredCourseId] = useState<any | undefined>();

  const votedCourses = [
    {
      id: 1,
      courseName: 'Blockchain Fundamentals',
      university: 'Stanford University',
      department: 'Computer Science',
      votesReceived: 250,
      implementationDate: '2024-09-15'
    },
    {
      id: 2,
      courseName: 'AI Ethics and Governance',
      university: 'MIT',
      department: 'Technology and Society',
      votesReceived: 220,
      implementationDate: '2024-10-01'
    },
    {
      id: 3,
      courseName: 'Sustainable Development Technologies',
      university: 'UC Berkeley',
      department: 'Environmental Science',
      votesReceived: 185,
      implementationDate: '2024-11-15'
    },
    {
      id: 4,
      courseName: 'Quantum Computing Principles',
      university: 'CalTech',
      department: 'Physics',
      votesReceived: 210,
      implementationDate: '2025-01-10'
    }
  ];

  const CourseDetailsModal = ({ course, onClose }:any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <div className="h-36 bg-gray-100 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 text-center px-6">
            {course.courseName}
          </h1>
        </div>
        
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Course Details</h2>
              <p><strong>University:</strong> {course.university}</p>
              <p><strong>Department:</strong> {course.department}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Voting Information</h2>
              <p><strong>Votes Received:</strong> {course.votesReceived}</p>
              <p><strong>Implementation Date:</strong> {course.implementationDate}</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300 mt-4"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );

  const filteredCourses = votedCourses.filter(course => 
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col gap-y-4'>
        <Navbar/>
    
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        {selectedCourseId && (
            <CourseDetailsModal 
            course={votedCourses.find(c => c.id === selectedCourseId)}
            onClose={() => setSelectedCourseId(null)}
            />
        )}

        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                Approved Course Syllabi
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the cutting-edge courses that have been democratically voted and approved by universities worldwide.
            </p>
            </div>

            <div className="mb-8 max-w-xl mx-auto">
            <div className="relative">
                <input 
                type="text" 
                placeholder="Search courses or universities..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 absolute left-3 top-3.5 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            </div>

            {filteredCourses.length === 0 ? (
            <div className="text-center text-gray-500 mt-10 bg-white p-8 rounded-xl shadow-md">
                No courses found matching your search.
            </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                <div 
                    key={course.id} 
                    onMouseEnter={() => setHoveredCourseId(course.id)}
                    onMouseLeave={() => setHoveredCourseId(null)}
                    className={` min-h-[230px] flex flex-col justify-between py-3
                    bg-white rounded-xl shadow-lg overflow-hidden items-center
                    transform transition duration-300 
                    ${hoveredCourseId === course.id 
                        ? 'scale-105 shadow-2xl' 
                        : 'scale-100 shadow-lg'}
                    hover:cursor-pointer
                    `}
                    onClick={() => setSelectedCourseId(course.id)}
                >
                    {/* <div className="h-32 bg-gray-100"></div> */}
                        <div className="p-6 w-11/12">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                                {course.courseName}
                            </h2>
                            <div className="text-sm text-gray-600 mb-4">
                                <p>{course.university}</p>
                                <p>{course.department}</p>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-green-600 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.34c0 .806.668 1.46 1.506 1.46h4.006c.836 0 1.524-.655 1.524-1.46v-5.34a3.5 3.5 0 00-1.418-2.773l-2.832-2.14a.5.5 0 00-.596 0L7.418 7.56A3.5 3.5 0 006 10.333z" />
                                </svg>
                                {course.votesReceived} Votes
                                </span>
                                <span className="text-sm text-gray-500">
                                {course.implementationDate}
                                </span>
                            </div>
                        </div>
                        <button className='w-11/12 bg-blue-700 text-white py-2 rounded-lg '>
                            View Details
                        </button>
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    </div>
  );
};

export default Courses;