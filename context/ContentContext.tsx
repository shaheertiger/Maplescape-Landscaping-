"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type ContentMap = Record<string, string>;

interface ContentContextType {
  content: ContentMap;
  updateContent: (key: string, value: string) => void;
  registerDefault: (key: string, value: string) => void;
  saveToDisk: () => Promise<void>;
  activeKey: string | null;
  setActiveKey: (key: string | null) => void;
}

const ContentContext = createContext<ContentContextType | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentMap>({});
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch content on mount
  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        setContent(data || {});
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load content:", err);
        setIsLoaded(true);
      });
  }, []);

  const updateContent = (key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  const registerDefault = (key: string, value: string) => {
    setContent((prev) => {
      // Only register if it doesn't exist yet
      if (prev[key] === undefined) {
        return { ...prev, [key]: value };
      }
      return prev;
    });
  };

  const saveToDisk = async () => {
    if (process.env.NODE_ENV !== "development") return;
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error("Failed to save");
      console.log("Content saved successfully");
    } catch (error) {
      console.error("Failed to save to disk:", error);
    }
  };

  // Global double click listener
  useEffect(() => {
    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const contentEl = target.closest("[data-content-key]");
      if (contentEl) {
        const key = contentEl.getAttribute("data-content-key");
        if (key) {
          e.preventDefault();
          e.stopPropagation();
          setActiveKey(key);
        }
      }
    };
    
    // Only enable in dev mode
    if (process.env.NODE_ENV === "development") {
      window.addEventListener("dblclick", handleDoubleClick);
      return () => window.removeEventListener("dblclick", handleDoubleClick);
    }
  }, []);

  if (!isLoaded) return null; // Or a gentle fade-in, but null avoids hydration mismatch for now

  return (
    <ContentContext.Provider value={{ content, updateContent, registerDefault, saveToDisk, activeKey, setActiveKey }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within ContentProvider");
  return context;
}

// The Text wrapper component
export function T({ id, children, className, as: Component = "span" }: { id: string, children: string, className?: string, as?: any }) {
  const { content, registerDefault } = useContent();

  useEffect(() => {
    registerDefault(id, children);
  }, [id, children, registerDefault]);

  const displayValue = content[id] !== undefined ? content[id] : children;

  return (
    <Component className={className} data-content-key={id}>
      {displayValue}
    </Component>
  );
}
