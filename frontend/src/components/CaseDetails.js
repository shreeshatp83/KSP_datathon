import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import for making API calls
import { useParams } from 'react-router-dom';

const CaseDetails = () => {
  const { caseId } = useParams(); // Use useParams hook to access dynamic route parameters
  const [caseData, setCaseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/fir/${caseId}`);
        setCaseData(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (caseId) { // Check if caseId is available before fetching data
      fetchData();
    }
  }, [caseId]);

  if (isLoading) {
    return <div className="text-center p-4">Loading Case Details...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">Error fetching case details: {error.message}</div>
    );
  }

  if (!caseData) {
    return <div className="text-center p-4">No case data found for ID: {caseId}</div>;
  }

  const {
    District_Name,
    UnitName,
    FIRNo,
    Offence_From_Date,
    Offence_To_Date,
    FIR_Reg_DateTime,
    FIR_Stage,
    Complaint_Mode,
    CrimeGroup_Name,
    CrimeHead_Name,
    ActSection,
    IOName,
    KGID,
    Internal_IO,
    Beat_Name,
    FIR_Type,
    Distance_from_PS,
    Place_of_Offence,
    VICTIM_COUNT,
    Accused_Count,
    Arrested_Male,
    Arrested_Female,
    Accused_ChargeSheeted_Count,
    Conviction_Count,
    Village_Area_Name,
  } = caseData;

  return (
    <div className="case-details bg-gray-100 shadow-md rounded-lg px-8 py-6">
      <h2 className="text-2xl font-bold text-gray-800">Case Details (Case ID: {caseId})</h2>
      <ul className="list-none mt-4">
        <li className="flex items-center py-2">
          <span className="w-1/3 text-gray-700 font-medium">District Name:</span>
          <span className="w-2/3 text-gray-800">{District_Name}</span>
        </li>
        <li className="flex items-center py-2">
          <span className="w-1/3 text-gray-700 font-medium">FIR. No:</span>
          <span className="w-2/3 text-gray-800">{FIRNo}</span>
        </li>
        <li className="flex items-center py-2">
          <span className="w-1/3 text-gray-700 font-medium">Offence_From_Date:</span>
          <span className="w-2/3 text-gray-800">{Offence_From_Date}</span>
        </li>
        <li className="flex items-center py-2">
          <span className="w-1/3 text-gray-700 font-medium">Police Station:</span>
          <span className="w-2/3 text-gray-800">{UnitName}</span>
        </li>
        {/* Similar list items for other data points */}
      </ul>
    </div>
  );
};

export default CaseDetails;
