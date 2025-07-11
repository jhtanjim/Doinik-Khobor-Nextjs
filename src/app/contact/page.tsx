const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B]  text-gray-800 dark:text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-center max-w-xl mb-6">
        If you have any questions, feel free to reach out! We’d love to hear
        from you.
      </p>
      <a
        href="mailto:support@doinikkhobor.com"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Email Us
      </a>
    </div>
  );
};

export default Contact;
