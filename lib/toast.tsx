"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, AlertTriangle, Info, X, XCircle } from "lucide-react";

type ToastKind = "success" | "error" | "info" | "warning";
type Toast = {
  id: number;
  kind: ToastKind;
  message: string;
};

type ToastApi = {
  show: (message: string, kind?: ToastKind) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
};

const ToastContext = createContext<ToastApi | null>(null);

let nextId = 1;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((curr) => curr.filter((t) => t.id !== id));
  }, []);

  const show = useCallback(
    (message: string, kind: ToastKind = "info") => {
      const id = nextId++;
      setToasts((curr) => [...curr, { id, kind, message }]);
      setTimeout(() => dismiss(id), 3500);
    },
    [dismiss]
  );

  const api = useMemo<ToastApi>(
    () => ({
      show,
      success: (m) => show(m, "success"),
      error: (m) => show(m, "error"),
      info: (m) => show(m, "info"),
      warning: (m) => show(m, "warning"),
    }),
    [show]
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ToastContext.Provider value={api}>
      {children}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <ToastViewport toasts={toasts} onDismiss={dismiss} />,
          document.body
        )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: number) => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        pointerEvents: "none",
      }}
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id: number) => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const config = {
    success: {
      icon: <CheckCircle2 className="h-5 w-5" />,
      bar: "bg-emerald-500",
      text: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    error: {
      icon: <XCircle className="h-5 w-5" />,
      bar: "bg-rose-500",
      text: "text-rose-700",
      bg: "bg-rose-50",
      border: "border-rose-200",
    },
    warning: {
      icon: <AlertTriangle className="h-5 w-5" />,
      bar: "bg-amber-500",
      text: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    info: {
      icon: <Info className="h-5 w-5" />,
      bar: "bg-blue-500",
      text: "text-blue-700",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
  }[toast.kind];

  return (
    <div
      style={{
        pointerEvents: "auto",
        display: "flex",
        width: 352,
        maxWidth: "calc(100vw - 32px)",
        overflow: "hidden",
        borderRadius: 8,
        border: "1px solid",
        background: "#fff",
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.15)",
        transition: "all 0.3s",
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        opacity: visible ? 1 : 0,
      }}
      className={config.border}
    >
      <div className={`w-1 shrink-0 ${config.bar}`} style={{ width: 4, flexShrink: 0 }} />
      <div
        className={config.bg}
        style={{ display: "flex", flex: 1, alignItems: "flex-start", gap: 12, padding: 12 }}
      >
        <span className={config.text}>{config.icon}</span>
        <p style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#1a0b47", margin: 0 }}>
          {toast.message}
        </p>
        <button
          onClick={() => onDismiss(toast.id)}
          aria-label="Dismiss"
          style={{ color: "#9988b3", background: "none", border: "none", cursor: "pointer" }}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
