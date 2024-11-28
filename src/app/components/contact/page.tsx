import Link from "next/link"
import Image from "next/image"
export default function Contact(){
    return(

        
        <section className="flex-col bg-slate-900 flex items-center justify-center lg:justify-between lg:flex-row text-gray-200 min-h-screen" id="contact">

            <div className="items-center pl-5 lg:ml-40 ">
                <div className=" flex items-center m-5 mb-12">
                    <Image
                    src="/png/email.png"
                    height={40}
                    width={40}
                    alt="email"/>
                    <p className="pl-1">hanirh2468@gmail.com</p>
                </div>
                <div className="flex items-center m-5 mb-12">
                <Image
                    src="/png/location.png"
                    height={40}
                    width={40}
                    alt="location"/>
                    <p>Karachi, Pakistan</p>
                </div>
                <div className="flex items-center m-4 mb-12"> 
                <Image
                    src="/png/linkedin.png"
                    height={50}
                    width={50}
                    alt="linkedin"/>
                    <Link href="https://www.linkedin.com/in/umm-e-hani-400b812b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">www.linkedin.com</Link>
                </div>
                <div className="flex items-center m-5 mb-12">
                <Image
                    src="/png/github.png"
                    height={45}
                    width={45}
                    alt="github"/>
                    <Link className="pl-2" href="https://github.com/Umm-e-Hani02" target="_blank">www.github.com</Link>
                </div>
            </div>

            <div className="hidden md:block border-l-2 border-white h-[40%] mx-4"></div>

            <form className="lg:mr-52 mt-2 items-center justify-center ">
                <legend className="mb-2">Your Name:</legend>
                <input className="rounded-md mb-4 active:border-none w-64" type="text" name="name"  required/>
                <legend className="mb-2">Your Email:</legend>
                <input className="rounded-md mb-4 w-64" type="email" name="email" required/>
                <legend className="mb-2">Your message:</legend>
                <textarea className="rounded-lg" name="message" id="message" rows={9} cols={30}></textarea> <br/>
                <button className="bg-yellow-600 h-10 w-32 rounded-md mt-7 hover:bg-yellow-700 active:opacity-[0.9] transition-all duration-300" type="submit"> Submit </button>
            </form>
        </section> 
    )
}