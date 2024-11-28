import Image from "next/image";

export default function HomePage() {
  return (
    <section
      className="bg-slate-900 p-6 md:p-12 flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen"
      id="home"
    >
      <div className="mt-14 lg:mt-24 text-gray-200 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
        <p className="text-sm md:text-base">Hi There!</p>
        <h1 className="text-4xl font-semibold">
                    I am <span className="text-yellow-600 text-nowrap">Umm-e-Hani</span>
                </h1>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          I bring creativity and technology together <br /> to build engaging web experiences.
        </p>
        <button className="bg-yellow-600 h-10 px-6 rounded-md mt-7 hover:bg-yellow-700 active:opacity-[0.9] transition-all duration-300">
          <a href="#contact">Hire me</a>
        </button>
        <div className="flex flex-col lg:flex-row lg:space-x-10 mt-12 md:mt-20 text-sm text-nowrap space-y-6 lg:space-y-0">
          <p>
            <span className="font-bold">Email:</span> <br />
            <span>hanirh2468@gmail.com</span>
          </p>
          <p>
            <span className="font-bold">Location:</span> <br />
            <span>Karachi, Pakistan</span>
          </p>
        </div>
      </div>

      <div className="lg:ml-24 mt-12 lg:mt-0 flex justify-center lg:justify-start w-full lg:w-auto">
        <Image
          className="lg:-mt-16 max-w-full"
          src="/png/landingimg.png"
          width={500}
          height={500}
          alt="landing-img"
        />
      </div>
    </section>
  );
}
