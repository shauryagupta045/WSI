import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export function MainViewer({ imageUrl, detectionResults }) {
  return (
    <div className="flex-1 relative overflow-hidden bg-gray-100">
      <div className="absolute top-4 left-4 z-10">
        <h2 className="text-xl font-semibold text-gray-900">
          WSI Zoomed IN View
        </h2>
      </div>
      
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={8}
      >
        <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full">
          <div className="relative">
            <img
              src={imageUrl}
              alt="Whole Slide Image"
              className="w-full h-full object-contain"
            />
            {detectionResults.map((result, index) => {
              const [x, y, width, height] = result.bbox;
              return (
                <div
                  key={index}
                  className="absolute border-2 border-red-500 bg-red-500/20"
                  style={{
                    left: `${x * 100}%`,
                    top: `${y * 100}%`,
                    width: `${width * 100}%`,
                    height: `${height * 100}%`,
                  }}
                >
                  <div className="absolute top-0 left-0 transform -translate-y-full bg-red-500 text-white text-xs px-1 rounded">
                    {result.class} ({(result.confidence * 100).toFixed(1)}%)
                  </div>
                </div>
              );
            })}
          </div>
        </TransformComponent>
      </TransformWrapper>
      
      <button
        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
      >
        Report
      </button>
    </div>
  );
}
