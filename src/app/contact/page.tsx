import React from "react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <section className="space-y-4">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-950/40 text-[11px] font-mono text-zinc-500">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-gradient leading-none">
            Let&rsquo;s Build Something
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-xl">
            Have a project in mind, want to discuss software systems integration, or want to review my code? Drop me a line below or connect via socials.
          </p>
        </Reveal>
      </section>

      {/* Render Client Form Component */}
      <ContactForm />
    </div>
  );
}