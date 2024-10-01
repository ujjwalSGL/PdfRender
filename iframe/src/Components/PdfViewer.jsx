import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <embed
        src={pdfUrl} width="100%" height="600px"
      />
    </div>
  );
}; 

export default PdfViewer;
