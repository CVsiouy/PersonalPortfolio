"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  User,
  FolderGit2,
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Terminal,
  PenTool,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: "Navigation" | "Actions" | "Socials";
  action: () => void;
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle menu on Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset indices on search or toggle
  useEffect(() => {
    setActiveIndex(0);
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearch("");
    }
  }, [isOpen, search]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText("chiragverma00310@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1500);
  };

  const items: CommandItem[] = [
    {
      id: "nav-home",
      title: "Go to Home",
      icon: <Home className="w-4 h-4" />,
      category: "Navigation",
      action: () => {
        router.push("/");
        setIsOpen(false);
      },
    },
    {
      id: "nav-about",
      title: "Go to About",
      icon: <User className="w-4 h-4" />,
      category: "Navigation",
      action: () => {
        router.push("/about");
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      icon: <FolderGit2 className="w-4 h-4" />,
      category: "Navigation",
      action: () => {
        router.push("/projects");
        setIsOpen(false);
      },
    },
    {
      id: "nav-whiteboard",
      title: "Go to Whiteboard",
      icon: <PenTool className="w-4 h-4" />,
      category: "Navigation",
      action: () => {
        router.push("/whiteboard");
        setIsOpen(false);
      },
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      icon: <Mail className="w-4 h-4" />,
      category: "Navigation",
      action: () => {
        router.push("/contact");
        setIsOpen(false);
      },
    },
    {
      id: "action-email",
      title: copied ? "Copied Email!" : "Copy Email to Clipboard",
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />,
      category: "Actions",
      action: copyEmail,
    },
    {
      id: "social-github",
      title: "GitHub Profile",
      icon: <Github className="w-4 h-4" />,
      category: "Socials",
      action: () => {
        window.open("https://github.com/cvsiouy", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "social-linkedin",
      title: "LinkedIn Profile",
      icon: <Linkedin className="w-4 h-4" />,
      category: "Socials",
      action: () => {
        window.open("https://linkedin.com/in/chiragverma00310", "_blank");
        setIsOpen(false);
      },
    },
  ];

  // Filter items based on search query
  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) {
        filtered[activeIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  // Group filtered items by category
  const categories: { [key: string]: CommandItem[] } = {};
  filtered.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  // Calculate absolute index across categories for active states
  let globalItemIndex = 0;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-start justify-center pt-[15vh] px-4">
      <div
        ref={menuRef}
        onKeyDown={handleListKeyDown}
        className="glass max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col bg-zinc-950/90"
      >
        <div className="flex items-center gap-3 px-4 border-b border-white/5 bg-white/[0.01]">
          <Terminal className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent py-4 text-white placeholder-zinc-500 focus:outline-none text-sm font-sans"
          />
          <span className="text-[10px] text-zinc-500 px-1.5 py-0.5 border border-zinc-800 rounded bg-zinc-900 shrink-0 font-mono">
            ESC
          </span>
        </div>

        <div className="max-h-[340px] overflow-y-auto p-2 scrollbar-thin">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-zinc-500 font-sans">
              No results found for &ldquo;{search}&rdquo;
            </div>
          ) : (
            Object.entries(categories).map(([catName, catItems]) => (
              <div key={catName}>
                <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-zinc-500 px-3 py-2">
                  {catName}
                </div>
                <div className="space-y-0.5">
                  {catItems.map((item) => {
                    const currentGlobalIndex = globalItemIndex++;
                    const isActive = currentGlobalIndex === activeIndex;

                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setActiveIndex(currentGlobalIndex)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-150 ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <span className={`shrink-0 ${isActive ? "text-primary" : "text-zinc-500"}`}>
                          {item.icon}
                        </span>
                        <span className="flex-1 font-sans font-medium">{item.title}</span>
                        {isActive && (
                          <span className="text-[10px] text-zinc-500 font-mono bg-zinc-900 border border-zinc-800 px-1 rounded">
                            ENTER
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-white/5 px-4 py-2.5 bg-zinc-950 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <div>⌘K / Ctrl+K to toggle</div>
        </div>
      </div>
    </div>
  );
}
