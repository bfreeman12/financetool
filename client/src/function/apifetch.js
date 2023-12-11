export default function fetchPdf(pdf) {
  const url = window.location.origin + "/pdf/" + pdf;
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
