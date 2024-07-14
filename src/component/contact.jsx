import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white p-8 text-center">
      <h2 className="text-2xl mb-4">Get in Touch</h2>
      <form className="max-w-lg mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
        <input type="text" placeholder="Subject" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
        <textarea placeholder="Message" className="w-full p-2 mb-4 bg-gray-800 text-white rounded"></textarea>
        <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Send a message</button>
      </form>
    </section>
  );
}

export default Contact;
