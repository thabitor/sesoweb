import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Contactform() {
  const { t } = useTranslation();
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  //Result of message
  const [result, setResult] = useState("");
  //Status of sending message
  const [isSending, setIsSending] = useState(false);

  function resetEmailForm() {
    setEmailForm({ name: "", email: "", tel: "", message: "" });
  }

  function handleEmailFormChange(event) {
    setEmailForm((prevEmailData) => {
      return {
        ...prevEmailData,
        [event.target.name]: event.target.value,
      };
    });

    if (result.length > 0) {
      setResult("");
    }
  }

  const handleSubmit = async (e) => {
    setResult("");
    e.preventDefault();
    setIsSending(true);

    const { name, email, tel, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      tel: tel.value,
      message: message.value,
    };

    try {
      let response = await fetch("https://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setIsSending(false);
      let result = await response.json();

      if (result.status === "success") {
        setResult(t("Contact.form.success"));
        resetEmailForm();
      } else if (result.status === "fail") {
        alert(t("Contact.form.error"));
      }
    } catch (error) {
      console.error(error);
      setIsSending(false);
      setResult(t("Contact.form.error"));
    }
  };

  return (
    <div className="contactform-container">
      <span className="contact-form-kicker">{t("Contact.form.kicker")}</span>
      <h1>{t("Contact.form.title")}</h1>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        method="POST"
        className="contact-form"
      >
        <label>
          {t("Contact.form.nameLabel")}
          <input
            placeholder={t("Contact.form.namePlaceholder")}
            type="text"
            name="name"
            required={true}
            value={emailForm.name}
            onChange={handleEmailFormChange}
          />
        </label>
        <label>
          {t("Contact.form.emailLabel")}
          <input
            placeholder={t("Contact.form.emailPlaceholder")}
            type="email"
            name="email"
            required={true}
            value={emailForm.email}
            onChange={handleEmailFormChange}
          />
        </label>
        <label>
          {t("Contact.form.phoneLabel")}
          <input
            placeholder={t("Contact.form.phonePlaceholder")}
            type="tel"
            name="tel"
            required={true}
            value={emailForm.tel}
            onChange={handleEmailFormChange}
          />
        </label>
        <label>
          {t("Contact.form.messageLabel")}
          <textarea
            maxLength={300}
            placeholder={t("Contact.form.messagePlaceholder")}
            name="message"
            required={true}
            value={emailForm.message}
            onChange={handleEmailFormChange}
          />
        </label>
        <button type="submit" disabled={isSending}>
          {isSending ? t("Contact.form.sending") : t("Contact.form.submit")}
        </button>
        {result && <p className="contact-form-result">{result}</p>}
      </form>
    </div>
  );
}

export default Contactform;
