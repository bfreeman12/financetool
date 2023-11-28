import { PDFDocument } from "pdf-lib";

export const fillPdfTemplate = async (formData) => {
  console.log(formData);
  const url = "./daf594.pdf"; // URL or path to your PDF template
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  console.log(existingPdfBytes);
  const pdfDoc = await PDFDocument.load(existingPdfBytes, {
    ignoreEncryption: true,
  });

  const form = pdfDoc.getForm();
  console.log(form.getFields());
  form.getTextField("1 NAME Last First MI").setText(formData.name);
  //form.getTextField("email").setText(formData.email);
  // Set other form fields similarly

  // form.flatten(); // Optional: Flatten form fields to prevent further editing

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

// Function to download the filled PDF
export const downloadPdf = (pdfBytes, fileName) => {
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
