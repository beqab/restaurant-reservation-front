import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "restaurant reservation app",
  description: "restaurant reservation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            {/* NAVBAR */}
            <Navbar />
            {/* NAVBAR */}
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
