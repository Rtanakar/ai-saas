import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 bg-gray-100 dark:bg-[#232f3c] font-normal text-orange-600">
        My Documents
      </h1>

      {/* Documents */}
      <Documents />
    </div>
  );
}

export default Dashboard;
