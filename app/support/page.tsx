export default function PrivacyPolicy() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8]">
      <div className="w-full flex flex-col items-left px-4 my-10 max-w-6xl">
        <h1 className="text-base text-black mb-8 text-center">
          <span className="text-2xl font-bold">
            UniversalNotes' Support Links
          </span>
        </h1>
        <div className="w-full flex flex-col pb-2 mt-4">
          <p className="text-base text-bold text-center text-black">
            Please email us at{" "}
            <a
              href="mailto:universalnotesorg@gmail.com"
              className="text-blue-500"
            >
              universalnotesorg@gmail.com
            </a>{" "}
            and we&rsquo;ll be more than happy to help.
          </p>
        </div>
      </div>
    </main>
  );
}
