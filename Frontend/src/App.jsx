import React from 'react';
import { LeftPanel } from './components/LeftPanel';

import { MainViewer } from './components/MainViewer';
import { HubView } from './components/Hubview';

// Sample data based on the wireframe
const sampleCounts = {
  rbc: [
    { name: 'Angled Cells', count: 222, percentage: 67 },
    { name: 'Borderline Ovalocytes', count: 50, percentage: 20 },
    { name: 'Burr Cells', count: 87, percentage: 34 },
    { name: 'Fragmented Cells', count: 2, percentage: 0.12 },
    { name: 'Ovalocytes', count: 0, percentage: 0 },
    { name: 'Rounded RBC', count: 0, percentage: 0 },
    { name: 'Teardrops', count: 0, percentage: 0 },
  ],
  wbc: [
    { name: 'Basophil', count: 222, percentage: 67 },
    { name: 'Eosinophil', count: 50, percentage: 20 },
    { name: 'Lymphocyte', count: 87, percentage: 34 },
    { name: 'Monocyte', count: 2, percentage: 0.12 },
  ],
  platelets: {
    count: 222,
    percentage: 222,
  },
};

const patientInfo = {
  id: '7',
  type: 'blood',
  date: '2024-12-09',
};

// Parse the detection results from the JSON with proper double quotes
const rawResults = JSON.parse('{"delayTime": 950, "executionTime": 7223, "id": "sync-e1323ad4-a299-4159-9342-1fa220a3c2b5-e1", "output": {"detection_results": [[121, 4, 163, 45, "Circular_RBC"], [396, 312, 433, 353, "Circular_RBC"], [388, 90, 428, 130, "Circular_RBC"]]}}');

const detectionResults = rawResults.output.detection_results.map(
  ([x1, y1, x2, y2, className]) => ({
    bbox: [x1 / 1024, y1 / 512, (x2 - x1) / 1024, (y2 - y1) / 512],
    class: className,
    confidence: 1.0 // Confidence not provided in the data
  })
);

const imageUrl = 'https://img.freepik.com/premium-photo/photomicrograph-suggestive-megaloblastic-anemia-rule-out-pernicious-anemia_595440-3548.jpg?w=1380';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <LeftPanel counts={sampleCounts} />
      
      <div className="flex-1 flex flex-col">
        <div className="w-[400px] absolute top-4 right-4 z-10">
 <HubView
            imageUrl={imageUrl}
            patientInfo={patientInfo}
          />
        </div>
        
        <MainViewer
          imageUrl={imageUrl}
          detectionResults={detectionResults}
        />
      </div>
    </div>
  );
}

export default App;
