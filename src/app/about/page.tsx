const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B]  text-gray-800 dark:text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-center max-w-2xl">
        Welcome to{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          DoinikKhobor
        </span>
        , your number one source for all things news. We’re dedicated to
        providing you the best of journalism, with a focus on reliability,
        integrity, and speed.
      </p>
    </div>
  );
};

export default About;
