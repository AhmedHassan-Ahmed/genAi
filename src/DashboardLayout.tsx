
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      

      <div className="
        w-full min-h-screen
        p-4
        ml-0
        
        sm:p-6
        md:ml-[80px] md:p-6
        lg:ml-[-25px] lg:p-0
        xl:ml-[110px] xl:p-8
      ">
        {children}
      </div>
    </div>
  );
}