import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-[#f8f8f8]">
      <div className="w-full flex flex-col items-left px-4 my-10 max-w-6xl">
        <h1 className="text-base text-black mb-8 text-center">
          <span className="text-2xl font-bold">
            UniversalNotes' Terms of Service
          </span>
        </h1>
        <div className="w-full flex flex-col pb-2 mt-4">
          <p className="text-base text-bold text-center text-black">
            <span className="text-bold">Welcome to UniversalNotes!</span> These
            Terms of Service (&quot;Terms&quot;) govern your use of
            UniversalNotes (&quot;the browser extension&quot;) provided by
            UniversalNotes. By using the browser extension, you agree to comply
            with and be bound by these Terms. Please read them carefully.
          </p>
        </div>

        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-base text-bold text-black">
            By using UniversalNotes, you agree to these Terms. If you do not
            agree to these Terms, please do not use the browser extension.
          </p>
        </div>

        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">
            2. Use of the browser extension
          </h2>
          <p className="text-base text-bold text-black">
            You are responsible for maintaining the security of your account and
            any activities that occur under your account. You must not misuse
            the browser extension, and you may only use it for lawful purposes.
            UniversalNotes reserves the right to suspend or terminate your
            access to the browser extension if you violate these Terms.
          </p>
        </div>

        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">3. User Content</h2>
          <p className="text-base text-bold text-black">
            You retain ownership of any content you upload to the browser
            extension, such as text or images in notes. You are solely
            responsible for the accuracy and legality of the content you upload.
          </p>
        </div>

        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">4. Privacy</h2>
          <p className="text-base text-bold text-black">
            Your use of the browser extension is also governed by our{" "}
            <Link
              href="/privacy-policy"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect your personal
            data. By using the browser extension, you consent to the collection
            and use of your data as described in the Privacy Policy.
          </p>
        </div>

        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">
            5. Intellectual Property
          </h2>
          <p className="text-base text-bold text-black">
            All intellectual property rights in the browser extension, including
            but not limited to trademarks, copyrights, and patents, are owned by
            UniversalNotes. You may not reproduce, modify, distribute, or create
            derivative works based on the browser extension without our express
            consent.
          </p>
        </div>

        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">7. Termination</h2>
          <p className="text-base text-bold text-black">
            UniversalNotes may terminate or suspend your access to the browser
            extension at any time, with or without cause, and with or without
            notice. Upon termination, your right to use the browser extension
            will immediately cease. All provisions of these Terms that by their
            nature should survive termination will survive termination,
            including, without limitation, ownership provisions, warranty
            disclaimers, indemnity, and limitations of liability.
          </p>
        </div>

        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">8. Contact Us</h2>
          <p className="text-base text-bold text-black mt-2">
            If you have any questions or concerns about these Terms or the
            browser extension, please contact us at:{" "}
            <a className="mailto:universalnotesorg@gmail.com">
              universalnotesorg@gmail.com
            </a>
          </p>
        </div>

        {/* Jurisdiction, PA and US */}
        <div className="w-full flex flex-col pb-2 mt-8">
          <h2 className="text-xl text-bold text-black mb-2">9. Jurisdiction</h2>
          <p className="text-base text-bold text-black">
            These Terms are governed by the laws of the Commonwealth of
            Pennsylvania and those of the United States of America without
            regard to its conflict of law provisions. You agree to submit to the
            personal jurisdiction of the federal and state courts located in the
            Eastern District of Pennsylvania for any actions related to these
            Terms or your use of the browser extension.
          </p>
        </div>
      </div>
    </main>
  );
}
