'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiPlus, FiMinus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// PDFViewer component (will only be used on client side)
const PDFViewer = ({ inView }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [Document, setDocument] = useState(null);
  const [Page, setPage] = useState(null);

  useEffect(() => {
    // Only load PDF.js on client
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      // Dynamic import
      import('react-pdf').then((reactPdf) => {
        const { Document: Doc, Page: Pg, pdfjs } = reactPdf;
        
        // Configure worker
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
        
        // Set components
        setDocument(() => Doc);
        setPage(() => Pg);
        setPdfLoaded(true);
      }).catch(err => {
        console.error('Error loading PDF library:', err);
      });
      
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prevPage => Math.min(prevPage + 1, numPages || 1));
  };

  const zoomIn = () => {
    setScale(prevScale => prevScale + 0.2);
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.6));
  };

  // Download resume function
  const downloadResume = () => {
    window.open('/Jairaj Kolhatkar_Resume Python.pdf', '_blank');
  };

  if (!pdfLoaded) {
    return (
      <div>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={downloadResume}
            >
              <FiDownload size={18} />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </div>
        
        <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-800 max-w-4xl mx-auto">
          <div className="flex justify-center items-center h-[600px]">
            <div className="animate-pulse text-primary">Loading PDF viewer...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            onClick={downloadResume}
          >
            <FiDownload size={18} />
            <span>Download Resume</span>
          </motion.button>
        </div>
      </div>

      <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-800 max-w-4xl mx-auto">
        {/* PDF Viewer Controls */}
        <div className="flex justify-between mb-4 px-2">
          <div className="flex space-x-2">
            <motion.button
              onClick={zoomOut}
              disabled={scale <= 0.6}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-full transition-colors"
            >
              <FiMinus size={16} />
            </motion.button>
            <motion.button
              onClick={zoomIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-full transition-colors"
            >
              <FiPlus size={16} />
            </motion.button>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors ${
                pageNumber <= 1 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <FiChevronLeft size={16} />
            </motion.button>
            
            <p className="text-gray-300">
              Page {pageNumber} of {numPages || '--'}
            </p>
            
            <motion.button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors ${
                pageNumber >= numPages 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <FiChevronRight size={16} />
            </motion.button>
          </div>
        </div>
        
        {/* PDF Document */}
        <div className="flex justify-center overflow-auto">
          {Document && Page ? (
            <Document
              file="/Jairaj Kolhatkar_Resume Python.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex justify-center items-center h-[600px]">
                  <div className="animate-pulse text-primary">Loading resume...</div>
                </div>
              }
              error={
                <div className="flex justify-center items-center h-[600px] text-center">
                  <div className="text-red-500">
                    <p className="mb-2">Failed to load the resume.</p>
                    <p>Please download it using the button above.</p>
                  </div>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                width={Math.min(windowWidth * 0.8, 800)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-2xl"
              />
            </Document>
          ) : (
            <div className="flex justify-center items-center h-[600px]">
              <div className="animate-pulse text-primary">Loading PDF viewer...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Resume component
const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Client-side only flag
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-dark/90 to-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            View or download my resume to learn more about my background, skills, and experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {isClient ? (
            <PDFViewer inView={inView} />
          ) : (
            <div className="flex justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <FiDownload size={18} />
                <span>Download Resume</span>
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 