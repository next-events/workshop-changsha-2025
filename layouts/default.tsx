import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-6 border-t border-divider">
        <div className="text-center">
          <div className="mb-2">
            <p>Copyright © {new Date().getFullYear()} NExT++ Research Center</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
