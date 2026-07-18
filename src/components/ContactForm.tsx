"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { Mail, Github, Linkedin, Copy, Check, Send } from "lucide-react";

export default function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText("chiragverma00310@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate sending contact email
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <div className="grid gap-8 md:grid-cols-5 items-start">
      {/* Left Column: Form (3 cols) */}
      <section className="md:col-span-3">
        <Reveal delay={0.35}>
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono text-zinc-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-mono text-zinc-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-sans font-bold text-sm shadow-md cursor-pointer disabled:opacity-50"
            >
              {status === "sending" ? (
                <span>Sending...</span>
              ) : status === "success" ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </Reveal>
      </section>

      {/* Right Column: Cards (2 cols) */}
      <section className="md:col-span-2 space-y-4">
        <Reveal delay={0.45}>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-wider">
              Direct Contact
            </h2>
            <div className="space-y-3">
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-white/10 transition-colors text-left text-zinc-300 hover:text-white cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-mono truncate">chiragverma00310@gmail.com</span>
                </div>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-500 shrink-0 hover:text-zinc-300 transition-colors" />
                )}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-wider">
              Connect Online
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/chiragverma00310"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-white/10 hover:text-white transition-all text-zinc-400 text-center gap-2 cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-sans font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/cvsiouy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-white/10 hover:text-white transition-all text-zinc-400 text-center gap-2 cursor-pointer"
              >
                <Github className="w-5 h-5 text-white" />
                <span className="text-xs font-sans font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
