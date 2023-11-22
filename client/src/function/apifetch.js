export default async function fetchPdf(pdf) {
  const response = await fetch("http://192.168.178.125:3000/api/getpdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: pdf }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const isIphone = /iPhone|iPod/.test(navigator.userAgent);

  if (isIphone) {
    const link = document.createElement("a");
    link.href = url;
    link.download = pdf;
    link.click();
  } else {
    window.open(url, "_blank");
  }

  return url;
}
