import Profile from "@/components/profile/Profile";
import Navbar from "@/components/landing/Navbar";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-slate-950">
      <Navbar />
      <div className="mt-12 md:mt-24 mb-12 flex flex-col items-center justify-center w-full">
        <Profile />
      </div>
    </div>
  );
}
