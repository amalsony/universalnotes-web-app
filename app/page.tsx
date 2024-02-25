import Image from "next/image";

import type { Metadata } from "next";

const metadata: Metadata = {
  title: "UniversalNotes - Community Notes for every website",
  description:
    "UniversalNotes is an open source non-profit browser extension that brings Community Notes from Twitter / X to the rest of the internet.",
  openGraph: {
    title: "UniversalNotes - Community Notes for every website",
    description:
      "UniversalNotes is an open source non-profit browser extension that brings Community Notes from Twitter / X to the rest of the internet.",
    url: "/*",
    siteName: "UniversalNotes",
    images: [
      {
        url: "/UniversalNotes_OpenGraphImage.png",
        width: 1200,
        height: 707,
      },
    ],
  },
};

export { metadata };

// Components
import Navbar from "@/components/landing/Navbar";
import HomeRedirect from "@/components/home/HomeRedirect";

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 min-h-screen">
      {/* Nav */}
      <Navbar />
      {/* <TextLogo color="#fff" /> */}
      <div className="flex flex-col justify-center items-center mt-12 md:mt-0">
        <div className="flex flex-col justify-center items-center px-4 py-10 md:pt-32 md:pb-14 w-full max-w-5xl">
          <a
            target="_blank"
            href="https://chromewebstore.google.com/detail/universalnotes/ebdoepcapegdgjjbhplphgkacdodnffl"
            className="bg-white/[.10] hover:bg-white/[.22] border border-white/[.18] py-1 px-4 rounded-full mb-4 transition-all duration-300 cursor-pointer"
          >
            <p className="text-white/90 text-sm md:text-base">
              Now available for Chrome & Arc
            </p>
          </a>
          {/* title */}
          <h1 className="text-4xl md:text-7xl text-white/80 font-medium text-center mx-4">
            <span className="text-white/90">Community Notes</span>
            <br /> for every website.
          </h1>
          {/* login */}
          <div className="flex flex-row justify-center items-center mt-4 md:mt-8`">
            <a
              href="https://chromewebstore.google.com/detail/universalnotes/ebdoepcapegdgjjbhplphgkacdodnffl"
              target="_blank"
              className="bg-[#097ed2] text-white/90 font-bold px-8 py-2 md:px-12 md:py-3 rounded-full text-base md:text-lg shadow-lg hover:scale-[1.01] hover:bg-[#0a96fb]/90 transition-all duration-300 block text-center w-max mt-4 md:mt-8 cursor-pointer"
            >
              Get the extension
            </a>
          </div>
        </div>
        <div className="px-4 w-full max-w-2xl">
          <h1 className="text-base md:text-lg text-white/70 mx-4 text-center">
            UniversalNotes is an open source non-profit browser extension that
            brings Community Notes from Twitter / X to the rest of the internet.
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center my-2 md:my-1">
            {/* github button */}
            <a
              href="https://github.com/amalsony/universalnotes"
              target="_blank"
              className="flex flex-row border border-white text-white/70 px-8 py-2 md:px-12 md:py-2 rounded-full mt-6 md:mt-10 text-md md:text-lg shadow-lg hover:scale-[1.01] hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/github-logo.svg"
                  alt="Github Logo"
                  width={24}
                  height={24}
                  draggable={false}
                  className="mr-2"
                />
              </div>
              <span>Github</span>
            </a>
            {/* discord button */}
            <a
              href="https://discord.gg/22eq948CwD"
              target="_blank"
              className="flex flex-row mt-4 md:ml-10 border border-white text-white/70 px-8 py-2 md:px-12 md:py-2 rounded-full md:mt-10 text-md md:text-lg shadow-lg hover:scale-[1.01] hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/discord-logo.svg"
                  alt="Discord Logo"
                  width={24}
                  height={24}
                  draggable={false}
                  className="mr-2"
                />
              </div>
              Discord
            </a>
          </div>
        </div>
      </div>
      <HomeRedirect />
    </div>
  );
}
