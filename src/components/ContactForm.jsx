import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/zentritsoft@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("No se pudo enviar el mensaje");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("No pudimos enviar tu mensaje. Escríbenos por WhatsApp.");
    }
  };

  const fieldClass = "w-full bg-transparent border-0 border-b border-black px-0 py-4 text-base text-black placeholder:text-black/35 focus:outline-none focus:border-zt-primary focus:ring-0 transition-colors";
  const labelClass = "block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-black";

  return (
    <form
      action="https://formsubmit.co/zentritsoft@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="border-t border-black"
    >
      <input type="hidden" name="_subject" value="Nuevo proyecto desde ZentrIT" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="py-5 md:pr-6 border-b md:border-r border-black">
          <label htmlFor="name" className={labelClass}>01 / Nombre</label>
          <input className={fieldClass} type="text" id="name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" />
        </div>
        <div className="py-5 md:pl-6 border-b border-black">
          <label htmlFor="email" className={labelClass}>02 / Correo</label>
          <input className={fieldClass} type="email" id="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
        </div>
      </div>

      <div className="py-5 border-b border-black">
        <label htmlFor="phone" className={labelClass}>03 / Teléfono <span className="font-normal text-black/45">(opcional)</span></label>
        <input className={fieldClass} type="tel" id="phone" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+51 987 123 456" />
      </div>

      <div className="py-5 border-b border-black">
        <label htmlFor="message" className={labelClass}>04 / Proyecto</label>
        <textarea className={`${fieldClass} resize-none min-h-36`} id="message" name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="¿Qué necesitas construir?"></textarea>
      </div>

      <button type="submit" disabled={status === "loading" || status === "success"} className="w-full min-h-16 px-5 bg-zt-primary text-white flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.12em] hover:bg-black transition-colors disabled:opacity-60">
        <span>{status === "loading" ? "Enviando…" : status === "success" ? "Mensaje enviado" : "Enviar solicitud"}</span>
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-4 min-h-5 text-sm text-black/60" role="status" aria-live="polite">
        {status === "success" ? "Gracias. Te responderemos en un máximo de 24 horas." : status === "error" ? errorMsg : "Tus datos se utilizarán únicamente para responder tu solicitud."}
      </p>
    </form>
  );
}

