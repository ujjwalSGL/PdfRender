import { useEffect, useRef } from 'react';

export default function PdfViewerComponent({ document }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;

    (async function () {
      PSPDFKit = await import('pspdfkit');

      PSPDFKit.unload(container);  
      await PSPDFKit.load({
        container,
        document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${
          import.meta.env.BASE_URL
        }`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container); 
  }, [document]);

  return (
    <div ref={containerRef} className="w-full h-full" />
  );
}
