import React from "react";
import { Document, Page } from 'react-pdf';

const pdfViewer = () => {

    const pdfUrl = '../../assets/Clément_Deboeuf.pdf';

    return (
        <div>
            <Document file={pdfUrl}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default pdfViewer;