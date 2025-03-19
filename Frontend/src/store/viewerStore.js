import { create } from 'zustand';

const useViewerStore = create((set) => ({
  viewer: null,
  setViewer: (viewer) => set({ viewer }),
  currentView: { x: 0, y: 0, width: 100, height: 100 },
  setCurrentView: (view) => set({ currentView: view }),
  boundingBoxes: [],
  setBoundingBoxes: (boxes) => set({ boundingBoxes: boxes }),
}));

export default useViewerStore;