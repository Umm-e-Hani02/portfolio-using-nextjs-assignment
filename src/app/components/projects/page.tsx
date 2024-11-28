import ProjectCard from "../card/ProjectCard";
import ButtonCard from "../card/ButtonCard";

export default function Projects() {
    return (
        <section className="bg-slate-900 flex justify-center items-center min-h-screen text-gray-200" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-10">

                <div className="bg-slate-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="/images/project1.jpeg"
                        imageAlt="CLI Calculator using Typescript"
                        title="CLI Calculator using Typescript"
                    />
                    <ButtonCard text="View Project" 
                    href="https://github.com/Umm-e-Hani02/CLI-Calculator.git"/>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="/images/project2.jpeg"
                        imageAlt="CLI Number Guessing Game using Typescript"
                        title="CLI Number Guessing Game using Typescript"
                    />
                    <ButtonCard text="View Project" 
                    href="https://github.com/Umm-e-Hani02/CLI-ATM-Machine.git"/>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="/images/project3.jpeg"
                        imageAlt="Photography website using HTML CSS"
                        title="Photography website using HTML CSS"
                    />
                    <ButtonCard text="View Project" 
                    href="https://photography-website-lyart.vercel.app/"/>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="/images/project4.jpeg"
                        imageAlt="Milestone 1 and 2: Static Resume"
                        title="Milestone 1 and 2: Static Resume"
                    />
                    <ButtonCard text="View Project" 
                    href="https://hackathon-milestones1-2-journey.vercel.app/"/>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="/images/project7.jpeg"
                        imageAlt="Milestone 5: Shareable resume"
                        title="Milestone 5: Shareable resume"
                    />
                    <ButtonCard text="View Project" 
                    href="https://hackathon-milestones5-journey.vercel.app/"/>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="/images/project9.jpeg"
                        imageAlt="Figma to HTMl"
                        title="Figma to HTML"
                    />
                    <ButtonCard text="View Project" 
                    href="https://figma-to-html-nextjs-assignment.vercel.app/"/>
                </div>
            </div>
        </section>
    );
}
