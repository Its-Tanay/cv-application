import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './../styles/index.css'

function GeneratePDFButton({ componentRef }) {
  const convertToPDF = () => {
    if (componentRef.current) {
      const pdf = new jsPDF('p', 'px', 'a4'); 

      html2canvas(componentRef.current, {
        scale: 2, 
      }).then((canvas) => {
        const scaleFactor = 1280 / canvas.width;
        const imgWidth = 1280;
        const imgHeight = canvas.height * scaleFactor;

        pdf.addImage(canvas, 'PNG', 0, 0, imgWidth, imgHeight);

        pdf.save('cvpreview.pdf');
      });
    }
  };

  return (
    <button className="func-btns" onClick={convertToPDF}>Generate PDF</button>
  );
}

export default GeneratePDFButton;
