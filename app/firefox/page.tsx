// Components
import Navbar from "@/components/landing/Navbar";
import Firefox from "@/components/firefox/Firefox";

export default function MyNotesPage() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <Firefox />
      </div>
    </div>
  );
}
