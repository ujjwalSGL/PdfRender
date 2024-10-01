import React, { useState } from 'react';
import Modal from './Components/Modal';
import PdfViewerComponent from './Components/PdfViewerComponent';

function App() {
  const [showPdf, setShowPdf] = useState(false);
  const documentUrl = './public/dictionary.pdf';

  return (
    <div className="App p-8">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setShowPdf(true)}>Show PDF</button>
      <Modal isOpen={showPdf} onClose={() => setShowPdf(false)}>
        <PdfViewerComponent document={documentUrl}/>
      </Modal>
    </div>
  );
}

export default App;
