// BloodCellCounts object structure
const BloodCellCounts = {
    rbc: [
      {
        name: "",
        count: 0,
        percentage: 0
      }
    ],
    wbc: [
      {
        name: "",
        count: 0,
        percentage: 0
      }
    ],
    platelets: {
      count: 0,
      percentage: 0
    }
  };
  
  // PatientInfo object structure
  const PatientInfo = {
    id: "",
    type: "",
    date: ""
  };
  
  // DetectionResult object structure
  const DetectionResult = {
    bbox: [0, 0, 0, 0],
    class: "",
    confidence: 0
  };
  
  export { BloodCellCounts, PatientInfo, DetectionResult };
  