import React from 'react';

export function HubView({ imageUrl, patientInfo }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          WSI Zoomed out View (Hub)
        </h3>
      </div>
      
      <div className="p-4">
        <img
          src={imageUrl}
          alt="WSI Overview"
          className="w-full h-48 object-cover rounded"
        />
        
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Patient ID</span>
            <p>{patientInfo.id}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Type</span>
            <p>{patientInfo.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
