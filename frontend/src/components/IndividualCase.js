import React from 'react';

const Report = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg p-4">
        <h2 className="text-xl font-bold">Crime Report Details</h2>
        <p className="text-sm font-medium">FIR No: {data.FIRNo}</p>
        <p className="text-sm font-medium">Date: {`${data.Date}-${data.Month}-${data.Year}`}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg bg-gray-100 p-4">
        <div className="space-y-2">
          <p className="font-medium">District Name:</p>
          <p>{data.District_Name}</p>
          <p className="font-medium">Unit Name:</p>
          <p>{data.UnitName}</p>
          <p className="font-medium">Offence Date:</p>
          <p>{data.Offence_From_Date.slice(0, 10)}</p>
          <p className="font-medium">FIR Registration Date:</p>
          <p>{data.FIR_Reg_DateTime.slice(0, 10)}</p>
          <p className="font-medium">FIR Stage:</p>
          <p>{data.FIR_Stage}</p>
          <p className="font-medium">Complaint Mode:</p>
          <p>{data.Complaint_Mode}</p>
          <p className="font-medium">Crime Group:</p>
          <p>{data.CrimeGroup_Name}</p>
          <p className="font-medium">Crime Head:</p>
          <p>{data.CrimeHead_Name}</p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Investigating Officer:</p>
          <p>{data.IOName}</p>
          <p className="font-medium">KGID:</p>
          <p>{data.KGID}</p>
          <p className="font-medium">Internal IO:</p>
          <p>{data.Internal_IO}</p>
          <p className="font-medium">Beat Name:</p>
          <p>{data.Beat_Name}</p>
          <p className="font-medium">FIR Type:</p>
          <p>{data.FIR_Type}</p>
          <p className="font-medium">Distance from PS:</p>
          <p>{data.Distance_from_PS}</p>
          <p className="font-medium">Place of Offence:</p>
          <p>{data.Place_of_Offence}</p>
          <p className="font-medium">Accused Count:</p>
          <p>{data.Accused_Count}</p>
          <p className="font-medium">Accused Arrested (Male):</p>
          <p>{data.Arrested_Male}</p>
          <p className="font-medium">Accused Charge-sheeted:</p>
          <p>{data.Accused_ChargeSheeted_Count}</p>
          <p className="font-medium">Convictions:</p>
          <p>{data.Conviction_Count}</p>
        </div>
      </div>

      <div className="rounded-lg bg-gray-200 p-4 mt-4">
        <p className="font-medium">Act Section:</p>
        <p className="text-wrap">{data.ActSection}</p>
      </div>

      <div className="rounded-lg bg-gray-200 p-4 mt-4">
        <p className="font-medium">Victims:</p>
        <p>
          {data.Boy} Male, {data.Girl} Female
        </p>
      </div>
    </div>
  );
};

export default Report;
