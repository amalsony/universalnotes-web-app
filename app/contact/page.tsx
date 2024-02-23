// Components
import Navbar from "@/components/landing/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 min-h-screen">
      {/* Nav */}
      <Navbar />
      {/* <TextLogo color="#fff" /> */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-4 py-10 md:pt-32 md:pb-14 w-full max-w-5xl">
          {/* title */}
          <h1 className="text-3xl md:text-4xl text-white/80 font-medium text-center mx-4">
            <span className="text-white/90">Reach out to UniversalNotes</span>
          </h1>
          <p className="mt-8 text-center text-white/90 text-xl max-w-8xl">
            If you need help or just want to ask a few questions, reach out at{" "}
            <a
              target="_blank"
              href="mailto:universalnotesorg@gmail.com"
              className="text-blue-400 hover:underline transition-all duration-300"
            >
              universalnotesorg@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
