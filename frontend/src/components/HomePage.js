import React from 'react'
import { FaUserLock, FaChartLine, FaUserShield } from 'react-icons/fa';
import RangeTable from './RangeTable';
import { getUserIdFromToken } from '../utils/auth';
import ChartComponent from './FrontPageChart';
import ChartComponent2 from './FrontPageChart2';

const HomePage = () => {
  const userId = getUserIdFromToken();
  console.log(userId);
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500  font-sans">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">

      <div className="mt-16 text-center m-20">
          <h1 className="text-2xl font-semibold text-white mb-4">Karnataka State Police</h1>
          <p className="text-gray-300 text-lg">
            The Karnataka State Police is the law enforcement agency responsible for maintaining law and
            order in the Indian state of Karnataka. It has a sanctioned strength of over 130,000
            personnel. We are committed to serving and protecting the people of Karnataka.
            The police stations are the lowest units of the police department. There are 906 police stations, 230 circle offices, 91 SDPOs and 31 DPOs (including railway police) in Karnataka state. Police stations are headed by Inspector in towns and cities. There may be two to four Sub-Inspectors (S.I.) in addition to assistant sub-inspectors (A.S.I), Head Constables (H.C.) and police constables (P.C.). Rural police stations are headed by a sub-inspector or two sub-inspectors covering law and order and crime, depending on the station's importance and sensitivity. They are grouped into circles, comprising a sub-division. Sub-divisions are headed by Deputy Superintendents of Police and circles by Police Inspectors. Additional superintendent of police's ASP's are also there in some districts. 
          </p>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Police Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href={userId ? `/personal-dashboard/${userId}/cases` : '/personal-dashboard/1/cases'}
            className="card shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition duration-300"
          >
            <div className="bg-blue-200 p-6 flex flex-col items-center justify-center">
              <FaUserLock size={48} className="text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal Dashboard</h2>
              <p className="text-gray-600">Police Login</p>
            </div>
          </a>

          <a
                       href={userId ? `/personal-dashboard/${userId}/cases` : '/personal-dashboard/1/cases'}

           className="card shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition duration-300">
            <div className="bg-green-200 p-6 flex flex-col items-center justify-center">
              <FaChartLine size={48} className="text-green-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Complete Dashboard</h2>
              <p className="text-gray-600">Police Login</p>
            </div>
          </a>

          <a href="/admin-dashboard" className="card shadow-lg rounded-lg border border-gray-300 hover:shadow-xl transition duration-300">
            <div className="bg-yellow-200 p-6 flex flex-col items-center justify-center">
              <FaUserShield size={48} className="text-yellow-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Admin Dashboard</h2>
              <p className="text-gray-600">Admin Login</p>
            </div>
          </a>
        </div>
      </div>

      <h1 className='text-center text-4xl mb-4 font-bold text-white '>Exploratory Data Analysis</h1>
      <ChartComponent/>
      {/* <ChartComponent2/> */}
      <RangeTable/>

    </div>
  )
}

export default HomePage;