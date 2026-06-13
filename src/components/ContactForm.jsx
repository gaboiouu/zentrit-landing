import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/zentritsoft@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error al enviar el mensaje");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setErrorMsg("No pudimos enviar tu mensaje. Intenta de nuevo.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-zt-text/50 uppercase tracking-widest mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-white border border-zt-border/60 rounded-xl text-sm text-zt-dark placeholder:text-zt-text/30 focus:outline-none focus:border-zt-primary focus:ring-2 focus:ring-zt-primary/10 transition-all duration-300"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-mono text-zt-text/50 uppercase tracking-widest mb-2">
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-white border border-zt-border/60 rounded-xl text-sm text-zt-dark placeholder:text-zt-text/30 focus:outline-none focus:border-zt-primary focus:ring-2 focus:ring-zt-primary/10 transition-all duration-300"
            placeholder="tu@correo.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs font-mono text-zt-text/50 uppercase tracking-widest mb-2">
          Teléfono <span className="text-zt-text/30">(opcional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-3.5 bg-white border border-zt-border/60 rounded-xl text-sm text-zt-dark placeholder:text-zt-text/30 focus:outline-none focus:border-zt-primary focus:ring-2 focus:ring-zt-primary/10 transition-all duration-300"
          placeholder="+51 987123456"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-zt-text/50 uppercase tracking-widest mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3.5 bg-white border border-zt-border/60 rounded-xl text-sm text-zt-dark placeholder:text-zt-text/30 focus:outline-none focus:border-zt-primary focus:ring-2 focus:ring-zt-primary/10 transition-all duration-300 resize-none"
          placeholder="Cuéntanos sobre tu proyecto..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="relative w-full text-xs tracking-widest uppercase font-bold text-white px-8 py-4 rounded-xl overflow-hidden shadow-lg shadow-zt-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-zt-primary/30 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ background: "linear-gradient(135deg, #0a7f5a, #14b88a)" }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === "success" && <CheckCircle className="w-4 h-4" />}
          {status === "error" && <AlertCircle className="w-4 h-4" />}
          {status === "idle" && <Send className="w-4 h-4" />}
          {status === "loading" ? "Enviando..." : status === "success" ? "¡Mensaje Enviado!" : status === "error" ? errorMsg : "Enviar Mensaje"}
        </span>
      </button>
    </form>
  );
}
