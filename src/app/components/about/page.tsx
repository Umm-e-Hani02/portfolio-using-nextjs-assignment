import ButtonCard from "../card/ButtonCard";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-slate-900 text-gray-200 flex flex-col items-center justify-center min-h-screen p-8" id="about">
      <div className="flex flex-col items-center lg:flex-row lg:space-x-16">
        
        <div className="flex justify-center">
          <Image
            className="object-cover rounded-full p-4"
            src="/images/pfp.jpg"
            height={400}
            width={400}
            alt="pfp"
          />
        </div>

        <div className="mt-8 lg:mt-0 lg:text-left text-center max-w-lg">
          <h1 className="text-4xl font-semibold text-yellow-600">Who Am I?</h1>
          <p className="mt-4">
            Hello! I am Umm-E-Hani, a 14-year-old tech enthusiast and 9th-grade science student with a passion
            for technology and innovation. I am currently part of the Governor Sindh IT Initiative, where I'm
            delving into fields like AI, Metaverse, and Web 3.0. My journey in tech started with a curiosity to
            understand how things work, which has now turned into a dedicated pursuit of skills in
            programming and development.
            <br /><br />
            Balancing my school studies with my passion, I aim to become a skilled full-stack developer and
            certified AI expert, using creativity and technology to make a meaningful impact. I believe in
            constant learning and am excited about all the future holds. Let's connect on LinkedIn or GitHub to
            follow my journey and share ideas!
          </p>
          <hr className="my-6" />
          <ButtonCard
            text="Download CV"
            href="https://hackathon-milestones1-2-journey.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}
