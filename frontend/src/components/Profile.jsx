import React from 'react';

const Profile = () => {
  return (
    <div className="flex bg-slate-200 h-[90vh] flex-col justify-center items-center">
      <img
        className="rounded-full w-72 h-72 mx-auto shadow-xl "
        src="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-avatar-job-police-flat-portrait-of-man-png-image_11606930.png" // Replace with your profile image URL
        alt="Profile Picture"
      />
      <h1 className="text-3xl font-bold text-center text-primary-700 mt-4">
      R S BIRADAR
      </h1>
      <h2 className="text-xl font-bold text-center text-primary-700 mt-4">
      Police Inspector
      </h2>
      <div className="mt-8 px-4 py-2 rounded-lg bg-primary-100 shadow-md">
        <h3 className="text-xl font-medium text-center">Police Stations Worked</h3>
        <p className="text-gray-700 text-center mt-2">
            Amengad PS (Bagalkot)
          <br />
            Bagalkot Traffic PS (Bagalkot)
          <br />
            Mahalingapur PS (Bagalkot)
          <br />
            Mahalingapur PS (Bagalkot)
          <br />
            Navanagara PS (Bagalkot)
          <br />
            Bellary Rural PS (Ballari)
          <br />
            Moka PS (Ballari)
          <br />
            P.D. Halli PS (Ballari)
          <br />
            Udyambag PS (Belagavi City)
          <br />
        </p>
      </div>
    </div>
  );
};

export default Profile;
