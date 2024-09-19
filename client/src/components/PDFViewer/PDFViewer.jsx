import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Optional for annotations

// Import your sample PDF (relative path)


const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Called when the PDF is successfully loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-viewer-container">
      <h2>PDF Viewer</h2>
      <Document
        file="https://drive.google.com/file/d/1bxFM0JxnvgrXD0V-CB81k3Mi9djqtbBE/view?usp=drivesdk"
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-document"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>

      {/* Pagination */}
      <div className="navigation-buttons">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div>

      {/* Download Button */}
      {/* <a href={samplePDF} download="sample.pdf">
        <button>Download PDF</button>
      </a> */}
    </div>
  );
};

export default PDFViewer;
