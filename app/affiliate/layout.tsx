"use client";

import { useState } from "react";
import AffiliateSidebar from "@/components/affiliate/Sidebar";
import AffiliateTopbar from "@/components/affiliate/Topbar";

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-paper-100 text-body">
      <div className="lg:grid lg:grid-cols-[18rem_1fr]">
        <AffiliateSidebar open={open} onClose={() => setOpen(false)} />
        <div className="flex min-h-screen flex-col">
          <AffiliateTopbar onOpenSidebar={() => setOpen(true)} />
          <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
