// Components
import Navbar from "@/components/landing/Navbar";
import HomeFeed from "@/components/home/HomeFeed";

export default function MyNotesPage() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-xl mt-12">
          <HomeFeed />
        </div>
      </div>
    </div>
  );
}
