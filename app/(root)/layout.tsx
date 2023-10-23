import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { Inter } from "next/font/google";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Posts",
  description: "A Next.js 13 Meta Posts Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
