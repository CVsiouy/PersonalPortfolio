"use client";

import React, { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { PenTool, Trash2, ArrowLeft, Send, Check } from "lucide-react";
import Link from "next/link";

interface Signature {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
}

export default function WhiteboardPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#f4ebd0"); // chalky white default
  const [brushSize, setBrushSize] = useState(3);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [history, setHistory] = useState<Signature[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  // Colors mapping matching classic chalkboard theme
  const colors = [
    { label: "Chalk White", hex: "#f4ebd0" },
    { label: "Chalk Gold", hex: "#e9c46a" },
    { label: "Chalk Rose", hex: "#f4a261" },
    { label: "Chalk Mint", hex: "#a8dadc" },
  ];

  // Load signatures from database
  const fetchSignatures = async () => {
    try {
      setLoadingHistory(true);
      const res = await fetch("/api/signatures");
      if (res.ok) {
        const data = await res.json();
        setHistory(data);
      }
    } catch (err) {
      console.error("Failed to load signatures:", err);
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    fetchSignatures();
    initCanvas();

    // Prevent scrolling when drawing on touch screens
    const preventDefault = (e: TouchEvent) => {
      if (e.target === canvasRef.current) {
        e.preventDefault();
      }
    };
    document.body.addEventListener("touchstart", preventDefault, { passive: false });
    document.body.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      document.body.removeEventListener("touchstart", preventDefault);
      document.body.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set scaling for high-DPI screens
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Background color of slate board
    ctx.fillStyle = "#3e2e2a"; // warm slate brown
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Initial drawing options
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  // Helper to extract coordinates based on event type
  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      // Touch Event
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      // Mouse Event
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    initCanvas();
  };

  const submitSignature = async () => {
    if (!name.trim()) {
      alert("Please enter your name/handle first.");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    setStatus("saving");

    try {
      // Save canvas as data URL base64 image
      const image = canvas.toDataURL("image/png");

      const res = await fetch("/api/signatures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), image }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        clearCanvas();
        fetchSignatures();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      console.error("Signature save error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <section className="space-y-4">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-950/40 text-[11px] font-mono text-zinc-500">
            <PenTool className="w-3.5 h-3.5" />
            <span>Interactive Whiteboard</span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-gradient leading-none">
            Guest Signboard
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl">
            Draw your signature, sketch a symbol, or write a quick greeting on our custom brownish chalk slate. No login required—entries persist permanently via MongoDB.
          </p>
        </Reveal>
      </section>

      {/* Main Canvas Area */}
      <section className="grid gap-8 md:grid-cols-5">
        {/* Whiteboard Board (3 Cols) */}
        <div className="md:col-span-3 space-y-4">
          <Reveal delay={0.35}>
            {/* Wooden frame board */}
            <div className="p-3 bg-[#4d3227] rounded-3xl border-4 border-[#2f1f18] shadow-2xl relative overflow-hidden">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-[320px] rounded-xl cursor-crosshair touch-none bg-[#3e2e2a]"
              />
            </div>
          </Reveal>

          {/* Controls */}
          <Reveal delay={0.45}>
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-950/40 border border-white/5 backdrop-blur-sm">
              {/* Color Swatch selectors */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-500 mr-1">Chalks:</span>
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                      color === c.hex
                        ? "scale-110 ring-2 ring-primary/40 border-white"
                        : "border-black/40 hover:scale-105"
                    }`}
                    title={c.label}
                  />
                ))}
              </div>

              {/* Brush Size */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-zinc-500">Size:</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-20 accent-primary bg-zinc-800 h-1 rounded-lg cursor-pointer"
                />
              </div>

              {/* Action: Clear */}
              <button
                onClick={clearCanvas}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/10 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all text-xs font-medium cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Board</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Name input & Submission (2 Cols) */}
        <div className="md:col-span-2 space-y-4">
          <Reveal delay={0.4}>
            <div className="glass-card p-6 rounded-3xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Post Entry
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Enter your name or github handle, draw your sketch on the board, and submit it to be displayed on our wall.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="handle" className="text-xs font-mono text-zinc-400">
                    Your Handle/Name
                  </label>
                  <input
                    type="text"
                    id="handle"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. @chiragverma"
                    className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-sans"
                  />
                </div>

                <button
                  onClick={submitSignature}
                  disabled={status === "saving" || !name.trim()}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-sans font-bold text-sm shadow-md cursor-pointer disabled:opacity-50"
                >
                  {status === "saving" ? (
                    <span>Submitting...</span>
                  ) : status === "success" ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Signature Saved!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Publish Board</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature Wall History list */}
      <section className="space-y-6">
        <Reveal>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-sans font-bold text-gradient">
              Whiteboard Gallery
            </h2>
            <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
              Recent sketches and drawings submitted by recruiters, engineers, and visitors.
            </p>
          </div>
        </Reveal>

        {loadingHistory ? (
          <div className="py-12 text-center text-sm text-zinc-500 font-mono">
            Loading gallery drawings...
          </div>
        ) : history.length === 0 ? (
          <div className="py-12 text-center text-sm text-zinc-500 border border-dashed border-white/5 rounded-2xl bg-zinc-950/20 font-mono">
            Be the first to leave your signature!
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {history.map((sig, idx) => (
              <Reveal key={sig._id} delay={idx % 4 * 0.1}>
                <div className="flex flex-col p-2 bg-[#3e2e2a] border border-[#2f1f18] rounded-xl shadow-md gap-3 relative group">
                  {/* Drawing image canvas render */}
                  <div className="bg-[#3a2a26] rounded-lg overflow-hidden h-[120px] flex items-center justify-center relative">
                    <img
                      src={sig.image}
                      alt={`Signature by ${sig.name}`}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>

                  <div className="px-1 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="font-bold truncate max-w-[120px]">{sig.name}</span>
                    <span className="text-[9px] text-[#cca980]">
                      {new Date(sig.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
