import { useState } from 'react';
import { troubleshootingData } from '../data/blogData';

const TroubleshootingWizard = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="heading-tertiary mb-6">Troubleshooting Wizard</h3>
      <p className="text-dark-gray mb-6">
        Select your electrical issue to get instant guidance.
      </p>

      {/* Issue Selection */}
      <div className="space-y-3 mb-6">
        {troubleshootingData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedIssue(item)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
              selectedIssue?.id === item.id
                ? 'bg-primary text-black'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{item.issue}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  item.urgency === 'High' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                }`}
              >
                {item.urgency}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Advice Display */}
      {selectedIssue && (
        <div className="bg-white rounded-lg p-6 mb-6 animate-fadeIn">
          <h4 className="font-bold text-lg mb-2">{selectedIssue.issue}</h4>
          <p className="text-dark-gray mb-4">{selectedIssue.advice}</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>⚠️</span>
            <span>If the problem persists, contact a professional immediately.</span>
          </div>

          <button className="btn-primary w-full">
            Book Service Now
          </button>
        </div>
      )}
    </div>
  );
};

export default TroubleshootingWizard;
