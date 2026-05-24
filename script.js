const contactConfig = {
  whatsappNumber: "971506949820",
  message: "Hello, I'm interested in the Smart QR/NFC Business Card. Please share details.",
};

const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
  contactConfig.message
)}`;

document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
