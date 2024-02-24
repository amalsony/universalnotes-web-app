import Link from "next/link";

// Components
import TextLogo from "@/assets/TextLogo";
import LoginButton from "./LoginButton";
import MyNotesButton from "./MyNotesButton";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center md:justify-between">
          <div className="flex items-center justify-center md:space-x-4">
            <div className="flex items-center space-x-1">
              <div className="py-5 px-3 md:py-0 md:px-0">
                <TextLogo color="#fff" />
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Link
                href="/about"
                className="text-white/90 py-5 px-3 hover:bg-white/10 transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/90 py-5 px-3 hover:bg-white/10 transition-all duration-300"
              >
                Contact
              </Link>
              <MyNotesButton />
            </div>
          </div>
          <LoginButton />
        </div>
      </div>
    </nav>
  );
}
