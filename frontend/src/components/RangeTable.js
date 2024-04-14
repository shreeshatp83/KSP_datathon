import React from 'react';

const RangeTable = () => {
  const ranges = [
    {
      name: 'Southern Range , Mysuru',
      districts: ['Chamarajanagara', 'Hassana', 'Kodagu', 'Mandya', 'Mysuru'],
    },
    {
      name: 'Western Range , Mangaluru',
      districts: ['Chikkamagaluru', 'Dakshina Kannada', 'Udupi', 'Uttara Kannada'],
    },
    {
      name: 'Eastern Range , Davangere',
      districts: ['Chitradurga', 'Davanagere', 'Haveri', 'Shivamogga'],
    },
    {
      name: 'Central Range , Bengaluru',
      districts: ['Bengaluru Rural', 'Bengaluru Urban', 'Chikkaballapura', 'Kolar', 'Ramanagara', 'Tumakuru'],
    },
    {
      name: 'Northern Range , Belagavi',
      districts: ['Bagalkote', 'Dharwada', 'Gadaga', 'Vijayapura'],
    },
    {
      name: 'North Eastern Range , Kalaburagi',
      districts: ['BIdar', 'Kalaburagi', 'Yadagiri'],
    },
    {
      name: 'Ballari Range , Ballari',
      districts: ['Koppala', 'Raichuru', 'Vijayanagara'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-400 mt-2">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Karnataka Police Department Ranges</h2>
      <table className="w-full rounded-md border border-gray-200 shadow-md bg-yellow-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-3 font-medium">Range Name</th>
            <th className="text-left p-3 font-medium">Districts</th>
          </tr>
        </thead>
        <tbody>
          {ranges.map((range) => (
            <tr key={range.name} className="border-t border-gray-200">
              <td className="p-3 text-gray-800">{range.name}</td>
              <td className="p-3 text-gray-600">{range.districts.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RangeTable;
