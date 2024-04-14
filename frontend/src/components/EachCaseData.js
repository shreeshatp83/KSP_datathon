import React from 'react';

const EachCaseData = () => {
    const data = {
        District_Name: "Bagalkot",
        UnitName: "Amengad PS",
        FIRNo: "0001/2016",
        Date: 12,
        Month: "Apr",
        Year: 2016,
        Offence_From_Date: "2015-12-27 12:00:00.000",
        Offence_To_Date: "2015-12-27 12:05:00.000",
        FIR_Reg_DateTime: "2016-01-05 11:00:00.000",
        FIR_Stage: "Dis/Acq",
        Complaint_Mode: "Written",
        CrimeGroup_Name: "POCSO",
        CrimeHead_Name: "Others",
        Latitude: 0,
        Longitude: 0,
        ActSection: "PROTECTION OF CHILDREN FROM SEXUAL OFFENCES ACT 2012 U/s: 12 IPC 1860 U/s: 306,363 PROTECTION OF CHILDREN FROM SEXUAL OFFENCES ACT 2012 U/s: 18 ",
        IOName: "R S BIRADAR   (PI)",
        KGID: "1898733",
        Internal_IO: "42900007",
        Beat_Name: "RURAL BEAT NO 13",
        FIR_Type: "Non Heinous",
        Distance_from_PS: "WEST FROM PS 12 KM",
        Place_of_Offence: "KAMATAGI BUS STAND, KAMATAGI BUS STAND",
        // VICTIM_COUNT: 0,
        // Accused_Count: 1,
        // Arrested_Male: 1,
        // Arrested_Female: 0,
        Accused_ChargeSheeted_Count: 1,
        Conviction_Count: "0",
        Village_Area_Name: "KAMATAGI",
        // Male: 0,
        // Female: 0,
        // Boy: 0,
        // Girl: 1,
        Unit_ID: "1245",
        // Age: 0,
        // TableID: 1
      };
  return (
    // <div className="flex flex-col gap-4">
    //   <div className="flex flex-wrap justify-between bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg p-4">
    //     <h2 className="text-xl font-bold">Crime Report Details</h2>
    //     <p className="text-sm font-medium">FIR No: {data.FIRNo}</p>
    //     <p className="text-sm font-medium">Date: {`${data.Date}-${data.Month}-${data.Year}`}</p>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg bg-gray-100 p-4">
    //     <div className="space-y-2">
    //       <p className="font-medium">District Name:</p>
    //       <p>{data.District_Name}</p>
    //       <p className="font-medium">Unit Name:</p>
    //       <p>{data.UnitName}</p>
    //       <p className="font-medium">Offence Date:</p>
    //       <p>{data.Offence_From_Date.slice(0, 10)}</p>
    //       <p className="font-medium">FIR Registration Date:</p>
    //       <p>{data.FIR_Reg_DateTime.slice(0, 10)}</p>
    //       <p className="font-medium">FIR Stage:</p>
    //       <p>{data.FIR_Stage}</p>
    //       <p className="font-medium">Complaint Mode:</p>
    //       <p>{data.Complaint_Mode}</p>
    //       <p className="font-medium">Crime Group:</p>
    //       <p>{data.CrimeGroup_Name}</p>
    //       <p className="font-medium">Crime Head:</p>
    //       <p>{data.CrimeHead_Name}</p>
    //     </div>

    //     <div className="space-y-2">
    //       <p className="font-medium">Investigating Officer:</p>
    //       <p>{data.IOName}</p>
    //       <p className="font-medium">KGID:</p>
    //       <p>{data.KGID}</p>
    //       <p className="font-medium">Internal IO:</p>
    //       <p>{data.Internal_IO}</p>
    //       <p className="font-medium">Beat Name:</p>
    //       <p>{data.Beat_Name}</p>
    //       <p className="font-medium">FIR Type:</p>
    //       <p>{data.FIR_Type}</p>
    //       <p className="font-medium">Distance from PS:</p>
    //       <p>{data.Distance_from_PS}</p>
    //       <p className="font-medium">Place of Offence:</p>
    //       <p>{data.Place_of_Offence}</p>
    //       <p className="font-medium">Accused Count:</p>
    //       <p>{data.Accused_Count}</p>
    //       <p className="font-medium">Accused Arrested (Male):</p>
    //       <p>{data.Arrested_Male}</p>
    //       <p className="font-medium">Accused Charge-sheeted:</p>
    //       <p>{data.Accused_ChargeSheeted_Count}</p>
    //       <p className="font-medium">Convictions:</p>
    //       <p>{data.Conviction_Count}</p>
    //     </div>
    //   </div>

    //   <div className="rounded-lg bg-gray-200 p-4 mt-4">
    //     <p className="font-medium">Act Section:</p>
    //     <p className="text-wrap">{data.ActSection}</p>
    //   </div>

    //   <div className="rounded-lg bg-gray-200 p-4 mt-4">
    //     <p className="font-medium">Victims:</p>
    //     <p>
    //       {data.Boy} Male, {data.Girl} Female
    //     </p>
    //   </div>
    // </div>

    <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 px-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">General Information</h2>
      <table className="table-auto">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td className="border px-4 py-2 font-semibold">{key.replace(/_/g, ' ')}</td>
              <td className="border px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="w-full md:w-1/2 px-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Crime Details</h2>
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Crime Group Name</td>
            <td className="border px-4 py-2">{data.CrimeGroup_Name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Crime Head Name</td>
            <td className="border px-4 py-2">{data.CrimeHead_Name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Act Section</td>
            <td className="border px-4 py-2">{data.ActSection}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Place of Offence</td>
            <td className="border px-4 py-2">{data.Place_of_Offence}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">VICTIM COUNT</td>
            <td className="border px-4 py-2">{data.VICTIM_COUNT}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Accused Count</td>
            <td className="border px-4 py-2">{data.Accused_Count}</td>
          </tr>
        </tbody>
      </table>

      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7668.341805591288!2d75.94653365!3d16.05661885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb877cc8e7cf655%3A0x1f221fdc4f610048!2sAmingad%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713116639693!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  </div>
  );
};

export default EachCaseData;
