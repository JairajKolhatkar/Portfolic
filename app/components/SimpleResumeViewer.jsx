'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const SimpleResumeViewer = () => {
  const [pdfError, setPdfError] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolic' : '';
  const pdfUrl = `${basePath}/Jairaj_Kolhatkar_Resume_Python.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`;

  const downloadResume = () => {
    window.open(pdfUrl, '_blank');
  };

  const openInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Control buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          onClick={downloadResume}
        >
          <FiDownload size={18} />
          <span>Download Resume</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          onClick={openInNewTab}
        >
          <FiExternalLink size={18} />
          <span>Open in New Tab</span>
        </motion.button>
      </div>

      {/* PDF Viewer */}
      <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-800">
        {!pdfError ? (
          <div className="w-full h-[1000px] rounded-lg overflow-hidden">
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              className="border-0"
              title="Resume PDF"
              onError={() => setPdfError(true)}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-center">
            <div className="text-red-500 mb-4">
              <p className="text-lg font-medium mb-2">Unable to display PDF</p>
              <p className="text-sm">Your browser doesn't support PDF viewing.</p>
            </div>
            <div className="text-gray-400 text-sm mb-6">
              <p>Please use the download button above to view the resume.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              onClick={downloadResume}
            >
              Download Resume
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleResumeViewer; 