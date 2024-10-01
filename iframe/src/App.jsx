import React, { useState } from 'react';
import PdfViewer from './Components/PdfViewer.jsx';
import PopUp from './Components/PopUp.jsx';

const App = () => {
  const [showPdf, setShowPdf] = useState(false);
  const pdfUrl = "https://css4.pub/2015/icelandic/dictionary.pdf";

  return (
    <div className="App">
      <h1>PDF Viewer App</h1>
      <button onClick={() => setShowPdf(true)}>Show PDF</button>

      <PopUp 
        isOpen={showPdf} 
        onClose={() => setShowPdf(false)}
        title="User Agreement">
        <PdfViewer pdfUrl={pdfUrl} />
      </PopUp>
    </div>
  );
};

export default App;
