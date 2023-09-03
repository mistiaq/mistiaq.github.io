'use client'

import {
  useState
} from 'react'

import {
  Document,
  Page,
  pdfjs
} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

function PDFViewer({
  paper
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(10);

  function onDocumentLoadSuccess({
    numPages
  }) {
    setNumPages(numPages)
    setPageNumber(5)
  }

  return (
    <div>
      <div>
        <Document
          file={paper}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {
            Array.from({
              length: numPages
            }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))
          }
        </Document>
      </div>
    </div>
  )
}

export default PDFViewer
