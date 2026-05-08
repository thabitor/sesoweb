const nodemailer = require("nodemailer");

const requiredFields = ["name", "email", "message"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getTransportConfig() {
  const port = Number(process.env.SMTP_PORT || 587);

  return {
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ status: "fail", message: "Method not allowed" });
  }

  const missingConfig = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"].filter(
    (key) => !process.env[key]
  );

  if (missingConfig.length > 0) {
    return res.status(500).json({
      status: "fail",
      message: `Missing email configuration: ${missingConfig.join(", ")}`,
    });
  }

  const { name, email, tel, message } = req.body || {};
  const missingFields = requiredFields.filter((field) => !req.body?.[field]);

  if (missingFields.length > 0 || !isValidEmail(email)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid contact form submission",
    });
  }

  const to = process.env.CONTACT_TO || "info@seso.be";
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER;
  const transporter = nodemailer.createTransport(getTransportConfig());

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message via seso.be - ${name}`,
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        `Téléphone: ${tel || "Non renseigné"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact email failed", error);
    return res.status(500).json({
      status: "fail",
      message: "Email could not be sent",
    });
  }

  return res.status(200).json({ status: "success" });
};
