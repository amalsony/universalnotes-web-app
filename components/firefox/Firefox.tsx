export default function Firefox() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-start">
      <h1 className="text-3xl text-white/90 font-bold my-8">
        Setup UniversalNotes for Firefox
      </h1>
      <div className="flex flex-col items-start w-full bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl text-white font-bold">
          👋 Welcome to UniversalNotes!
        </h2>
        <p className="mt-4 text-white">
          There are a few more steps to complete before you can start using
          UniversalNotes. But don&apos;t worry, it&apos;s quick and simple!
        </p>
      </div>
      <div className="flex flex-col items-start w-full bg-gray-800 p-4 rounded-lg mt-4">
        <h2 className="text-xl text-white font-bold">
          1. Allow the extension to access UniversalNotes
        </h2>
        <div className="mt-4 ml-8">
          <ul className="list-disc">
            <li className="text-white">
              Open the Firefox Add-ons page by clicking on the puzzle piece icon
              on the top-right corner of the browser.
            </li>
            <li className="text-white mt-2">
              Click on &quot;Extensions&quot; in the left sidebar.
            </li>
            <li className="text-white mt-2">
              Find the UniversalNotes extension and open it. <br /> (Note: press
              on the background of the extension item, not the three dots)
            </li>
            <li className="text-white mt-2">
              Open the &quot;Permissions&quot; tab. It&apos;s below the
              &quot;UniversalNotes&quot; title, and to the right of
              &quot;Details.&quot;
            </li>
            <li className="text-white mt-2">
              Under the &quot;Optional permissions for added
              functionality:&quot; title, toggle &quot;Access your data for
              sites in the *://universalnotes.org domain&quot; on.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start w-full bg-gray-800 p-4 rounded-lg mt-4">
        <h2 className="text-xl text-white font-bold">
          (Optional) 2. Choose if you&apos;d like UniversalNotes to
          automatically check for a note when you visit a page.
        </h2>
        <p className="mt-4 ml-4 text-white">
          You can choose whether UniversalNotes should automatically check if a
          note has been added to the page you&apos;re visiting, or if it should
          only do so when you click on the extension icon.
        </p>
        <p className="mt-2 ml-4 text-white">
          If this feature is enabled, UniversalNotes will send the url of the
          page you&apos;re visiting to our backend server when you open a new
          page, check if there&apos;s a note available and display it on that
          page. The url won't be stored.
        </p>
        <p className="mt-2 ml-4 text-white">
          Like the extension and this website, our{" "}
          <a
            className="bg-gray-700 p-1 px-2 rounded-md text-white underline"
            target="_blank"
            href="https://github.com/amalsony/universalnotes-server"
          >
            backend server&apos;s source code
          </a>{" "}
          is open-source.
        </p>
        <div className="mt-4 ml-8">
          <ul className="list-disc">
            <li className="text-white font-bold">
              If you wish to enable this, turn on the toggle for &quot;Access
              your data for all websites.&quot;
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start w-full bg-gray-800 p-4 rounded-lg mt-4">
        <h2 className="text-xl text-white font-bold">
          (Optional) 3. Choose if you&apos;d like to create an account
        </h2>
        <p className="mt-4 ml-4 text-white">
          You don&apos;t need an account if you only want to view notes.
          However, to write, like, or dislike notes, you&apos;ll need to create
          an account and login.
        </p>
        <div className="mt-4 ml-8">
          <ul className="list-disc">
            <li className="text-white">
              To create an account, first open the extension by clicking on the
              puzzle piece icon, and selecting &quot;UniversalNotes&quot; from
              the list of extensions.
            </li>
            <li className="text-white mt-2">
              Click &quot;Continue with Google&quot; to create an account.
            </li>
            <li className="text-white mt-2">
              Once you&apos;ve logged in, reopen the extension to view your
              account
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start w-full bg-gray-800 p-4 rounded-lg mt-4">
        <h2 className="text-xl text-white font-bold">
          (Recommended) 4. Pin UniversalNotes to the toolbar
        </h2>
        <p className="mt-4 ml-4 text-white">
          For easy access, you can pin the UniversalNotes extension to your
          browser&apos;s toolbar.
        </p>
        <div className="mt-4 ml-8">
          <ul className="list-disc">
            <li className="text-white">
              Click on the puzzle piece icon on the top-right corner of the
              browser.
            </li>
            <li className="text-white mt-2">
              Click on the gear next to UniversalNotes
            </li>
            <li className="text-white mt-2">
              Select &quot;Pin to toolbar.&quot;
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start w-full bg-gray-800 p-4 rounded-lg my-4">
        <h2 className="text-xl text-white font-bold">
          Congrats on setting up UniversalNotes! 🎉
        </h2>
        <p className="mt-4 text-white">
          You&apos;re all set! Thank you for joining our mission to end
          misinformation and scams on the internet.
        </p>
        <p className="mt-4 text-white">
          If you have any questions, please reach out at{"  "}
          <a
            className="bg-gray-700 p-1 px-2 rounded-md text-white underline"
            href="mailto:universalnotesorg@gmail.com"
          >
            universalnotesorg@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
