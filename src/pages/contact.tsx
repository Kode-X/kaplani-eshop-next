// src/pages/contact.tsx
const Contact = () => {
    return (
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          We would love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to
          share your feedback, feel free to reach out.
        </p>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Our Contact Information</h3>
          <p>Email: contact@leathercraftshop.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Leather St, Craftsville, CA 12345</p>
        </div>
      </main>
    );
  };
  
  export default Contact;
  