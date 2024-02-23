// Components
import Navbar from "@/components/landing/Navbar";

export default function About() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 min-h-screen">
      {/* Nav */}
      <Navbar />
      {/* <TextLogo color="#fff" /> */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-4 py-10 md:pt-32 md:pb-14 w-full max-w-5xl">
          {/* title */}
          <h1 className="text-3xl md:text-4xl text-white/80 font-medium text-center mx-4">
            <span className="text-white/90">About UniversalNotes</span>
          </h1>
          <div className="flex flex-col justify-center items-center px-2 text-white/90 text-xl mt-10 max-w-xl">
            <p className="mt-8 font-bold text-center text-white/90 text-xl">
              {" "}
              We&apos;re on a mission to end misinformation on the internet.{" "}
            </p>
            <span className="mt-4"></span>
            <p className="mt-8 text-center text-white/90 text-xl">
              UniversalNotes follows X/Twitter&apos;s Community Notes model to
              add crowdsourced context to websites.{" "}
            </p>{" "}
            <p className="mt-8 text-center text-white/90 text-xl">
              Users view and vote on important context about misleading sites or
              sites that need more context, as well scam or spam sites.{" "}
            </p>{" "}
            <p className="mt-8 text-center text-white/90 text-xl">
              You can also add your own context to websites.{" "}
            </p>{" "}
            <p className="mt-8 text-center text-white/90 text-xl">
              The extension is fully open-source and non-profit.{" "}
            </p>{" "}
            <p className="mt-8 text-center text-white/90 text-xl">
              UniversalNotes was founded by Amal Palackal in November, 2023 and
              launched in February, 2024.{" "}
            </p>{" "}
            <p className="mt-8 text-center text-white/90 text-xl">
              We are not affiliated with X/Twitter.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
