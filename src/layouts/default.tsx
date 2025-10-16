import { useState } from "react";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-full min-h-screen bg-brand-bg text-brand-text">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex">
        <aside
          className={`fixed top-15 left-0 h-full w-60 bg-brand-primary text-white flex flex-col transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} z-40`}
        >
          {/* Menu */}
          <nav className="flex flex-col space-y-2 p-4">
            <a
              className="flex items-center gap-2 p-2 rounded hover:bg-brand-secondary"
              href="/customers"
            >
              {/* <FaUsers /> */}
              Customers
            </a>
            <a
              className="flex items-center gap-2 p-2 rounded hover:bg-brand-secondary"
              href="/#"
            >
              {/* <FaCog /> */}
              Settings
            </a>
          </nav>
        </aside>
        <main className="container mx-auto max-w-5xl px-6 flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}
