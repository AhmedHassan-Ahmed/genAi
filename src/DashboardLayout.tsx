
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      

      <div className="w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
