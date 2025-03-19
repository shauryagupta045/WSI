import React from 'react';
import { ArrowLeft } from 'lucide-react';

function CellTable({ title, data }) {
  return (
    <div className="mb-4">
      <div className="bg-green-50 px-4 py-2 font-medium text-gray-700">
        {title}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2 px-4">Cell Type</th>
            <th className="text-right py-2 px-4">Count</th>
            <th className="text-right py-2 px-4">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.name} className="border-b">
              <td className="py-2 px-4">{row.name}</td>
              <td className="text-right py-2 px-4">{row.count || '-'}</td>
              <td className="text-right py-2 px-4">
                {row.percentage ? `${row.percentage}%` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LeftPanel({ counts, onBack }) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back
        </button>
      </div>
      
      <div className="p-4">
        <CellTable title="RBC" data={counts.rbc} />
        <CellTable title="WBC" data={counts.wbc} />
        
        <div className="mb-4">
          <div className="bg-green-50 px-4 py-2 font-medium text-gray-700">
            Platelets
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Count</td>
                <td className="text-right py-2 px-4">{counts.platelets.count}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Percentage</td>
                <td className="text-right py-2 px-4">{counts.platelets.percentage}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


