import React, { useState, useEffect } from 'react';
import crimeData from './crime-data.json';

const CrimeFilterDisplay = () => {
  const [filterData, setFilterData] = useState({});
  const [filteredCrimeData, setFilteredCrimeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setFilteredCrimeData(crimeData);
  }, []);

  const crimeMeetsFilters = (crime, filterData) => {
    return (
      (!filterData.Year || crime.Year === filterData.Year) &&
      (!filterData.Month || crime.Month === filterData.Month) &&
      (!filterData.Date || crime.Date === filterData.Date) &&
      (!filterData.FIR_Stage || crime.FIR_Stage === filterData.FIR_Stage) &&
      (!filterData.Complaint_Mode || crime.Complaint_Mode === filterData.Complaint_Mode) &&
      (!filterData.CrimeGroup_Name || crime.CrimeGroup_Name === filterData.CrimeGroup_Name)
    );
  };
  
  const handleFilterChange = (filterName, value) => {
    const updatedFilterData = { ...filterData, [filterName]: value };
  
    // Apply filters to the previously filtered data instead of the original dataset
    const updatedCrimeData = filteredCrimeData.filter((crime) =>
      crimeMeetsFilters(crime, updatedFilterData)
    );
  
    setFilterData(updatedFilterData);
    setFilteredCrimeData(updatedCrimeData);
    setCurrentPage(1); // Reset to first page when filters are applied
  };
  

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredCrimeData.length / itemsPerPage);

  // Get the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Render the pagination navigation
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-2 py-1 rounded-md ${
            currentPage === i ? 'bg-indigo-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return <div className="flex justify-center mt-4">{pages}</div>;
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-indigo-100 p-4">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label htmlFor="date" className="block font-bold mb-2">Date:</label>
          <select
            id="date"
            className="w-full bg-white border border-gray-300 rounded-md p-2"
            value={filterData.Date || ''}
            onChange={e => handleFilterChange('Date', e.target.value)}
          >
            <option value="">Select Date</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="month" className="block font-bold mb-2">Month:</label>
          <select
            id="month"
            className="w-full bg-white border border-gray-300 rounded-md p-2"
            value={filterData.Month || ''}
            onChange={e => handleFilterChange('Month', e.target.value)}
          >
            <option value="">Select Month</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Feb">March</option>
            <option value="Feb">April</option>
            <option value="Feb">May</option>
            <option value="Feb">June</option>
            <option value="Feb">July</option>
            <option value="Feb">August</option>
            <option value="Feb">September</option>
            <option value="Feb">October</option>
            <option value="Feb">November</option>
            <option value="Feb">December</option>
            {/* Add remaining months */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block font-bold mb-2">Year:</label>
          <select
            id="year"
            className="w-full bg-white border border-gray-300 rounded-md p-2"
            value={filterData.Year || ''}
            onChange={e => handleFilterChange('Year', e.target.value)}
          >
            <option value="">Select Year</option>
            {Array.from({ length: 8 }, (_, i) => (
              <option key={i + 2016} value={i + 2016}>
                {i + 2016}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="FIR_Stage" className="block font-bold mb-2">FIR Stage:</label>
          <select
            id="FIR_Stage"
            className="w-full bg-white border border-gray-300 rounded-md p-2"
            value={filterData.FIR_Stage || ''}
            onChange={e => handleFilterChange('FIR_Stage', e.target.value)}
          >
            <option value="">Select FIR Stage</option>
            <option value="Convicted">Convicted</option>
            <option value="Dis/Acq">Dis/Acq</option>
            <option value="Pending Trial">Pending Trial</option>
            <option value="BoundOver">BoundOver</option>
            <option value="Traced">Traced</option>
            <option value="Undetected">Undetected</option>
            <option value="Compounded">Compounded</option>
            <option value="Abated">Abated</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="Complaint_Mode" className="block font-bold mb-2">Complaint Mode:</label>
          <select
            id="Complaint_Mode"
            className="w-full bg-white border border-gray-300 rounded-md p-2"
            value={filterData.Complaint_Mode || ''}
            onChange={e => handleFilterChange('Complaint_Mode', e.target.value)}
          >
            <option value="">Select Complaint Mode</option>
            <option value="Written">Written</option>
            <option value="Sue-moto by Police">Sue-moto by Police</option>
            <option value="Judicial/Magistrate reference">Judicial/Magistrate reference</option>
            <option value="Oral">Oral</option>
            <option value="Online">Online</option>
            <option value="Written & Organised">Written & Organised</option>
            <option value="Oral & Organised">Oral & Organised</option>
            <option value="Judicial/Magistrate Reference & Organised">Judicial/Magistrate Reference & Organised</option>
            <option value="Distress call over phone">Distress call over phone</option>
          </select>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="CrimeGroup_Name" className="block font-bold mb-2">Crime Group Name:</label>
          <select
            id="CrimeGroup_Name"
            className="w-full bg-white border border-gray-300 rounded-md p-2"
            value={filterData.CrimeGroup_Name || ''}
            onChange={e => handleFilterChange('CrimeGroup_Name', e.target.value)}
          >
            <option value="">Select Crime Group Name</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div> */}
      </div>
      

      {/* <div className="w-3/4 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Crime Data</h2>
        <ul>
          {crimeData.map((crime, index) => (
            <li key={index} className="bg-white border border-gray-300 rounded-md p-4 mb-4">
              <div className="mb-2">
                <span className="font-bold">District Name:</span> {crime.District_Name}
              </div>
              <div className="mb-2">
                <span className="font-bold">Unit Name:</span> {crime.UnitName}
              </div>
              <div className="mb-2">
                <span className="font-bold">Date:</span> {crime.Date}/{crime.Month}/{crime.Year}
              </div>
              <div className="mb-2">
                <span className="font-bold">FIR No:</span> {crime.FIRNo}
              </div>
              <div className="mb-2">
                <span className="font-bold">FIR Stage:</span> {crime.FIR_Stage}
              </div>
              <div className="mb-2">
                <span className="font-bold">Complaint Mode:</span> {crime.Complaint_Mode}
              </div>
              <div className="mb-2">
                <span className="font-bold">Crime Group Name:</span> {crime.CrimeGroup_Name}
              </div>
            </li>
          ))}
        </ul>
      </div> */}
<div className="w-full bg-gray-100 p-4">
  <h2 className="text-lg font-bold mb-4">Crime Data</h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
    {filteredCrimeData
      .slice(startIndex, endIndex)
      .map((crime, index) => (
        <a href='http://localhost:3000/case/R%20S%20BIRADAR/21' key={index} className="bg-white border border-gray-300 rounded-md p-4 shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2">
                <span className="font-bold text-indigo-700">District Name:</span> {crime.District_Name}
              </div>
              <div className="mb-2">
                <span className="font-bold text-indigo-700">Unit Name:</span> {crime.UnitName}
              </div>
              <div className="mb-2">
                <span className="font-bold text-indigo-700">Date:</span> {crime.Date}/{crime.Month}/{crime.Year}
              </div>
              <div className="mb-2">
                <span className="font-bold text-indigo-700">FIR No:</span> {crime.FIRNo}
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span className="font-bold text-indigo-700">FIR Stage:</span> {crime.FIR_Stage}
              </div>
              <div className="mb-2">
                <span className="font-bold text-indigo-700">Complaint Mode:</span> {crime.Complaint_Mode}
              </div>
              <div className="mb-2">
                <span className="font-bold text-indigo-700">Crime Group Name:</span> {crime.CrimeGroup_Name}
              </div>
            </div>
          </div>
        </a>
      ))}
  </div>
  {renderPagination()} {/* Render pagination here */}
</div>


    </div>
  );
};

export default CrimeFilterDisplay;