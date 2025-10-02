import React from 'react';

function TimeMetrics() {
  const timeMetrics = [
    { period: 'This Week', value: '520', change: 'First', trend: 'up' },
    { period: 'This Month', value: '2,150', change: 'Last', trend: 'down' },
    { period: 'This Year', value: '24,800', change: 'First', trend: 'up' }
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      {timeMetrics.map((metric, idx) => (
        <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 mb-2">{metric.period}</p>
          <div className="flex items-end gap-4">
            <p className="text-3xl font-bold text-gray-800">{metric.value}</p>
            <div className="h-16 w-32 mb-2">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                <polyline
                  points="0,40 20,35 40,38 60,30 80,25 100,20"
                  fill="none"
                  stroke={metric.trend === 'up' ? '#22c55e' : '#ef4444'}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <button className="flex-1 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md">
              {metric.change} ↑
            </button>
            <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeMetrics;
