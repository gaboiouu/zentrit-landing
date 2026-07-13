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

  const fieldClass = "w-full min-h-14 bg-[#f8f8ef] border-2 border-black px-3 py-3 text-base font-medium text-black placeholder:text-black/35 focus:outline-none focus:bg-[#c6d548] transition-colors";
  const labelClass = "inline-block bg-black text-white px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em]";

  return (
    <form action="https://formsubmit.co/zentritsoft@gmail.com" method="POST" onSubmit={handleSubmit} className="zine-panel bg-[#d3d2bf] p-3 md:p-5">
      <input type="hidden" name="_subject" value="Nuevo proyecto desde ZentrIT" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className={labelClass}>01 / Nombre</label>
          <input className={`${fieldClass} mt-[-2px]`} type="text" id="name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>02 / Correo</label>
          <input className={`${fieldClass} mt-[-2px]`} type="email" id="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="phone" className={labelClass}>03 / Teléfono <span className="opacity-55">(opcional)</span></label>
        <input className={`${fieldClass} mt-[-2px]`} type="tel" id="phone" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+51 987 123 456" />
      </div>

      <div className="mt-3">
        <label htmlFor="message" className={labelClass}>04 / Proyecto</label>
        <textarea className={`${fieldClass} mt-[-2px] resize-none min-h-40`} id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="¿Qué necesitas construir?"></textarea>
      </div>

      <button type="submit" disabled={status === "loading" || status === "success"} className="mt-4 w-full min-h-16 px-5 bg-zt-primary text-white border-2 border-black shadow-[5px_5px_0_#0b0c0a] flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.12em] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#0b0c0a] transition disabled:opacity-60">
        <span>{status === "loading" ? "Enviando…" : status === "success" ? "Mensaje enviado" : "Enviar solicitud"}</span>
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 min-h-5 border-t-2 border-black pt-3 font-mono text-[9px] font-bold uppercase tracking-wider" role="status" aria-live="polite">
        {status === "success" ? "Mensaje recibido / Responderemos en 24 horas." : status === "error" ? errorMsg : "Privacidad / Tus datos solo se usarán para responder."}
      </p>
    </form>
  );
}
