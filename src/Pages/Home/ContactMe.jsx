export default function ContactMe() {
  return (
    <section id="Contact" className="bg-white py-10 px-6 flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600 text-lg">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <form className="bg-gray-100 rounded-lg p-6 w-full max-w-lg shadow-md">
        <h3 className="text-gray-800 text-xl text-center font-medium mb-4">Email Me 🚀</h3>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="full-name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
        
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send
        </button>
      </form>
    </section>
  );
}
