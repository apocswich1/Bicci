import jsPDF from 'jspdf';

const pdfreport = () => {
    var doc = new jsPDF('p', 'pt');
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Output as Data URI
    doc.save('datauri.pdf');
}

export default pdfreport;