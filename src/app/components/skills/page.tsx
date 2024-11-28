import Image from "next/image"
export default function Skills() {
    return (
        <section className="min-h-screen bg-slate-900 flex flex-col flex-wrap gap-4 items-center md:flex-row justify-center text-gray-200" id="skills">
            <div className="flex flex-col items-center mt-1">
                <Image
                src="/png/sketch.png"
                height={200}
                width={200}
                alt="Sketch"/>
                <p className="pt-11">Sketching</p>
            </div>
            <div className="flex flex-col items-center">
                <Image
                src="/png/html.png"
                height={200}
                width={200}
                alt="HTML"/>
                <p>HTML</p>
            </div>
            <div className="flex flex-col items-center">
                <Image
                src="/png/css.png"
                height={200}
                width={200}
                alt="CSS"/>
                <p>CSS</p>
            </div>
            
            <div className="flex gap-12 w-full md:flex-row flex-col justify-center mb-28">
                <div className="flex flex-col items-center">
                <Image className="rounded-xl"
                src="/png/javascript.png"
                height={150}
                width={150}
                alt="JavaScript"/>
                <p className="pt-6">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                <Image
                src="/png/typescript.png"
                height={150}
                width={150}
                alt="TypeScript"/>
                <p className="pt-6">TypeScript</p>
                </div>
            </div>

        </section>
    )
}