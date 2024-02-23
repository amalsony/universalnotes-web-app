// ErrorPageComponent, takes in a message and displays it to the user, rounded corners with a box shadow, red borders, red text and a white background.

export default function ErrorPageComponent({ message }: { message: string }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white/90 font-bold rounded-lg shadow-lg border-2 border-red-500 px-8 py-4">
      <h1 className="text-xl block text-left w-full text-red-500 mb-2">
        An error occured:
      </h1>
      <p className="text-gray-900">{message}</p>
    </div>
  );
}
