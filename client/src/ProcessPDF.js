const fillPdfTemplate = async (formData) => {
  const url = "clientdaf594.pdf"; // URL or path to your PDF template
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();

  form.getTextField("name").setText(formData.name);
  form.getTextField("email").setText(formData.email);
  // Set other form fields similarly

  form.flatten(); // Optional: Flatten form fields to prevent further editing

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

// Function to download the filled PDF
const downloadPdf = (pdfBytes, fileName) => {
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
