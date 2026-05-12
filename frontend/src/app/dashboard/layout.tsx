import DashboardNavbar from "@/src/components/DashboardNavbar";
import DashboardSidebar from "@/src/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-black min-h-screen">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <DashboardNavbar />

        <main className="p-6 text-white">
          {children}
        </main>
      </div>
    </div>
  );
}