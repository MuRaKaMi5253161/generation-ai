import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <div className="hidden bg-red-400 lg:w-1/4 lg:block">
        <Sidebar />
      </div>
      <main className="bg-blue-400 w-full lg:w-3/4">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
